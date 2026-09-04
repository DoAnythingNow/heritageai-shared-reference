import Anthropic from "@anthropic-ai/sdk";

// Deliberately self-contained (no "@/" aliased imports) so this module can
// be reused as-is from other apps in this monorepo — e.g. the public
// feasibility report flow in `heritageai-design/api/` — without dragging in
// the members-wizard-specific type chain that `claude-caption.ts` depends on.
// The vision-call pattern here intentionally mirrors `claude-caption.ts`.

const MODEL = "claude-sonnet-4-6";

// Copied verbatim from src/lib/compliance/advocacy-language-guardrail.ts
// (ADVOCACY_LANGUAGE_GUARDRAIL_INSTRUCTION). This file must stay free of
// "@/" imports so it can be reused as-is; keep the two strings in step.
// The post-generation scan cannot live here for the same reason — the
// wizard call site (hero-image-upload/route.ts) and PPHA caption edit
// run scanForAdvocacyLanguage on the returned sentence.
const HERO_ADVOCACY_LANGUAGE_GUARDRAIL_INSTRUCTION = `You are describing what is visible in this photograph for a Statement of Heritage Significance — a significance-only document, never an advocacy document. Do not write anything that assesses, justifies, or comments on a proposed scheme of works, even neutrally — for example, do not say a feature is "relevant to assessing the impact of" any proposal, "should be considered in the context of" proposed works, "will need to assess and preserve" something, or that its retention "is noted as a consideration" given any proposal. Also avoid impact/assessment-drift phrasing that ties a fabric observation to an assessment process about the works without naming them directly — for example "warrants careful assessment", "should be assessed ... as part of any conversion works", or "supports assessment of how the proposed [works] would read" within the setting. A simple test: if the sentence would stop making sense once the proposed works are struck out, it does not belong here. Describe only what is visible in the photograph and its significance as found; assessment of impact, design justification, and the merits of any proposed works belong in a separate Heritage Impact Assessment, not here.`;

const HERO_CAPTION_SYSTEM = `You write short, factual captions for property photographs shown on a public heritage planning website.

Respond with ONLY the caption sentence. No markdown, no quotes, no preamble, no JSON.

Describe only what is visibly present in the photograph — materials, colours, general form, setting. Do NOT invent or assume any heritage designation, age, architectural period, significance, or listing status. Do not speculate about what is not visible.

${HERO_ADVOCACY_LANGUAGE_GUARDRAIL_INSTRUCTION}`;

function buildHeroCaptionPrompt(): string {
  return `Write ONE short, vivid, factual sentence describing what is visible in this photograph. Describe only what you can see — do not make any claims about heritage status, age, or significance. Do not mention proposed works, conversions, replacements, or whether any change would be welcomed.`;
}

export async function runHeroImageCaption(
  imageBase64: string,
  mediaType: "image/jpeg" | "image/png"
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured.");
  }

  const anthropic = new Anthropic({ apiKey });

  const message = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 200,
    system: HERO_CAPTION_SYSTEM,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: mediaType,
              data: imageBase64,
            },
          },
          {
            type: "text",
            text: buildHeroCaptionPrompt(),
          },
        ],
      },
    ],
  });

  const textBlock = message.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No text response from Claude.");
  }

  return textBlock.text.trim().replace(/^["']|["']$/g, "");
}

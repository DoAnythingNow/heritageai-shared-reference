import Anthropic from "@anthropic-ai/sdk";

// Deliberately self-contained (no "@/" aliased imports) so this module can
// be reused as-is from other apps in this monorepo — e.g. the public
// feasibility report flow in `heritageai-design/api/` — without dragging in
// the members-wizard-specific type chain that `claude-caption.ts` depends on.
// The vision-call pattern here intentionally mirrors `claude-caption.ts`.

const MODEL = "claude-sonnet-4-6";

const HERO_CAPTION_SYSTEM = `You write short, factual captions for property photographs shown on a public heritage planning website.

Respond with ONLY the caption sentence. No markdown, no quotes, no preamble, no JSON.

Describe only what is visibly present in the photograph — materials, colours, general form, setting. Do NOT invent or assume any heritage designation, age, architectural period, significance, or listing status. Do not speculate about what is not visible.`;

function buildHeroCaptionPrompt(): string {
  return `Write ONE short, vivid, factual sentence describing what is visible in this photograph. Describe only what you can see — do not make any claims about heritage status, age, or significance.`;
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

import sharp from "sharp";

const MAX_LONG_EDGE = 2000;
const MAX_BYTES = 800 * 1024;
const MIN_QUALITY = 40;
const DPI = 72;

export type StandardizedImage = {
  buffer: Buffer;
  contentType: "image/jpeg" | "image/png";
  extension: "jpg" | "png";
};

function isPngInput(mimeType: string, fileName: string): boolean {
  if (mimeType === "image/png") return true;
  const lower = fileName.toLowerCase();
  return lower.endsWith(".png");
}

export async function standardizePhotograph(
  input: Buffer,
  mimeType: string,
  fileName: string
): Promise<StandardizedImage> {
  const usePng = isPngInput(mimeType, fileName);

  let pipeline = sharp(input, { failOn: "none" })
    .rotate()
    .resize({
      width: MAX_LONG_EDGE,
      height: MAX_LONG_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    })
    .withMetadata({ density: DPI });

  if (usePng) {
    pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
  }

  let buffer = await pipeline.toBuffer();

  if (usePng) {
    if (buffer.length <= MAX_BYTES) {
      return { buffer, contentType: "image/png", extension: "png" };
    }

    for (let quality = 85; quality >= MIN_QUALITY; quality -= 5) {
      const jpegBuffer = await sharp(input)
        .rotate()
        .resize({
          width: MAX_LONG_EDGE,
          height: MAX_LONG_EDGE,
          fit: "inside",
          withoutEnlargement: true,
        })
        .withMetadata({ density: DPI })
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();

      buffer = jpegBuffer;
      if (buffer.length <= MAX_BYTES) {
        return { buffer, contentType: "image/jpeg", extension: "jpg" };
      }
    }

    return { buffer, contentType: "image/jpeg", extension: "jpg" };
  }

  for (let quality = 85; quality >= MIN_QUALITY; quality -= 5) {
    buffer = await sharp(input)
      .rotate()
      .resize({
        width: MAX_LONG_EDGE,
        height: MAX_LONG_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .withMetadata({ density: DPI })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();

    if (buffer.length <= MAX_BYTES) {
      return { buffer, contentType: "image/jpeg", extension: "jpg" };
    }
  }

  return { buffer, contentType: "image/jpeg", extension: "jpg" };
}

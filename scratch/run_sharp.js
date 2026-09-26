const sharp = require('sharp');

async function processLogo() {
  const image = sharp('public/logo.jpg');
  const metadata = await image.metadata();

  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  let minX = width, maxX = 0, minY = height, maxY = 0;
  const rgba = Buffer.alloc(width * height * 4);

  // The green globe & airplane icon is located between y = 260 and y = 440
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const outIdx = (y * width + x) * 4;

      // Make background transparent (white / light pixels)
      if (r > 210 && g > 210 && b > 210) {
        rgba[outIdx] = 0;
        rgba[outIdx + 1] = 0;
        rgba[outIdx + 2] = 0;
        rgba[outIdx + 3] = 0; // transparent
      } else {
        // Only keep green icon above y = 435 (excluding the text below)
        if (y < 435) {
          rgba[outIdx] = r;
          rgba[outIdx + 1] = g;
          rgba[outIdx + 2] = b;
          rgba[outIdx + 3] = 255;

          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        } else {
          rgba[outIdx] = 0;
          rgba[outIdx + 1] = 0;
          rgba[outIdx + 2] = 0;
          rgba[outIdx + 3] = 0;
        }
      }
    }
  }

  console.log('Icon bounding box:', { minX, maxX, minY, maxY });

  const padding = 10;
  const cropLeft = Math.max(0, minX - padding);
  const cropTop = Math.max(0, minY - padding);
  const cropWidth = Math.min(width - cropLeft, (maxX - minX) + padding * 2);
  const cropHeight = Math.min(height - cropTop, (maxY - minY) + padding * 2);

  await sharp(rgba, {
    raw: { width, height, channels: 4 }
  })
  .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
  .png()
  .toFile('public/logo-green-icon.png');

  console.log('Extracted clean green globe & airplane icon to public/logo-green-icon.png');
}

processLogo().catch(console.error);

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install sharp locally in scratch or use npx
console.log('Processing logo.jpg to extract green globe icon with transparent background...');

const script = `
const sharp = require('sharp');

async function processLogo() {
  const image = sharp('public/logo.jpg');
  const metadata = await image.metadata();
  console.log('Original dimensions:', metadata.width, metadata.height);

  // Extract raw pixels
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Find bounding box of green pixels (where G > R + 20 and G > B + 20 or dark outline)
  // Green color in logo.jpg is around R: 10-40, G: 80-120, B: 50-80
  let minX = width, maxX = 0, minY = height, maxY = 0;

  // We know the green icon is in the upper middle area of logo.jpg
  // Let's create an RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const outIdx = (y * width + x) * 4;

      // Check if pixel is white / light background (R > 220 && G > 220 && B > 220)
      if (r > 215 && g > 215 && b > 215) {
        rgba[outIdx] = 0;
        rgba[outIdx + 1] = 0;
        rgba[outIdx + 2] = 0;
        rgba[outIdx + 3] = 0; // transparent
      } else {
        rgba[outIdx] = r;
        rgba[outIdx + 1] = g;
        rgba[outIdx + 2] = b;
        rgba[outIdx + 3] = 255;

        // Keep track of top half green icon bounding box (y < height * 0.5)
        if (y < height * 0.48) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
  }

  console.log('Icon bounding box:', { minX, maxX, minY, maxY });

  // Add padding to bounding box
  const padding = 15;
  const cropLeft = Math.max(0, minX - padding);
  const cropTop = Math.max(0, minY - padding);
  const cropWidth = Math.min(width - cropLeft, (maxX - minX) + padding * 2);
  const cropHeight = Math.min(height - cropTop, (maxY - minY) + padding * 2);

  // Save extracted transparent icon
  await sharp(rgba, {
    raw: { width, height, channels: 4 }
  })
  .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
  .png()
  .toFile('public/logo-green-icon.png');

  console.log('Saved public/logo-green-icon.png cleanly!');
}

processLogo().catch(console.error);
`;

fs.writeFileSync('scratch/run_sharp.js', script);

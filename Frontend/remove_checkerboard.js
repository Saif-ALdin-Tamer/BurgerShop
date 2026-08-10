import fs from 'fs';
import path from 'path';
import jpeg from 'jpeg-js';
import { PNG } from 'pngjs';

const photosDir = './public/photos';

function processImage(filename) {
  const filePath = path.join(photosDir, filename);
  if (!fs.existsSync(filePath)) return;

  console.log(`Processing ${filename}...`);
  const rawData = fs.readFileSync(filePath);
  let width, height, data;

  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
    const jpegData = jpeg.decode(rawData, { useTolerantDecoder: true });
    width = jpegData.width;
    height = jpegData.height;
    data = jpegData.data; // RGBA buffer
  } else {
    return;
  }

  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Check if pixel belongs to checkerboard (white/light gray neutral background)
      const isWhite = r > 220 && g > 220 && b > 220;
      const isGray = r > 160 && g > 160 && b > 160 && Math.abs(r - g) < 14 && Math.abs(g - b) < 14 && Math.abs(r - b) < 14;

      const isBg = isWhite || isGray;

      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;
      png.data[idx + 3] = isBg ? 0 : 255;
    }
  }

  const outName = filename.replace(/\.(jpg|jpeg)$/, '.png');
  const outPath = path.join(photosDir, outName);
  const buffer = PNG.sync.write(png);
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved transparent PNG: ${outName}`);
}

const files = fs.readdirSync(photosDir);
files.forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    processImage(file);
  }
});

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, '..', 'src', 'assets', 'about-stylist.jpg');
const destDir = path.resolve(__dirname, '..', 'public');
const dest = path.join(destDir, 'preview.jpg');

if (!fs.existsSync(src)) {
  console.error('Source image not found:', src);
  process.exit(1);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  fs.copyFileSync(src, dest);
  console.log('Preview image created at', dest);
} catch (err) {
  console.error('Failed to create preview image:', err);
  process.exit(1);
}

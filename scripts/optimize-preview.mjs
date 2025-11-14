import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, '..', 'src', 'assets', 'about-stylist.jpg');
const destDir = path.resolve(__dirname, '..', 'public');
const dest = path.join(destDir, 'preview.jpg');

(async () => {
    if (!fs.existsSync(src)) {
        console.error('Source image not found:', src);
        process.exit(1);
    }

    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

    try {
        await sharp(src)
            .resize(1200, 630, {
                fit: 'cover',
                position: 'centre'
            })
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(dest);

        console.log('Optimized preview created at', dest);
    } catch (err) {
        console.error('Failed to optimize preview:', err);
        process.exit(1);
    }
})();

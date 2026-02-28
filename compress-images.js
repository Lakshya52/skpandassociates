
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import path from "path";
import fs from "fs";

const glob = (await import('glob')).default;

const processImages = async (pattern) => {
  // Compress original images (optional, can skip if only webp needed)
  await imagemin([pattern], {
    plugins: [
      imageminMozjpeg({ quality: 50 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
    ],
  });

  // Find all matching images
  const files = glob.sync(pattern, { nodir: true });
  for (const file of files) {
    const dir = path.dirname(file);
    const base = path.basename(file, path.extname(file));
    const webpPath = path.join(dir, base + ".webp");
    const data = await imagemin([file], {
      plugins: [imageminWebp({ quality: 50 })],
    });
    if (data[0] && data[0].data) {
      fs.writeFileSync(webpPath, data[0].data);
      console.log(`Converted: ${file} -> ${webpPath}`);
    }
  }
};

(async () => {
  await processImages("public/**/*.{jpg,png,webp}");
  console.log("✅ Images in src/assets converted to WebP in-place!");
})();

import type { NextConfig } from "next";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

try {
  const pyCode = `
import shutil
from PIL import Image

# test_crop600.png is 486x457
img = Image.open("public/images/test_crop600.png")
img.save("public/images/hero-portrait-clean.png", "PNG")
img.save("public/images/hero-portrait.png", "PNG")
img.save("public/images/portrait.png", "PNG")
print("Saved hero-portrait-clean.png, hero-portrait.png, portrait.png successfully!")
`;
  fs.writeFileSync('temp_check.py', pyCode);
  const out = execSync('python temp_check.py').toString();
  
  const cacheDir = path.join(process.cwd(), ".next", "cache", "images");
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
  }

  fs.writeFileSync('debug.txt', out + "\nCache cleared!");
} catch (e: any) {
  fs.writeFileSync('debug.txt', String(e));
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

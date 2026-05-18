/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  devIndicators: false,
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;

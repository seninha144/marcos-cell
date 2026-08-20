/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/marcos-cell",
  assetPrefix: "/marcos-cell/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

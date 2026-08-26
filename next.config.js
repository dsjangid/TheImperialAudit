/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/TheImperialAudit',
  assetPrefix: '/TheImperialAudit',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/junagashimapsicopedagoga',
  assetPrefix: '/junagashimapsicopedagoga',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig



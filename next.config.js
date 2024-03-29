require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['swiper'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'ce-web-dev.azurewebsites.net',
      'cewebprod.blob.core.windows.net',
    ],
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'mycontractorsedge.com' }],
      destination: 'https://www.mycontractorsedge.com/:path*',
      permanent: true
    }
  ]
}
module.exports = nextConfig

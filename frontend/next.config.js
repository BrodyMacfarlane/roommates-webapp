/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/npm/emoji-datasource-apple/img/apple/**',
      },
    ],
  },
}

module.exports = nextConfig

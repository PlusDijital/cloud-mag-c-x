/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'ui-avatars.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'maps.googleapis.com', 'maps.gstatic.com'],
  },
};

module.exports = nextConfig;
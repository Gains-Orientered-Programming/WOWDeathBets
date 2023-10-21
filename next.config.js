/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wow.zamimg.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

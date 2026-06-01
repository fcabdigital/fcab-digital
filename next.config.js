/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['fcabdigital.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

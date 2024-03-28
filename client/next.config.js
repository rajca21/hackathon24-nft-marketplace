/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.pinata.cloud',
      'gray-causal-takin-622.mypinata.cloud',
      'cdn.pixabay.com',
    ],
    formats: ['image/webp'],
  },
};

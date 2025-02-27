/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com"], // ✅ Allow external images from this domain
  },
};

module.exports = nextConfig;

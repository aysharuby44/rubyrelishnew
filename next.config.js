/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  images: {
    // domains: ['example.com'], // Optional: Uncomment if you use external image domains
    formats: ['image/avif', 'image/webp'], // Optional: Use modern formats (AVIF, WebP)
  },
};

module.exports = nextConfig;

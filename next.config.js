/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

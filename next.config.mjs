/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,  // This makes the MONGODB_URI available in the Next.js app
  },
};

export default nextConfig;

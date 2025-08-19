/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // If later you switch to next/image with external domains, configure here
    // domains: [],
  },
  typescript: {
    // Set to true to allow production builds to succeed even if types have errors
    ignoreBuildErrors: false,
  },
};

export default nextConfig;

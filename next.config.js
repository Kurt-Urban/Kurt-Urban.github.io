/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "." : "",
  images: {
    loader: "custom",
    path: "https://i.imgur.com/",
  },
};

module.exports = nextConfig;

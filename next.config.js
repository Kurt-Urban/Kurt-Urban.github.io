/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "." : "",
  images: {
    loader: "custom",
    path: "https://i.imgur.com/",
  },
  env: {
    WORDNIK_API_KEY: process.env.WORDNIK_API_KEY,
  },
  async rewrites() {
    return [
      {
        source: "/definition/:word*",
        destination: "http://api.wordnik.com/v4/word.json/:word*",
      },
    ];
  },
};

module.exports = nextConfig;

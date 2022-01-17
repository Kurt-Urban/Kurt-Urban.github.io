const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/Kurt-Urban.github.io/" : "",
};

module.exports = nextConfig;

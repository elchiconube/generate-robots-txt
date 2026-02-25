/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true;
    return config;
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  env : {
    SERVICE_NUMBER : "service_vu6pg1i",
    TEMPLATE_NUMBER : "template_fhr2kwe"
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GCLOUD_URL: process.env.GCLOUD_URL,
  },
};

export default nextConfig;

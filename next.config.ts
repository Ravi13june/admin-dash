import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://alamupload.s3.eu-north-1.amazonaws.com/**')],
  },
};

export default nextConfig;

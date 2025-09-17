import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://i.ibb.co/**'), new URL('https://pbs.twimg.com/profile_images/**'), new URL('https://camo.githubusercontent.com/**')],
  },
};

export default nextConfig;

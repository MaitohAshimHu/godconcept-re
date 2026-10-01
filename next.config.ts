import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "godconcept.in",
        pathname: "/cdn/shop/**",
      },
    ],
  },
};

export default nextConfig;

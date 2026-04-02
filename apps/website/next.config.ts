import type { NextConfig } from "next";
import toolbarPlugin from "@vercel/toolbar/plugins/next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  redirects: () => Promise.resolve([
    {
      source: "/projects",
      destination: "/#projects",
      permanent: false,
    },
    {
      source: "/en/pdf/cv",
      destination: "/en/pdf/base/cv",
      permanent: false,
    },
    {
      source: "/fr/pdf/cv",
      destination: "/fr/pdf/base/cv",
      permanent: false,
    }
  ])
};

const withVercelToolbar = toolbarPlugin();
export default withVercelToolbar(nextConfig);

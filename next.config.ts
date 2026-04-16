import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/SaicoProjects.github.io" : "",
  assetPrefix: isProd ? "/SaicoProjects.github.io/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/SaicoProjects.github.io" : "",
  },
};

export default nextConfig;

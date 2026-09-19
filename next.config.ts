import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inglês em / e português em /pt. O endereço /en leva ao principal.
  async redirects() {
    return [{ source: "/en", destination: "/", permanent: true }];
  },
};

export default nextConfig;

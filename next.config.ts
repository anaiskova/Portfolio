import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O endereço principal (/) mostra a versão em inglês; /pt mostra a versão em português
  async rewrites() {
    return [{ source: "/", destination: "/en" }];
  },
  // /en é o mesmo que /: redireciona para o endereço principal
  async redirects() {
    return [{ source: "/en", destination: "/", permanent: true }];
  },
};

export default nextConfig;

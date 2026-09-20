import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/shared";

/** /robots.txt: autoriza todos os motores de pesquisa e indica onde está o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

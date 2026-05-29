import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${siteData.domenas}/sitemap.xml`,
  };
}

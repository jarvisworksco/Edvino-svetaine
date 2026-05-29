import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteData.domenas}`;
  const now = new Date();

  const statiniai: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/paslaugos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/apie-mus`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/galerija`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kontaktai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatumo-politika`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/slapuku-politika`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const paslaugos: MetadataRoute.Sitemap = siteData.paslaugos.map((p) => ({
    url: `${baseUrl}/paslaugos/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...statiniai, ...paslaugos];
}

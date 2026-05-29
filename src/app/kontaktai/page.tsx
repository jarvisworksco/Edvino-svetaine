import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontaktai",
  description: `Susisiekite su ${siteData.verslosPavadinimas} — ${siteData.kontaktai.telefonas}. Atsakome greitai.`,
};

export default function KontaktaiPuslapis() {
  return <Contact />;
}

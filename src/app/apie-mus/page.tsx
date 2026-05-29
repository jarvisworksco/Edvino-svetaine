import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { StatCard } from "@/components/shared/StatCard";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apie mus",
  description: `Sužinokite daugiau apie ${siteData.verslosPavadinimas} — komandą, vertybes ir patirtį.`,
};

export default function ApieMusPuslapis() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium">
            APIE MUS
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Kas esame ir ko{" "}
            <span className="text-brand-light">siekiame</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            {siteData.apieVerslą.trumpaIstorija}
          </p>
        </div>

        {/* Statistikos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {siteData.statistikos.map((stat, i) => (
            <StatCard key={i} title={stat.title} desc={stat.desc} ikona={stat.ikona} />
          ))}
        </div>

        {/* Vertybės */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Ką atliekame
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.apieVerslą.verciuPunktai.map((punktas, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-brand-light mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-gray-700">{punktas}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Pasitikite profesionalais
          </h2>
          <p className="text-white/80 mb-6">
            Susisiekite šiandien ir gaukite nemokamą konsultaciją.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontaktai"
              className="bg-cream hover:bg-cream/90 text-brand-dark px-8 py-3 rounded-md font-medium transition-colors"
            >
              Susisiekti
            </Link>
            <a
              href={`tel:${siteData.kontaktai.telefonas.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {siteData.kontaktai.telefonas}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

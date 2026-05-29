import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Galerija",
  description: `${siteData.verslosPavadinimas} atliktų darbų galerija — projektų pavyzdžiai ${siteData.aptarnavimoRegionas}.`,
};

export default function GalerijaPuslapis() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium">
            GALERIJA
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Mūsų atlikti <span className="text-brand-light">darbai</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Čia rasite mūsų atliktų projektų nuotraukas ir aprašymus. Kiekvienas
            projektas — tai mūsų kokybės ir profesionalumo įrodymas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.galerija.map((projektas, i) => (
            <article
              key={i}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-video">
                <Image
                  src={projektas.foto}
                  alt={projektas.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-cream text-brand-dark text-xs font-medium px-3 py-1 rounded">
                  {projektas.kategorija}
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-gray-900">{projektas.title}</h2>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {projektas.aprasymas}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Domina konkretus darbo tipas? Susisiekite ir aptarkite savo projektą.
          </p>
          <Link
            href="/kontaktai"
            className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Susisiekti
          </Link>
        </div>
      </div>
    </div>
  );
}

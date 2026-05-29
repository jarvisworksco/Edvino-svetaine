import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Paslaugos",
  description: `Visos ${siteData.verslosPavadinimas} teikiamos paslaugos — ${siteData.aptarnavimoRegionas}.`,
};

export default function PaslaugosPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium">
            PASLAUGOS
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Visos mūsų <span className="text-brand-light">paslaugos</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Teikiame kokybiškas paslaugas {siteData.aptarnavimoRegionas}.
            Susisiekite ir gaukite nemokamą konsultaciją.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.paslaugos.map((paslauga) => (
            <article
              key={paslauga.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={paslauga.foto}
                  alt={paslauga.kategorija}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {paslauga.kategorija}
                </h2>
                <ul className="space-y-2 mb-6">
                  {paslauga.punktai.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-light mt-0.5 shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    href={`/paslaugos/${paslauga.slug}`}
                    className="flex items-center gap-1 text-brand hover:text-brand-dark text-sm font-medium transition-colors"
                  >
                    Skaityti plačiau
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/kontaktai"
                    className="ml-auto bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Užsakyti
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

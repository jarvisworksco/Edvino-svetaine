import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { siteData } from "@/lib/site-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteData.paslaugos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paslauga = siteData.paslaugos.find((p) => p.slug === slug);
  if (!paslauga) return {};
  return {
    title: paslauga.kategorija,
    description: paslauga.aprasymas,
  };
}

export default async function PaslaugosDetalePuslapis({ params }: Props) {
  const { slug } = await params;
  const paslauga = siteData.paslaugos.find((p) => p.slug === slug);
  if (!paslauga) notFound();

  const eilinesNr = siteData.paslaugos.indexOf(paslauga);
  const ankstesnePaslauga = siteData.paslaugos[eilinesNr - 1];
  const kitaPaslauga = siteData.paslaugos[eilinesNr + 1];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/paslaugos"
          className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Grįžti į visas paslaugas
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative h-80 rounded-xl overflow-hidden mb-8">
              <Image
                src={paslauga.foto}
                alt={paslauga.kategorija}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium">
              PASLAUGA
            </span>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {paslauga.kategorija}
            </h1>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {paslauga.aprasymas}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Ką apima ši paslauga:
            </h2>
            <ul className="space-y-3 mb-8">
              {paslauga.punktai.map((punktas, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 text-brand-light mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{punktas}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">
                Norite užsakyti šią paslaugą?
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Susisiekite su mumis ir gaukite nemokamą konsultaciją bei
                kainų pasiūlymą.
              </p>
              <Link
                href="/kontaktai"
                className="flex items-center justify-center gap-2 bg-cream hover:bg-cream/90 text-brand-dark px-6 py-3 rounded-md font-medium transition-colors"
              >
                Gauti pasiūlymą
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={`tel:${siteData.kontaktai.telefonas.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 mt-3 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {siteData.kontaktai.telefonas}
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Kitos paslaugos
              </h3>
              <ul className="space-y-2">
                {siteData.paslaugos
                  .filter((p) => p.slug !== slug)
                  .slice(0, 4)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/paslaugos/${p.slug}`}
                        className="text-sm text-brand hover:text-brand-dark transition-colors"
                      >
                        → {p.kategorija}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigacija */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between">
          {ankstesnePaslauga ? (
            <Link
              href={`/paslaugos/${ankstesnePaslauga.slug}`}
              className="flex items-center gap-2 text-sm text-brand hover:text-brand-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              {ankstesnePaslauga.kategorija}
            </Link>
          ) : (
            <div />
          )}
          {kitaPaslauga && (
            <Link
              href={`/paslaugos/${kitaPaslauga.slug}`}
              className="flex items-center gap-2 text-sm text-brand hover:text-brand-dark transition-colors"
            >
              {kitaPaslauga.kategorija}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

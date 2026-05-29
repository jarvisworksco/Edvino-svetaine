"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { siteData } from "@/lib/site-data";

interface MobileMenuProps {
  atidarytas: boolean;
  onUzdaryti: () => void;
}

export function MobileMenu({ atidarytas, onUzdaryti }: MobileMenuProps) {
  const [paslaugosAtidarytos, setPaslaugosAtidarytos] = useState(false);

  if (!atidarytas) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-brand lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigacijos meniu"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 h-20 border-b border-white/10">
          <Link
            href="/"
            onClick={onUzdaryti}
            className="text-white font-bold text-lg"
          >
            {siteData.verslosPavadinimas}
          </Link>
          <button
            onClick={onUzdaryti}
            aria-label="Uždaryti meniu"
            className="text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={onUzdaryti}
                className="block py-3 text-white/90 hover:text-white text-lg font-medium border-b border-white/10"
              >
                Pagrindinis
              </Link>
            </li>
            <li>
              <button
                onClick={() => setPaslaugosAtidarytos(!paslaugosAtidarytos)}
                className="w-full flex items-center justify-between py-3 text-white/90 hover:text-white text-lg font-medium border-b border-white/10"
              >
                Paslaugos
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    paslaugosAtidarytos ? "rotate-180" : ""
                  }`}
                />
              </button>
              {paslaugosAtidarytos && (
                <ul className="pl-4 py-2 space-y-1">
                  {siteData.paslaugos.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/paslaugos/${p.slug}`}
                        onClick={onUzdaryti}
                        className="block py-2 text-white/70 hover:text-white text-sm"
                      >
                        {p.kategorija}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/apie-mus"
                onClick={onUzdaryti}
                className="block py-3 text-white/90 hover:text-white text-lg font-medium border-b border-white/10"
              >
                Apie mus
              </Link>
            </li>
            <li>
              <Link
                href="/galerija"
                onClick={onUzdaryti}
                className="block py-3 text-white/90 hover:text-white text-lg font-medium border-b border-white/10"
              >
                Galerija
              </Link>
            </li>
            <li>
              <Link
                href="/kontaktai"
                onClick={onUzdaryti}
                className="block py-3 text-white/90 hover:text-white text-lg font-medium border-b border-white/10"
              >
                Kontaktai
              </Link>
            </li>
          </ul>
        </nav>

        <div className="px-4 py-6 border-t border-white/10">
          <Link
            href="/kontaktai"
            onClick={onUzdaryti}
            className="block w-full text-center bg-cream hover:bg-cream/90 text-brand-dark px-6 py-3 rounded-md font-medium transition-colors"
          >
            Susisiekti
          </Link>
          <p className="mt-3 text-center text-white/60 text-sm">
            {siteData.kontaktai.telefonas}
          </p>
        </div>
      </div>
    </div>
  );
}

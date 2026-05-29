"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, ChevronDown, Leaf } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [slinkta, setSlinkta] = useState(false);
  const [menuAtidarytas, setMenuAtidarytas] = useState(false);
  const [paslaugosAtidarytos, setPaslaugosAtidarytos] = useState(false);

  useEffect(() => {
    function onScroll() {
      setSlinkta(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#pagrindinis-turinys"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-white text-brand px-4 py-2 rounded-md font-medium"
      >
        Pereiti į pagrindinį turinį
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-brand ${
          slinkta ? "bg-brand/95 backdrop-blur-sm h-16 shadow-md" : "h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-lg focus-visible:ring-2 focus-visible:ring-cream rounded"
          >
            <Leaf className="w-5 h-5 text-cream" aria-hidden="true" />
            {siteData.verslosPavadinimas}
          </Link>

          {/* Navigacija — desktop */}
          <nav
            aria-label="Pagrindinė navigacija"
            className="hidden lg:flex items-center gap-6"
          >
            <Link
              href="/"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cream rounded"
            >
              Pagrindinis
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setPaslaugosAtidarytos(true)}
              onMouseLeave={() => setPaslaugosAtidarytos(false)}
            >
              <button
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cream rounded"
                aria-expanded={paslaugosAtidarytos}
                aria-haspopup="true"
              >
                Paslaugos
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    paslaugosAtidarytos ? "rotate-180" : ""
                  }`}
                />
              </button>
              {paslaugosAtidarytos && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  style={{ paddingTop: "12px" }}
                >
                  {siteData.paslaugos.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/paslaugos/${p.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-tint hover:text-brand transition-colors"
                    >
                      {p.kategorija}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/apie-mus"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cream rounded"
            >
              Apie mus
            </Link>
            <Link
              href="/galerija"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cream rounded"
            >
              Galerija
            </Link>
            <Link
              href="/kontaktai"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cream rounded"
            >
              Kontaktai
            </Link>
          </nav>

          {/* Dešinė pusė */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteData.kontaktai.telefonas.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-cream transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {siteData.kontaktai.telefonas}
            </a>
            <Link
              href="/kontaktai"
              className="bg-cream hover:bg-cream/90 text-brand-dark px-5 py-2.5 rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white"
            >
              Susisiekti
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuAtidarytas(true)}
            aria-label="Atidaryti meniu"
            className="lg:hidden text-white p-2 focus-visible:ring-2 focus-visible:ring-cream rounded"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        atidarytas={menuAtidarytas}
        onUzdaryti={() => setMenuAtidarytas(false)}
      />
    </>
  );
}

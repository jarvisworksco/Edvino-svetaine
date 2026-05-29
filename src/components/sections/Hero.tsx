"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Mountain, BadgeCheck, type LucideIcon } from "lucide-react";
import { siteData } from "@/lib/site-data";

const badgeIkonos: Record<string, LucideIcon> = { Award, Mountain, BadgeCheck };

export function Hero() {
  return (
    <section
      className="relative min-h-screen sm:min-h-[700px] flex items-center justify-center text-center"
      aria-label="Pagrindinis"
    >
      {/* Fonas */}
      <div
        className="absolute inset-0 bg-brand-dark/60"
        style={{
          backgroundImage: "url('/images/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
            Profesionali{" "}
            <span className="text-cream">{siteData.veiklosSritis}</span>
            <br />
            ir aukštos kokybės sprendimai
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Atliekame visus darbus {siteData.aptarnavimoRegionas} — greitai,
            saugiai ir profesionaliai. Susisiekite ir gaukite nemokamą
            įvertinimą.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/kontaktai"
              className="flex items-center gap-2 bg-cream hover:bg-cream/90 text-brand-dark px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-md font-medium transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Gauti pasiūlymą
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/paslaugos"
              className="flex items-center gap-2 border border-white text-white hover:bg-white/10 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-md font-medium transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Mūsų paslaugos
            </Link>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto hidden sm:grid"
        >
          {siteData.heroBadges.map((badge, i) => {
            const Icon = badgeIkonos[badge.ikona] ?? Award;
            return (
              <div
                key={i}
                className="bg-brand-dark/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-start gap-4"
              >
                <div className="bg-brand-tint/20 p-2 rounded-md shrink-0">
                  <Icon className="w-5 h-5 text-cream" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{badge.title}</p>
                  <p className="text-white/70 text-xs mt-0.5">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

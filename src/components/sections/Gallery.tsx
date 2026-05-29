"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { siteData } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="galerija" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="GALERIJA"
          title={
            <>
              Mūsų atlikti <span className="text-brand-light">darbai</span>
            </>
          }
          subtitle="Peržiūrėkite mūsų atliktų projektų pavyzdžius — kiekvienas projektas atspindi mūsų kokybę ir atidą detalėms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.galerija.map((projektas, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={projektas.foto}
                  alt={projektas.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-cream text-brand-dark text-xs font-medium px-3 py-1 rounded">
                  {projektas.kategorija}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-gray-900">{projektas.title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {projektas.aprasymas}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

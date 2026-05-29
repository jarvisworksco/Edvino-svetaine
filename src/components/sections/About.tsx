"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StatCard } from "@/components/shared/StatCard";
import { siteData } from "@/lib/site-data";

const apieNuotraukos = [
  "/images/about/01.jpg",
  "/images/about/02.jpg",
  "/images/about/03.jpg",
];

export function About() {
  const [aktyvus, setAktyvus] = useState(0);

  function ankstesnis() {
    setAktyvus((p) => (p === 0 ? apieNuotraukos.length - 1 : p - 1));
  }
  function kitas() {
    setAktyvus((p) => (p === apieNuotraukos.length - 1 ? 0 : p + 1));
  }

  return (
    <section id="apie-mus" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="APIE MUS"
          title={
            <>
              Patirtis, atsakomybė ir profesionali{" "}
              <span className="text-brand-light">komanda</span>
            </>
          }
          subtitle="Esame patikimi partneriai, kurių galite pasitikėti kiekvienam projektui."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative">
            <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={apieNuotraukos[aktyvus]}
                alt={`Apie mus — nuotrauka ${aktyvus + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <button
                onClick={ankstesnis}
                aria-label="Ankstesnė nuotrauka"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-brand" />
              </button>
              <button
                onClick={kitas}
                aria-label="Kita nuotrauka"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-brand" />
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {apieNuotraukos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAktyvus(i)}
                  aria-label={`Nuotrauka ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === aktyvus ? "bg-brand" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Turinys */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kokybiškas ir saugus darbas — mūsų prioritetas
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              {siteData.apieVerslą.trumpaIstorija}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Per {siteData.apieVerslą.metuPatirtis} metų sukaupėme plačią
              patirtį ir sukūrėme komandą, kuri kiekvieną projektą vykdo
              atsakingai ir profesionaliai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {siteData.apieVerslą.verciuPunktai.map((punktas, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-5 h-5 text-brand-light mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-700">{punktas}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontaktai"
                className="flex items-center justify-center bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Susisiekti su komanda
              </Link>
              <Link
                href="/apie-mus"
                className="flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Plačiau apie mus
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stat kortelės */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.statistikos.map((stat, i) => (
            <StatCard key={i} title={stat.title} desc={stat.desc} ikona={stat.ikona} />
          ))}
        </div>
      </div>
    </section>
  );
}

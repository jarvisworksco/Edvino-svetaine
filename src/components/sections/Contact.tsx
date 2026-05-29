"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Truck,
  ClipboardCheck,
  MapPin,
  Mail,
  Building2,
  AlertTriangle,
  Share2,
  Camera,
  Copy,
  Check,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/shared/ContactForm";
import { siteData } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="kontaktai" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="KONTAKTAI"
          title={
            <>
              Susisiekite su{" "}
              <span className="text-brand-light">mūsų komanda</span>
            </>
          }
          subtitle="Atsakome greitai. Nemokamas įvertinimas ir konsultacija — tiesiog susisiekite."
        />

        {/* Info kortelės */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              ikona: Phone,
              title: "Skambinkite mums",
              reiksme: siteData.kontaktai.telefonas,
              papildoma: "Atsakome greitai",
            },
            {
              ikona: MessageCircle,
              title: "Parašykite užklausą",
              reiksme: "Užpildykite formą",
              papildoma: "Atsakysime per parą",
            },
            {
              ikona: Truck,
              title: "Dirbame visoje Lietuvoje",
              reiksme: "Atvykstame pas jus",
              papildoma: "Visi miestai ir rajonai",
            },
            {
              ikona: ClipboardCheck,
              title: "Nemokamas įvertinimas",
              reiksme: "Apžiūra ir pasiūlymas",
              papildoma: "Įvertiname darbus vietoje",
            },
          ].map(({ ikona: Icon, title, reiksme, papildoma }, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="bg-brand-tint p-3 rounded-lg shrink-0">
                <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">{title}</p>
                <p className="text-sm text-brand">{reiksme}</p>
                <p className="text-xs text-gray-500 mt-0.5">{papildoma}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Forma + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <ContactInfoSidebar />
        </div>
      </div>
    </section>
  );
}

function ContactInfoSidebar() {
  const [nukopijuota, setNukopijuota] = useState<string | null>(null);

  function kopijuoti(tekstas: string, raktas: string) {
    navigator.clipboard.writeText(tekstas).then(() => {
      setNukopijuota(raktas);
      setTimeout(() => setNukopijuota(null), 2000);
    });
  }

  const eilutes = [
    {
      ikona: Phone,
      label: "Telefonas",
      reiksme: siteData.kontaktai.telefonas,
      raktas: "tel",
      href: `tel:${siteData.kontaktai.telefonas.replace(/\s/g, "")}`,
    },
    {
      ikona: Mail,
      label: "El. paštas",
      reiksme: siteData.kontaktai.elPastas,
      raktas: "email",
      href: `mailto:${siteData.kontaktai.elPastas}`,
    },
    {
      ikona: MapPin,
      label: "Adresas",
      reiksme: siteData.kontaktai.adresas,
      raktas: "adresas",
      href: undefined,
    },
    {
      ikona: Building2,
      label: "Įmonės kodas",
      reiksme: siteData.kontaktai.imonesKodas,
      raktas: "imone",
      href: undefined,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-brand" aria-hidden="true" />
          Kontaktinė informacija
        </h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Susisiekite bet kuriuo iš žemiau nurodytų būdų — atsakysime greitai ir
          profesionaliai.
        </p>

        <ul className="space-y-4">
          {eilutes.map(({ ikona: Icon, label, reiksme, raktas, href }) => (
            <li key={raktas} className="flex items-start gap-3">
              <div className="bg-brand-tint p-2 rounded-md shrink-0">
                <Icon className="w-4 h-4 text-brand" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-sm font-medium text-gray-900 hover:text-brand transition-colors break-all"
                  >
                    {reiksme}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-gray-900">{reiksme}</p>
                )}
              </div>
              <button
                onClick={() => kopijuoti(reiksme, raktas)}
                aria-label={`Kopijuoti ${label.toLowerCase()}`}
                className="text-gray-400 hover:text-brand transition-colors shrink-0"
              >
                {nukopijuota === raktas ? (
                  <Check className="w-4 h-4 text-brand-light" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium mb-3">
            Sekite mus
          </p>
          <div className="flex gap-2">
            <a
              href={siteData.socialiniai.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 bg-brand-tint hover:bg-brand-tint/80 text-brand px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
              Facebook
            </a>
            <a
              href={siteData.socialiniai.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 bg-brand-tint hover:bg-brand-tint/80 text-brand px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Camera className="w-4 h-4" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Skubu box */}
      <div className="border-2 border-red-200 bg-red-50/50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-red-600" aria-hidden="true" />
          <p className="text-red-600 font-bold text-sm uppercase tracking-wide">
            Skubu
          </p>
        </div>
        <p className="text-sm text-red-800 mb-4">
          Avarinė situacija ar darbai ne darbo metu? Skambinkite — atsiliepiame
          ir savaitgaliais bei vakarais.
        </p>
        <a
          href={`tel:${siteData.kontaktai.telefonas.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-dark text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Skubus skambutis: {siteData.kontaktai.telefonas}
        </a>
      </div>
    </div>
  );
}

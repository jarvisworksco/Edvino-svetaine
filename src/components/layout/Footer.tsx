import Link from "next/link";
import { Phone, Mail, MapPin, Share2, Camera, Leaf, ArrowUp } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function Footer() {
  const metai = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Brand stulpelis */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-lg mb-4"
            >
              <Leaf className="w-5 h-5 text-cream" aria-hidden="true" />
              {siteData.verslosPavadinimas}
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {siteData.trumpasApibudinimas}
            </p>
            <div className="flex gap-3">
              <a
                href={siteData.socialiniai.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook puslapis"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={siteData.socialiniai.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram puslapis"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Camera className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Paslaugos stulpelis */}
          <div>
            <h4 className="text-white font-semibold mb-4">Paslaugos</h4>
            <ul className="space-y-2">
              {siteData.paslaugos.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/paslaugos/${p.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {p.kategorija}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nuorodos stulpelis */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nuorodos</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Pagrindinis" },
                { href: "/paslaugos", label: "Paslaugos" },
                { href: "/apie-mus", label: "Apie mus" },
                { href: "/galerija", label: "Galerija" },
                { href: "/kontaktai", label: "Kontaktai" },
                { href: "/privatumo-politika", label: "Privatumo politika" },
                { href: "/slapuku-politika", label: "Slapukų politika" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontaktai stulpelis */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontaktai</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cream mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteData.kontaktai.telefonas.replace(/\s/g, "")}`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {siteData.kontaktai.telefonas}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cream mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteData.kontaktai.elPastas}`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {siteData.kontaktai.elPastas}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cream mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-white/70 text-sm">{siteData.kontaktai.adresas}</span>
              </li>
            </ul>
            <Link
              href="/kontaktai"
              className="inline-block bg-cream hover:bg-cream/90 text-brand-dark px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              Susisiekite dabar
            </Link>
          </div>
        </div>

        {/* Apatinis baras */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/60">
          <div>
            <p>
              © {metai} {siteData.verslosPavadinimas}. Visos teisės saugomos.
            </p>
            <p className="mt-1">
              Internetinė svetainė sukurta{" "}
              {siteData.agenturosUrl ? (
                <a
                  href={siteData.agenturosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteData.agenturosCredit}
                </a>
              ) : (
                siteData.agenturosCredit
              )}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span>{siteData.tagline}</span>
            <a
              href="#"
              aria-label="Grįžti į viršų"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

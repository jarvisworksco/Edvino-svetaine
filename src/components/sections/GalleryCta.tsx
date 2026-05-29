import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GalleryCta() {
  return (
    <section className="bg-brand py-24 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Norite pamatyti daugiau projektų?
        </h2>
        <p className="mt-4 text-white/80 text-lg">
          Mūsų galerija rodo tik dalį atliktų darbų. Apsilankykite visoje
          galerijoje ir pamatykite platų mūsų kompetencijų spektrą.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/galerija"
            className="flex items-center gap-2 bg-white hover:bg-white/90 text-brand-dark px-8 py-3.5 rounded-md font-medium transition-colors"
          >
            Peržiūrėti visus projektus
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/kontaktai"
            className="flex items-center gap-2 bg-cream hover:bg-cream/90 text-brand-dark px-8 py-3.5 rounded-md font-medium transition-colors"
          >
            Susisiekite
          </Link>
        </div>
      </div>
    </section>
  );
}

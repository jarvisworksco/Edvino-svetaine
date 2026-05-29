"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center max-w-md px-4">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium mb-4">
          KLAIDA 404
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Puslapis nerastas
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Atsiprašome — šio puslapio nerasta. Galbūt nuoroda pasikeitė arba
          puslapis buvo pašalintas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Grįžti į pradžią
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-brand text-brand hover:bg-brand hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Atgal
          </button>
        </div>
      </div>
    </div>
  );
}

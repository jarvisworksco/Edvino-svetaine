"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type CookiePreferences = {
  butini: boolean;
  statistika: boolean;
  rinkodara: boolean;
};

export function CookieBanner() {
  const [rodyti, setRodyti] = useState(false);
  const [tvarkyti, setTvarkyti] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    butini: true,
    statistika: false,
    rinkodara: false,
  });

  useEffect(() => {
    const isaugota = localStorage.getItem("slapuku-pasirinkimas");
    if (!isaugota) setRodyti(true);
  }, []);

  function priimtiVisus() {
    isaugoti({ butini: true, statistika: true, rinkodara: true });
  }

  function priimtiButinius() {
    isaugoti({ butini: true, statistika: false, rinkodara: false });
  }

  function isaugotiPasirinkima() {
    isaugoti(prefs);
    setTvarkyti(false);
  }

  function isaugoti(p: CookiePreferences) {
    localStorage.setItem(
      "slapuku-pasirinkimas",
      JSON.stringify({ ...p, data: Date.now() })
    );
    setRodyti(false);
  }

  if (!rodyti) return null;

  return (
    <>
      <div
        role="dialog"
        aria-label="Slapukų nustatymai"
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6 animate-in slide-in-from-bottom"
      >
        <div className="max-w-7xl mx-auto">
          {!tvarkyti ? (
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="flex-1 text-sm text-gray-700">
                Naudojame slapukus, kad svetainė veiktų sklandžiai ir
                matuotume jos efektyvumą. Pasirinkite, kokius slapukus
                sutinkate naudoti.{" "}
                <Link
                  href="/slapuku-politika"
                  className="text-brand underline underline-offset-2 hover:no-underline"
                >
                  Slapukų politika
                </Link>
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                <button
                  onClick={priimtiVisus}
                  className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sutinku su visais
                </button>
                <button
                  onClick={priimtiButinius}
                  className="border border-brand text-brand hover:bg-brand hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Tik būtinieji
                </button>
                <button
                  onClick={() => setTvarkyti(true)}
                  className="text-brand text-sm font-medium underline underline-offset-2 hover:no-underline"
                >
                  Tvarkyti pasirinkimą
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Slapukų valdymas</h3>
                <button
                  onClick={() => setTvarkyti(false)}
                  aria-label="Uždaryti"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3 mb-4">
                <ToggleEilute
                  label="Būtinieji slapukai"
                  aprasymas="Reikalingi svetainės veikimui — negalima išjungti."
                  tikrinta={true}
                  uzblokuota
                  onChange={() => {}}
                />
                <ToggleEilute
                  label="Statistikos slapukai"
                  aprasymas="Padeda mums suprasti, kaip naudojama svetainė."
                  tikrinta={prefs.statistika}
                  onChange={(v) => setPrefs((p) => ({ ...p, statistika: v }))}
                />
                <ToggleEilute
                  label="Rinkodaros slapukai"
                  aprasymas="Naudojami tikslinei reklamai rodyti."
                  tikrinta={prefs.rinkodara}
                  onChange={(v) => setPrefs((p) => ({ ...p, rinkodara: v }))}
                />
              </div>
              <button
                onClick={isaugotiPasirinkima}
                className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Išsaugoti pasirinkimą
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ToggleEilute({
  label,
  aprasymas,
  tikrinta,
  uzblokuota = false,
  onChange,
}: {
  label: string;
  aprasymas: string;
  tikrinta: boolean;
  uzblokuota?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{aprasymas}</p>
      </div>
      <button
        role="switch"
        aria-checked={tikrinta}
        aria-label={label}
        disabled={uzblokuota}
        onClick={() => !uzblokuota && onChange(!tikrinta)}
        className={`shrink-0 w-11 h-6 rounded-full transition-colors ${
          tikrinta ? "bg-brand" : "bg-gray-200"
        } ${uzblokuota ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`block w-5 h-5 rounded-full bg-white shadow transition-transform mx-0.5 ${
            tikrinta ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

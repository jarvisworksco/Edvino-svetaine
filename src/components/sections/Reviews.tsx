"use client";

import { Star } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function Reviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-brand font-medium">
            ATSILIEPIMAI
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Ką sako mūsų <span className="text-brand">klientai</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.atsiliepimai.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.pazymiai)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "{review.tekstas}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">{review.vardas}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.data).toLocaleDateString("lt-LT", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

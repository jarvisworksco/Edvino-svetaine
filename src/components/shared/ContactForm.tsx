"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { kontaktoSchema, type KontaktoForma } from "@/lib/validators";
import { siteData } from "@/lib/site-data";

export function ContactForm() {
  const [busena, setBusena] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<KontaktoForma>({
    resolver: zodResolver(kontaktoSchema),
  });

  async function onSubmit(data: KontaktoForma) {
    if (data.website) return;
    setBusena("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setBusena("ok");
      reset();
    } catch {
      setBusena("error");
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-6">
        <Send className="w-5 h-5 text-brand" aria-hidden="true" />
        Parašykite mums
      </h3>

      {busena === "ok" && (
        <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 text-green-900 rounded-lg p-4">
          <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-sm font-medium">
            Ačiū! Susisieksime artimiausiu metu.
          </p>
        </div>
      )}

      {busena === "error" && (
        <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-900 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-sm font-medium">
            Klaida siunčiant žinutę. Bandykite dar kartą arba skambinkite.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Honeypot */}
        <input
          type="text"
          {...register("website")}
          className="hidden"
          tabIndex={-1}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="vardas"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Vardas ir pavardė <span className="text-red-500">*</span>
            </label>
            <input
              id="vardas"
              type="text"
              autoComplete="name"
              {...register("vardas")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              placeholder="Jonas Jonaitis"
            />
            {errors.vardas && (
              <p className="mt-1 text-xs text-red-600">{errors.vardas.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              El. paštas <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              placeholder="jonas@example.lt"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="telefonas"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Telefono numeris <span className="text-red-500">*</span>
            </label>
            <input
              id="telefonas"
              type="tel"
              autoComplete="tel"
              {...register("telefonas")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              placeholder="+370 XXX XXXXX"
            />
            {errors.telefonas && (
              <p className="mt-1 text-xs text-red-600">
                {errors.telefonas.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="imone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Įmonės pavadinimas{" "}
              <span className="text-gray-400 text-xs">(neprivaloma)</span>
            </label>
            <input
              id="imone"
              type="text"
              autoComplete="organization"
              {...register("imone")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              placeholder="UAB Pavyzdys"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="paslauga"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Dominančios paslaugos{" "}
            <span className="text-gray-400 text-xs">(neprivaloma)</span>
          </label>
          <select
            id="paslauga"
            {...register("paslauga")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none bg-white"
          >
            <option value="">— Pasirinkite paslaugą —</option>
            {siteData.paslaugos.map((p) => (
              <option key={p.slug} value={p.kategorija}>
                {p.kategorija}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="zinute"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Žinutė <span className="text-red-500">*</span>
          </label>
          <textarea
            id="zinute"
            rows={4}
            {...register("zinute")}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none resize-none"
            placeholder="Aprašykite savo poreikį ar užduotį..."
          />
          {errors.zinute && (
            <p className="mt-1 text-xs text-red-600">{errors.zinute.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={busena === "sending"}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-md font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {busena === "sending" ? (
            "Siunčiama..."
          ) : (
            <>
              Siųsti žinutę
              <Send className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, ArrowRight } from "lucide-react";
import {
  Wrench,
  Settings,
  Shield,
  Star,
  Zap,
  MapPin,
  TreePine,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

const ikonuZemelapas: Record<string, LucideIcon> = {
  Wrench,
  Settings,
  Shield,
  Star,
  Zap,
  MapPin,
  TreePine,
  Stethoscope,
};

interface ServiceCardProps {
  index: number;
  kategorija: string;
  slug: string;
  ikona: string;
  foto: string;
  punktai: readonly string[];
}

export function ServiceCard({
  index,
  kategorija,
  slug,
  ikona,
  foto,
  punktai,
}: ServiceCardProps) {
  const Icon = ikonuZemelapas[ikona] ?? Wrench;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
    >
      <div className="relative h-56">
        <Image
          src={foto}
          alt={kategorija}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute bottom-3 left-3 bg-brand text-white text-xs uppercase tracking-wider px-3 py-1 rounded font-medium">
          {String(index + 1).padStart(2, "0")} / {kategorija.split(" ")[0]}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-brand-tint p-2 rounded-lg shrink-0">
            <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 leading-snug">
            {kategorija}
          </h3>
        </div>
        <ul className="space-y-2 mb-6">
          {punktai.map((punktas, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle
                className="w-4 h-4 text-brand-light mt-0.5 shrink-0"
                aria-hidden="true"
              />
              {punktas}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <a
            href="#kontaktai"
            className="flex-1 flex items-center justify-center gap-1 bg-brand hover:bg-brand-dark text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            Užsakyti paslaugą
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <Link
            href={`/paslaugos/${slug}`}
            className="flex items-center gap-1 border border-brand text-brand hover:bg-brand hover:text-white px-4 py-2.5 rounded-md text-sm font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Plačiau
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

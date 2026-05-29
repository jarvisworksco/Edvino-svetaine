"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center mb-16"
    >
      <span
        className={`text-xs uppercase tracking-[0.2em] font-medium ${
          light ? "text-cream/80" : "text-brand-light"
        }`}
      >
        {label}
      </span>
      <h2
        className={`mt-3 text-3xl md:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/75" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

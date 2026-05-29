import {
  ShieldCheck,
  Clock,
  MapPin,
  Wrench,
  Award,
  Star,
  type LucideIcon,
} from "lucide-react";

const ikonuZemelapas: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  MapPin,
  Wrench,
  Award,
  Star,
};

interface StatCardProps {
  title: string;
  desc: string;
  ikona: string;
}

export function StatCard({ title, desc, ikona }: StatCardProps) {
  const Icon = ikonuZemelapas[ikona] ?? ShieldCheck;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-brand" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

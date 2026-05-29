import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { siteData } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteData.verslosPavadinimas} — ${siteData.veiklosSritis}`,
    template: `%s | ${siteData.verslosPavadinimas}`,
  },
  description: siteData.trumpasApibudinimas,
  metadataBase: new URL(`https://${siteData.domenas}`),
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: `https://${siteData.domenas}`,
    siteName: siteData.verslosPavadinimas,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteData.verslosPavadinimas,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "LT",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteData.verslosPavadinimas,
  description: siteData.trumpasApibudinimas,
  telephone: siteData.kontaktai.telefonas,
  email: siteData.kontaktai.elPastas,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteData.kontaktai.adresas,
    addressCountry: "LT",
  },
  url: `https://${siteData.domenas}`,
  openingHours: siteData.kontaktai.darboLaikas,
  sameAs: [
    siteData.socialiniai.facebookUrl,
    siteData.socialiniai.instagramUrl,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main id="pagrindinis-turinys" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

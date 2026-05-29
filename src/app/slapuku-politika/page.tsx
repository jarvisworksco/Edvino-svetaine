import type { Metadata } from "next";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Slapukų politika",
  description: `${siteData.verslosPavadinimas} slapukų (cookies) naudojimo politika.`,
};

export default function SlapukuPolitikaPuslapis() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
        <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium not-prose">
          TEISINĖ INFORMACIJA
        </span>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">
          Slapukų politika
        </h1>

        <h2>Kas yra slapukai</h2>
        <p>
          Slapukai (angl. cookies) — tai nedideli tekstiniai failai, kurie
          saugomi jūsų įrenginyje, kai lankotės svetainėje. Jie leidžia
          svetainei atsiminti jūsų nuostatas ir pagerina naudojimosi patirtį.
        </p>

        <h2>Kokius slapukus naudojame</h2>

        <h3>Būtinieji slapukai</h3>
        <p>
          Šie slapukai yra būtini tinkamam svetainės veikimui. Jie nerenka
          asmeninės informacijos ir negali būti išjungti.
        </p>
        <ul>
          <li>
            <strong>slapuku-pasirinkimas</strong> — saugo jūsų slapukų
            sutikimą. Galioja 12 mėnesių.
          </li>
        </ul>

        <h3>Statistikos slapukai</h3>
        <p>
          Padeda mums suprasti, kaip lankytojai naudojasi svetaine, leisdami
          mums gerinti jos turinį ir funkcionalumą.
        </p>

        <h3>Rinkodaros slapukai</h3>
        <p>
          Naudojami tinklinei reklamai rodyti ir lankytojų srauto iš reklamos
          kampanijų sekimui.
        </p>

        <h2>Kaip valdyti slapukus</h2>
        <p>
          Galite keisti slapukų nustatymus bet kuriuo metu paspausdami
          mygtuką „Tvarkyti slapukus" arba per naršyklės nustatymus. Atkreipkite
          dėmesį, kad išjungę tam tikrus slapukus, kai kurios svetainės
          funkcijos gali neveikti tinkamai.
        </p>

        <h2>Susisiekite</h2>
        <p>
          Turite klausimų apie mūsų slapukų naudojimą? Rašykite:{" "}
          <a href={`mailto:${siteData.kontaktai.elPastas}`}>
            {siteData.kontaktai.elPastas}
          </a>
        </p>
      </div>
    </div>
  );
}

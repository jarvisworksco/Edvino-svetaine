import type { Metadata } from "next";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privatumo politika",
  description: `${siteData.verslosPavadinimas} privatumo politika.`,
};

export default function PrivatumoPoliikaPuslapis() {
  const metai = new Date().getFullYear();

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
        <span className="text-xs uppercase tracking-[0.2em] text-brand-light font-medium not-prose">
          TEISINĖ INFORMACIJA
        </span>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">
          Privatumo politika
        </h1>
        <p className="text-sm text-gray-500">
          Atnaujinta: {metai}-01-01
        </p>

        <h2>1. Kas mes esame</h2>
        <p>
          {siteData.verslosPavadinimas} (įmonės kodas {siteData.kontaktai.imonesKodas}
          , adresas: {siteData.kontaktai.adresas}) yra šios svetainės valdytojas ir
          jūsų asmens duomenų tvarkytojas.
        </p>

        <h2>2. Kokie duomenys renkami</h2>
        <p>
          Kai pildote kontaktų formą, renkame: vardą ir pavardę, el. pašto adresą,
          telefono numerį, pasirinktą paslaugą ir jūsų žinutės turinį. Šie duomenys
          naudojami tik jūsų užklausai apdoroti.
        </p>

        <h2>3. Kaip naudojame duomenis</h2>
        <ul>
          <li>Atsakyti į jūsų užklausas ir suteikti paslaugas</li>
          <li>Susisiekti dėl jūsų pateiktos užklausos</li>
          <li>Teisinio įsipareigojimo vykdymui</li>
        </ul>

        <h2>4. Duomenų saugojimas</h2>
        <p>
          Jūsų duomenis saugome ne ilgiau, nei reikia pirmiau nurodytiems
          tikslams pasiekti — paprastai ne ilgiau kaip 2 metus.
        </p>

        <h2>5. Jūsų teisės</h2>
        <p>
          Turite teisę prašyti susipažinti su savo duomenimis, juos ištaisyti,
          ištrinti arba apriboti tvarkymą. Dėl savo teisių įgyvendinimo kreipkitės
          el. paštu: {siteData.kontaktai.elPastas}
        </p>

        <h2>6. Kontaktai</h2>
        <p>
          Dėl bet kokių klausimų, susijusių su šia politika, rašykite:{" "}
          <a href={`mailto:${siteData.kontaktai.elPastas}`}>
            {siteData.kontaktai.elPastas}
          </a>
        </p>
      </div>
    </div>
  );
}

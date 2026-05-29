import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { siteData } from "@/lib/site-data";

export function Services() {
  return (
    <section id="paslaugos" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="PASLAUGOS"
          title={
            <>
              Visi sprendimai{" "}
              <span className="text-brand-light">vienoje vietoje</span>
            </>
          }
          subtitle={`Teikiame kokybiškas paslaugas ${siteData.aptarnavimoRegionas}. Kiekvienas projektas — individualus požiūris ir garantuotas rezultatas.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.paslaugos.map((paslauga, index) => (
            <ServiceCard
              key={paslauga.slug}
              index={index}
              kategorija={paslauga.kategorija}
              slug={paslauga.slug}
              ikona={paslauga.ikona}
              foto={paslauga.foto}
              punktai={paslauga.punktai}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { kaloDungar } from "@/app/destinations/data/kalo-dungar";

export default function KaloDungar() {
  return (
    <DestinationTemplate
      title={kaloDungar.title}
      image={kaloDungar.image}
      description={
        <div className="space-y-8">
          {kaloDungar.sections.map((s, idx) => {
            return (
              <SectionCard
                key={idx}
                title={s.heading}
              >
                {s.content && <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: s.content }} />}
                {s.list && (
                  <ul className="list-disc pl-5 space-y-2" dangerouslySetInnerHTML={{ __html: s.list.map((it) => `<li>${it}</li>`).join("") }} />
                )}
              </SectionCard>
            );
          })}
        </div>
      }
      facts={kaloDungar.facts}
      mapUrl={kaloDungar.mapUrl}
      gallery={kaloDungar.gallery}
    />
  );
}


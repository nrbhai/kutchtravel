"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { anjar } from "@/app/destinations/data/anjar";

export default function Anjar() {
  return (
    <DestinationTemplate
      title={anjar.title}
      image={anjar.image}
      description={
        <div className="space-y-8">
          {anjar.sections.map((s, idx) => {
            return (
              <SectionCard
                key={idx}
                title={s.heading}
                image={s.image}
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
      facts={anjar.facts}
      mapUrl={anjar.mapUrl}
      gallery={anjar.gallery}
    />
  );
}

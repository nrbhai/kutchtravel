"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { gandhidham } from "@/app/destinations/data/gandhidham";

export default function Gandhidham() {
  return (
    <DestinationTemplate
      title={gandhidham.title}
      image={gandhidham.image}
      description={
        <div className="space-y-8">
          {gandhidham.sections.map((s, idx) => {
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
      facts={gandhidham.facts}
      mapUrl={gandhidham.mapUrl}
      gallery={gandhidham.gallery}
    />
  );
}


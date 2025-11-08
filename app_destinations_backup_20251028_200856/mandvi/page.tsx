"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { mandvi } from "@/app/destinations/data/mandvi";

export default function Mandvi() {
  return (
    <DestinationTemplate
      title={mandvi.title}
      image={mandvi.image}
      description={
        <div className="space-y-8">
          {mandvi.sections.map((section, index) => (
            <SectionCard 
              key={index}
              title={section.heading}
            >
              {section.content && <p className="leading-relaxed">{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
            </SectionCard>
          ))}
        </div>
      }
      facts={mandvi.facts}
      mapUrl={mandvi.mapUrl}
      gallery={mandvi.gallery}
    />
  );
}
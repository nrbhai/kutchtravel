"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { mundra } from "@/app/destinations/data/mundra";

export default function Mundra() {
  return (
    <DestinationTemplate
      title={mundra.title}
      image={mundra.image}
      description={
        <div className="space-y-8">
          {mundra.sections.map((section, index) => (
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
      facts={mundra.facts}
      mapUrl={mundra.mapUrl}
      gallery={mundra.gallery}
    />
  );
}
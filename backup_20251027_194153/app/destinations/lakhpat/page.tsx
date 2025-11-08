"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { lakhpat } from "@/app/destinations/data/lakhpat";

export default function Lakhpat() {
  return (
    <DestinationTemplate
      title={lakhpat.title}
      image={lakhpat.image}
      description={
        <div className="space-y-8">
          {lakhpat.sections.map((section, index) => (
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
      facts={lakhpat.facts}
      mapUrl={lakhpat.mapUrl}
      gallery={lakhpat.gallery}
    />
  );
}

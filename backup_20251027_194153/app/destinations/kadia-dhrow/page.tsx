"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { kadiaDhrow } from "@/app/destinations/data/kadia-dhrow";

export default function KadiaDhrow() {
  return (
    <DestinationTemplate
      title={kadiaDhrow.title}
      image={kadiaDhrow.image}
      description={
        <div className="space-y-8">
          {kadiaDhrow.sections.map((section, index) => (
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
      facts={kadiaDhrow.facts}
      mapUrl={kadiaDhrow.mapUrl}
      gallery={kadiaDhrow.gallery}
    />
  );
}

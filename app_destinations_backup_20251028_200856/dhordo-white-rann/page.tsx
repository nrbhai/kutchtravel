"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { dhordo } from "@/app/destinations/data/dhordo";

export default function DhordoWhiteRann() {
  return (
    <DestinationTemplate
      title={dhordo.title}
      image={dhordo.image}
      description={
        <div className="space-y-8">
          {dhordo.sections.map((section, index) => (
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
      facts={dhordo.facts}
      mapUrl={dhordo.mapUrl}
      gallery={dhordo.gallery}
    />
  );
}

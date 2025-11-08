"use client";

import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { mataNaMadh } from "@/app/destinations/data/mata-na-madh";

export default function MataNaMadh() {
  return (
    <DestinationTemplate
      title={mataNaMadh.title}
      image={mataNaMadh.image}
      description={
        <div className="space-y-8">
          {mataNaMadh.sections.map((section, index) => (
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
      facts={mataNaMadh.facts}
      mapUrl={mataNaMadh.mapUrl}
      gallery={mataNaMadh.gallery}
    />
  );
}
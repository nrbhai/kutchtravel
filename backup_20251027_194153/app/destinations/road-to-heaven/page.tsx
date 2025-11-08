"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { roadToHeaven } from "@/app/destinations/data/road-to-heaven";

export default function RoadToHeaven() {
  return (
    <DestinationTemplate
      title={roadToHeaven.title}
      image={roadToHeaven.image}
      description={
        <div className="space-y-8">
          {roadToHeaven.sections.map((section, index) => (
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
      facts={roadToHeaven.facts}
      mapUrl={roadToHeaven.mapUrl}
      gallery={roadToHeaven.gallery}
    />
  );
}

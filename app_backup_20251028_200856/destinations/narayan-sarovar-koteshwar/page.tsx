"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";
import { narayanSarovarKoteshwar } from "@/app/destinations/data/narayan-sarovar-koteshwar";

export default function NarayanSarovarKoteshwar() {
  return (
    <DestinationTemplate
      title={narayanSarovarKoteshwar.title}
      image={narayanSarovarKoteshwar.image}
      description={
        <div className="space-y-8">
          {narayanSarovarKoteshwar.sections.map((section, index) => (
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
      facts={narayanSarovarKoteshwar.facts}
      mapUrl={narayanSarovarKoteshwar.mapUrl}
      gallery={narayanSarovarKoteshwar.gallery}
    />
  );
}

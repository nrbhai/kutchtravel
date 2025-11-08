"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";

export default function Ravalpir() {
  const data = {
    title: "Ravalpir Temple & Beach",
    image: "/images/places/ravalpir/main.jpg",
    sections: [
      {
        heading: "Overview",
        content: "The Ravalpir Temple, rebuilt in 1819, stands as a testament to Kutch's rich spiritual heritage. Located 15km from Mandvi, this sacred site along with its pristine beach offers visitors a unique blend of religious significance and natural beauty. The temple's historical reconstruction following the earthquake of 1819 showcases the resilience of local architectural traditions."
      },
      {
        heading: "Temple History",
        list: [
          "Originally built centuries ago and rebuilt in 1819",
          "Dedicated to Ravalpir, a revered local saint",
          "Significant reconstruction after the 1819 earthquake",
          "Important pilgrimage site for local communities",
          "Showcases traditional Kutchi temple architecture"
        ]
      },
      {
        heading: "Beach Features",
        list: [
          "Clean and serene beach setting",
          "Perfect for peaceful walks and meditation",
          "Beautiful views of the Arabian Sea",
          "Less crowded than main tourist beaches",
          "Natural coastal landscape"
        ]
      },
      {
        heading: "Visitor Information",
        list: [
          "Distance: 15 km from Mandvi town",
          "Temple Timings: 6 AM to 7 PM daily",
          "Best Time to Visit: October to March",
          "Local transport available from Mandvi",
          "Basic amenities available near temple"
        ]
      }
    ],
    facts: [
      "Historical temple rebuilt in 1819",
      "Combines religious heritage with coastal beauty",
      "Important spiritual site for locals",
      "Features traditional architectural elements",
      "Offers peaceful beach experience"
    ],
    mapUrl: "https://maps.google.com/?q=Ravalpir+Temple,+Mandvi"
  };

  return (
    <DestinationTemplate
      title={data.title}
      image={data.image}
      description={
        <div className="space-y-8">
          {data.sections.map((section, index) => (
            <SectionCard 
              key={index}
              title={section.heading}
            >
              {section.content && <p className="leading-relaxed">{section.content}</p>}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </SectionCard>
          ))}
        </div>
      }
      facts={data.facts}
      mapUrl={data.mapUrl}
    />
  );
}
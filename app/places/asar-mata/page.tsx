"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";

export default function AsarMata() {
  const data = {
    title: "Asar Mata Temple & Beach",
    image: "/images/places/asar-mata/main.jpg",
    sections: [
      {
        heading: "Overview",
        content: "The Asar Mata Temple and Beach, located 10-12km from Mandvi, is a serene spiritual destination that combines divine tranquility with coastal beauty. The temple, dedicated to Goddess Asar Mata, is an important religious site for the local community, while the adjacent beach offers a peaceful retreat away from the more crowded tourist spots."
      },
      {
        heading: "Temple Significance",
        list: [
          "Ancient temple dedicated to Goddess Asar Mata",
          "Important pilgrimage site for local communities",
          "Traditional Kutchi temple architecture",
          "Regular religious ceremonies and festivals",
          "Peaceful atmosphere for meditation and prayers"
        ]
      },
      {
        heading: "Beach Experience",
        list: [
          "Secluded and clean beach stretch",
          "Perfect for peaceful walks and meditation",
          "Beautiful sunset views over the Arabian Sea",
          "Natural coastal vegetation",
          "Ideal for photography and nature observation"
        ]
      },
      {
        heading: "Visitor Information",
        list: [
          "Distance: 10-12 km from Mandvi town",
          "Temple Timings: Sunrise to Sunset",
          "Best Time to Visit: October to March",
          "Transportation: Local transport available from Mandvi",
          "Basic facilities available near the temple"
        ]
      }
    ],
    facts: [
      "Ancient temple with historical significance",
      "Secluded beach location perfect for peace-seekers",
      "Important religious site for local devotees",
      "Combines spiritual and natural attractions",
      "Less crowded alternative to main Mandvi beach"
    ],
    mapUrl: "https://maps.google.com/?q=Asar+Mata+Temple,+Mandvi"
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
      gallery={[]}
    />
  );
}
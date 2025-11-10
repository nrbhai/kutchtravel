"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";

export default function ShyamjiKrishnavarma() {
  const data = {
    title: "Shyamji Krishna Varma Memorial",
    image: "/images/places/shyamji-krishnavarma/main.jpg",
    sections: [
      {
        heading: "Overview",
        content: "The Kranti Tirth is a magnificent memorial dedicated to Shyamji Krishna Varma, a prominent Indian independence activist, lawyer, and journalist. This modern architectural marvel serves as both a tribute to his life and a center for learning about India's independence movement. The memorial complex includes a replica of India House from London and various galleries showcasing the freedom struggle."
      },
      {
        heading: "Historical Significance",
        list: [
          "Dedicated to freedom fighter Shyamji Krishna Varma (1857-1930)",
          "Houses replicas of historical buildings from London",
          "Features exhibitions on India's independence movement",
          "Contains original artifacts and documents",
          "Showcases the life journey of Shyamji Krishna Varma"
        ]
      },
      {
        heading: "Memorial Features",
        list: [
          "Replica of India House that served as a hub for Indian revolutionaries in London",
          "Modern museum with interactive displays",
          "Memorial gallery with historical photographs",
          "Beautiful gardens and landscaping",
          "Educational center for students and researchers"
        ]
      },
      {
        heading: "Visitor Information",
        list: [
          "Location: 3 km from Mandvi town",
          "Opening Hours: 9 AM to 6 PM (Tuesday to Sunday)",
          "Entry: Free admission",
          "Guided tours available",
          "Photography permitted without flash"
        ]
      }
    ],
    facts: [
      "Modern memorial complex inaugurated in recent years",
      "Built to honor Shyamji Krishna Varma's contribution to India's freedom struggle",
      "Features architectural elements inspired by Indian and British designs",
      "Houses important historical documents and artifacts",
      "Popular educational destination for schools and colleges"
    ],
    mapUrl: "https://maps.google.com/?q=Shyamji+Krishna+Varma+Memorial,+Mandvi"
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
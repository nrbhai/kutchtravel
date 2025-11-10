"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";

export default function VijayVilasPalace() {
  const data = {
    title: "Vijay Vilas Palace",
    image: "/images/places/vijay-vilas-palace/main.jpg",
    sections: [
      {
        heading: "Overview",
        content: "The majestic Vijay Vilas Palace, built in 1920, stands as a stunning example of Rajput architecture by the Arabian Sea. This summer retreat of the Kutch royal family combines elements from Rajput, Mughal, and European styles, creating a unique architectural masterpiece. The palace, set amidst 450 acres of grounds, is not just a historical monument but also a popular filming location for numerous Bollywood movies."
      },
      {
        heading: "Architecture & Design",
        list: [
          "Intricate jali work and stone carvings throughout the palace",
          "Central high dome with exquisite craftsmanship",
          "Beautiful courtyards and balconies offering panoramic views",
          "Red and white sandstone construction with Rajput architectural elements",
          "Ornate windows and arches showcasing masterful stonework"
        ]
      },
      {
        heading: "Palace Attractions",
        list: [
          "Museum section displaying royal artifacts and memorabilia",
          "Private beach access with stunning views of the Arabian Sea",
          "Landscaped gardens perfect for photography",
          "Film shooting location for famous movies like 'Hum Dil De Chuke Sanam'",
          "Rooftop offering breathtaking sunset views"
        ]
      },
      {
        heading: "Visitor Information",
        list: [
          "Location: 8 km from Mandvi town",
          "Opening Hours: 9 AM to 6 PM daily",
          "Entry Fee: Nominal fee for palace entry and camera",
          "Best Time to Visit: October to March",
          "Guided tours available in multiple languages"
        ]
      }
    ],
    facts: [
      "Built in 1920 as a summer retreat for Maharao Sir Khengarji III",
      "Spread across 450 acres with a private beach",
      "Popular Bollywood filming location",
      "Combines Rajput, Mughal, and European architectural styles",
      "Features a museum section showcasing royal heritage"
    ],
    mapUrl: "https://maps.google.com/?q=Vijay+Vilas+Palace,+Mandvi"
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
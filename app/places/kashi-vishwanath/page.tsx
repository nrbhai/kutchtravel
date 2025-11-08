"use client";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";

export default function KashiVishwanath() {
  const data = {
    title: "Kashi Vishwanath Temple & Beach",
    image: "/images/places/kashi-vishwanath/main.jpg",
    sections: [
      {
        heading: "Overview",
        content: "Located 5km from Mandvi, the Kashi Vishwanath Temple and its adjacent beach offer a perfect blend of spirituality and serenity. The temple, dedicated to Lord Shiva, sits near a pristine stretch of coastline, creating a unique spiritual atmosphere by the Arabian Sea. The secluded beach provides a peaceful retreat for both devotees and nature lovers."
      },
      {
        heading: "Temple Details",
        list: [
          "Traditional temple architecture with local Kutchi elements",
          "Dedicated to Lord Shiva with daily rituals and prayers",
          "Peaceful meditation spaces with sea views",
          "Regular religious ceremonies and festivals",
          "Ancient spiritual significance in the region"
        ]
      },
      {
        heading: "Beach Highlights",
        list: [
          "Clean, secluded beach perfect for peaceful walks",
          "Beautiful sunset views over the Arabian Sea",
          "Safe swimming areas during low tide",
          "Natural bird watching opportunities",
          "Ideal spot for photography and meditation"
        ]
      },
      {
        heading: "Visitor Information",
        list: [
          "Distance: 5 km from Mandvi town",
          "Temple Timings: 6 AM to 8 PM daily",
          "Best Time to Visit: October to March",
          "Local transport available from Mandvi",
          "Basic amenities available near the temple"
        ]
      }
    ],
    facts: [
      "Combines religious significance with natural beauty",
      "One of the quieter beaches near Mandvi",
      "Important pilgrimage site for locals",
      "Features traditional Kutchi temple architecture",
      "Perfect for spiritual retreats and peaceful getaways"
    ],
    mapUrl: "https://maps.google.com/?q=Kashi+Vishwanath+Temple,+Mandvi"
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
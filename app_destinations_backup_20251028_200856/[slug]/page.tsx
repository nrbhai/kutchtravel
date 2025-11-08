"use client";

import { useParams } from "next/navigation";
import DestinationTemplate from "@/app/components/DestinationTemplate";
import { getDestinationBySlug } from "@/app/utils/getDestinationBySlug";

export default function DestinationPage() {
  const params = useParams<{ slug?: string }>();
  const slug = params.slug ?? "";
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <main className="min-h-screen flex items-center justify-center text-purple-100">
        <p>Destination not found.</p>
      </main>
    );
  }

  const description = (
    <div className="space-y-4">
      {destination.sections?.map((section, index) => (
        <div key={index} className="p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          {section.content && <p>{section.content}</p>}
          {section.list && (
            <ul className="list-disc pl-5">
              {section.list.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <DestinationTemplate
      title={destination.title}
      description={description}
      image={destination.image}
      facts={destination.facts}
      mapUrl={destination.mapUrl}
      gallery={destination.gallery}
    />
  );
}

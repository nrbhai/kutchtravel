import DestinationTemplate from "@/app/components/DestinationTemplate";
import { anjar } from "@/app/destinations/data/anjar";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${anjar.title} - Historic Town of Kutch`,
  description: 'Explore Anjar, the oldest town of Kutch. Famous for the legend of Jesal-Toral, historic architecture, and traditional metal crafts.',
};

export default function Anjar() {
  return (
    <DestinationTemplate
      title={anjar.title}
      image={anjar.image}
      description={anjar.sections[1].content || ""}
      sections={anjar.sections}
      facts={anjar.facts}
      mapUrl={anjar.mapUrl}
      gallery={anjar.gallery}
    />
  );
}

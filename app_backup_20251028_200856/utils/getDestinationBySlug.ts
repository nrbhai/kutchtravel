import { DESTINATIONS } from "@/app/destinations/data";

export function getDestinationBySlug(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}

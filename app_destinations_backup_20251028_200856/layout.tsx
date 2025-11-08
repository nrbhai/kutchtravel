import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations in Kutch | Discover Kutch",
  description: "Explore the best destinations in Kutch — beaches, salt deserts, temples, and heritage towns."
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
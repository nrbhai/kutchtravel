import Link from "next/link";
import Image from "next/image";
import { DESTINATIONS } from "@/data/destinations";

export const metadata = {
  title: "Destinations in Kutch | Discover Kutch",
  description: "Explore the best destinations in Kutch — beaches, salt deserts, temples, and heritage towns."
};

export default function DestinationsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-7xl font-bold text-center mb-10">Explore Kutch</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {DESTINATIONS.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="group bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src={d.heroImage}
                alt={d.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-xl">{d.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{d.excerpt}</p>
              <span className="inline-block mt-3 text-indigo-700 font-medium">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

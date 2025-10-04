import { DESTINATIONS } from "@/data/destinations";
import Image from "next/image";

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export default function DestinationDetail({ params }: { params: { slug: string } }) {
  const dest = DESTINATIONS.find((d) => d.slug === params.slug);
  if (!dest) return <main className="p-8">Destination not found.</main>;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{dest.title}</h1>
      <Image
        src={dest.heroImage}
        alt={dest.title}
        width={1600}
        height={900}
        className="rounded-lg mb-8 object-cover"
      />
      <article
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: dest.content }}
      />
      <section className="mt-8 bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
        <h3 className="font-semibold text-xl mb-2">Travel Tips</h3>
        <ul className="list-disc ml-6 space-y-1">
          {dest.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          Best time to visit: <strong>{dest.bestTime}</strong>
        </p>
        <a
          href="/plan"
          className="inline-block mt-4 px-4 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800"
        >
          Book Nearby Stay
        </a>
      </section>
    </main>
  );
}

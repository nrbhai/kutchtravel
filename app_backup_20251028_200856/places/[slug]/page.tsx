import { getPlaceBySlug, places } from '../data';
import { notFound } from 'next/navigation';
import PlacePageClient from './PlacePageClient';

interface PlacePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);

  if (!place) {
    notFound();
  }

  return <PlacePageClient place={place} />;
}
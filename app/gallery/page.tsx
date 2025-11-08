import GalleryPageClient from './GalleryPageClient';

export const revalidate = 60; // revalidate the page every minute

export default function GalleryPage() {
  return <GalleryPageClient />;
}
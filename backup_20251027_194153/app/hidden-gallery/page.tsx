import HiddenGalleryPageClient from './HiddenGalleryPageClient';

export const revalidate = 60; // revalidate the page every minute

export default function HiddenGalleryPage() {
  return <HiddenGalleryPageClient />;
}
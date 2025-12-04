export interface Place {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  location: string;
  distanceFromBhuj?: string;
  distanceFromMandvi?: string;
  coordinates?: string;
  mapUrl?: string;
  directMapUrl?: string;
  significance: string;
  bestTimeToVisit: string;
  howToReach: string;
  parentDestination: string; // Required - the main destination this place belongs to
  gallery: Array<{
    src: string;
    caption: string;
  }>;
}

// Import all place data
import { dhrangMekanDada } from './dhrang-mekan-dada';
import { abjibapaChhatardi } from './abjibapa-chhatardi';
import { rudramataDam } from './rudramata-dam';
import { gangeshwarMahadev } from './gangeshwar-mahadev';
import { vandeMataram } from './vande-mataram-memorial';
import { jadura } from './jadura';
import { hanumanTekri } from './hanuman-tekri';
import { kashiVishwanath } from './kashi-vishwanath';
import { asarMata } from './asar-mata';
import { ravalpir } from './ravalpir';
import { jinalaya72 } from './72-jinalaya';

export const places: Place[] = [
  dhrangMekanDada,
  abjibapaChhatardi,
  rudramataDam,
  gangeshwarMahadev,
  vandeMataram,
  jadura,
  hanumanTekri,
  kashiVishwanath,
  asarMata,
  ravalpir,
  jinalaya72
];

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find(place => place.slug === slug);
}

export {
  dhrangMekanDada,
  abjibapaChhatardi,
  rudramataDam,
  gangeshwarMahadev,
  vandeMataram,
  jadura,
  hanumanTekri,
  kashiVishwanath,
  asarMata,
  ravalpir,
  jinalaya72
};
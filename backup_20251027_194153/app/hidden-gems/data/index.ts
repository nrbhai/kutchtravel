/**
 * Shared type for all hidden gems destinations.
 * 
 * Hidden gems are lesser-known, off-the-beaten-path destinations
 * perfect for adventurous travelers and explorers.
 */
export type HiddenGem = {
  slug: string;
  title: string;
  image: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expert';
  type: 'Nature' | 'Heritage' | 'Adventure' | 'Culture' | 'Wildlife';
  discoveryLevel: 'Secret' | 'Local Favorite' | 'Emerging' | 'Explorer';
  sections: Array<{
    heading: string;
    color: string;
    border: string;
    content?: string;
    list?: string[];
  }>;
  facts: string[];
  mapUrl: string;
  gallery: Array<{ src: string; caption: string }>;
  coordinates?: { lat: number; lng: number };
  bestTime?: string;
  warnings?: string[];
};
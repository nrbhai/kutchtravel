
/**
 * Shared type for all destinations.
 *
 * If you add new fields to any destination data file, update this type and ensure all destination objects conform.
 *
 * Example usage:
 *   import type { Destination } from "./index";
 *   export const myDestination: Destination = { ... };
 */
export type Destination = {
  slug: string;
  title: string;
  image: string;
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
};

import { mandvi } from "./mandvi";
import { bhuj } from "./bhuj";
import { dhordo } from "./dhordo";
import { kaloDungar } from "./kalo-dungar";
import { anjar } from "./anjar";
import { gandhidham } from "./gandhidham";
import { mundra } from "./mundra";
import { lakhpat } from "./lakhpat";
import { mataNaMadh } from "./mata-na-madh";
import { kadiaDhrow } from "./kadia-dhrow";
import { narayanSarovarKoteshwar } from "./narayan-sarovar-koteshwar";
import { roadToHeaven } from "./road-to-heaven";

// All destination data must conform to the Destination type above.
export const DESTINATIONS: Destination[] = [
  mandvi,
  bhuj,
  dhordo,
  kaloDungar,
  anjar,
  gandhidham,
  mundra,
  lakhpat,
  mataNaMadh,
  kadiaDhrow,
  narayanSarovarKoteshwar,
  roadToHeaven
];

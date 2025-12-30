"use client";

import React from "react";
import GoldenTemplate from "@/app/components/GoldenTemplate";
import type { Destination } from "@/app/destinations/data";

type Section = {
  heading: string;
  content?: string;
  list?: string[];
  color?: string;
  border?: string;
  image?: {
    src: string;
    alt: string;
  };
};

type Props = {
  title: string;
  description?: React.ReactNode;
  sections?: Section[];
  image: string;
  facts: string[];
  mapUrl: string;
  variant?: string;
  gallery: {
    src: string;
    caption: string;
  }[];
  // Optional data prop to pass full object if available
  data?: Destination; 
};

export default function DestinationTemplate(props: Props) {
  // If full data object is provided, use it
  if (props.data) {
    return <GoldenTemplate data={props.data} />;
  }

  // Otherwise, construct Destination object from props
  // We explicitly map the props to match the Destination interface
  // Fallback for slug: simple kebab-case of title
  const slug = props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const destinationData: Destination = {
    slug,
    title: props.title,
    image: props.image,
    // If sections are provided, use them. If not, wrap description in a section if it exists (string only)
    sections: props.sections || (typeof props.description === 'string' ? [{ heading: "Overview", content: props.description }] : []),
    facts: props.facts || [],
    mapUrl: props.mapUrl,
    gallery: props.gallery
  };

  return <GoldenTemplate data={destinationData} />;
}
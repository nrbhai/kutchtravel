"use client";
import HiddenGemTemplate from "@/app/components/HiddenGemTemplate";
import { kotayTemple } from "../data/kotay-temple";

export default function KotayTemplePage() {
  return <HiddenGemTemplate gem={kotayTemple} />;
}
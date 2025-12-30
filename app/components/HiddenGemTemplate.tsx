"use client";

import React from "react";
import GoldenTemplate from "@/app/components/GoldenTemplate";
import type { HiddenGem } from "@/app/hidden-gems/data";

type HiddenGemProps = {
  gem: HiddenGem;
};

export default function HiddenGemTemplate({ gem }: HiddenGemProps) {
  return <GoldenTemplate data={gem} />;
}

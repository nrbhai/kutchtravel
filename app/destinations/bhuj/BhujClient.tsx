"use client";

import React from "react";
import GoldenTemplate from "@/app/components/GoldenTemplate";
import type { Destination } from "@/app/destinations/data";

export default function BhujClient({ data }: { data: Destination }) {
  return <GoldenTemplate data={data} />;
}

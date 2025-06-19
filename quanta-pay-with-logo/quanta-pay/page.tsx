"use client";

import Image from "next/image";
import { TipsDashboard } from "@/components/tips-dashboard";

export default function TipsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Quanta Pay Logo" width={120} height={40} />
        <h1 className="text-3xl font-bold">Money-Saving Tips & Guides</h1>
      </div>
      <p className="text-muted-foreground">
        Discover practical strategies to reduce your expenses and improve your financial habits.
      </p>
      <TipsDashboard />
    </div>
  );
}
import { notFound } from "next/navigation";
import { getDevelopmentSelectorData } from "@/lib/data/repository";
import { UnitSelectorClient } from "@/components/unit-selector/UnitSelectorClient";

export default async function SelectUnitPage() {
  const data = await getDevelopmentSelectorData("luxor-tower");

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-luxor-primary px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-wider text-luxor-gold mb-1">
          Luxor Prime Realty
        </p>
        <h1 className="text-3xl font-bold text-white mb-2">{data.name}</h1>
        <p className="text-luxor-muted mb-8">Select your floor and unit below</p>
        <UnitSelectorClient initialFloors={data.floors} />
      </div>
    </main>
  );
}

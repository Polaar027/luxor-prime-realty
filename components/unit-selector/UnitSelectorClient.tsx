"use client";

import { useEffect } from "react";
import { useUnitSelectorStore } from "@/lib/stores/unitSelectorStore";
import { FloorSelector } from "./FloorSelector";
import { FloorPlanView } from "./FloorPlanView";
import { UnitDetailsPanel } from "./UnitDetailsPanel";
import type { FloorDTO } from "@/lib/types";

export function UnitSelectorClient({ initialFloors }: { initialFloors: FloorDTO[] }) {
  const setFloors = useUnitSelectorStore((s) => s.setFloors);

  useEffect(() => {
    setFloors(initialFloors);
  }, [initialFloors, setFloors]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
      <FloorSelector />
      <FloorPlanView />
      <UnitDetailsPanel />
    </div>
  );
}

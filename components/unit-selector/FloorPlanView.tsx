"use client";

import { useUnitSelectorStore } from "@/lib/stores/unitSelectorStore";
import { UnitCell } from "./UnitCell";
import { LegendBar } from "./LegendBar";
import { motion, AnimatePresence } from "framer-motion";

export function FloorPlanView() {
  const { floors, activeFloorId, selectUnit, selectedUnit } = useUnitSelectorStore();
  const activeFloor = floors.find((f) => f.id === activeFloorId);

  if (!activeFloor) {
    return (
      <div className="flex items-center justify-center h-[500px] text-luxor-muted">
        Select a floor to view available units
      </div>
    );
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFloor.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-luxor-secondary"
        >
          {activeFloor.units.map((unit) => (
            <UnitCell
              key={unit.id}
              unit={unit}
              isSelected={selectedUnit?.id === unit.id}
              onClick={() => selectUnit(unit)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <LegendBar />
    </div>
  );
}

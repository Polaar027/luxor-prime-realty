"use client";

import { motion } from "framer-motion";
import { useUnitSelectorStore } from "@/lib/stores/unitSelectorStore";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

export function FloorSelector() {
  const { floors, activeFloorId, setActiveFloor } = useUnitSelectorStore();

  return (
    <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2">
      <div className="flex items-center gap-2 mb-3 text-luxor-gold">
        <Building2 size={18} />
        <span className="text-sm font-medium uppercase tracking-wider">Select floor</span>
      </div>

      {floors
        .slice()
        .reverse()
        .map((floor) => {
          const available = floor.units.filter((u) => u.status === "AVAILABLE").length;
          const isActive = floor.id === activeFloorId;

          return (
            <motion.button
              key={floor.id}
              onClick={() => setActiveFloor(floor.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative flex items-center justify-between px-4 py-3 rounded-lg border transition-colors text-left",
                isActive
                  ? "bg-luxor-gold/10 border-luxor-gold text-white"
                  : "bg-luxor-secondary/60 border-white/5 text-luxor-gray hover:border-luxor-gold/40"
              )}
            >
              <div>
                <p className="font-semibold">
                  Floor {floor.floorNumber}
                  {floor.label && (
                    <span className="ml-2 text-xs text-luxor-gold">{floor.label}</span>
                  )}
                </p>
                <p className="text-xs text-luxor-muted">
                  {available} of {floor.units.length} available
                </p>
              </div>

              {isActive && (
                <motion.div
                  layoutId="active-floor-indicator"
                  className="absolute left-0 top-0 h-full w-1 bg-luxor-gold rounded-r"
                />
              )}
            </motion.button>
          );
        })}
    </div>
  );
}

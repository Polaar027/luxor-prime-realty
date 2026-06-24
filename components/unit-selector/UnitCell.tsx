"use client";

import { motion } from "framer-motion";
import type { UnitDTO } from "@/lib/types";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<UnitDTO["status"], string> = {
  AVAILABLE: "bg-emerald-500/80 hover:bg-emerald-400 border-emerald-300 cursor-pointer",
  RESERVED: "bg-amber-500/80 border-amber-300 cursor-pointer",
  SOLD: "bg-rose-600/70 border-rose-400 cursor-not-allowed opacity-70",
};

interface UnitCellProps {
  unit: UnitDTO;
  isSelected: boolean;
  onClick: () => void;
}

export function UnitCell({ unit, isSelected, onClick }: UnitCellProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={unit.status === "SOLD"}
      style={{ left: `${unit.positionX}%`, top: `${unit.positionY}%` }}
      whileHover={unit.status !== "SOLD" ? { scale: 1.15 } : undefined}
      whileTap={unit.status !== "SOLD" ? { scale: 0.95 } : undefined}
      className={cn(
        "absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-md border-2 shadow-lg flex items-center justify-center text-[10px] font-bold text-white transition-all",
        STATUS_STYLES[unit.status],
        isSelected && "ring-4 ring-luxor-gold ring-offset-2 ring-offset-luxor-primary scale-110"
      )}
      title={`Unit ${unit.unitNumber} — ${unit.status}`}
    >
      {unit.unitNumber}
    </motion.button>
  );
}

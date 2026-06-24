"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useUnitSelectorStore } from "@/lib/stores/unitSelectorStore";
import { Maximize2, BedDouble, Bath, Eye, X } from "lucide-react";
import { useState } from "react";
import { RequestInfoModal } from "./RequestInfoModal";

const STATUS_LABEL: Record<string, string> = {
  AVAILABLE: "Available",
  RESERVED: "Reserved",
  SOLD: "Sold",
};

const VIEW_LABEL: Record<string, string> = {
  CITY: "City",
  OCEAN: "Ocean",
  GARDEN: "Garden",
  MOUNTAIN: "Mountain",
  POOL: "Pool",
  PARTIAL_OCEAN: "Partial ocean",
};

function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function UnitDetailsPanel() {
  const { selectedUnit, isDetailsPanelOpen, closeDetailsPanel } = useUnitSelectorStore();
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <AnimatePresence>
      {isDetailsPanelOpen && selectedUnit && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-luxor-secondary border-l border-luxor-gold/20 z-50 p-6 overflow-y-auto"
        >
          <button
            onClick={closeDetailsPanel}
            className="absolute top-4 right-4 text-luxor-muted hover:text-white"
          >
            <X size={20} />
          </button>

          <p className="text-xs uppercase tracking-wider text-luxor-gold mb-1">
            {STATUS_LABEL[selectedUnit.status]}
          </p>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Unit {selectedUnit.unitNumber}
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Spec icon={<Maximize2 size={16} />} label="Area" value={`${selectedUnit.areaSqm} m²`} />
            <Spec icon={<BedDouble size={16} />} label="Bedrooms" value={`${selectedUnit.bedrooms}`} />
            <Spec icon={<Bath size={16} />} label="Bathrooms" value={`${selectedUnit.bathrooms}`} />
            <Spec
              icon={<Eye size={16} />}
              label="View"
              value={selectedUnit.view ? VIEW_LABEL[selectedUnit.view] : "—"}
            />
          </div>

          <div className="rounded-lg bg-luxor-primary border border-luxor-gold/20 p-4 mb-6">
            <p className="text-xs text-luxor-muted mb-1">Price</p>
            <p className="text-3xl font-bold text-luxor-gold">{formatUsd(selectedUnit.priceUsd)}</p>
          </div>

          {selectedUnit.status !== "SOLD" ? (
            <button
              onClick={() => setShowLeadModal(true)}
              className="w-full py-3 rounded-lg bg-luxor-gold text-luxor-primary font-semibold hover:bg-luxor-gold-light transition-colors"
            >
              Request information
            </button>
          ) : (
            <button
              disabled
              className="w-full py-3 rounded-lg bg-white/10 text-luxor-muted font-semibold cursor-not-allowed"
            >
              This unit has been sold
            </button>
          )}

          {showLeadModal && (
            <RequestInfoModal
              unitId={selectedUnit.id}
              unitNumber={selectedUnit.unitNumber}
              onClose={() => setShowLeadModal(false)}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 bg-white/5 rounded-lg p-3">
      <div className="flex items-center gap-2 text-luxor-gold">
        {icon}
        <span className="text-[10px] uppercase tracking-wide text-luxor-muted">{label}</span>
      </div>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}

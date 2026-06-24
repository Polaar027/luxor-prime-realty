"use client";

import { create } from "zustand";
import type { UnitDTO, FloorDTO } from "@/lib/types";

interface UnitSelectorState {
  floors: FloorDTO[];
  activeFloorId: string | null;
  selectedUnit: UnitDTO | null;
  isDetailsPanelOpen: boolean;

  setFloors: (floors: FloorDTO[]) => void;
  setActiveFloor: (floorId: string) => void;
  selectUnit: (unit: UnitDTO) => void;
  closeDetailsPanel: () => void;
  patchUnitStatus: (unitId: string, status: UnitDTO["status"]) => void;
}

export const useUnitSelectorStore = create<UnitSelectorState>((set) => ({
  floors: [],
  activeFloorId: null,
  selectedUnit: null,
  isDetailsPanelOpen: false,

  setFloors: (floors) => set({ floors, activeFloorId: floors[0]?.id ?? null }),

  setActiveFloor: (floorId) =>
    set({ activeFloorId: floorId, selectedUnit: null, isDetailsPanelOpen: false }),

  selectUnit: (unit) => set({ selectedUnit: unit, isDetailsPanelOpen: true }),

  closeDetailsPanel: () => set({ isDetailsPanelOpen: false, selectedUnit: null }),

  patchUnitStatus: (unitId, status) =>
    set((state) => ({
      floors: state.floors.map((floor) => ({
        ...floor,
        units: floor.units.map((u) => (u.id === unitId ? { ...u, status } : u)),
      })),
      selectedUnit:
        state.selectedUnit?.id === unitId
          ? { ...state.selectedUnit, status }
          : state.selectedUnit,
    })),
}));

export type UnitStatus = "AVAILABLE" | "RESERVED" | "SOLD";
export type UnitView = "CITY" | "OCEAN" | "GARDEN" | "MOUNTAIN" | "POOL" | "PARTIAL_OCEAN";
export type DevelopmentStatus = "PRE_LAUNCH" | "UNDER_CONSTRUCTION" | "READY_TO_MOVE" | "SOLD_OUT";

export interface UnitDTO {
  id: string;
  unitNumber: string;
  status: UnitStatus;
  areaSqm: number;
  bedrooms: number;
  bathrooms: number;
  hasBalcony: boolean;
  view: UnitView | null;
  priceUsd: number;
  positionX: number;
  positionY: number;
  floorPlanImageUrl: string | null;
}

export interface FloorDTO {
  id: string;
  floorNumber: number;
  label: string | null;
  floorPlanUrl: string | null;
  units: UnitDTO[];
}

export interface DevelopmentSelectorDTO {
  id: string;
  slug: string;
  name: string;
  startingPriceUsd: number;
  floors: FloorDTO[];
}

export interface DevelopmentSummaryDTO {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  city: string;
  status: DevelopmentStatus;
  startingPriceUsd: number;
  totalUnits: number;
  heroImageUrl: string;
}

export interface LeadInput {
  developmentId: string;
  unitId?: string | null;
  name: string;
  email: string;
  phone: string;
  countryCode?: string;
  message?: string;
  preferredCurrency?: string;
}

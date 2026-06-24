import { developmentsSeed, unitSelectorSeed } from "./seed-data";
import type { DevelopmentSelectorDTO, DevelopmentSummaryDTO, UnitDTO, LeadInput } from "@/lib/types";

// ── In-memory mutable store (resets on server restart) ──────────────────
// This stands in for the database during local preview. Every function
// below has the exact async signature it would have with Prisma, so
// swapping the body for `prisma.development.findUnique(...)` etc. is a
// contained change — nothing in components/ or app/ needs to know.

const db = structuredClone(unitSelectorSeed);
const leadsStore: Array<LeadInput & { id: string; createdAt: string }> = [];

export async function getAllDevelopments(): Promise<DevelopmentSummaryDTO[]> {
  return developmentsSeed;
}

export async function getDevelopmentSummary(slug: string): Promise<DevelopmentSummaryDTO | null> {
  return developmentsSeed.find((d) => d.slug === slug) ?? null;
}

export async function getDevelopmentSelectorData(
  slug: string
): Promise<DevelopmentSelectorDTO | null> {
  return db[slug] ?? null;
}

export async function getUnitById(slug: string, unitId: string): Promise<UnitDTO | null> {
  const development = db[slug];
  if (!development) return null;
  for (const floor of development.floors) {
    const unit = floor.units.find((u) => u.id === unitId);
    if (unit) return unit;
  }
  return null;
}

export async function updateUnitStatus(
  slug: string,
  unitId: string,
  status: UnitDTO["status"]
): Promise<UnitDTO | null> {
  const development = db[slug];
  if (!development) return null;
  for (const floor of development.floors) {
    const unit = floor.units.find((u) => u.id === unitId);
    if (unit) {
      unit.status = status;
      return unit;
    }
  }
  return null;
}

export async function createLead(input: LeadInput) {
  const lead = {
    ...input,
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  leadsStore.push(lead);
  return lead;
}

export async function getAllLeads() {
  return leadsStore;
}

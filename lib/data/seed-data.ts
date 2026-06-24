import type { DevelopmentSelectorDTO, DevelopmentSummaryDTO } from "@/lib/types";

export const developmentsSeed: DevelopmentSummaryDTO[] = [
  {
    id: "dev_luxor_tower",
    slug: "luxor-tower",
    name: "Luxor Tower",
    tagline: "Where the skyline begins",
    city: "Miami, FL",
    status: "UNDER_CONSTRUCTION",
    startingPriceUsd: 420000,
    totalUnits: 128,
    heroImageUrl: "/images/luxor-tower-hero.jpg",
  },
  {
    id: "dev_blue_diamond",
    slug: "blue-diamond-residence",
    name: "Blue Diamond Residence",
    tagline: "Oceanfront, redefined",
    city: "Miami, FL",
    status: "PRE_LAUNCH",
    startingPriceUsd: 680000,
    totalUnits: 96,
    heroImageUrl: "/images/blue-diamond-hero.jpg",
  },
];

export const unitSelectorSeed: Record<string, DevelopmentSelectorDTO> = {
  "luxor-tower": {
    id: "dev_luxor_tower",
    slug: "luxor-tower",
    name: "Luxor Tower",
    startingPriceUsd: 420000,
    floors: [
      {
        id: "floor_9",
        floorNumber: 9,
        label: null,
        floorPlanUrl: null,
        units: [
          { id: "u901", unitNumber: "901", status: "AVAILABLE", areaSqm: 160, bedrooms: 3, bathrooms: 2, hasBalcony: true, view: "CITY", priceUsd: 945000, positionX: 15, positionY: 25, floorPlanImageUrl: null },
          { id: "u902", unitNumber: "902", status: "AVAILABLE", areaSqm: 142, bedrooms: 2, bathrooms: 2, hasBalcony: false, view: "GARDEN", priceUsd: 750000, positionX: 38, positionY: 25, floorPlanImageUrl: null },
          { id: "u903", unitNumber: "903", status: "AVAILABLE", areaSqm: 160, bedrooms: 3, bathrooms: 2, hasBalcony: true, view: "CITY", priceUsd: 950000, positionX: 61, positionY: 25, floorPlanImageUrl: null },
          { id: "u904", unitNumber: "904", status: "RESERVED", areaSqm: 142, bedrooms: 2, bathrooms: 2, hasBalcony: false, view: "GARDEN", priceUsd: 755000, positionX: 84, positionY: 25, floorPlanImageUrl: null },
        ],
      },
      {
        id: "floor_10",
        floorNumber: 10,
        label: null,
        floorPlanUrl: null,
        units: [
          { id: "u1001", unitNumber: "1001", status: "AVAILABLE", areaSqm: 160, bedrooms: 3, bathrooms: 2, hasBalcony: true, view: "CITY", priceUsd: 960000, positionX: 15, positionY: 25, floorPlanImageUrl: null },
          { id: "u1002", unitNumber: "1002", status: "RESERVED", areaSqm: 142, bedrooms: 2, bathrooms: 2, hasBalcony: false, view: "GARDEN", priceUsd: 765000, positionX: 38, positionY: 25, floorPlanImageUrl: null },
          { id: "u1003", unitNumber: "1003", status: "SOLD", areaSqm: 160, bedrooms: 3, bathrooms: 2, hasBalcony: true, view: "CITY", priceUsd: 965000, positionX: 61, positionY: 25, floorPlanImageUrl: null },
          { id: "u1004", unitNumber: "1004", status: "AVAILABLE", areaSqm: 142, bedrooms: 2, bathrooms: 2, hasBalcony: false, view: "GARDEN", priceUsd: 770000, positionX: 84, positionY: 25, floorPlanImageUrl: null },
        ],
      },
      {
        id: "floor_11",
        floorNumber: 11,
        label: null,
        floorPlanUrl: null,
        units: [
          { id: "u1101", unitNumber: "1101", status: "AVAILABLE", areaSqm: 160, bedrooms: 3, bathrooms: 2, hasBalcony: true, view: "CITY", priceUsd: 980000, positionX: 15, positionY: 25, floorPlanImageUrl: null },
          { id: "u1102", unitNumber: "1102", status: "SOLD", areaSqm: 142, bedrooms: 2, bathrooms: 2, hasBalcony: false, view: "GARDEN", priceUsd: 780000, positionX: 38, positionY: 25, floorPlanImageUrl: null },
          { id: "u1103", unitNumber: "1103", status: "AVAILABLE", areaSqm: 160, bedrooms: 3, bathrooms: 2, hasBalcony: true, view: "CITY", priceUsd: 985000, positionX: 61, positionY: 25, floorPlanImageUrl: null },
          { id: "u1104", unitNumber: "1104", status: "AVAILABLE", areaSqm: 142, bedrooms: 2, bathrooms: 2, hasBalcony: false, view: "GARDEN", priceUsd: 790000, positionX: 84, positionY: 25, floorPlanImageUrl: null },
        ],
      },
      {
        id: "floor_12",
        floorNumber: 12,
        label: "Penthouse level",
        floorPlanUrl: null,
        units: [
          { id: "u1201", unitNumber: "1201", status: "AVAILABLE", areaSqm: 215, bedrooms: 4, bathrooms: 4, hasBalcony: true, view: "OCEAN", priceUsd: 1850000, positionX: 20, positionY: 30, floorPlanImageUrl: null },
          { id: "u1202", unitNumber: "1202", status: "RESERVED", areaSqm: 198, bedrooms: 3, bathrooms: 3, hasBalcony: true, view: "OCEAN", priceUsd: 1620000, positionX: 50, positionY: 30, floorPlanImageUrl: null },
          { id: "u1203", unitNumber: "1203", status: "AVAILABLE", areaSqm: 240, bedrooms: 4, bathrooms: 5, hasBalcony: true, view: "PARTIAL_OCEAN", priceUsd: 2100000, positionX: 80, positionY: 30, floorPlanImageUrl: null },
        ],
      },
    ],
  },
};

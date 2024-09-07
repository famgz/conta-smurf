import { basePaths } from '@/app/constants';

export enum Region {
  BRAZIL = 'brazil',
  NORTH_AMERICA = 'north-america',
  EUROPE_EAST = 'europe-east',
  EUROPE_WEST = 'europe-west',
  JAPAN = 'japan',
  KOREA = 'korea',
  LATAM_NORTH = 'latam-north',
  LATAM_SOUTH = 'latam-south',
  OCEANIA = 'oceania',
  TURKEY = 'turkey',
}

interface RegionDetails {
  label: string;
  iconImg: string;
  mapImg: string;
}

export const regions: Record<Region, RegionDetails> = {
  [Region.BRAZIL]: {
    label: 'Brazil',
    iconImg: `${basePaths.iconsPath}flag-${Region.BRAZIL}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.BRAZIL}.png`,
  },
  [Region.NORTH_AMERICA]: {
    label: 'North America',
    iconImg: `${basePaths.iconsPath}flag-${Region.NORTH_AMERICA}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.NORTH_AMERICA}.png`,
  },
  [Region.EUROPE_EAST]: {
    label: 'Europe Nordic & East',
    iconImg: `${basePaths.iconsPath}flag-${Region.EUROPE_EAST}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.EUROPE_EAST}.png`,
  },
  [Region.EUROPE_WEST]: {
    label: 'Europe West',
    iconImg: `${basePaths.iconsPath}flag-${Region.EUROPE_WEST}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.EUROPE_WEST}.png`,
  },
  [Region.JAPAN]: {
    label: 'Japan',
    iconImg: `${basePaths.iconsPath}flag-${Region.JAPAN}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.JAPAN}.png`,
  },
  [Region.KOREA]: {
    label: 'Korea',
    iconImg: `${basePaths.iconsPath}flag-${Region.KOREA}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.KOREA}.png`,
  },
  [Region.LATAM_NORTH]: {
    label: 'LATAM North',
    iconImg: `${basePaths.iconsPath}flag-${Region.LATAM_NORTH}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.LATAM_NORTH}.png`,
  },
  [Region.LATAM_SOUTH]: {
    label: 'LATAM South',
    iconImg: `${basePaths.iconsPath}flag-${Region.LATAM_SOUTH}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.LATAM_SOUTH}.png`,
  },
  [Region.OCEANIA]: {
    label: 'Oceania',
    iconImg: `${basePaths.iconsPath}flag-${Region.OCEANIA}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.OCEANIA}.png`,
  },
  [Region.TURKEY]: {
    label: 'Turkey',
    iconImg: `${basePaths.iconsPath}flag-${Region.TURKEY}.png`,
    mapImg: `${basePaths.iconsPath}map-${Region.TURKEY}.png`,
  },
};

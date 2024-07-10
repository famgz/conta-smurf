import { config } from '@/app/config';

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
    iconImg: `${config.iconsPath}flag-${Region.BRAZIL}.png`,
    mapImg: `${config.iconsPath}map-${Region.BRAZIL}.png`,
  },
  [Region.NORTH_AMERICA]: {
    label: 'North America',
    iconImg: `${config.iconsPath}flag-${Region.NORTH_AMERICA}.png`,
    mapImg: `${config.iconsPath}map-${Region.NORTH_AMERICA}.png`,
  },
  [Region.EUROPE_EAST]: {
    label: 'Europe Nordic & East',
    iconImg: `${config.iconsPath}flag-${Region.EUROPE_EAST}.png`,
    mapImg: `${config.iconsPath}map-${Region.EUROPE_EAST}.png`,
  },
  [Region.EUROPE_WEST]: {
    label: 'Europe West',
    iconImg: `${config.iconsPath}flag-${Region.EUROPE_WEST}.png`,
    mapImg: `${config.iconsPath}map-${Region.EUROPE_WEST}.png`,
  },
  [Region.JAPAN]: {
    label: 'Japan',
    iconImg: `${config.iconsPath}flag-${Region.JAPAN}.png`,
    mapImg: `${config.iconsPath}map-${Region.JAPAN}.png`,
  },
  [Region.KOREA]: {
    label: 'Korea',
    iconImg: `${config.iconsPath}flag-${Region.KOREA}.png`,
    mapImg: `${config.iconsPath}map-${Region.KOREA}.png`,
  },
  [Region.LATAM_NORTH]: {
    label: 'LATAM North',
    iconImg: `${config.iconsPath}flag-${Region.LATAM_NORTH}.png`,
    mapImg: `${config.iconsPath}map-${Region.LATAM_NORTH}.png`,
  },
  [Region.LATAM_SOUTH]: {
    label: 'LATAM South',
    iconImg: `${config.iconsPath}flag-${Region.LATAM_SOUTH}.png`,
    mapImg: `${config.iconsPath}map-${Region.LATAM_SOUTH}.png`,
  },
  [Region.OCEANIA]: {
    label: 'Oceania',
    iconImg: `${config.iconsPath}flag-${Region.OCEANIA}.png`,
    mapImg: `${config.iconsPath}map-${Region.OCEANIA}.png`,
  },
  [Region.TURKEY]: {
    label: 'Turkey',
    iconImg: `${config.iconsPath}flag-${Region.TURKEY}.png`,
    mapImg: `${config.iconsPath}map-${Region.TURKEY}.png`,
  },
};

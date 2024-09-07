import { basePaths } from '@/app/constants';

export enum Lane {
  AUTOFILL = 'autofill',
  BOTTOM = 'bottom',
  JUNGLE = 'jungle',
  MID = 'mid',
  SUPPORT = 'support',
  TOP = 'top',
}

interface LaneDetails {
  label: string;
  iconImgs: {
    default: string;
    bright: string;
  };
}

export const lanes: Record<Lane, LaneDetails> = {
  [Lane.AUTOFILL]: {
    label: 'Autofill',
    iconImgs: {
      default: `${basePaths.iconsPath}lane-${Lane.AUTOFILL}.png`,
      bright: `${basePaths.iconsPath}lane-${Lane.AUTOFILL}-bright.png`,
    },
  },
  [Lane.BOTTOM]: {
    label: 'Botlane',
    iconImgs: {
      default: `${basePaths.iconsPath}lane-${Lane.BOTTOM}.png`,
      bright: `${basePaths.iconsPath}lane-${Lane.BOTTOM}-bright.png`,
    },
  },
  [Lane.JUNGLE]: {
    label: 'Jungle',
    iconImgs: {
      default: `${basePaths.iconsPath}lane-${Lane.JUNGLE}.png`,
      bright: `${basePaths.iconsPath}lane-${Lane.JUNGLE}-bright.png`,
    },
  },
  [Lane.MID]: {
    label: 'Midlane',
    iconImgs: {
      default: `${basePaths.iconsPath}lane-${Lane.MID}.png`,
      bright: `${basePaths.iconsPath}lane-${Lane.MID}-bright.png`,
    },
  },
  [Lane.SUPPORT]: {
    label: 'Support',
    iconImgs: {
      default: `${basePaths.iconsPath}lane-${Lane.SUPPORT}.png`,
      bright: `${basePaths.iconsPath}lane-${Lane.SUPPORT}-bright.png`,
    },
  },
  [Lane.TOP]: {
    label: 'Toplane',
    iconImgs: {
      default: `${basePaths.iconsPath}lane-${Lane.TOP}.png`,
      bright: `${basePaths.iconsPath}lane-${Lane.TOP}-bright.png`,
    },
  },
};

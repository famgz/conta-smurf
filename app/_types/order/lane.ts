import { config } from '@/app/config';

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
      default: `${config.iconsPath}lane-${Lane.AUTOFILL}.png`,
      bright: `${config.iconsPath}lane-${Lane.AUTOFILL}-bright.png`,
    },
  },
  [Lane.BOTTOM]: {
    label: 'Botlane',
    iconImgs: {
      default: `${config.iconsPath}lane-${Lane.BOTTOM}.png`,
      bright: `${config.iconsPath}lane-${Lane.BOTTOM}-bright.png`,
    },
  },
  [Lane.JUNGLE]: {
    label: 'Jungle',
    iconImgs: {
      default: `${config.iconsPath}lane-${Lane.JUNGLE}.png`,
      bright: `${config.iconsPath}lane-${Lane.JUNGLE}-bright.png`,
    },
  },
  [Lane.MID]: {
    label: 'Midlane',
    iconImgs: {
      default: `${config.iconsPath}lane-${Lane.MID}.png`,
      bright: `${config.iconsPath}lane-${Lane.MID}-bright.png`,
    },
  },
  [Lane.SUPPORT]: {
    label: 'Support',
    iconImgs: {
      default: `${config.iconsPath}lane-${Lane.SUPPORT}.png`,
      bright: `${config.iconsPath}lane-${Lane.SUPPORT}-bright.png`,
    },
  },
  [Lane.TOP]: {
    label: 'Toplane',
    iconImgs: {
      default: `${config.iconsPath}lane-${Lane.TOP}.png`,
      bright: `${config.iconsPath}lane-${Lane.TOP}-bright.png`,
    },
  },
};

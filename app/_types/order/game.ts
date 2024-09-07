import { basePaths } from '@/app/constants';

export enum Game {
  LOL = 'lol',
  VALORANT = 'valorant',
}

interface GameDetails {
  label: string;
  iconImg: string;
  bgImg: string;
  titleImg: string;
}

export const games: Record<Game, GameDetails> = {
  [Game.LOL]: {
    label: 'League of Legends',
    iconImg: `${basePaths.iconsPath}${Game.LOL}.png`,
    bgImg: `${basePaths.imagesPath}register.jpg`,
    titleImg: `${basePaths.imagesPath}title-${Game.LOL}.png`,
  },
  [Game.VALORANT]: {
    label: 'Valorant',
    iconImg: `${basePaths.iconsPath}${Game.VALORANT}.png`,
    bgImg: `${basePaths.imagesPath}elojob-hero.jpg`,
    titleImg: `${basePaths.imagesPath}title-${Game.VALORANT}.png`,
  },
};

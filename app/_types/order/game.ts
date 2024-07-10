import { config } from '@/app/config';

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
    iconImg: `${config.iconsPath}${Game.LOL}.png`,
    bgImg: `${config.imagesPath}register.jpg`,
    titleImg: `${config.imagesPath}title-${Game.LOL}.png`,
  },
  [Game.VALORANT]: {
    label: 'Valorant',
    iconImg: `${config.iconsPath}${Game.VALORANT}.png`,
    bgImg: `${config.imagesPath}elojob-hero.jpg`,
    titleImg: `${config.imagesPath}title-${Game.VALORANT}.png`,
  },
};

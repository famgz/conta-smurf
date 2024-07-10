import { config } from '@/app/config';

export enum Rank {
  IRON = 'iron',
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
  EMERALD = 'emerald',
  DIAMOND = 'diamond',
  MASTER = 'master',
  GRANDMASTER = 'grandmaster',
}

interface RankDetails {
  label: string;
  iconImg: string;
}

export const ranks: Record<Rank, RankDetails> = {
  [Rank.IRON]: {
    label: 'Iron',
    iconImg: `${config.iconsPath}rank-${Rank.IRON}.png`,
  },
  [Rank.BRONZE]: {
    label: 'Bronze',
    iconImg: `${config.iconsPath}rank-${Rank.BRONZE}.png`,
  },
  [Rank.SILVER]: {
    label: 'Silver',
    iconImg: `${config.iconsPath}rank-${Rank.SILVER}.png`,
  },
  [Rank.GOLD]: {
    label: 'Gold',
    iconImg: `${config.iconsPath}rank-${Rank.GOLD}.png`,
  },
  [Rank.PLATINUM]: {
    label: 'Platinum',
    iconImg: `${config.iconsPath}rank-${Rank.PLATINUM}.png`,
  },
  [Rank.EMERALD]: {
    label: 'Emerald',
    iconImg: `${config.iconsPath}rank-${Rank.EMERALD}.png`,
  },
  [Rank.DIAMOND]: {
    label: 'Diamond',
    iconImg: `${config.iconsPath}rank-${Rank.DIAMOND}.png`,
  },
  [Rank.MASTER]: {
    label: 'Master',
    iconImg: `${config.iconsPath}rank-${Rank.MASTER}.png`,
  },
  [Rank.GRANDMASTER]: {
    label: 'Grandmaster',
    iconImg: `${config.iconsPath}rank-${Rank.GRANDMASTER}.png`,
  },
};

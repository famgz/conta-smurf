import { basePaths } from '@/app/constants';

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
    iconImg: `${basePaths.iconsPath}rank-${Rank.IRON}.png`,
  },
  [Rank.BRONZE]: {
    label: 'Bronze',
    iconImg: `${basePaths.iconsPath}rank-${Rank.BRONZE}.png`,
  },
  [Rank.SILVER]: {
    label: 'Silver',
    iconImg: `${basePaths.iconsPath}rank-${Rank.SILVER}.png`,
  },
  [Rank.GOLD]: {
    label: 'Gold',
    iconImg: `${basePaths.iconsPath}rank-${Rank.GOLD}.png`,
  },
  [Rank.PLATINUM]: {
    label: 'Platinum',
    iconImg: `${basePaths.iconsPath}rank-${Rank.PLATINUM}.png`,
  },
  [Rank.EMERALD]: {
    label: 'Emerald',
    iconImg: `${basePaths.iconsPath}rank-${Rank.EMERALD}.png`,
  },
  [Rank.DIAMOND]: {
    label: 'Diamond',
    iconImg: `${basePaths.iconsPath}rank-${Rank.DIAMOND}.png`,
  },
  [Rank.MASTER]: {
    label: 'Master',
    iconImg: `${basePaths.iconsPath}rank-${Rank.MASTER}.png`,
  },
  [Rank.GRANDMASTER]: {
    label: 'Grandmaster',
    iconImg: `${basePaths.iconsPath}rank-${Rank.GRANDMASTER}.png`,
  },
};

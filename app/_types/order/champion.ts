import { basePaths } from '@/app/constants';

export enum Champion {
  CHAMPION_1 = 'champion-1',
  CHAMPION_2 = 'champion-2',
  CHAMPION_3 = 'champion-3',
}

interface ChampionDetails {
  label: string;
  iconImg: string;
}

export const champions: Record<Champion, ChampionDetails> = {
  [Champion.CHAMPION_1]: {
    label: '',
    iconImg: `${basePaths.iconsPath}${Champion.CHAMPION_1}.jpg`,
  },
  [Champion.CHAMPION_2]: {
    label: '',
    iconImg: `${basePaths.iconsPath}${Champion.CHAMPION_2}.jpg`,
  },
  [Champion.CHAMPION_3]: {
    label: '',
    iconImg: `${basePaths.iconsPath}${Champion.CHAMPION_3}.jpg`,
  },
};

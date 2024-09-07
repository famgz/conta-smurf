'use server';

import db from '@/app/_lib/db';
import { plainify } from '@/app/_lib/utils';
import { basePaths } from '@/app/constants';
import { Game, Rank, Region } from '@prisma/client';

export async function getChampions() {
  return await db.champion.findMany({});
}

export async function getProducts() {
  const products = await db.product.findMany({});
  return plainify(products);
}

export interface IProductFilters {
  game: Game[];
  rank: Rank[];
  region: Region[];
}

export async function getProductFilters(): Promise<IProductFilters> {
  let [game, rank, region] = await db.$transaction([
    db.game.findMany({}),
    db.rank.findMany({}),
    db.region.findMany({}),
  ]);

  const baseImgPath = basePaths.iconsPath;

  game = game.map((x) => ({
    ...x,
    imageUrl: baseImgPath + x.imageUrl,
  }));

  rank = rank.map((x) => ({
    ...x,
    imageUrl: baseImgPath + x.imageUrl,
  }));

  region = region.map((x) => ({
    ...x,
    flagImageUrl: baseImgPath + x.flagImageUrl,
    mapImageUrl: baseImgPath + x.mapImageUrl,
  }));

  const filters = {
    game,
    rank,
    region,
  };

  return filters;
}

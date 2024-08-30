'use server';

import db from '@/app/_lib/db';

export async function getChampions() {
  const champions = await db.champion.findMany({});
  console.log(champions);
}

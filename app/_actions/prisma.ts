'use server';

import db from '@/app/_lib/db';
import { plainify } from '@/app/_lib/utils';

export async function getChampions() {
  return await db.champion.findMany({});
}

export async function getProducts() {
  const products = await db.product.findMany({});
  return plainify(products);
}

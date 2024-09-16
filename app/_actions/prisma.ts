'use server';

import db from '@/app/_lib/db';
import { plainify } from '@/app/_lib/utils';
import { CartProduct } from '@/app/_store/cart-store';
import { basePaths } from '@/app/constants';
import {
  Game,
  ProductOrder,
  ProductOrderItem,
  ProductPaymentMethod,
  Rank,
  Region,
} from '@prisma/client';

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

async function checkUserIdElseThrowError(userId: string) {
  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');
  return user;
}

async function getProductOrderItemsElseThrowError(
  cartProducts: CartProduct[]
): Promise<Omit<ProductOrderItem, 'id' | 'orderId'>[]> {
  const uniqueProductIds = cartProducts.map((p) => p.id);

  const dbProducts = await db.product.findMany({
    where: {
      id: { in: uniqueProductIds },
      availableQuantity: { gt: 0 },
    },
  });

  if (dbProducts.length !== uniqueProductIds.length) {
    throw new Error('Some products are invalid or not available');
  }

  cartProducts.forEach((product) => {
    if (product.quantity > product.availableQuantity) {
      throw new Error('Some product are not available');
    }
  });

  const productOrderItems = cartProducts.map((cartProduct) => {
    const product = dbProducts.find((p) => p.id === cartProduct.id)!;
    return {
      productId: product.id,
      productPriceInCents: product.priceInCents,
      quantity: cartProduct.quantity,
      totalPriceInCents: product.priceInCents * cartProduct.quantity,
    };
  });

  return productOrderItems;
}

export async function createProductOrder(
  userId: string,
  paymentMethod: ProductPaymentMethod,
  cartProducts: CartProduct[],
  couponId: string
): Promise<ProductOrder | null> {
  try {
    await checkUserIdElseThrowError(userId);

    const productOrderItems =
      await getProductOrderItemsElseThrowError(cartProducts);

    const totalPriceInCents = productOrderItems.reduce(
      (acc, p) => acc + p.totalPriceInCents,
      0
    );

    const productOrder = await db.productOrder.create({
      data: {
        user: { connect: { id: userId } },
        items: { create: productOrderItems },
        paymentMethod,
        totalPriceInCents,
        coupon: couponId ? { connect: { id: couponId } } : undefined,
      },
    });

    return productOrder;
  } catch (err) {
    console.log(err);
    return null;
  }
}

import { Prisma, Product } from '@prisma/client';

export type ProductOrderFull = Prisma.ProductOrderGetPayload<{
  include: {
    items: { include: { product: true } };
    coupon: true;
  };
}>;

export interface CartProduct extends Product {
  quantity: number;
}

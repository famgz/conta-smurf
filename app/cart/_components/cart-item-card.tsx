'use client';

import DeleteButton from '@/app/_components/buttons/delete-button';
import MinusButton from '@/app/_components/buttons/minus-button';
import PlusButton from '@/app/_components/buttons/plus-button';
import { formatPrice } from '@/app/_lib/utils';
import { CartProduct } from '@/app/_types/order';
import { basePaths } from '@/app/constants';
import Image from 'next/image';

interface Props {
  product: CartProduct;
  decreaseProductQuantity: (product: CartProduct) => void;
  increaseProductQuantity: (product: CartProduct) => void;
}

export default function CartItemCard({
  product,
  decreaseProductQuantity,
  increaseProductQuantity,
}: Props) {
  return (
    <div key={product.id} className="flex gap-3 rounded-2xl bg-black/20 p-3">
      <div className="relative size-20 overflow-hidden rounded-2xl">
        <Image
          src={basePaths.imagesPath + product.imageUrl}
          alt="product image"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 justify-between">
        <div className="text-left">
          <p className="text-lg leading-5 2xl:text-xl">{product.title}</p>
          <p className="text-sm font-extralight leading-5">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col items-end justify-between">
          <DeleteButton />

          <div className="flex items-center gap-2">
            <MinusButton onClick={() => decreaseProductQuantity(product)} />
            <span className="text-xl 2xl:text-2xl">{product.quantity}</span>
            <PlusButton onClick={() => increaseProductQuantity(product)} />
            <span className="w-[150px] text-right xl:text-2xl 2xl:text-3xl">
              {formatPrice((product.priceInCents / 100) * product.quantity)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import FinishButton from '@/app/_components/buttons/finish-button';
import MinusButton from '@/app/_components/buttons/minus-button';
import PlusButton from '@/app/_components/buttons/plus-button';
import { Button } from '@/app/_components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/app/_components/ui/dialog';
import { formatPrice } from '@/app/_lib/utils';
import { useCartStore } from '@/app/_store/cart-store';
import { Product } from '@prisma/client';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';

const opts = ['Active', 'No bans', '[NFA]', 'No Ranked Seasons played'];

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const totalPrice = useMemo(
    () => (product?.price as unknown as number) * quantity,
    [quantity, product]
  );

  if (!product) return 'Invalid product';

  function handleDecreaseQuantity() {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  }

  function handleIncreaseQuantity() {
    if (quantity < product.availableQuantity) setQuantity((prev) => prev + 1);
  }

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Product ${product.title} successfully added to Cart`);
  }

  return (
    <div className="relative flex max-w-[150px] flex-col items-center gap-px rounded-[10px] bg-gradient-to-br from-[#fff]/30 to-[#1e1e1e]/30 p-2 shadow-md hover:outline-1 hover:outline-white xl:max-w-[318px] xl:gap-2 xl:rounded-[20px] xl:p-3">
      {/* image */}
      <div className="relative aspect-[600/336] min-h-[66px] w-full flex-1 overflow-hidden rounded-lg xl:min-h-[160px]">
        <Image
          src={'/images/' + product.imageUrl}
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>

      <p className="whitespace-nowrap text-sm xl:text-3xl">{product.title}</p>

      <div>
        <div className="flex flex-wrap items-center gap-1 !gap-y-0 xl:justify-center xl:gap-3">
          {opts.map((x) => (
            <div className="flex-center gap-px xl:gap-1" key={x}>
              <div className="h-[2px] w-2.5 bg-brass" />
              <span className="whitespace-nowrap text-[10px] font-extralight xl:text-base xl:font-medium">
                {x}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Dialog>
        <DialogTrigger className="subtitle-badge flex-center absolute -bottom-3.5 h-[24px] w-[84px] overflow-hidden text-sm xl:-bottom-8 xl:right-2 xl:h-[46px] xl:w-[136px] xl:text-xl">
          See more
        </DialogTrigger>
        <DialogContent className="grid max-w-3xl grid-cols-2 gap-5 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(30,30,30,0.8)] sm:rounded-[30px]">
          <DialogTitle className="sr-only">{product.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {product.description}
          </DialogDescription>
          <div className="space-y-4">
            {/* image */}
            <div className="relative aspect-[600/336] min-h-[66px] w-full flex-1 overflow-hidden rounded-lg xl:min-h-[160px]">
              <Image
                src={'/images/' + product.imageUrl}
                fill
                alt=""
                className="object-cover object-top"
              />
            </div>
            <h1 className="text-3xl font-semibold">{product.title}</h1>

            {/* tags */}
            <div className="flex flex-wrap items-center gap-1 xl:gap-2">
              {opts.map((x) => (
                <div className="flex-center gap-px xl:gap-1" key={x}>
                  <div className="h-[2px] w-2.5 bg-brass" />
                  <span className="whitespace-nowrap text-[10px] font-extralight xl:text-sm xl:font-medium">
                    {x}
                  </span>
                </div>
              ))}
            </div>

            {/* summary */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <DialogClose asChild>
                  <Button
                    className="subtitle-badge w-full text-xl"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </DialogClose>

                <DialogClose asChild>
                  <FinishButton className="!w-full" includeIcon={false}>
                    Buy NOW
                  </FinishButton>
                </DialogClose>
              </div>

              <div className="space-y-2">
                <p className="text-center font-light">
                  {product.availableQuantity} items available
                </p>
                <div className="flex-center gap-2">
                  <MinusButton onClick={handleDecreaseQuantity} />
                  <span className="w-6 text-center text-xl 2xl:text-2xl">
                    {quantity}
                  </span>
                  <PlusButton onClick={handleIncreaseQuantity} />
                </div>
                <p className="w-full rounded-xl bg-menu py-2 text-center text-2xl text-white 2xl:text-3xl">
                  {formatPrice(totalPrice)}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-2xl">Choose a cosmetic</p>
            <p className="text-sm text-muted-foreground">
              When choosing a skin, you will only be able to purchase one unit.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import DialogIcon from '@/app/_components/icons/dialog';
import DotsIcon from '@/app/_components/icons/dots';
import ExclamationIcon from '@/app/_components/icons/exclamation';
import StarIcon from '@/app/_components/icons/star';
import { Button } from '@/app/_components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';
import { cn, formatDate } from '@/app/_lib/utils';
import { Product, ProductOrder } from '@prisma/client';
import Image from 'next/image';

interface Props {
  product: Product;
  order: ProductOrder;
}

export default function PurchaseOrderItem({ product, order }: Props) {
  return (
    <div className="mr-5 flex items-center gap-2 border-b border-white py-2.5 sm:mr-7 2xl:gap-5">
      {/* product image */}
      <div className="relative size-12 overflow-hidden rounded-lg max-xs:hidden sm:size-20 sm:rounded-2xl">
        <Image
          src={'/images/' + product.imageUrl}
          alt="product image"
          fill
          className="object-cover"
        />
      </div>

      {/* information card */}
      <div className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-white px-3 py-2 sm:h-20">
        {/* row 1 */}
        <div className="flex w-full items-center gap-2 leading-5 xl:gap-10">
          <span className="whitespace-nowrap text-muted max-sm:text-xs">
            {product.title}
          </span>
          <span className="text-gradient flex-1 whitespace-nowrap bg-green text-right capitalize max-[460px]:text-xs sm:text-left">
            {order.status.toLowerCase()}
          </span>
          <span className="whitespace-nowrap font-extralight text-muted-foreground max-sm:hidden max-sm:text-[10px]">
            {formatDate(order.createdAt)}
          </span>
        </div>

        {/* row 2 */}
        <div className="flex w-full items-center gap-2">
          <p className="w-full text-left font-light leading-5 text-muted-foreground max-sm:text-xs">
            Gragasfofinho#br1
          </p>
          <span className="whitespace-nowrap text-[10px] font-extralight text-muted-foreground sm:hidden">
            {formatDate(order.createdAt)}
          </span>
        </div>

        {/* row 3 */}
        <div className="flex w-full items-center gap-2 leading-5 sm:gap-8">
          <span className="flex-1 whitespace-nowrap text-left font-light text-muted-foreground max-sm:text-xs">
            payment method{' '}
            <span className="capitalize">
              {order.paymentMethod.toLowerCase()}
            </span>
          </span>
          {/* stars */}
          <div className="flex max-[460px]:hidden sm:gap-1">
            {Array.from({ length: 5 }).map((x, i) => (
              <StarIcon
                className={cn(
                  'size-3 sm:size-4 2xl:size-5',
                  i === 4
                    ? 'fill-muted-foreground'
                    : 'fill-[url(#svg-linear-gradient)]'
                )}
                key={i}
              />
            ))}
          </div>

          <span className="cursor-pointer whitespace-nowrap text-muted max-sm:text-[10px]">
            See more
          </span>
        </div>
      </div>

      {/* buttons - desktop */}
      <div className="flex-center gap-2 max-md:hidden 2xl:gap-5">
        <Button className="flex-center size-12 rounded-2xl bg-white p-0">
          <DialogIcon className="fill-muted" />
        </Button>

        <Button className="flex-center size-12 rounded-2xl bg-white p-0">
          <ExclamationIcon className="fill-muted" />
        </Button>
      </div>

      {/* buttons - mobile drodpown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex-center size-12 h-16 w-9 cursor-pointer flex-col rounded-2xl bg-white md:hidden">
            <DotsIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="rounded-2xl p-2 backdrop-blur-xl"
          sideOffset={10}
        >
          <DropdownMenuItem>
            <Button className="flex-center size-12 rounded-2xl bg-white p-0">
              <DialogIcon className="fill-muted" />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Button className="flex-center size-12 rounded-2xl bg-white p-0">
              <ExclamationIcon className="fill-muted" />
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

'use client';

import ProductCard from '@/app/(home)/_components/product-card';
import {
  IProductFilters,
  getProductFilters,
  getProducts,
} from '@/app/_actions/prisma';
import SortArrowsIcon from '@/app/_components/icons/sort-arrows';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { Slider } from '@/app/_components/ui/slider';
import { Product, ProductExtras, ProductStatus } from '@prisma/client';
import { Search, SlidersHorizontalIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProductFilters extends IProductFilters {
  status: ProductStatus[];
  price: { min: number; max: number };
  extra: ProductExtras[];
}

export default function HomeProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<ProductFilters | undefined>();

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);

      const dbFilters = await getProductFilters();

      const filters = {
        ...dbFilters,
        status: Object.values(ProductStatus),
        price: {
          min: 0,
          max: 2500,
        },
        extra: Object.values(ProductExtras),
      };

      setFilters(filters);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col overflow-hidden rounded-[30px] xl:grid xl:grid-cols-[1fr_3fr]">
      {/* Column 1 - Filters */}
      <div className="flex flex-col bg-dark xl:space-y-2">
        {/* header */}
        <div className="bg-[#222]/30 py-3 xl:py-7">
          <div className="hidden items-center justify-center gap-1 xl:flex">
            <SlidersHorizontalIcon />
            <h2 className="text-4xl font-light">Filters</h2>
          </div>
          <div className="flex-center xl:hidden">
            <h2 className="text-xl font-light">All Products</h2>
          </div>
        </div>

        {/* search input */}
        <div className="flex h-8 w-full items-center gap-2 bg-white px-4 xl:h-10">
          <input
            type="text"
            placeholder="Search a Product by name"
            className="flex-1 bg-transparent text-sm text-muted outline-none xl:text-base"
          />
          <Search className="size-4 cursor-pointer text-muted-foreground xl:size-6" />
        </div>

        {/* simplified filter - mobile only */}
        <div className="grid h-11 grid-cols-3 items-center justify-end px-5 xl:hidden">
          <div className="flex-center gap-2">
            Game
            {filters &&
              filters.game.slice(0, 2).map((x) => (
                <div className="relative size-4" key={x.id}>
                  <Image
                    src={`/images/icons/${x.slug}.png`}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
          </div>
          <div className="flex-center gap-2">
            Price
            <SortArrowsIcon />
          </div>
          <div className="flex-center gap-2">
            <SlidersHorizontalIcon className="size-4" />
            Filters
          </div>
        </div>

        {/* filter tabs - desktop only */}
        <ScrollArea
          className="hidden h-[600px] flex-auto xl:block"
          hideScrollbar
        >
          <Accordion
            type="single"
            collapsible
            className="hide-scrollbar w-full pb-5"
          >
            {filters && (
              <>
                {/* Game */}
                <AccordionItem value="game" className="">
                  <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                    Game
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea>
                      <div className="flex max-h-[160px] flex-col gap-2 p-6">
                        {filters.game.map((x) => (
                          <div className="flex items-center gap-4" key={x.id}>
                            <Checkbox className="size-6" />
                            <div className="relative size-[33px]">
                              <Image
                                src={`/images/icons/${x.slug}.png`}
                                fill
                                className="object-contain"
                                alt=""
                              />
                            </div>
                            <span className="text-base font-light">
                              {x.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>

                {/* Rank */}
                <AccordionItem value="ranking" className="">
                  <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                    Rank
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea>
                      <div className="grid max-h-[160px] grid-cols-2 gap-2 p-6">
                        {filters.rank.map((x) => (
                          <div className="flex items-center gap-2" key={x.id}>
                            <Checkbox className="size-6" />
                            <div className="relative size-[33px]">
                              <Image
                                src={x.imageUrl}
                                fill
                                className="object-contain"
                                alt=""
                              />
                            </div>
                            <span className="text-base font-light capitalize">
                              {x.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price" className="">
                  <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                    Price
                  </AccordionTrigger>
                  <AccordionContent className="p-6">
                    <Slider
                      defaultValue={[filters.price.max / 3]}
                      max={filters.price.max}
                      step={1}
                    />
                  </AccordionContent>
                </AccordionItem>

                {/* Region */}
                <AccordionItem value="region" className="">
                  <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                    Region
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea>
                      <div className="grid max-h-[160px] grid-cols-2 gap-3 p-6">
                        {filters.region.map((x) => (
                          <div className="flex items-center gap-2" key={x.id}>
                            <Checkbox className="size-6" />
                            <span className="text-base font-light capitalize">
                              {x.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>

                {/* Status */}
                <AccordionItem value="status" className="">
                  <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                    Status
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea>
                      <div className="grid max-h-[160px] grid-cols-2 gap-3 p-6">
                        {filters.status.map((x) => (
                          <div className="flex items-center gap-2" key={x}>
                            <Checkbox className="size-6" />
                            <span className="text-base font-light capitalize">
                              {x}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>

                {/* Extra */}
                <AccordionItem value="extra" className="">
                  <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                    Extra
                  </AccordionTrigger>
                  <AccordionContent>
                    <ScrollArea>
                      <div className="grid max-h-[160px] grid-cols-2 gap-3 p-6">
                        {filters.extra.map((x) => (
                          <div className="flex items-center gap-2" key={x}>
                            <Checkbox className="size-6" />
                            <span className="text-base font-light capitalize">
                              {x}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
              </>
            )}
          </Accordion>
        </ScrollArea>
      </div>

      {/* Column2 -Products list */}
      <div className="flex flex-1 flex-col gap-5 bg-light p-4 xl:px-10 xl:py-7">
        <h2 className="hidden text-4xl xl:block">All Products</h2>
        <ScrollArea
          className="h-[200px] flex-auto pb-7"
          type={'always'}
          hideScrollbar={false}
        >
          <div className="flex-center flex-wrap gap-2.5 gap-y-4 xl:gap-12">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

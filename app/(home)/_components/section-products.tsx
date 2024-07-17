'use client';

import MostWantedCard from '@/app/(home)/_components/most-wanted-card';
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
import { Search, SlidersHorizontalIcon } from 'lucide-react';
import Image from 'next/image';

export default function HomeProductsSection() {
  const imagePrefix = '/images/icons/';

  const filters = {
    game: [
      {
        title: 'League of legends',
        icon: imagePrefix + 'lol.png',
      },
      {
        title: 'Valorant',
        icon: imagePrefix + 'valorant.png',
      },
      {
        title: 'League of legends Wild Rift (WIP)',
        icon: imagePrefix + 'lol-wip.png',
      },
      {
        title: 'Legends of Runeterra (WIP)',
        icon: imagePrefix + 'lor-wip.png',
      },
    ],
    rank: [
      { title: 'bronze', icon: imagePrefix + 'rank-bronze.png' },
      { title: 'challenger', icon: imagePrefix + 'rank-challenger.png' },
      { title: 'diamond', icon: imagePrefix + 'rank-diamond.png' },
      { title: 'emerald', icon: imagePrefix + 'rank-emerald.png' },
      { title: 'gold', icon: imagePrefix + 'rank-gold.png' },
      { title: 'grandmaster', icon: imagePrefix + 'rank-grandmaster.png' },
      { title: 'iron', icon: imagePrefix + 'rank-iron.png' },
      { title: 'master', icon: imagePrefix + 'rank-master.png' },
      { title: 'no-rank', icon: imagePrefix + 'rank-no-rank.png' },
      { title: 'platinum', icon: imagePrefix + 'rank-platinum.png' },
      { title: 'silver', icon: imagePrefix + 'rank-silver.png' },
    ],
    price: {
      min: 0,
      max: 2500,
    },
    region: [
      'Brazil',
      'North America',
      'LATAM',
      'Oceania',
      'Japan',
      'Korea',
      'Europe W',
      'Europe N & E',
      'Russia',
      'Turkey',
    ],
    status: ['Active', 'Disabled', '[NFA]', 'No bans', 'No ranked Played'],
    other: ['Gift cards', 'Riot points', 'Valorant points'],
  };

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
            {filters.game.slice(0, 2).map((x) => (
              <div className="relative size-4" key={x.title}>
                <Image src={x.icon} alt="" fill className="object-contain" />
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
            {/* Game */}
            <AccordionItem value="game" className="">
              <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                Game
              </AccordionTrigger>
              <AccordionContent>
                <ScrollArea>
                  <div className="flex max-h-[160px] flex-col gap-2 p-6">
                    {filters.game.map((x) => (
                      <div className="flex items-center gap-4" key={x.title}>
                        <Checkbox className="size-6" />
                        <div className="relative size-[33px]">
                          <Image
                            src={x.icon}
                            fill
                            className="object-contain"
                            alt=""
                          />
                        </div>
                        <span className="text-base font-light">{x.title}</span>
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
                      <div className="flex items-center gap-2" key={x.title}>
                        <Checkbox className="size-6" />
                        <div className="relative size-[33px]">
                          <Image
                            src={x.icon}
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

            {/* Other */}
            <AccordionItem value="other" className="">
              <AccordionTrigger className="bg-[#d9d9d9]/40 p-6 text-2xl font-light">
                Other
              </AccordionTrigger>
              <AccordionContent>
                <ScrollArea>
                  <div className="grid max-h-[160px] grid-cols-2 gap-3 p-6">
                    {filters.other.map((x) => (
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
            {Array.from({ length: 21 }).map((_, i) => (
              <MostWantedCard key={i} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

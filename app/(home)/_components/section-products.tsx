import MostWantedCard from '@/app/(home)/_components/most-wanted-card';
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

export default function Products() {
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
    <div className="flex-center">
      <div className="grid h-full max-h-[720px] w-full max-w-[1580px] grid-cols-[1fr_3fr] overflow-hidden rounded-[30px] bg-black/20">
        {/* Filters */}
        <div className="hide-scrollbar max-h-[720px] space-y-2 overflow-y-auto">
          <div className="flex-center gap-1 py-7">
            <SlidersHorizontalIcon />
            <h2 className="text-4xl font-light">Filters</h2>
          </div>

          <div className="flex w-full gap-2 bg-white px-4 py-2">
            <input
              type="text"
              placeholder="Search a Product by name"
              className="flex-1 text-muted"
            />
            <Search className="text-muted-foreground" />
          </div>

          {/* Game */}
          <Accordion type="single" collapsible className="w-full">
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
                        <Image src={x.icon} width={33} height={33} alt="" />
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
                        <Image src={x.icon} width={33} height={33} alt="" />
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
        </div>

        {/* Products list */}
        <div className="flex max-h-full flex-col overflow-hidden bg-gradient-to-br from-[#ebebeb]/40 to-[#a6a6a6]/40 px-10 py-7">
          <h2 className="text-4xl">Products</h2>
          <ScrollArea className="mt-5 flex-1">
            <div className="flex-center max-h-[600px] flex-wrap gap-12">
              {Array.from({ length: 21 }).map((_, i) => (
                <MostWantedCard key={i} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/app/_components/ui/button';
import { cn } from '@/app/_lib/utils';
import { SearchIcon } from 'lucide-react';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import StarIcon from '@/app/_components/icons/star';
import DialogIcon from '@/app/_components/icons/dialog';
import ExclamationIcon from '@/app/_components/icons/exclamation';
import DotsIcon from '@/app/_components/icons/dots';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';

export default function PurchaseHistoryTable() {
  const [currentHistoryTab, setCurrentHistoryTab] = useState('Accounts');
  const purchaseHistoryTabs = [
    'All',
    'Elojob',
    'Accounts',
    'Services',
    'Lootbox',
    'Cheats',
    'Gifts',
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[30px] bg-light">
      {/* header */}
      <div className="flex-center h-[90px] gap-2 bg-tab-header px-4 sm:px-8 xl:gap-5">
        <div className="relative size-14 xl:size-20">
          <Image
            src="/images/icons/decoracao-1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <h2 className="flex-1 text-left xl:text-3xl">Purchase History</h2>

        <div className="flex-center gap-5">
          {purchaseHistoryTabs.map((tab, index) => (
            <Button
              className={cn(
                'flex-center h-11 w-20 rounded-[3px] border-[2px] border-white bg-transparent text-white hover:text-muted',
                index > 0 && 'max-xl:hidden',
                tab === currentHistoryTab ? 'bg-selected text-muted' : ''
              )}
              key={tab}
              onClick={() => setCurrentHistoryTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-9 px-5 py-5 xl:px-8">
        {/* search input */}
        <div className="flex h-10 w-full items-center rounded-sm bg-white px-4 sm:gap-4 xl:max-w-[400px]">
          <input
            type="text"
            placeholder="Search a Purchase"
            className="!min-w-0 flex-1 bg-transparent font-light text-muted placeholder-muted-foreground outline-none max-sm:text-sm"
          />
          <SearchIcon className="size-5 shrink-0 text-muted-foreground" />
        </div>

        {/* table */}
        <ScrollArea className="-mr-4 h-[300px] flex-auto" type={'auto'}>
          <div className="flex flex-col gap-5">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                className="mr-5 flex items-center gap-2 border-b border-white pb-2.5 xl:mr-8 xl:gap-5"
                key={i}
              >
                {/* product image */}
                <div className="relative size-12 overflow-hidden rounded-2xl max-xs:hidden xl:size-20">
                  <Image
                    src="/images/icons/product-example.jpg"
                    alt="product image"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* information card */}
                <div className="flex h-20 flex-1 flex-col items-center justify-center rounded-2xl bg-white px-3 py-2">
                  {/* row 1 */}
                  <div className="flex w-full items-center gap-2 leading-5 xl:gap-10">
                    <span className="whitespace-nowrap text-muted max-sm:text-xs">
                      Account Grandmaster
                    </span>
                    <span className="text-gradient flex-1 whitespace-nowrap bg-green text-right max-[460px]:text-xs sm:text-left">
                      Finalized
                    </span>
                    <span className="whitespace-nowrap font-extralight text-muted-foreground max-sm:hidden max-sm:text-[10px]">
                      13/07/2024
                    </span>
                  </div>

                  {/* row 2 */}
                  <div className="flex w-full items-center gap-2">
                    <p className="w-full text-left font-light leading-5 text-muted-foreground max-sm:text-xs">
                      Gragasfofinho#br1
                    </p>
                    <span className="whitespace-nowrap text-[10px] font-extralight text-muted-foreground sm:hidden">
                      13/07/2024
                    </span>
                  </div>

                  {/* row 3 */}
                  <div className="flex w-full items-center gap-2 leading-5 sm:gap-8">
                    <span className="flex-1 whitespace-nowrap text-left font-light text-muted-foreground max-sm:text-xs">
                      payment method Pix
                    </span>
                    {/* stars */}
                    <div className="flex max-[460px]:hidden sm:gap-1">
                      {Array.from({ length: 5 }).map((x, i) => (
                        <StarIcon
                          className={cn(
                            'max-sm:size-3',
                            i === 4
                              ? 'fill-muted-foreground'
                              : 'fill-[url(#svg-linear-gradient)]'
                          )}
                          key={i}
                        />
                      ))}
                    </div>

                    <span className="whitespace-nowrap text-muted max-sm:text-[10px]">
                      See more
                    </span>
                  </div>
                </div>

                {/* buttons - desktop */}
                <div className="flex-center gap-5 max-md:hidden">
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
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

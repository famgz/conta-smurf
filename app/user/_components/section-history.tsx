'use client';

import BoostIcon from '@/app/_components/icons/boost';
import ChallengeExpertiseIcon from '@/app/_components/icons/challenge-expertise';
import ChallengeImaginationIcon from '@/app/_components/icons/challenge-imagination';
import ChallengePepeIcon from '@/app/_components/icons/challenge-pepe';
import ChallengeTeamworkIcon from '@/app/_components/icons/challenge-teamwork';
import ChallengeVeterancyIcon from '@/app/_components/icons/challenge-veterancy';
import DialogIcon from '@/app/_components/icons/dialog';
import EditIcon from '@/app/_components/icons/edit';
import ExclamationIcon from '@/app/_components/icons/exclamation';
import LaneIcon from '@/app/_components/icons/lane';
import StarIcon from '@/app/_components/icons/star';
import { Button } from '@/app/_components/ui/button';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { cn } from '@/app/_lib/utils';
import { Champion, champions } from '@/app/_types/order/champion';
import { Lane } from '@/app/_types/order/lane';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function UserHistorySection() {
  const userLanes: Lane[] = [Lane.BOTTOM, Lane.JUNGLE];
  const userChampions: Champion[] = [Champion.CHAMPION_1, Champion.CHAMPION_2];

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
    <div className="grid grid-cols-[1fr_3fr] space-x-5 py-4 pl-20 pr-40">
      {/* Ccolumn 1 - User informations */}
      <div className="flex flex-col overflow-hidden rounded-[30px] bg-dark">
        {/* header with background image */}
        <div className="relative h-[160px]">
          {/* bg image */}
          <Image
            src="/images/user-status-bg.jpg"
            fill
            alt=""
            className="object-cover object-top"
          />

          {/* status badge */}
          <div className="flex-center absolute left-5 top-3 h-8 w-fit gap-2 rounded-lg bg-menu p-2">
            <span>User Status</span>
            <div className="size-3.5 rounded-full bg-red"></div>
          </div>

          {/* edit button */}
          <Button className="flex-center absolute right-3 top-3 size-9 rounded-full bg-light p-0">
            <EditIcon />
          </Button>
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col items-center justify-between gap-1 px-16 pb-5">
          <div className="relative mx-auto -mt-20 size-40 overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              fill
              alt="profile image"
              className="object-cover"
            />
          </div>

          {/* achievment badges */}
          <div className="test-border flex h-11 items-center gap-2 rounded-lg bg-folder p-2.5">
            <ChallengePepeIcon />
            <ChallengeTeamworkIcon />
            <ChallengeExpertiseIcon />
            <ChallengeImaginationIcon />
            <ChallengeVeterancyIcon />
          </div>

          {/* name and title */}
          <div>
            <p className="text-3xl">User12345</p>
            <p className="font-light">The feeder</p>
          </div>

          {/* description */}
          <p className="text-sm font-light">
            Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
            Sehena hexanade, pren rerat, och olig såsom nätvandra.
          </p>

          {/* rank */}
          <div className="relative size-24">
            <Image
              src="/images/icons/rank-gold.png"
              fill
              alt="rank image"
              className="object-contain"
            />
          </div>

          {/* lanes */}
          <div className="flex-center gap-4">
            {userLanes.map((lane) => (
              <LaneIcon lane={lane} className="size-12 p-2" key={lane} />
            ))}
          </div>

          {/* champions */}
          <div className="flex-center gap-4">
            {userChampions.map((champion) => (
              <Image
                src={champions[champion].iconImg}
                key={champion}
                alt=""
                width={50}
                height={50}
                className="rounded-md border-[8px] border-muted-foreground"
              />
            ))}
          </div>

          {/* boost indication */}
          <div className="flex-center gap-2 rounded-xl bg-menu px-4 py-1 text-lg">
            Boost on going!
            <BoostIcon />
          </div>

          {/* warn login message */}
          <p className="text-muted-foreground">
            Please, don`t login in your account right now!
          </p>
        </div>
      </div>

      {/* Column 2 - Purchase history */}
      <div className="flex flex-col overflow-hidden rounded-[30px] bg-light">
        {/* header */}
        <div className="flex-center h-[90px] gap-5 bg-tab-header px-8">
          <div className="relative size-20">
            <Image
              src="/images/icons/decoracao-1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <h2 className="flex-1 text-left text-3xl">Purchase History</h2>

          <div className="flex-center gap-5">
            {purchaseHistoryTabs.map((tab) => (
              <Button
                className={cn(
                  'flex-center h-11 w-20 rounded-[3px] border-[2px] border-white bg-transparent text-white hover:text-muted',
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
        <div className="flex flex-1 flex-col gap-9 py-5 pl-8 pr-16">
          {/* search input */}
          <div className="flex h-10 w-full max-w-[400px] items-center gap-4 rounded-sm bg-white px-4">
            <input
              type="text"
              placeholder="Search a Purchase"
              className="flex-1 bg-transparent font-light text-muted placeholder-muted-foreground outline-none"
            />
            <SearchIcon className="size-5 text-muted-foreground" />
          </div>

          {/* table */}
          <ScrollArea className="h-[300px] flex-auto">
            <div className="flex flex-col gap-5">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  className="mr-8 flex items-center gap-5 border-b border-white pb-2.5"
                  key={i}
                >
                  {/* product image */}
                  <div className="relative size-20 overflow-hidden rounded-2xl">
                    <Image
                      src="/images/icons/product-example.jpg"
                      alt="product image"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* informations */}
                  <div className="flex h-20 flex-1 flex-col items-center rounded-2xl bg-white px-3 py-2">
                    {/* row 1 */}
                    <div className="flex w-full items-center gap-10 leading-5">
                      <span className="text-muted">Account Grandmaster</span>
                      <span className="text-gradient flex-1 bg-green text-left">
                        Finalized
                      </span>
                      <span className="font-extralight text-muted-foreground">
                        13/07/2024
                      </span>
                    </div>

                    {/* row 2 */}
                    <p className="w-full text-left font-light leading-5 text-muted-foreground">
                      Gragasfofinho#br1
                    </p>

                    {/* row 3 */}
                    <div className="flex w-full items-center gap-8 leading-5">
                      <span className="flex-1 text-left font-light text-muted-foreground">
                        payment method Pix
                      </span>
                      {/* stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((x, i) => (
                          <StarIcon
                            className={cn(
                              '',
                              i === 4
                                ? 'fill-muted-foreground'
                                : 'fill-[url(#svg-linear-gradient)]'
                            )}
                            key={i}
                          />
                        ))}
                      </div>

                      <span className="text-muted">See more</span>
                    </div>
                  </div>

                  {/* buttons */}
                  <Button className="flex-center size-12 rounded-2xl bg-white p-0">
                    <DialogIcon className="fill-muted" />
                  </Button>

                  <Button className="flex-center size-12 rounded-2xl bg-white p-0">
                    <ExclamationIcon className="fill-muted" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

'use client';

import FinishButton from '@/app/_components/buttons/finish-button';
import LaneIcon from '@/app/_components/icons/lane';
import { Button } from '@/app/_components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_components/ui/form';
import { Input } from '@/app/_components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import { ScrollArea, ScrollBar } from '@/app/_components/ui/scroll-area';
import { Slider } from '@/app/_components/ui/slider';
import { cn } from '@/app/_lib/utils';
import { Addon, addons } from '@/app/_types/order/addon';
import { Champion, champions } from '@/app/_types/order/champion';
import { Game, games } from '@/app/_types/order/game';
import { Lane, lanes } from '@/app/_types/order/lane';
import { Rank, ranks } from '@/app/_types/order/rank';
import { Region, regions } from '@/app/_types/order/region';
import AddonCard from '@/app/elojob/_components/addon.card';
import LaneCard from '@/app/elojob/_components/lane-card';
import RankCard from '@/app/elojob/_components/rank-card';
import TierSlider from '@/app/elojob/_components/tier-slider';
import { Scroll } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Summary {
  game: Game | '';
  region: Region | '';
  starterRank: Rank | '';
  starterTier: number;
  finalRank: Rank | '';
  finalTier: number;
  lp: string;
  account: string;
  typeOfClimb: string;
  lanes: Lane[];
  champions: Champion[];
  addons: Addon[];
}

export default function ElojobOrderSection() {
  const form = useForm();
  const router = useRouter();

  const tiers = ['IV', 'III', 'II', 'I'];
  const lps = ['0-20', '21-40', '41-60', '61-80', '81-99'];
  const typeOfClimb = {
    solo: {
      bg: '/images/solo.jpg',
    },
    duo: {
      bg: '/images/duo.jpg',
    },
  };

  const [summary, setSummary] = useState<Summary>({
    game: '',
    region: '',
    starterRank: '',
    starterTier: -1,
    finalRank: '',
    finalTier: -1,
    lp: '',
    account: '',
    typeOfClimb: '',
    lanes: [],
    champions: [],
    addons: [],
  });

  const orderSteps = [
    // 1 - Choose the game you want to boost
    {
      canProceed: summary.game,
      content: (
        <div className="flex h-full flex-col gap-4">
          <h3 className="text-[14px] xl:text-3xl">
            Choose the game you want to boost
          </h3>

          <div className="flex-center h-full flex-1 gap-3 max-xl:px-3 max-xs:flex-col xl:gap-20">
            {Object.entries(games).map(([game, gameInfo]) => (
              <div
                className={cn(
                  'relative flex h-full w-full max-w-[350px] cursor-pointer flex-col items-center justify-end overflow-hidden rounded-[30px] p-3 xl:p-10',
                  game === summary.game
                    ? 'shadow-[0px_0px_15px_0px_rgba(0,_255,_224,_0.49)] outline outline-2 outline-blue-400 xl:shadow-[0px_0px_30px_0px_rgba(0,_255,_224,_0.49)]'
                    : 'shadow-lg'
                )}
                key={game}
                onClick={() =>
                  setSummary((prev) => ({
                    ...prev,
                    game: game as Game,
                  }))
                }
              >
                {/* bg image */}
                <Image
                  src={gameInfo.bgImg}
                  fill
                  className="object-cover"
                  alt=""
                />
                {/* title image */}
                <div className="relative z-10 aspect-square size-[100px] xl:size-[200px]">
                  <Image
                    src={gameInfo.titleImg}
                    alt=""
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // 2 - Choose the region of the account
    {
      canProceed: summary.region,
      content: (
        <div className="flex h-full max-h-[500px] flex-col gap-2 xl:gap-4">
          <h3 className="text-[14px] xl:text-3xl">
            Choose the region of the account
          </h3>
          <div className="flex flex-1 flex-col xl:grid xl:grid-cols-2">
            {/* Flags */}
            <RadioGroup
              onValueChange={(region: Region) =>
                setSummary((prev) => ({
                  ...prev,
                  region,
                }))
              }
              className="mx-auto flex w-fit flex-col gap-0 max-xl:h-full max-xl:justify-between xl:gap-2"
            >
              {Object.entries(regions).map(([region, regionInfo]) => (
                <div className="flex items-center gap-3" key={region}>
                  <RadioGroupItem
                    value={region}
                    id={region}
                    checked={region === summary.region}
                    className="max-xl:size-3.5 max-xl:border-[1px]"
                  />
                  {/* flag icon */}
                  <div className="relative size-6 xl:size-8">
                    <Image
                      src={regionInfo.iconImg}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="whitespace-nowrap max-xl:text-xs">
                    {regionInfo.label}
                  </span>
                </div>
              ))}
            </RadioGroup>

            {/* Maps */}
            <div className="relative hidden xl:block xl:h-full">
              {summary.region && (
                <Image
                  src={regions[summary.region].mapImg}
                  alt=""
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
      ),
    },
    // 3 - Choose the starter and final rank
    {
      canProceed:
        summary.starterRank &&
        summary.starterTier >= 0 &&
        summary.finalRank &&
        summary.finalTier >= 0 &&
        summary.lp,
      content: (
        <div className="flex h-full flex-col items-center gap-2">
          {/* Start rank and tier */}
          <h3 className="text-[14px] xl:text-3xl">Choose the starter rank</h3>
          <div className="hide-scrollbar w-full shrink-0 overflow-x-auto">
            <div className="-my-1.5 mx-auto flex w-max items-center gap-1 py-1.5">
              {Object.keys(ranks).map((rank) => (
                <RankCard
                  key={rank}
                  rank={rank as Rank}
                  currentRank={summary.starterRank}
                  onClick={() =>
                    setSummary((prev) => ({
                      ...prev,
                      starterRank: rank as Rank,
                    }))
                  }
                />
              ))}
            </div>
          </div>

          {/* Start Tier */}
          <p className="font-light max-xl:text-sm">Which Tier?</p>
          <TierSlider
            tiers={tiers}
            value={[summary.starterTier]}
            onValueChange={(value) =>
              setSummary((prev) => ({
                ...prev,
                starterTier: value[0],
              }))
            }
          />

          {/* LP */}
          <p className="font-light max-xl:text-sm">How much LP do you have?</p>
          {/* <div className="hide-scrollbar -my-1.5 flex w-full shrink-0 items-center justify-start gap-2 overflow-x-auto py-1.5 xs:justify-center xl:gap-6"> */}
          <div className="hide-scrollbar w-full shrink-0 overflow-x-auto">
            <div className="-my-1.5 mx-auto flex w-max items-center gap-1 py-1.5 xl:gap-6">
              {lps.map((x) => (
                <div
                  key={x}
                  className={cn(
                    'cursor-pointer whitespace-nowrap rounded-lg px-2.5 py-1 font-light max-xl:text-xs xl:px-5',
                    x === summary.lp
                      ? 'bg-[#e3e3e3] text-black shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
                      : 'bg-[#d9d9d9]/40'
                  )}
                  onClick={() => setSummary((prev) => ({ ...prev, lp: x }))}
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
          {/* Final rank and tier */}
          <h3 className="text-[14px] xl:mt-5 xl:text-3xl">
            Where do you want to get?
          </h3>
          <div className="hide-scrollbar w-full shrink-0 overflow-x-auto">
            <div className="-my-1.5 mx-auto flex w-max items-center gap-1 py-1.5">
              {Object.keys(ranks).map((rank) => (
                <RankCard
                  key={rank}
                  rank={rank as Rank}
                  currentRank={summary.finalRank}
                  onClick={() =>
                    setSummary((prev) => ({
                      ...prev,
                      finalRank: rank as Rank,
                    }))
                  }
                />
              ))}
            </div>
          </div>
          <p className="font-light max-xl:text-sm">Which Tier?</p>
          <TierSlider
            tiers={tiers}
            value={[summary.finalTier]}
            onValueChange={(value) =>
              setSummary((prev) => ({
                ...prev,
                finalTier: value[0],
              }))
            }
          />
        </div>
      ),
    },
    // 4 - Rank up solo ou duo?
    {
      canProceed: summary.typeOfClimb,
      content: (
        <div className="flex h-full flex-col gap-4 max-xl:px-3">
          <h3 className="text-[14px] xl:text-3xl">Rank up solo ou duo?</h3>

          <div className="flex-center h-full flex-1 gap-3 max-xs:flex-col xl:gap-20">
            {Object.entries(typeOfClimb).map(([k, v]) => (
              <div
                className={cn(
                  'relative flex h-full w-full max-w-[350px] cursor-pointer flex-col items-center justify-end overflow-hidden rounded-[30px] p-3 xl:p-10',
                  k === summary.typeOfClimb
                    ? 'shadow-[0px_0px_15px_0px_rgba(0,_255,_224,_0.49)] outline outline-2 outline-blue-400 xl:shadow-[0px_0px_20px_0px_rgba(0,_255,_224,_0.49)]'
                    : 'shadow-lg'
                )}
                key={k}
                onClick={() =>
                  setSummary((prev) => ({
                    ...prev,
                    typeOfClimb: k,
                  }))
                }
              >
                <Image src={v.bg} fill className="object-cover" alt="" />
                <span className="z-10 text-4xl font-bold capitalize xl:text-8xl">
                  {k}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // 5 - Fill in your account details so we can boost it!
    {
      canProceed: summary.account.length > 3,
      content: (
        <div className="flex h-full flex-col gap-4">
          <h3 className="text-[14px] xl:text-3xl">
            Fill in your account details so we can boost it!
          </h3>

          <div className="flex-center h-full flex-1 gap-3 xl:gap-20">
            {/* image */}
            <div
              className={cn(
                'relative flex h-full w-[350px] cursor-pointer flex-col items-center justify-end overflow-hidden rounded-[30px] p-5 shadow-lg max-xs:hidden xl:p-10'
              )}
            >
              <Image
                src={
                  typeOfClimb[summary.typeOfClimb as keyof typeof typeOfClimb]
                    ?.bg
                }
                fill
                className="object-cover"
                alt=""
              />
              <span className="z-10 text-4xl font-bold capitalize xl:text-8xl">
                {summary.typeOfClimb}
              </span>
            </div>

            <Form {...form}>
              <form onSubmit={() => {}} className="h-full w-[350px] text-start">
                <FormField
                  name="user"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">User</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="KDAgragas@email.com"
                          value={summary.account}
                          maxLength={20}
                          onChange={(ev) =>
                            setSummary((prev) => ({
                              ...prev,
                              account: ev.target.value,
                            }))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mt-2 xl:mt-5">
                      <FormLabel className="">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="**********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="mt-5 overflow-hidden text-[10px] font-extralight sm:text-justify xl:text-sm">
                  esse texto da uma explicada na segurancá e que nao tem
                  problema por a senha dele aqui e bla bla bla Lörem ipsum ninde
                  sperefel vanar fastän ofang kroda inte telell. Sehena
                  hexanade, pren rerat, och olig såsom nätvandra. Föliligen suk
                  dösonyss för att religen de orik megande att bektigt.{' '}
                </p>
              </form>
            </Form>
          </div>
        </div>
      ),
    },
    // 6 - Choose the Lanes and champions that will be played
    {
      canProceed: summary.lanes.length > 0,
      content: (
        <div className="flex h-full flex-col justify-between gap-4">
          <div className="flex w-full flex-col items-center">
            <h3 className="max-w-[700px] text-center text-[14px] leading-4 xl:text-3xl">
              We are almost finished, now choose the Lanes and champions that
              will be played
            </h3>

            <div className="flex w-full flex-1 flex-col">
              <h4 className="xl:text-2xl">Choose the lane</h4>
              <div className="hide-scrollbar mt-2 overflow-x-auto">
                <div className="mx-auto flex w-max items-center gap-2 py-2 xl:gap-8">
                  {Object.keys(lanes).map((lane) => (
                    <LaneCard
                      key={lane}
                      lane={lane as Lane}
                      highlight={summary.lanes.includes(lane as Lane)}
                      onClick={() => handleSummaryArrayChange(lane, 'lanes')}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h4 className="mt-1 xl:mt-6 xl:text-2xl">
              Choose up to 3 champions that will be used when we play for you
            </h4>
            <p className="text-muted-foreground max-xl:text-xs">
              {`If you don't have a champion or lane preference, don't worry, just don't fill in these fields.`}
            </p>
            <div className="hide-scrollbar w-full overflow-x-auto">
              <div className="mx-auto mt-2 flex w-max gap-2 xl:gap-8">
                {Object.entries(champions).map(([champion, championInfo]) => (
                  <div
                    className={cn(
                      'relative size-[60px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-8 xl:size-[110px]',
                      summary.champions.includes(champion as Champion)
                        ? 'border-[#e3e3e3]/80 shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)]'
                        : 'border-[#21232d]/40'
                    )}
                    key={champion}
                    title={champion}
                    onClick={() =>
                      handleSummaryArrayChange(champion, 'champions')
                    }
                  >
                    <Image
                      src={championInfo.iconImg}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // 7 - We have everything we need to complete your order
    {
      canProceed: true,
      content: (
        <div className="flex h-full flex-col items-center gap-2 xl:gap-4">
          <h3 className="shadow-white text-shadow-xs xl:text-3xl">
            Right! We have everything we need to complete your order
          </h3>

          <p className="max-w-[800px] text-muted-foreground max-xl:text-[10px]">
            But if you want we have some add-ons available, take a look and if
            you are satisfied, just add to cart using the button on the side!
          </p>

          <div className="flex-center h-full w-full flex-1 gap-5 px-1 xl:gap-20">
            {/* Addons cards */}
            <div className="h-full w-full max-w-[350px] flex-1 space-y-2">
              {Object.keys(addons).map((addon) => (
                <AddonCard
                  key={addon}
                  addon={addon as Addon}
                  highlight={summary.addons.includes(addon as Addon)}
                  onClick={() => handleSummaryArrayChange(addon, 'addons')}
                />
              ))}
            </div>

            {/* Image */}
            <div className="relative h-full w-full max-w-[350px] flex-1 overflow-hidden rounded-[30px] shadow-lg max-sm:hidden">
              <Image
                src="/images/final-order-step.jpg"
                fill
                className="object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nSteps = orderSteps.length;

  const [currentOrderStepIndex, setCurrentOrderStepIndex] = useState(0);

  const currentOrderStep = orderSteps[currentOrderStepIndex];

  function handlePreviousStep() {
    if (currentOrderStepIndex == 0) {
      return;
    }
    setCurrentOrderStepIndex((prev) => prev - 1);
  }

  function handleNextStep() {
    if (currentOrderStepIndex == nSteps - 1) {
      return;
    }
    setCurrentOrderStepIndex((prev) => prev + 1);
  }

  function submitOrder() {
    router.push('/cart');
  }

  // console.log(summary);

  function handleSummaryArrayChange(value: string, arrayKey: string): void {
    const array = summary[arrayKey as keyof typeof summary] as string[];
    setSummary((prev) => {
      if (array.includes(value)) {
        return {
          ...prev,
          [arrayKey]: array.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [arrayKey]: [...array, value],
        };
      }
    });
  }

  return (
    <div className="flex-center py-4">
      <div className="flex h-full w-full max-w-[1580px] flex-col overflow-hidden rounded-[30px] bg-black/20 xl:grid xl:max-h-[720px] xl:grid-cols-[1fr_3fr]">
        {/* Order summary */}
        <div className="flex max-h-[720px] flex-col xl:overflow-y-auto">
          {/* header */}
          <div className="flex-center gap-1 py-3 xl:py-7">
            <h2 className="text-xl font-light xl:text-4xl">Order Summary</h2>
          </div>

          {/* field - desktop only */}
          <div className="flex flex-1 flex-col max-xl:hidden">
            {/* Game / Region */}
            <div className="grid grid-cols-2 bg-[#d9d9d9]/40 py-2 font-light">
              <span>Game</span>
              <span>Region</span>
            </div>
            <div className="grid grid-cols-2 py-3">
              <div className="flex-center">
                {summary.game ? (
                  <Image
                    src={games[summary.game].iconImg}
                    width={33}
                    height={33}
                    alt=""
                  />
                ) : (
                  '-'
                )}
              </div>
              <div className="flex-center">
                {summary.region ? (
                  <Image
                    src={regions[summary.region].iconImg}
                    width={33}
                    height={33}
                    alt=""
                  />
                ) : (
                  '-'
                )}
              </div>
            </div>

            {/* Starter Rank / Final Rank */}
            <div className="grid grid-cols-2 bg-[#d9d9d9]/40 py-2 font-light">
              <span>Starter Rank</span>
              <span>Final Rank</span>
            </div>
            <div className="grid grid-cols-2 py-3">
              <div className="flex-center flex-col !justify-start">
                {summary.starterRank ? (
                  <>
                    <Image
                      src={ranks[summary.starterRank].iconImg}
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-md bg-[#e3e3e3] shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400"
                    />
                    <span className="mt-1 text-xs capitalize text-muted-foreground">
                      {summary.starterRank} {tiers[summary.starterTier]}
                    </span>
                    <span className="text-xs">
                      {summary.lp} {summary.lp && 'LP'}
                    </span>
                  </>
                ) : (
                  '-'
                )}
              </div>
              <div className="flex-center flex-col !justify-start">
                {summary.finalRank ? (
                  <>
                    <Image
                      src={ranks[summary.finalRank].iconImg}
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-md bg-[#e3e3e3] shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400"
                    />
                    <span className="mt-1 text-xs capitalize text-muted-foreground">
                      {summary.finalRank} {tiers[summary.finalTier]}
                    </span>
                  </>
                ) : (
                  '-'
                )}
              </div>
            </div>

            {/* Account  / Type of climb */}
            <div className="grid grid-cols-2 bg-[#d9d9d9]/40 py-2 font-light">
              <span>Account</span>
              <span>Type of climb</span>
            </div>
            <div className="grid grid-cols-2 py-3 font-light">
              <span>{summary.account || '-'}</span>
              <span className="capitalize">{summary.typeOfClimb || '-'}</span>
            </div>

            {/* Lanes / Champions */}
            <div className="grid grid-cols-2 bg-[#d9d9d9]/40 py-2 font-light">
              <span>Lanes</span>
              <span>Champions</span>
            </div>
            <div className="grid grid-cols-2 py-3">
              {/* Lanes icons */}
              <div className="flex-center gap-3">
                {summary.lanes.length > 0
                  ? summary.lanes.map((lane) => (
                      <LaneIcon key={lane} lane={lane} className="size-9" />
                    ))
                  : '-'}
              </div>

              {/* Champions icons */}
              <div className="flex-center gap-3">
                <div className="flex-center gap-3">
                  {summary.champions.length > 0
                    ? summary.champions.map((champion) => (
                        <Image
                          src={champions[champion].iconImg}
                          key={champion}
                          alt=""
                          width={40}
                          height={40}
                          className="rounded-md border-[4px] border-muted-foreground bg-gradient-to-b from-white/40 to-[#aeaeae]/40"
                        />
                      ))
                    : '-'}
                </div>
              </div>
            </div>

            {/* Addons */}
            <div className="grid grid-cols-2 bg-[#d9d9d9]/40 py-2 font-light">
              <span>Addons</span>
              <span></span>
            </div>
            <div className="flex-1">
              {summary.addons.length > 0 ? (
                <div className="flex-center flex-wrap gap-3 gap-y-0 py-3 font-light">
                  {summary.addons.map((addon, i) => {
                    const content = addons[addon].label;

                    const separator =
                      i < summary.addons.length - 1 ? <span>·</span> : '';
                    return (
                      <>
                        <span key={addon} className="whitespace-nowrap">
                          {content}
                        </span>
                        {separator}
                      </>
                    );
                  })}
                </div>
              ) : (
                '-'
              )}
            </div>
          </div>

          {/* totals */}
          <div className="flex items-center justify-between px-5 pb-3 pt-0 xl:bg-[#D9D9D91A] xl:p-5">
            <FinishButton onClick={submitOrder}>Send to Cart</FinishButton>
            <Button
              variant={'dark'}
              className="h-[30px] rounded-md text-xl xl:h-12 xl:rounded-xl xl:text-4xl"
            >
              $1200
            </Button>
          </div>
        </div>

        {/* Order steps*/}
        <div className="flex h-full flex-col overflow-hidden bg-gradient-to-br from-[#ebebeb]/40 to-[#a6a6a6]/40 px-5 py-3 xl:px-10 xl:py-7">
          <div className="space-y-2">
            <h2 className="text-xl xl:text-4xl">Order Request</h2>
            <p className="text-muted-foreground max-xl:text-xs">
              Place your order by selecting the options and filling in the
              fields
            </p>
          </div>

          {/* Mutable content */}
          <div className="hide-scrollbar flex-1 overflow-y-auto overflow-x-hidden pb-6 xl:pt-3">
            {orderSteps[currentOrderStepIndex].content}
          </div>

          {/* Navigation */}
          <div className="flex-center gap-3 pt-2 xl:gap-5">
            {/* Previous Button */}
            <div className="flex w-[250px] justify-end">
              <Button
                size="elojob-order-step"
                className={cn(
                  'self-end',
                  currentOrderStepIndex === 0 ? 'invisible' : ''
                )}
                variant={'secondary'}
                onClick={handlePreviousStep}
              >
                Return
              </Button>
            </div>

            {/* Navigation dots */}
            <div className="flex-center gap-1.5 max-xs:hidden xl:gap-2">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'size-[10px] rounded-full xl:size-4',
                    index === currentOrderStepIndex
                      ? 'bg-gradient-to-b from-[#0096C6] to-[#76DEFF] shadow-[0px_0px_5px_0px_rgba(0,_255,_224,_0.49)]'
                      : 'bg-secondary'
                  )}
                ></div>
              ))}
            </div>

            {/* Next button */}
            <div className="flex w-[250px] justify-start">
              {currentOrderStepIndex < nSteps - 1 ? (
                <Button
                  size="elojob-order-step"
                  className=""
                  variant={'secondary'}
                  onClick={handleNextStep}
                  // disabled={!currentOrderStep.canProceed}
                  disabled={false}
                >
                  Next
                </Button>
              ) : (
                <Button
                  size="elojob-order-step"
                  className=""
                  variant={'secondary'}
                  onClick={submitOrder}
                  disabled={!currentOrderStep.canProceed}
                >
                  Finish Order
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

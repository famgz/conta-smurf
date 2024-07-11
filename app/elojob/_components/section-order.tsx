'use client';

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
import { Slider } from '@/app/_components/ui/slider';
import { cn } from '@/app/_lib/utils';
import { Addon, addons } from '@/app/_types/order/addon';
import { Champion, champions } from '@/app/_types/order/champion';
import { Game, games } from '@/app/_types/order/game';
import { Lane, lanes } from '@/app/_types/order/lane';
import { Rank, ranks } from '@/app/_types/order/rank';
import { Region, regions } from '@/app/_types/order/region';
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
    {
      canProceed: summary.game,
      content: (
        <div className="flex h-full flex-col gap-4">
          <h3 className="text-3xl">Choose the game you want to boost</h3>

          <div className="flex-center h-full flex-1 gap-20">
            {Object.entries(games).map(([game, gameInfo]) => (
              <div
                className={cn(
                  'relative flex h-full w-[350px] cursor-pointer flex-col items-center justify-end overflow-hidden rounded-[30px] p-10',
                  game === summary.game
                    ? 'shadow-[0px_0px_30px_0px_rgba(0,_255,_224,_0.49)] outline outline-2 outline-blue-400'
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
                <Image
                  src={gameInfo.bgImg}
                  fill
                  className="object-cover"
                  alt=""
                />
                <Image
                  src={gameInfo.titleImg}
                  className="z-10"
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      canProceed: summary.region,
      content: (
        <div className="flex h-full flex-col gap-4">
          <h3 className="text-3xl">Choose the region of the account</h3>
          <div className="grid grid-cols-2">
            {/* Flags */}
            <RadioGroup
              onValueChange={(region: Region) =>
                setSummary((prev) => ({
                  ...prev,
                  region,
                }))
              }
              className="mx-auto flex w-fit flex-col gap-2"
            >
              {Object.entries(regions).map(([region, regionInfo]) => (
                <div className="flex items-center gap-3" key={region}>
                  <RadioGroupItem
                    value={region}
                    id={region}
                    checked={region === summary.region}
                    className=""
                  />
                  <Image
                    src={regionInfo.iconImg}
                    width={33}
                    height={33}
                    alt=""
                  />
                  <span className="whitespace-nowrap">{regionInfo.label}</span>
                </div>
              ))}
            </RadioGroup>

            {/* Maps */}
            <div className="relative h-full">
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
          <h3 className="text-3xl">Choose the starter and final rank</h3>
          <div className="flex-center gap-1">
            {Object.entries(ranks).map(([rank, rankInfo]) => (
              <div
                className={cn(
                  'relative size-[80px] cursor-pointer rounded-md bg-[#21232d]/10',
                  rank === summary.starterRank
                    ? 'bg-[#e3e3e3] shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
                    : ''
                )}
                key={rank}
                title={rank}
                onClick={() =>
                  setSummary((prev) => ({
                    ...prev,
                    starterRank: rank as Rank,
                  }))
                }
              >
                <Image
                  src={rankInfo.iconImg}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Start Tier */}
          <p className="font-light">Which Tier?</p>
          <div className="w-full max-w-[380px] space-y-2">
            <div className="flex w-full justify-between px-1">
              {tiers.map((x) => (
                <span key={x} className="inline-block w-3 text-center">
                  {x}
                </span>
              ))}
            </div>
            <Slider
              defaultValue={[0]}
              max={3}
              step={1}
              value={[summary.starterTier]}
              onValueChange={(value) =>
                setSummary((prev) => ({
                  ...prev,
                  starterTier: value[0],
                }))
              }
              className={cn('w-full')}
            />
          </div>

          {/* LP */}
          <p className="font-light">How much LP do you have?</p>
          <div className="flex-center gap-6">
            {lps.map((x) => (
              <div
                key={x}
                className={cn(
                  'cursor-pointer rounded-lg px-5 py-1 font-light',
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
          {/* Final rank and tier */}
          <h3 className="mt-5 text-3xl">Where do you want to get?</h3>
          <div className="flex-center gap-1">
            {Object.entries(ranks).map(([rank, rankInfo]) => (
              <div
                className={cn(
                  'relative size-[80px] cursor-pointer rounded-md bg-[#21232d]/10',
                  rank === summary.finalRank
                    ? 'bg-[#e3e3e3] shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
                    : ''
                )}
                key={rank}
                title={rank}
                onClick={() =>
                  setSummary((prev) => ({
                    ...prev,
                    finalRank: rank as Rank,
                  }))
                }
              >
                <Image
                  src={rankInfo.iconImg}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="font-light">Which Tier?</p>
          <div className="w-full max-w-[380px] space-y-2">
            <div className="flex w-full justify-between px-1">
              {tiers.map((x) => (
                <span key={x} className="inline-block w-3 text-center">
                  {x}
                </span>
              ))}
            </div>
            <Slider
              defaultValue={[0]}
              max={3}
              step={1}
              value={[summary.finalTier]}
              onValueChange={(value) =>
                setSummary((prev) => ({
                  ...prev,
                  finalTier: value[0],
                }))
              }
              className={cn('w-full')}
            />
          </div>
        </div>
      ),
    },
    {
      canProceed: summary.typeOfClimb,
      content: (
        <div className="flex h-full flex-col gap-4">
          <h3 className="text-3xl">Rank up solo ou duo?</h3>

          <div className="flex-center h-full flex-1 gap-20">
            {Object.entries(typeOfClimb).map(([k, v]) => (
              <div
                className={cn(
                  'relative flex h-full w-[350px] cursor-pointer flex-col items-center justify-end overflow-hidden rounded-[30px] p-10',
                  k === summary.typeOfClimb
                    ? 'shadow-[0px_0px_30px_0px_rgba(0,_255,_224,_0.49)] outline outline-2 outline-blue-400'
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
                <span className="z-10 text-8xl font-bold capitalize">{k}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      canProceed: summary.account.length > 3,
      content: (
        <div className="flex h-full flex-col gap-4">
          <h3 className="text-3xl">
            Fill in your account details so we can boost it!
          </h3>

          <div className="flex-center h-full flex-1 gap-20">
            <div
              className={cn(
                'relative flex h-full w-[350px] cursor-pointer flex-col items-center justify-end overflow-hidden rounded-[30px] p-10 shadow-lg'
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
              <span className="z-10 text-8xl font-bold capitalize">
                {summary.typeOfClimb}
              </span>
            </div>

            <Form {...form}>
              <form onSubmit={() => {}} className="h-full w-[350px] text-start">
                <FormField
                  name="user"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-2xl">User</FormLabel>
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
                    <FormItem className="mt-5">
                      <FormLabel className="text-2xl">Password</FormLabel>
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
                <p className="mt-5 text-justify text-sm font-extralight">
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
    {
      canProceed: summary.lanes.length > 0,
      content: (
        <div className="flex h-full flex-col items-center gap-4">
          <h3 className="max-w-[700px] text-center text-3xl">
            We are almost finished, now choose the Lanes and champions that will
            be played
          </h3>

          <div className="flex flex-1 flex-col justify-end">
            <h4 className="text-2xl">Choose the lane</h4>
            <div className="flex-center mt-2 gap-8">
              {Object.entries(lanes).map(([lane, laneInfo]) => (
                <div
                  className={cn(
                    'h-[140px] w-[110px] cursor-pointer rounded-sm p-1 font-medium',
                    summary.lanes.includes(lane as Lane)
                      ? 'bg-[#e3e3e3] shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
                      : 'bg-[#21232d]/40 text-muted-foreground'
                  )}
                  key={lane}
                  title={lane}
                  onClick={() => handleSummaryArrayChange(lane, 'lanes')}
                >
                  <Image
                    src={laneInfo.iconImgs.bright}
                    width={100}
                    height={100}
                    alt=""
                  />
                  <span
                    className={cn(
                      'text-2xl',
                      summary.lanes.includes(lane as Lane)
                        ? 'text-gradient-brass'
                        : ''
                    )}
                  >
                    {laneInfo.label}
                  </span>
                </div>
              ))}
            </div>

            <h4 className="mt-6 text-2xl">
              Choose up to 3 champions that will be used when we play for you
            </h4>
            <p className="text-muted-foreground">
              {`If you don't have a champion or lane preference, don't worry, just don't fill in these fields.`}
            </p>
            <div className="flex-center mt-2 gap-8">
              {Object.entries(champions).map(([champion, championInfo]) => (
                <div
                  className={cn(
                    'relative h-[120px] w-[120px] cursor-pointer overflow-hidden rounded-2xl border-8',
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
      ),
    },
    {
      canProceed: true,
      content: (
        <div className="flex h-full flex-col items-center gap-4">
          <h3 className="text-3xl shadow-white text-shadow-xs">
            Right! We have everything we need to complete your order
          </h3>

          <p className="max-w-[800px] text-muted-foreground">
            But if you want we have some add-ons available, take a look and if
            you are satisfied, just add to cart using the button on the side!
          </p>

          <div className="flex-center h-full flex-1 gap-20">
            {/* Addons cards */}
            <div className="h-full w-full max-w-[380px] space-y-2">
              {Object.entries(addons).map(([addon, addonInfo]) => (
                <div
                  className={cn(
                    'flex w-full cursor-pointer items-center justify-between whitespace-nowrap rounded-2xl p-2 pl-4 text-3xl font-normal shadow-md',
                    summary.addons.includes(addon as Addon)
                      ? 'bg-gradient-to-b from-white/40 to-[#aeaeae]/40 shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
                      : 'bg-[#21232d]/40'
                  )}
                  key={addon}
                  onClick={() => handleSummaryArrayChange(addon, 'addons')}
                >
                  <span>{addonInfo.label}</span>
                  <span
                    className={cn(
                      'flex-center min-w-[110px] rounded-2xl px-4 py-1 font-extralight',
                      summary.addons.includes(addon as Addon)
                        ? 'bg-[#21232d]/40'
                        : 'bg-[#21232d]/80'
                    )}
                  >
                    {addonInfo.percentual
                      ? `+${addonInfo.percentual * 100}%`
                      : 'Free'}
                  </span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div
              className={cn(
                'relative flex h-full w-[350px] cursor-pointer flex-col items-center justify-end overflow-hidden rounded-[30px] p-10 shadow-lg'
              )}
            >
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
      <div className="grid h-full max-h-[720px] w-full max-w-[1580px] grid-cols-[1fr_3fr] overflow-hidden rounded-[30px] bg-black/20">
        {/* Order summary */}
        <div className="max-h-[720px] overflow-y-auto">
          <div className="flex-center gap-1 py-7">
            <h2 className="text-4xl font-light">Order Summary</h2>
          </div>

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
          {summary.addons.length > 0 ? (
            <div className="flex-center flex-1 flex-wrap gap-3 gap-y-0 py-3 font-light">
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

        {/* Order steps*/}
        <div className="flex max-h-[720px] flex-col overflow-hidden bg-gradient-to-br from-[#ebebeb]/40 to-[#a6a6a6]/40 px-10 py-7">
          <div className="space-y-2">
            <h2 className="text-4xl">Order Request</h2>
            <p className="text-muted-foreground">
              Place your order by selecting the options and filling in the
              fields
            </p>
          </div>

          {/* Mutable content */}
          <div className="bg-red-4000 hide-scrollbar flex-1 overflow-auto pb-6 pt-3">
            {orderSteps[currentOrderStepIndex].content}
          </div>

          {/* Navigation */}
          <div className="flex-center gap-5">
            {/* Previous Button */}
            <div className="flex w-[250px] justify-end">
              <Button
                className={cn(
                  'self-end p-6 text-3xl',
                  currentOrderStepIndex === 0 ? 'invisible' : ''
                )}
                variant={'secondary'}
                onClick={handlePreviousStep}
              >
                Return
              </Button>
            </div>

            {/* Navigation dots */}
            <div className="flex-center gap-2">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'size-4 rounded-full',
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
                  className="p-6 text-3xl"
                  variant={'secondary'}
                  onClick={handleNextStep}
                  disabled={!currentOrderStep.canProceed}
                >
                  Next
                </Button>
              ) : (
                <Button
                  className="p-6 text-3xl"
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

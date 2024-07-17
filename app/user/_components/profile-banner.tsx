import BoostIcon from '@/app/_components/icons/boost';
import ChallengeExpertiseIcon from '@/app/_components/icons/challenge-expertise';
import ChallengeImaginationIcon from '@/app/_components/icons/challenge-imagination';
import ChallengePepeIcon from '@/app/_components/icons/challenge-pepe';
import ChallengeTeamworkIcon from '@/app/_components/icons/challenge-teamwork';
import ChallengeVeterancyIcon from '@/app/_components/icons/challenge-veterancy';
import EditIcon from '@/app/_components/icons/edit';
import LaneIcon from '@/app/_components/icons/lane';
import { Button } from '@/app/_components/ui/button';
import { Champion, champions } from '@/app/_types/order/champion';
import { Lane } from '@/app/_types/order/lane';
import Image from 'next/image';

export default function ProfileBanner() {
  const userLanes: Lane[] = [Lane.BOTTOM, Lane.JUNGLE];
  const userChampions: Champion[] = [Champion.CHAMPION_1, Champion.CHAMPION_2];

  return (
    <div className="relative flex h-full min-w-[300px] max-w-[400px] flex-col overflow-hidden rounded-[30px] bg-dark">
      {/* header with background image */}
      <div className="relative max-h-[160px] min-h-[120px] flex-1">
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
      <div className="hide-scrollbar flex-auto overflow-y-auto">
        <div className="flex h-full flex-1 flex-col items-center justify-between gap-2 px-10 pb-5 2xl:px-16">
          {/* avatar */}
          <div className="absolute">
            <div className="relative mx-auto -mt-20 size-40 overflow-hidden rounded-full">
              <Image
                src="/images/profile.jpg"
                fill
                alt="profile image"
                className="object-cover"
              />
            </div>
          </div>

          {/* name and title */}
          <div className="mt-[90px]">
            <p className="text-3xl">User12345</p>
            <p className="font-light">The feeder</p>
          </div>

          {/* achievment badges */}
          <div className="test-border flex h-11 items-center gap-2 rounded-lg bg-folder p-2.5">
            <ChallengePepeIcon />
            <ChallengeTeamworkIcon />
            <ChallengeExpertiseIcon />
            <ChallengeImaginationIcon />
            <ChallengeVeterancyIcon />
          </div>

          {/* description */}
          <p className="text-sm font-light">
            Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
            Sehena hexanade, pren rerat, och olig såsom nätvandra.
          </p>

          {/* rank */}
          <div className="relative size-24 shrink-0">
            <Image
              src="/images/icons/rank-gold.png"
              fill
              alt="rank image"
              className="object-contain"
            />
          </div>

          <div>
            {/* lanes */}
            <div className="flex-center gap-4">
              {userLanes.map((lane) => (
                <LaneIcon lane={lane} className="size-12 p-2" key={lane} />
              ))}
            </div>

            {/* champions */}
            <div className="flex-center mt-3 gap-4">
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
          </div>

          {/* boost indication */}
          <div className="flex-center gap-2 whitespace-nowrap rounded-xl bg-menu px-4 py-1 text-lg">
            Boost on going!
            <BoostIcon />
          </div>

          {/* warn login message */}
          <p className="text-muted-foreground">
            Please, don`t login in your account right now!
          </p>
        </div>
      </div>
    </div>
  );
}

import { cn } from '@/app/_lib/utils';
import { Rank, ranks } from '@/app/_types/order/rank';
import Image from 'next/image';

interface RankCardProps {
  rank: Rank;
  currentRank: string;
  onClick: () => void;
}

export default function RankCard({
  rank,
  currentRank,
  onClick,
}: RankCardProps) {
  const rankItem = ranks[rank];

  return (
    <div
      className={cn(
        'relative size-[60px] shrink-0 cursor-pointer rounded-md bg-[#21232d]/10 xl:size-[80px]',
        rank === currentRank
          ? 'bg-[#e3e3e3] shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
          : ''
      )}
      key={rank}
      title={rank}
      onClick={onClick}
    >
      <Image src={rankItem.iconImg} alt="" fill className="object-contain" />
    </div>
  );
}

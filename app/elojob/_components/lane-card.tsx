import { cn } from '@/app/_lib/utils';
import { Lane, lanes } from '@/app/_types/order/lane';
import Image from 'next/image';

interface LaneCardProps {
  lane: Lane;
  highlight: boolean;
  onClick: () => void;
}

export default function LaneCard({
  lane,
  highlight = false,
  onClick,
}: LaneCardProps) {
  const laneInfo = lanes[lane];

  return (
    <div
      className={cn(
        'aspect-[110/140] w-[60px] shrink-0 cursor-pointer rounded-sm p-1 font-medium 2xl:w-[110px]',
        highlight
          ? 'bg-[#e3e3e3] shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
          : 'bg-[#21232d]/40 text-muted-foreground'
      )}
      title={lane}
      onClick={onClick}
    >
      <Image src={laneInfo.iconImgs.bright} width={100} height={100} alt="" />
      <span
        className={cn(
          'text-xs 2xl:text-2xl',
          highlight ? 'text-gradient-brass' : ''
        )}
      >
        {laneInfo.label}
      </span>
    </div>
  );
}

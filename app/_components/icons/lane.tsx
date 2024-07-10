import { cn } from '@/app/_lib/utils';
import Image from 'next/image';

export type Lane = 'autofill' | 'bottom' | 'jungle' | 'mid' | 'support' | 'top';

interface LaneIconProps {
  lane: Lane;
  imageSize?: number;
  className?: string;
}

export default function LaneIcon({
  lane,
  className,
  imageSize,
}: LaneIconProps) {
  return (
    <Image
      src={`/images/icons/lane-${lane}.png`}
      alt={`Lane ${lane} icon`}
      width={imageSize || 36}
      height={imageSize || 36}
      className={cn(
        'h-fit w-fit rounded-lg bg-gradient-to-b from-white/40 to-[#aeaeae]/40 p-1 shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400',
        className
      )}
    />
  );
}

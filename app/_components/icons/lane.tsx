import { cn } from '@/app/_lib/utils';
import { Lane, lanes } from '@/app/_types/order/lane';
import Image from 'next/image';

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
  const laneInfo = lanes[lane];

  return (
    <Image
      src={laneInfo.iconImgs.default}
      alt={`Lane ${laneInfo.label} icon`}
      width={imageSize || 36}
      height={imageSize || 36}
      className={cn(
        'h-fit w-fit rounded-lg bg-gradient-to-b from-white/40 to-[#aeaeae]/40 p-1 shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400',
        className
      )}
    />
  );
}

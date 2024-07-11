import { cn } from '@/app/_lib/utils';
import { Champion, champions } from '@/app/_types/order/champion';
import Image from 'next/image';

interface ChampionIconProps {
  champion: Champion;
  imageSize?: number;
  className?: string;
}

export default function ChampionIcon({
  champion,
  className,
  imageSize,
}: ChampionIconProps) {
  const championInfo = champions[champion];

  return (
    <Image
      src={championInfo.iconImg}
      alt={`Champion ${championInfo.label} icon`}
      width={imageSize || 36}
      height={imageSize || 36}
      className={cn(
        'hover:shadow-blue rounded-md border-[6px] border-muted-foreground',
        className
      )}
    />
  );
}

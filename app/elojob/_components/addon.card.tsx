import { cn } from '@/app/_lib/utils';
import { Addon, addons } from '@/app/_types/order/addon';

interface AddonCardProps {
  addon: Addon;
  highlight: boolean;
  onClick: () => void;
}

export default function AddonCard({
  addon,
  highlight,
  onClick,
}: AddonCardProps) {
  const addonInfo = addons[addon];

  return (
    <div
      className={cn(
        'flex w-full cursor-pointer items-center justify-between gap-10 whitespace-nowrap rounded-lg p-1 !pl-4 font-normal shadow-md 2xl:rounded-2xl 2xl:p-2 2xl:text-3xl',
        highlight
          ? 'bg-gradient-to-b from-white/40 to-[#aeaeae]/40 shadow-[0px_0px_10px_0px_rgba(0,_255,_224,_0.49)] outline outline-1 outline-blue-400'
          : 'bg-[#21232d]/40'
      )}
      key={addon}
      onClick={onClick}
    >
      <span>{addonInfo.label}</span>
      <span
        className={cn(
          'flex-center w-[80px] rounded-lg px-4 py-1 font-extralight 2xl:w-[110px] 2xl:rounded-2xl',
          highlight ? 'bg-[#21232d]/40' : 'bg-[#21232d]/80'
        )}
      >
        {addonInfo.percentage ? `+${addonInfo.percentage * 100}%` : 'Free'}
      </span>
    </div>
  );
}

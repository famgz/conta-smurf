import { Slider } from '@/app/_components/ui/slider';

interface TierSliderProps {
  tiers: string[];
  value: number[];
  onValueChange: (value: any) => void;
}

export default function TierSlider({
  tiers,
  value,
  onValueChange,
}: TierSliderProps) {
  return (
    <div className="w-full max-w-[240px] space-y-2 xl:max-w-[380px]">
      <div className="flex w-full justify-between px-1">
        {tiers.map((x) => (
          <span
            key={x}
            className="inline-block w-3 text-center font-light max-xl:text-xs"
          >
            {x}
          </span>
        ))}
      </div>
      <Slider
        defaultValue={[0]}
        max={3}
        step={1}
        value={value}
        onValueChange={onValueChange}
        className=""
      />
    </div>
  );
}

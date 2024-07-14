import { cn } from '@/app/_lib/utils';
import Image from 'next/image';

interface AboutUsCardProps {
  imageUrl: string;
  title: string;
  text: string;
  index: number;
  className?: string;
}

export default function AboutUsCard({
  imageUrl,
  text,
  title,
  index,
  className,
}: AboutUsCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        'border-1 relative flex flex-col justify-end space-y-2 rounded-[30px] border border-brass/20 bg-gradient-to-br from-[#7b7b7b]/40 to-[#a6a6a6]/40 px-5 py-3 xl:h-[400px] xl:w-[300px] xl:space-y-4 xl:p-8',
        isEven ? 'xl:mt-5' : 'xl:mt-20',
        className
      )}
    >
      <h3
        className={cn(
          'text-gradient-brass whitespace-nowrap text-xl font-semibold xl:-mx-4 xl:text-center xl:text-3xl',
          isEven ? 'text-left' : 'text-right'
        )}
      >
        {title}
      </h3>

      <p className="text-justify text-xs font-light xl:text-base">{text}</p>

      <div
        className={cn(
          'absolute top-0 -translate-y-2/3',
          isEven
            ? 'max-xl:right-0 max-xl:translate-x-1/4'
            : 'max-xl:left-0 max-xl:-translate-x-1/4'
        )}
      >
        <div className="relative size-32 xl:size-64">
          <Image src={imageUrl} alt="" fill className="" />
        </div>
      </div>
    </div>
  );
}

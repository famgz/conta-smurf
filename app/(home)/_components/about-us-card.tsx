import { cn } from '@/app/_lib/utils';
import Image from 'next/image';

interface AboutUsCardProps {
  imageUrl: string;
  title: string;
  text: string;
  className?: string;
}

export default function AboutUsCard({
  imageUrl,
  text,
  title,
  className,
}: AboutUsCardProps) {
  return (
    <div
      className={cn(
        'border-1 relative flex h-[400px] w-[300px] flex-col justify-end space-y-4 rounded-[30px] border border-brass/20 bg-gradient-to-br from-[#7b7b7b]/40 to-[#a6a6a6]/40 p-8',
        className
      )}
    >
      <p className="text-gradient-brass -mx-4 text-[32px] font-semibold">
        {title}
      </p>

      <p className="text-justify font-light">{text}</p>

      <Image
        src={imageUrl}
        width={256}
        height={256}
        alt=""
        className="absolute top-0 -translate-y-2/3"
      />
    </div>
  );
}

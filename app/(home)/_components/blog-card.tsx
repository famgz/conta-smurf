import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';

export default function BlogCard() {
  return (
    <div className="flex aspect-square flex-col gap-2 rounded-[20px] bg-gradient-to-b from-[#7b7b7b]/50 to-[#a6a6a6]/50 p-3 xl:max-h-[400px] xl:min-h-[200px] xl:justify-between xl:gap-4 xl:rounded-[30px] xl:p-5">
      <div className="relative min-h-[50%] flex-1 overflow-hidden rounded-[20px] xl:min-h-[60%] xl:rounded-[30px]">
        <Image src="/images/blog.jpg" alt="" fill className="object-cover" />
      </div>

      <p className="xl:text-2xl">Blog title</p>

      <Button
        variant="link"
        className="!h-fit w-fit self-center !p-0 text-xs text-muted-foreground xl:text-sm"
      >
        See more
      </Button>
    </div>
  );
}

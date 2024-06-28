import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';

export default function BlogCard() {
  return (
    <div className="flex aspect-square max-h-[400px] min-h-[200px] flex-col justify-between gap-4 rounded-[30px] bg-gradient-to-b from-[#7b7b7b]/50 to-[#a6a6a6]/50 p-5">
      <div className="relative h-[60%] overflow-hidden rounded-[30px]">
        <Image src="/images/blog.jpg" alt="" fill className="object-cover" />
      </div>

      <p className="text-2xl">Blog title</p>

      <Button
        variant="link"
        className="w-fit self-center text-xs text-muted-foreground"
      >
        See more
      </Button>
    </div>
  );
}

import BlogCard from '@/app/(home)/_components/blog-card';
import { Button } from '@/app/_components/ui/button';
import { ScrollArea, ScrollBar } from '@/app/_components/ui/scroll-area';
import Image from 'next/image';

export default function Blog() {
  return (
    <div className="flex !max-h-[700px] !max-w-[1530px] flex-col">
      <h2 className="text-left text-6xl font-extrabold text-brass shadow-brass text-shadow-sm">
        Blog
      </h2>

      <div className="mt-4 grid grid-cols-[2fr_3fr] gap-5">
        {/* Main card */}
        <div className="flex aspect-square flex-col justify-between gap-5 rounded-[30px] bg-gradient-to-b from-[#7b7b7b]/50 to-[#a6a6a6]/50 p-6">
          <div className="relative min-h-[50%] overflow-hidden rounded-[30px]">
            <Image
              src="/images/blog.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-4xl">
            The Role of Smurf Accounts in the League of Legends Community
          </h3>
          <p className="line-clamp-4 font-light">
            A smurf account in League of Legends represents the creation of a
            second account by a player. While Riot Games recognizes the
            challenges this can present, it also sees positive opportunities
            associated with smurfing. Creating a smurf account can offer
            experienced players the chance to experience the game from a new
            perspective, test different strategies, and enjoy a gaming
            experience without the pressures associated with their high-level
            main accounts.
          </p>
          <Button
            variant="link"
            className="w-fit self-end text-2xl text-muted-foreground"
          >
            See more
          </Button>
        </div>

        {/* Card horizontal list */}
        <ScrollArea className="" type="auto">
          <div className="grid h-full w-max grid-flow-col grid-rows-2 gap-4 pb-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <BlogCard key={i} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

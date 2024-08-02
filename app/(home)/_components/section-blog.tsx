import BlogCard from '@/app/(home)/_components/blog-card';
import { Button } from '@/app/_components/ui/button';
import { ScrollArea, ScrollBar } from '@/app/_components/ui/scroll-area';
import Image from 'next/image';

export default function HomeBlogSection() {
  return (
    <div className="flex flex-col items-center gap-5 overflow-hidden !rounded-none max-xl:!max-w-[400px]">
      <h2 className="w-full text-left text-4xl font-extrabold text-brass shadow-brass text-shadow-sm xl:text-6xl">
        Blog
      </h2>

      <div className="flex flex-1 flex-col gap-5 xl:grid xl:grid-cols-[2fr_3fr]">
        {/* Main card */}
        <div className="flex flex-col gap-1 rounded-[30px] bg-gradient-to-b from-[#7b7b7b]/50 to-[#a6a6a6]/50 p-3 xs:p-6 min-[390px]:aspect-square md:gap-3 xl:justify-between">
          <div className="relative min-h-[50%] overflow-hidden rounded-[30px]">
            <Image
              src="/images/blog.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h3 className="line-clamp-2 text-lg leading-6 xs:text-xl 2xl:text-4xl">
            The Role of Smurf Accounts in the League of Legends Community
          </h3>
          <p className="text-justify font-light leading-3 max-2xl:overflow-hidden max-2xl:text-[10px] max-xl:flex-1 2xl:line-clamp-5 2xl:leading-5">
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
            className="!h-fit w-fit self-end !p-0 text-muted-foreground xl:text-2xl"
          >
            See more
          </Button>
        </div>

        {/* Card horizontal list */}
        <ScrollArea className="max-xl:h-[100px] max-xl:flex-auto" type="auto">
          <div className="grid grid-cols-2 gap-4 xl:h-full xl:w-max xl:grid-flow-col xl:grid-rows-2 xl:pb-6">
            {Array.from({ length: 20 }).map((_, i) => (
              <BlogCard key={i} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

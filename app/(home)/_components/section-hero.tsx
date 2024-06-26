import HeroCard from '@/app/(home)/_components/hero-card';
import Image from 'next/image';

export default function HomeHero() {
  return (
    <div className="flex flex-col gap-5 px-3">
      {/* Hero image */}
      <div className="relative mt-[-100px] flex-1 overflow-hidden rounded-[40px]">
        <Image
          src="/images/home-hero.jpg"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Cards */}
      <div className="hide-scrollbar flex justify-between gap-4 overflow-x-auto p-5">
        <HeroCard href="/" imageUrl="/images/accounts.png" />
        <HeroCard href="/elojob" imageUrl="/images/elojob.png" />
        <HeroCard href="/" imageUrl="/images/services.png" />
        <HeroCard href="/" imageUrl="/images/lootbox.png" />
        <HeroCard href="/" imageUrl="/images/cheats.png" />
      </div>
    </div>
  );
}

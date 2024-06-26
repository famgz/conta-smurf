import HeroCard from '@/app/(home)/_components/hero-card';
import Image from 'next/image';

export default function HomeHero() {
  return (
    <div className="flex flex-col gap-5 px-3">
      {/* Hero image */}
      <div className="mt-[-100px] flex flex-1 items-center justify-start rounded-[40px] bg-[url('/images/home-hero.jpg')] bg-cover bg-top">
        <div className="hidden space-y-5 pl-28 xl:block">
          <p className="text-brass text-shadow-sm shadow-brass text-9xl font-extrabold">
            Be a legend
          </p>
          <p className="mx-auto max-w-[500px] text-left font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            magni ipsa ducimus aspernatur recusandae quae, voluptate non
            necessitatibus illo, id pariatur repellendus velit? Fugiat iure cum
            tempora quibusdam? Officiis, dicta!
          </p>
        </div>
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

import HeroCard from '@/app/(home)/_components/hero-card';

export default function HomeHeroSection() {
  return (
    <div className="relative flex flex-col justify-end gap-5 pb-20 xl:px-3 xl:pb-0 xl:pt-3">
      {/* Hero image */}
      <div className="2xll:mt-[-100px] absolute inset-4 flex flex-1 items-center justify-start rounded-[40px] bg-[url('/images/home-hero.jpg')] bg-cover bg-top xl:static">
        <div className="space-y-5 pl-3 text-left xl:pl-28">
          <p className="text-3xl font-extrabold text-brass shadow-brass text-shadow-sm xl:text-9xl">
            Be a legend
          </p>
          <p className="mx-auto max-w-[200px] text-xs font-light xl:max-w-[500px] xl:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            magni ipsa ducimus aspernatur recusandae quae, voluptate non
            necessitatibus illo, id pariatur repellendus velit? Fugiat iure cum
            tempora quibusdam? Officiis, dicta!
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="hide-scrollbar z-10 flex flex-wrap justify-center gap-2 p-5 xl:flex-nowrap xl:gap-4 xl:overflow-x-auto">
        <HeroCard href="/" imageUrl="/images/accounts.png" />
        <HeroCard href="/elojob" imageUrl="/images/elojob.png" />
        <HeroCard href="/" imageUrl="/images/services.png" />
        <HeroCard href="/" imageUrl="/images/lootbox.png" />
        <HeroCard href="/" imageUrl="/images/cheats.png" />
      </div>
    </div>
  );
}

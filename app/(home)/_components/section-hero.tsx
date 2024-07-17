import HeroCard from '@/app/(home)/_components/hero-card';

export default function HomeHeroSection() {
  return (
    <div className="relative flex !max-w-[2000px] flex-col justify-end pb-20 xl:px-3 xl:pb-0 xl:pt-3 2xl:gap-5">
      {/* Hero image */}
      <div className="absolute inset-4 flex flex-1 items-center justify-start rounded-[40px] bg-[url('/images/home-hero.jpg')] bg-cover bg-top xl:static">
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
      <div className="hide-scrollbar z-10 flex flex-wrap justify-center gap-2 p-5 xl:flex-nowrap xl:justify-start xl:gap-4 xl:overflow-x-auto 2xl:justify-center">
        <HeroCard href="/" imageUrl="/images/accounts.png" />
        <HeroCard href="/elojob" imageUrl="/images/elojob.png" />
        <HeroCard href="/services" imageUrl="/images/services.png" />
        <HeroCard href="/lootbox" imageUrl="/images/lootbox.png" />
        <HeroCard href="/cheats" imageUrl="/images/cheats.png" />
      </div>
    </div>
  );
}

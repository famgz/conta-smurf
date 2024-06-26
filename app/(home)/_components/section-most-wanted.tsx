import MostWantedCard from '@/app/(home)/_components/most-wanted-card';

export default function MostWanted() {
  return (
    <div className="flex-center">
      <div className="h-fit w-full max-w-[1580px] rounded-[30px] bg-black/20 px-14 pb-14 pt-8">
        <h1 className="text-brass text-shadow-sm shadow-brass w-full text-left text-6xl font-extrabold uppercase">
          Most Wanted
        </h1>

        <div className="flex-center mt-5 flex-wrap gap-10">
          <MostWantedCard />
          <MostWantedCard />
          <MostWantedCard />
          <MostWantedCard />
          <MostWantedCard />
          <MostWantedCard />
          <MostWantedCard />
          <MostWantedCard />
        </div>
      </div>
    </div>
  );
}

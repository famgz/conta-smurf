import MostWantedCard from '@/app/(home)/_components/most-wanted-card';

export default function MostWanted() {
  return (
    <div className="flex-center">
      <div className="h-fit w-full max-w-[1580px] rounded-[30px] bg-black/20 px-14 pb-14 pt-8">
        <h2 className="w-full text-left text-6xl font-extrabold uppercase text-brass shadow-brass text-shadow-sm">
          Most Wanted
        </h2>

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

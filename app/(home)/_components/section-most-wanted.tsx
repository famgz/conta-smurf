import MostWantedCard from '@/app/(home)/_components/most-wanted-card';

export default function MostWanted() {
  return (
    <div className="flex-center py-12">
      <div className="h-fit w-full max-w-[1580px] rounded-[30px] bg-black/20 p-10 px-20 pt-6">
        <h1 className="text-brass text-shadow shadow-brass w-full text-left text-6xl font-extrabold uppercase">
          Most Wanted
        </h1>

        <div className="mt-5 flex flex-wrap gap-9">
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

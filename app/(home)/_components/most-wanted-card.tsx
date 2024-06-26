import Image from 'next/image';
import Link from 'next/link';

export default function MostWantedCard() {
  return (
    <div className="relative flex max-h-[318px] max-w-[318px] flex-col gap-2 rounded-[20px] bg-gradient-to-br from-[#fff]/30 to-[#1e1e1e]/30 p-3 shadow-md hover:outline-1 hover:outline-white">
      <Image
        src="/images/emerald-account.png"
        width={293}
        height={160}
        alt=""
      />

      <p className="text-3xl">Emmerald Account</p>

      <div>
        <div className="flex-center gap-3">
          <div className="flex-center gap-1">
            <div className="h-[2px] w-3 bg-brass"></div>
            <span>Active</span>
          </div>
          <div className="flex-center gap-1">
            <div className="h-[2px] w-3 bg-brass"></div>
            <span>No bans</span>
          </div>
          <div className="flex-center gap-1">
            <div className="h-[2px] w-3 bg-brass"></div>
            <span>[NFA]</span>
          </div>
        </div>
        <div className="flex-center gap-1">
          <div className="h-[2px] w-3 bg-brass"></div>
          <span className="whitespace-nowrap">No Ranked Seasons played</span>
        </div>
      </div>

      <Link
        href=""
        className="absolute -bottom-8 right-2 rounded-lg bg-black/50 px-6 py-2 text-lg font-semibold text-brass hover:outline hover:outline-1 hover:outline-brass"
      >
        See more
      </Link>
    </div>
  );
}

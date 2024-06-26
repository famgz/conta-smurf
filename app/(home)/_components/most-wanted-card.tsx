import Image from 'next/image';
import Link from 'next/link';

export default function MostWantedCard() {
  return (
    <div className="relative flex max-h-[318px] max-w-[318px] flex-col gap-2 rounded-[20px] bg-gradient-to-br from-[#fff]/30 to-[#1e1e1e]/30 p-3 hover:outline-1 hover:outline-white">
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
            <div className="bg-brass h-[2px] w-3"></div>
            <span>Active</span>
          </div>
          <div className="flex-center gap-1">
            <div className="bg-brass h-[2px] w-3"></div>
            <span>No bans</span>
          </div>
          <div className="flex-center gap-1">
            <div className="bg-brass h-[2px] w-3"></div>
            <span>[NFA]</span>
          </div>
        </div>
        <div className="flex-center gap-1">
          <div className="bg-brass h-[2px] w-3"></div>
          <span className="whitespace-nowrap">No Ranked Seasons played</span>
        </div>
      </div>

      <Link
        href=""
        className="text-brass hover:outline-brass absolute -bottom-8 right-2 rounded-lg bg-black/40 px-6 py-2 text-lg font-semibold hover:outline hover:outline-1"
      >
        See more
      </Link>
    </div>
  );
}

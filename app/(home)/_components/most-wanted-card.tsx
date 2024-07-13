import Image from 'next/image';
import Link from 'next/link';

const opts = ['Active', 'No bans', '[NFA]', 'No Ranked Seasons played'];

export default function MostWantedCard() {
  return (
    <div className="relative flex max-w-[160px] flex-col items-center gap-1 rounded-[10px] bg-gradient-to-br from-[#fff]/30 to-[#1e1e1e]/30 p-2.5 shadow-md hover:outline-1 hover:outline-white xl:max-w-[318px] xl:gap-2 xl:rounded-[20px] xl:p-3">
      {/* image */}
      <div className="relative aspect-[600/336] min-h-[66px] w-full flex-1 overflow-hidden rounded-lg xl:min-h-[160px]">
        <Image
          src="/images/product-image.jpg"
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>

      <p className="text-base xl:text-3xl">Emmerald Account</p>

      <div>
        <div className="flex flex-wrap items-center gap-px xl:justify-center xl:gap-3">
          {opts.map((x) => (
            <div className="flex-center gap-1" key={x}>
              <div className="h-[2px] w-2.5 bg-brass" />
              <span className="whitespace-nowrap text-[10px] font-extralight xl:text-base xl:font-medium">
                {x}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Link
        href=""
        className="subtitle-badge flex-center absolute -bottom-3 h-[24px] w-[84px] overflow-hidden text-sm xl:-bottom-8 xl:right-2 xl:h-[46px] xl:w-[136px] xl:text-xl"
      >
        See more
      </Link>
    </div>
  );
}

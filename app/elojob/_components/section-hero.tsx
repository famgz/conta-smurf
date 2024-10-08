import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function EloJobHeroSection() {
  return (
    <div className="flex-center hide-scrollbar flex-col !overflow-x-visible !rounded-none px-5 max-sm:justify-start max-sm:!overflow-y-auto xl:grid xl:grid-cols-[2fr_3fr]">
      {/* left column - section image */}
      <div className="flex h-[420px] w-full flex-auto flex-col justify-end gap-3 rounded-[30px] border-2 border-[rgba(8,_112,_184,_0.7)] bg-[url('/images/elojob-hero.jpg')] bg-cover bg-right bg-no-repeat p-10 max-xl:max-w-[600px] max-xl:flex-1 sm:shadow-[0px_0px_30px_0px_rgba(0,_255,_224,_0.49)] xl:h-full xl:rounded-3xl">
        <div className="subtitle-badge -ml-14 flex h-[30px] max-w-[266px] items-center gap-3 px-4 text-lg xl:hidden">
          <Image
            src="/images/icons/ultimate-skin.png"
            alt={''}
            width={20}
            height={20}
          />
          <span className="whitespace-nowrap text-[10px]">
            Relax, And let the Professionals handle it
          </span>
          <Image
            src="/images/icons/emote-choque-pavor.png"
            alt={''}
            width={38}
            height={38}
          />
        </div>

        <h2 className="-ml-5 text-left text-3xl font-extrabold text-brass shadow-brass text-shadow-sm xl:hidden">
          We Fight for you!
        </h2>

        <div className="text-justify text-[10px] font-light leading-3 xl:hidden">
          Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
          Sehena hexanade, pren rerat, och olig såsom nätvandra. Föliligen suk
          dösonyss för att religen de orik megande att bektigt. Prio nevav, i
          ber lase därför att antikrati tåktiga till hexarat. Laheten heterodat
          exoliga nysam heteroligen vengen i parapp. Någonstansare vissa, fastän
          sitskate traktiga. Fönat milig soskade heterovababel. Lagelingar
          hoheng nidölig.
        </div>
      </div>

      {/* right column - side info */}
      <div className="flex flex-col space-y-6">
        <div className="pl-6 lg:space-y-2 2xl:space-y-6">
          <div className="subtitle-badge flex h-[60px] max-w-[532px] items-center gap-3 px-6 text-lg max-xl:hidden">
            <Image
              src="/images/icons/ultimate-skin.png"
              alt={''}
              width={20}
              height={20}
            />
            <span className="whitespace-nowrap">
              Relax, And let the Professionals handle it
            </span>
            <Image
              src="/images/icons/emote-choque-pavor.png"
              alt={''}
              width={38}
              height={38}
            />
          </div>

          <h2 className="text-left text-3xl font-extrabold text-brass shadow-brass text-shadow-sm max-xl:hidden 2xl:text-6xl">
            We Fight for you!
          </h2>

          <div className="max-w-[650px] text-justify font-light max-2xl:text-[10px] max-xl:hidden">
            Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
            Sehena hexanade, pren rerat, och olig såsom nätvandra. Föliligen suk
            dösonyss för att religen de orik megande att bektigt. Prio nevav, i
            ber lase därför att antikrati tåktiga till hexarat. Laheten
            heterodat exoliga nysam heteroligen vengen i parapp. Någonstansare
            vissa, fastän sitskate traktiga. Fönat milig soskade heterovababel.
            Lagelingar hoheng nidölig.
          </div>
        </div>

        <div className="flex-center max-w-[830px] rounded-r-[30px] xl:bg-folder xl:py-6 xl:backdrop-blur-2xl 2xl:pb-14">
          <div className="w-full max-w-[540px] space-y-7 xl:space-y-10">
            <div className="w-full space-y-2">
              <p className="text-left text-2xl font-extrabold xl:text-4xl">
                Let us explain more
              </p>
              <div className="line-clamp-5 max-w-[450px] text-justify font-light max-xl:text-xs">
                Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
                Sehena hexanade, pren rerat, och olig såsom nätvandra. Föliligen
                suk dösonyss för att religen de orik megande att bektigt. Prio
                nevav, i ber lase därför att antikrati tåktiga till hexarat.
                Laheten heterodat exoliga nysam heteroligen vengen i parapp.
                Någonstansare vissa, fastän sitskate traktiga. Fönat milig
                soskade heterovababel. Lagelingar hoheng nidölig.
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-left text-xs font-light xl:text-xl">
                What are you waiting champ?
              </p>
              <Button
                size="xl"
                variant="golden"
                className="w-full max-w-[270px] max-2xl:!h-[60px] max-2xl:!rounded-[15px] 2xl:max-w-[540px]"
              >
                <Link href="/" className="text-2xl 2xl:text-6xl">
                  Hire an Agent
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

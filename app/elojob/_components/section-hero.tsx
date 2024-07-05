import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function EloJobHero() {
  return (
    <div className="grid h-full max-w-[1780px] grid-cols-[2fr_3fr] items-center justify-center px-[70px] py-3 pr-40">
      {/* Section image */}
      <div className="z-1 relative h-full w-full overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[0px_0px_73.3px_0px_rgba(0,_255,_224,_0.49)]">
        <Image
          src="/images/elojob-hero.jpg"
          fill
          className="object-cover object-right"
          alt="PC game cartoon character wearing a garment."
        />
      </div>

      {/* Side info */}
      <div className="flex flex-col space-y-6">
        <div className="space-y-6 pl-6">
          <div className="subtitle-badge !p3-4 max-w-[532px] gap-3">
            <Image
              src="/images/icons/ultimate-skin.png"
              alt={''}
              width={20}
              height={20}
            />
            <span>Relax, And let the Professionals handle it</span>
            <Image
              src="/images/icons/emote-choque-pavor.png"
              alt={''}
              width={38}
              height={38}
            />
          </div>

          <h2 className="text-left text-6xl font-extrabold text-brass shadow-brass text-shadow-sm">
            We Fight for you!
          </h2>

          <div className="max-w-[650px] text-justify font-light">
            Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
            Sehena hexanade, pren rerat, och olig såsom nätvandra. Föliligen suk
            dösonyss för att religen de orik megande att bektigt. Prio nevav, i
            ber lase därför att antikrati tåktiga till hexarat. Laheten
            heterodat exoliga nysam heteroligen vengen i parapp. Någonstansare
            vissa, fastän sitskate traktiga. Fönat milig soskade heterovababel.
            Lagelingar hoheng nidölig.
          </div>
        </div>

        <div className="flex-center max-w-[830px] rounded-r-[30px] bg-[linear-gradient(168.32deg,_rgba(0,_0,_0,_0.3)_8.57%,_rgba(20,_0,_62,_0.3)_115.05%)] pb-14 pt-7 backdrop-blur-2xl">
          <div className="w-full max-w-[540px] space-y-10">
            <div className="w-full space-y-2">
              <p className="text-left text-4xl font-extrabold">
                Let us explain more
              </p>
              <div className="line-clamp-5 max-w-[450px] text-justify font-light">
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
              <p className="text-left text-xl font-light">
                What are you waiting champ?
              </p>
              <Button
                size="xl"
                variant="golden"
                className="w-full max-w-[540px]"
              >
                <Link href="/" className="text-6xl">
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
``;

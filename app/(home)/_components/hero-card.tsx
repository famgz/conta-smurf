import Image from 'next/image';
import Link from 'next/link';

interface HeroCardProps {
  href: string;
  imageUrl: string;
}

export default function HeroCard({ href, imageUrl }: HeroCardProps) {
  return (
    <Link
      href={href}
      className="xs:h-[50px] xs:w-[160px] relative h-[40px] w-[128px] flex-shrink-0 overflow-x-auto rounded-[15px] border-none shadow-md outline outline-[1px] outline-[#c0c0c0] hover:shadow-white hover:outline-white xl:h-[104px] xl:w-[350px]"
    >
      <Image src={imageUrl} fill alt="" className="object-cover" />
    </Link>
  );
}

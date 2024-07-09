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
      className="relative h-[40px] w-[150px] flex-shrink-0 overflow-x-auto rounded-[15px] border-none shadow-lg outline-none hover:outline-1 hover:outline-white xl:h-[104px] xl:w-[350px]"
    >
      <Image src={imageUrl} fill alt="" className="object-cover" />
    </Link>
  );
}

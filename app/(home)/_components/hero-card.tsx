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
      className="relative aspect-[350/104] h-[40px] shrink-0 overflow-x-auto rounded-[15px] border-none shadow-md outline outline-[1px] outline-[#c0c0c0] hover:shadow-white hover:outline-white xs:h-[50px] xl:h-[70px] 2xl:h-[104px]"
    >
      <Image src={imageUrl} fill alt="" className="object-cover" />
    </Link>
  );
}

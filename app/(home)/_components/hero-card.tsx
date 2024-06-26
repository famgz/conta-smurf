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
      className="overflow-hidden rounded-[15px] border-none shadow-lg outline-none hover:outline-1 hover:outline-white"
    >
      <Image src={imageUrl} width={350} height={104} alt="" />
    </Link>
  );
}

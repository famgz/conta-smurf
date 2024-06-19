import NotificationBell from '@/app/_assets/icons/notification-bell';
import ShopBag from '@/app/_assets/icons/shop-bag';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    // <header className="sticky top-0 z-10 backdrop-blur-lg backdrop-filter">
    <header className="sticky top-0 z-50 h-[116px] w-full py-4 backdrop-blur-md backdrop-filter">
      <div className="flex h-[80px] bg-header-gradient px-4">
        <div className="mx-auto flex h-full max-w-[1920px] flex-1 items-center gap-10">
          <Link href={'/'}>
            <Image
              src="/images/logo.png"
              width={126}
              height={116}
              className=""
              alt="Logo image"
            />
          </Link>
          <div className="flex flex-1 gap-12">
            <Link href={'/'} className="text-4xl">
              Accounts
            </Link>
            <Link href={'/'} className="text-4xl">
              Elojob
            </Link>
            <Link href={'/'} className="text-4xl">
              Services
            </Link>
            <Link href={'/'} className="text-4xl">
              Lootbox
            </Link>
            <Link href={'/'} className="text-4xl">
              Cheats
            </Link>
            <Link href={'/'} className="text-4xl">
              Gifts
            </Link>
            <Link href={'/'} className="text-4xl">
              Community
            </Link>
          </div>

          <Link href={'/'} className="">
            <ShopBag />
          </Link>

          <Link href={'/'} className="">
            <NotificationBell />
          </Link>

          <Link href={'/'} className="">
            <Image
              src="/images/user.png"
              width={102}
              height={102}
              className=""
              alt="User image"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

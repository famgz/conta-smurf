import BellIcon from '@/app/_components/icons/bell';
import ShopBag from '@/app/_components/icons/shop-bag';
import UserIcon from '@/app/_components/icons/user';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    // <header className="sticky top-0 z-10 backdrop-blur-lg backdrop-filter">
    <header className="fixed top-0 z-50 h-[116px] w-full py-4">
      <div className="flex h-[80px] bg-header-gradient px-4 backdrop-blur-md backdrop-filter">
        <div className="mx-auto flex h-full max-w-[1920px] flex-1 items-center gap-10">
          <Link href={'/'}>
            <Image
              src="/images/logo.png"
              width={126}
              height={116}
              className="min-h-[116px] min-w-[126px]"
              alt="Logo image"
            />
          </Link>
          <div className="hidden flex-1 gap-12 xl:flex">
            <Link href={'/'} className="text-4xl">
              Accounts
            </Link>
            <Link href={'/elojob'} className="text-4xl">
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

          <Link href={'/cart'} className="">
            <ShopBag />
          </Link>

          <Link href={'/user'} className="">
            <BellIcon />
            {/* <Image
              src="/images/notification-bell.png"
              width={60}
              height={60}
              className="min-h-[60px] min-w-[60px]"
              alt="User image"
            /> */}
          </Link>

          <Link href={'/user'} className="mt-1">
            <UserIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

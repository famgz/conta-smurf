import BellIcon from '@/app/_components/icons/bell';
import ShopBag from '@/app/_components/icons/shop-bag';
import UserIcon from '@/app/_components/icons/user';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    // <header className="sticky top-0 z-10 backdrop-blur-lg backdrop-filter">
    <header className="fixed top-0 z-50 h-[116px] w-full py-4">
      <div className="flex h-[40px] bg-header-gradient px-4 backdrop-blur-md backdrop-filter 2xl:h-[80px]">
        <div className="mx-auto flex h-full max-w-[1920px] flex-1 items-center gap-10">
          <Link href={'/'}>
            <Image
              src="/images/logo.png"
              width={67}
              height={61}
              className="h-[61px] 2xl:min-h-[116px] 2xl:min-w-[126px]"
              alt="Logo image"
            />
          </Link>
          <div className="hidden flex-1 gap-12 text-4xl 2xl:flex">
            <Link href={'/'} className="">
              Accounts
            </Link>
            <Link href={'/elojob'} className="">
              Elojob
            </Link>
            <Link href={'/'} className="">
              Services
            </Link>
            <Link href={'/'} className="">
              Lootbox
            </Link>
            <Link href={'/'} className="">
              Cheats
            </Link>
            <Link href={'/'} className="">
              Gifts
            </Link>
            <Link href={'/'} className="">
              Community
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 2xl:gap-10">
          <Link href={'/cart'} className="hidden 2xl:block">
            <ShopBag />
          </Link>

          <Link href={'/login'} className="">
            <BellIcon className="size-[40px] 2xl:size-[70px]" />
          </Link>

          <Link href={'/login'} className="2xl:mt-1">
            <UserIcon className="size-[45px] 2xl:size-[110px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}

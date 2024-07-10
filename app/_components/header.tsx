import BellIcon from '@/app/_components/icons/bell';
import MenuIcon from '@/app/_components/icons/menu';
import ShopBag from '@/app/_components/icons/shop-bag';
import UserIcon from '@/app/_components/icons/user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/app/_components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    label: 'Accounts',
    href: '/',
  },
  {
    label: 'Elojob',
    href: '/elojob',
  },
  {
    label: 'Services',
    href: '/',
  },
  {
    label: 'Lootbox',
    href: '/',
  },
  {
    label: 'Cheats',
    href: '/',
  },
  {
    label: 'Gifts',
    href: '/',
  },
  {
    label: 'Community',
    href: '/',
  },
];

export default function Header() {
  return (
    // <header className="sticky top-0 z-10 backdrop-blur-lg backdrop-filter">
    <header className="fixed top-4 z-50 h-[116px] w-full py-4 xl:top-0">
      <div className="flex h-[40px] bg-header-gradient px-4 backdrop-blur-md backdrop-filter xl:h-[80px]">
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between gap-10">
          <div className="flex flex-1 items-center gap-10">
            <Link href={'/'}>
              <Image
                src="/images/logo.png"
                width={67}
                height={61}
                className="h-[61px] xl:min-h-[116px] xl:min-w-[126px]"
                alt="Logo image"
              />
            </Link>
            <div className="hidden flex-1 gap-12 text-4xl 2xl:flex">
              {links.map((x) => (
                <Link href={x.href} className="" key={x.label}>
                  {x.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 xl:gap-10">
            <Link href={'/cart'} className="hidden xl:block">
              <ShopBag />
            </Link>

            <Link href={'/login'} className="">
              <BellIcon className="size-[40px] xl:size-[70px]" />
            </Link>

            <Link href={'/login'} className="xl:mt-1">
              <UserIcon className="size-[45px] xl:size-[110px]" />
            </Link>

            <button className="xl:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-50 rounded-none rounded-bl-2xl border-none bg-light py-9 pl-5 pr-8 backdrop-blur-[7px] [box-shadow:inset_0px_69px_71.7px_rgba(0,_0,_0,_0.25)]">
                  {links.map((x) => (
                    <DropdownMenuItem asChild key={x.label}>
                      <Link
                        href={x.href}
                        className="!text-2xl font-bold uppercase"
                      >
                        {x.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import BellIcon from '@/app/_components/icons/bell';
import MenuIcon from '@/app/_components/icons/menu';
import ShopBag from '@/app/_components/icons/shop-bag';
import UserIcon from '@/app/_components/icons/user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/app/_components/ui/dropdown-menu';
import useURLHash from '@/app/_hooks/use-url-hash';
import { cn } from '@/app/_lib/utils';
import { useCartStore } from '@/app/_store/cart-store';
import useStore from '@/app/_store/use-store';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    href: '/services',
  },
  {
    label: 'Lootbox',
    href: '/lootbox',
  },
  {
    label: 'Cheats',
    href: '/cheats',
  },
  {
    label: 'Gifts',
    href: '/gifts',
  },
  {
    label: 'Community',
    href: '/community',
  },
];

export default function Header() {
  const pathname = usePathname();
  const hash = useURLHash();
  const hideElements = pathname === '/' && hash === '';
  const { data } = useSession();
  const user = data?.user;

  const cartTotalItems = useStore(useCartStore, (state) =>
    state.cartTotalItems()
  )!;

  return (
    <header className="fixed top-4 z-50 h-[116px] w-full py-4 xl:top-0">
      <div
        className={cn(
          'flex h-[40px] bg-opacity-95 bg-header-gradient px-4 backdrop-blur-md backdrop-filter transition duration-700 2xl:h-[80px]',
          hideElements && 'xl:bg-none xl:backdrop-filter-none'
        )}
      >
        {/* left items */}
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between gap-10">
          <div className="flex flex-1 items-center gap-5 2xl:gap-10">
            {/* logo */}
            <Link
              href={'/'}
              className={cn(
                'relative size-16 2xl:size-32',
                hideElements && 'xl:size-20'
              )}
            >
              <Image
                src="/images/logo.png"
                fill
                className="object-contain"
                alt="Logo image"
              />
            </Link>
            {/* links - desktop only */}
            <div
              className={cn(
                'hidden flex-1 gap-8 text-xl min-[1700px]:gap-12 min-[1700px]:text-4xl',
                hideElements ? '' : 'lg:flex'
              )}
            >
              {links.map((x) => (
                <Link
                  href={x.href}
                  className="hover:shadow-white hover:text-shadow-sm"
                  key={x.label}
                >
                  {x.label}
                </Link>
              ))}
            </div>
          </div>

          {/* right items */}
          <div
            className={cn(
              'flex items-center gap-3 2xl:gap-10',

              hideElements && 'xl:gap-4'
            )}
          >
            {/* cart */}
            <Link href={'/cart'} className="relative">
              <ShopBag className="max-xl:size-7" />
              {!!cartTotalItems && (
                <div className="flex-center x:text-sm absolute -bottom-1 -right-1 size-4 rounded-full bg-gradient-to-b from-[#850000] to-[#f00] text-[10px] font-bold xl:size-5">
                  {cartTotalItems}
                </div>
              )}
            </Link>

            {/* notifications */}
            <Link href={'/user'} className="">
              <BellIcon className="size-[40px] xl:size-[70px]" />
            </Link>

            {/* user */}
            <Link href={'/user'} className="xl:mt-1">
              <UserIcon
                className={cn(
                  'size-11 rounded-full hover:shadow-yellow xl:size-16 2xl:size-24',
                  hideElements && 'xl:size-16'
                )}
              />
            </Link>

            {/* mobile dropdown menu */}
            <div className="flex items-center lg:hidden">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

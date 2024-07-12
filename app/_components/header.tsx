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
import { cn } from '@/app/_lib/utils';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const [hash, setHash] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hideElements = pathname === '/' && hash === '';

  useEffect(() => {
    setHash(window.location.hash);
    // console.log({ hash });
  }, [pathname, searchParams]);

  return (
    <header className="fixed top-4 z-50 h-[116px] w-full py-4 xl:top-0">
      <div
        className={cn(
          'flex h-[40px] bg-opacity-95 bg-header-gradient px-4 backdrop-blur-md backdrop-filter transition duration-700 xl:h-[80px]',
          hideElements && 'xl:bg-none xl:backdrop-filter-none'
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between gap-10">
          <div className="flex flex-1 items-center gap-10">
            <Link
              href={'/'}
              className={cn(
                'relative size-16 xl:size-32',
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
            <div
              className={cn(
                'hidden flex-1 gap-12 text-4xl',
                hideElements ? '' : '2xl:flex'
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

          <div
            className={cn(
              'flex items-center gap-4 xl:gap-10',

              hideElements && 'xl:gap-4'
            )}
          >
            <Link href={'/cart'} className="hidden xl:block">
              <ShopBag />
            </Link>

            <Link href={'/login'} className="">
              <BellIcon className="size-[40px] xl:size-[70px]" />
            </Link>

            <Link href={'/login'} className="xl:mt-1">
              <UserIcon
                className={cn(
                  'size-11 rounded-full hover:shadow-yellow xl:size-28',
                  hideElements && 'xl:size-16'
                )}
              />
            </Link>

            {/* mobile dropdown menu */}
            <div className="flex items-center xl:hidden">
              <DropdownMenu>
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

'use client';

import { Button } from '@/app/_components/ui/button';
import { cn } from '@/app/_lib/utils';
import Link from 'next/link';

interface SideMenuButtonProps {
  children: string | JSX.Element | JSX.Element[];
  href: string;
  active: boolean;
  className?: string;
}

export default function SideMenuButton({
  children,
  href,
  active,
  className,
}: SideMenuButtonProps) {
  const stl = active ? 'border-2 border-blue-400 ' : 'border-none';

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(className, stl, '')}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

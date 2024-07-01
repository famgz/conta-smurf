'use client';

import { Button } from '@/app/_components/ui/button';
import { cn } from '@/app/_lib/utils';

interface SideMenuButtonProps {
  children: string | JSX.Element | JSX.Element[];
  active: boolean;
  className?: string;
  onClick: () => void;
}

export default function SideMenuButton({
  children,
  active,
  className,
  onClick,
}: SideMenuButtonProps) {
  const stl = active ? 'border-2 border-blue-400 ' : 'border-none';

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(className, stl, '')}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

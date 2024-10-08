'use client';

import { Button } from '@/app/_components/ui/button';
import { cn } from '@/app/_lib/utils';
import React, { ReactElement } from 'react';

interface SideMenuButtonProps {
  icon: ReactElement;
  active: boolean;
  className?: string;
  onClick: () => void;
}

export default function SideMenuButton({
  icon,
  active,
  className,
  onClick,
}: SideMenuButtonProps) {
  const btnStyle = active ? 'active-side-menu-button' : 'border-none';
  const svgColor = active ? 'url(#svg-linear-gradient)' : '#7B7B7B';

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        className,
        btnStyle,
        'flex-center size-[45px] overflow-hidden 2xl:size-[52px]'
      )}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        fill: svgColor,
        stroke: svgColor,
        className: 'size-6 2xl:size-8',
      })}
    </Button>
  );
}

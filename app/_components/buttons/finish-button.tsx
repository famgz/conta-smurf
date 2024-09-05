import HexagonIcon from '@/app/_components/icons/hexagon';
import { Button } from '@/app/_components/ui/button';
import { cn } from '@/app/_lib/utils';
import { ComponentProps, ReactNode } from 'react';

interface FinishButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  includeIcon?: boolean;
}

export default function FinishButton({
  children,
  includeIcon = true,
  className,
  ...props
}: FinishButtonProps) {
  return (
    <Button
      className={cn(
        'special-border-green flex h-10 w-[140px] items-center py-0 hover:shadow-lime xl:w-[190px]',
        className
      )}
      {...props}
    >
      {includeIcon && <HexagonIcon className="size-8 shrink-0 2xl:size-10" />}
      <span className="text-gradient bg-lime font-bold 2xl:text-xl">
        {children}
      </span>
    </Button>
  );
}

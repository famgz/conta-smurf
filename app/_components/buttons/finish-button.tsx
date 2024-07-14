import HexagonIcon from '@/app/_components/icons/hexagon';
import { Button } from '@/app/_components/ui/button';
import { ComponentProps, ReactNode } from 'react';

interface FinishButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export default function FinishButton({
  children,
  ...props
}: FinishButtonProps) {
  return (
    <Button
      className="special-border-green flex h-10 w-[200px] items-center py-0 hover:shadow-lime"
      {...props}
    >
      <HexagonIcon className="size-8 xl:size-10" />
      <span className="text-gradient bg-lime font-bold xl:text-xl">
        {children}
      </span>
    </Button>
  );
}

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
      className="special-border-green flex h-10 w-[180px] items-center py-0 hover:shadow-lime 2xl:w-[200px]"
      {...props}
    >
      <HexagonIcon className="size-8 2xl:size-10" />
      <span className="text-gradient bg-lime font-bold 2xl:text-xl">
        {children}
      </span>
    </Button>
  );
}

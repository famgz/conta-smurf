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
      className="special-border-green hover:shadow-lime flex h-[45px] w-[200px] items-center py-0"
      {...props}
    >
      <HexagonIcon className="size-10" />
      <span className="text-gradient bg-lime text-xl font-bold">
        {children}
      </span>
    </Button>
  );
}

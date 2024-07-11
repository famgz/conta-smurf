import HexagonIcon from '@/app/_components/icons/hexagon';
import { Button } from '@/app/_components/ui/button';
import { ReactNode } from 'react';

interface FinishButtonProps {
  children: ReactNode;
}

export default function FinishButton({ children }: FinishButtonProps) {
  return (
    <Button className="special-border-green hover:shadow-lime flex h-[45px] w-[200px] items-center py-0">
      <HexagonIcon className="size-10" />
      <span className="text-gradient bg-lime text-xl font-bold">
        {children}
      </span>
    </Button>
  );
}

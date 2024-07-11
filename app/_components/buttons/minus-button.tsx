import { Button } from '@/app/_components/ui/button';
import { MinusIcon } from 'lucide-react';
import { ComponentProps } from 'react';

interface MinusButtonProps extends ComponentProps<'button'> {}

export default function MinusButton({ ...props }: MinusButtonProps) {
  return (
    <Button
      className="flex-center size-6 rounded-full bg-menu p-0 text-white"
      {...props}
    >
      <MinusIcon className="size-5 fill-none" />
    </Button>
  );
}

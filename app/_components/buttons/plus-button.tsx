import { Button } from '@/app/_components/ui/button';
import { PlusIcon } from 'lucide-react';
import { ComponentProps } from 'react';

interface PlusButtonProps extends ComponentProps<'button'> {}

export default function PlusButton({ ...props }: PlusButtonProps) {
  return (
    <Button
      className="flex-center size-6 rounded-full bg-menu p-0 text-white"
      {...props}
    >
      <PlusIcon className="size-5 fill-none" />
    </Button>
  );
}

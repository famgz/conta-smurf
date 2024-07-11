import { Button } from '@/app/_components/ui/button';
import { Trash2Icon } from 'lucide-react';
import { ComponentProps } from 'react';

interface DeleteButtonProps extends ComponentProps<'button'> {}

export default function DeleteButton({ ...props }: DeleteButtonProps) {
  return (
    <Button
      className="flex-center size-5 rounded-full bg-menu p-0 text-white"
      {...props}
    >
      <Trash2Icon className="size-3.5 fill-none" />
    </Button>
  );
}

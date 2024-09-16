import { Button } from '@/app/_components/ui/button';
import { cn } from '@/app/_lib/utils';
import { Trash2Icon } from 'lucide-react';
import { ComponentProps } from 'react';

interface DeleteButtonProps extends ComponentProps<'button'> {
  iconSize?: number;
  className?: string;
}

export default function DeleteButton({
  iconSize = 12,
  className = '',
  ...props
}: DeleteButtonProps) {
  return (
    <Button
      className={cn(
        'flex-center size-5 rounded-full bg-menu p-0 text-white',
        className
      )}
      title="Clear cart"
      {...props}
    >
      <Trash2Icon className="shrink-0 fill-none" size={iconSize} />
    </Button>
  );
}

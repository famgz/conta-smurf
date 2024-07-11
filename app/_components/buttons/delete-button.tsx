import { Button } from '@/app/_components/ui/button';
import { Trash2Icon } from 'lucide-react';

export default function DeleteButton() {
  return (
    <Button className="flex-center size-5 rounded-full bg-menu p-0 text-white">
      <Trash2Icon className="size-3.5 fill-none" />
    </Button>
  );
}

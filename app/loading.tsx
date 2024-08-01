import { LoaderCircleIcon } from 'lucide-react';

export default function Loading() {
  // return <div className="flex-center absolute inset-0">Loading...</div>;
  return (
    <div className="flex-center h-full w-full">
      <LoaderCircleIcon className="size-20 animate-spin text-muted-foreground/40" />
    </div>
  );
}

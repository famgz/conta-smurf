import { cn } from '@/app/_lib/utils';

export interface ChatMessageBalloonProps {
  message: string;
  date: string;
  position: 'left' | 'right';
}

export default function ChatMessageBalloon({
  message,
  date,
  position,
}: ChatMessageBalloonProps) {
  return (
    <div
      className={cn(
        'flex w-full gap-2',
        position === 'left' ? '' : 'flex-row-reverse self-end'
      )}
    >
      <div
        className={cn(
          'line-clamp-[10] w-[min(60%,350px)] rounded-xl px-6 py-2.5 text-left xl:rounded-2xl',
          position === 'left' ? 'bg-folder' : 'bg-light'
        )}
      >
        {message}
      </div>

      <span className="text-muted-foreground">{date}</span>
    </div>
  );
}

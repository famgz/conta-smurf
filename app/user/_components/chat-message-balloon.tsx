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
          'w-[min(50%,350px)] rounded-2xl px-6 py-2.5 text-left',
          position === 'left' ? 'bg-folder' : 'bg-light'
        )}
      >
        {message}
      </div>

      <span className="text-muted-foreground">{date}</span>
    </div>
  );
}

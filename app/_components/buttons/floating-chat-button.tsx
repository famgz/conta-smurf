'use client';

import DialogCircleIcon from '@/app/_components/icons/dialog-circle';
import useURLHash from '@/app/_hooks/use-url-hash';
import { usePathname } from 'next/navigation';

export default function FloatingChatButton() {
  const hash = useURLHash();
  const pathname = usePathname();

  const hideElements = pathname === '/' && hash === '';

  return (
    <>
      {!hideElements && (
        <button className="floating-chat-button">
          <DialogCircleIcon className="size-5 2xl:size-8" />
        </button>
      )}
    </>
  );
}

'use client';

import DialogCircleIcon from '@/app/_components/icons/dialog-circle';
import useURLHash from '@/app/_hooks/use-url-hash';
import useWindowDimensions from '@/app/_hooks/use-window-dimensions';
import { usePathname } from 'next/navigation';

export default function FloatingChatButton() {
  const hash = useURLHash();
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  const isHomePage = pathname === '/';
  const isHomePageHeroSection = isHomePage && hash === '';
  const isScreenTooNarrow = isHomePage && !!width && width < 430;
  const hideElements = isHomePageHeroSection || isScreenTooNarrow;

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

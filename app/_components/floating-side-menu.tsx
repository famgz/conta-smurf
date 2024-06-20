import { ReactNode } from 'react';

interface FloatingSideMenuProps {
  children: ReactNode;
}

export default function FloatingSideMenu({ children }: FloatingSideMenuProps) {
  return (
    <div className="fixed right-[max(90px,calc((100vw-1920px)/2))] top-0 z-10 flex min-h-screen w-fit flex-col items-center justify-center gap-2">
      {children}
    </div>
  );
}

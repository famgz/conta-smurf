import SideMenuButton from '@/app/_components/buttons/side-menu-button';
import { SnapSection } from '@/app/_components/snap-sections';
import { ReactNode } from 'react';

interface FloatingSideMenuProps {
  sections: SnapSection[];
  activeSectionId: string;
  onClick: (index: number) => void;
}

export default function FloatingSideMenu({
  sections,
  activeSectionId,
  onClick,
}: FloatingSideMenuProps) {
  return (
    <div className="fixed bottom-7 z-10 flex w-full items-center justify-center gap-2 xl:right-[max(90px,calc((100vw-1920px)/2))] xl:top-0 xl:min-h-screen xl:w-fit xl:flex-col">
      {sections.map((section, index) => (
        <SideMenuButton
          key={index}
          active={activeSectionId === section.id}
          onClick={() => onClick(index)}
          icon={section.icon}
        />
      ))}
    </div>
  );
}

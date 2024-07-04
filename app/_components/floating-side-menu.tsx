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
    <div className="fixed right-[max(90px,calc((100vw-1920px)/2))] top-0 z-10 flex min-h-screen w-fit flex-col items-center justify-center gap-2">
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

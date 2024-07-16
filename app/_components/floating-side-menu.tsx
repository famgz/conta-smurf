import SideMenuButton from '@/app/_components/buttons/side-menu-button';
import { SnapSection } from '@/app/_components/snap-sections';

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
    <div className="floating-side-menu">
      {sections.map(
        (section, index) =>
          section.enabled && (
            <SideMenuButton
              key={index}
              active={activeSectionId === section.id}
              onClick={() => onClick(index)}
              icon={section.icon}
            />
          )
      )}
    </div>
  );
}

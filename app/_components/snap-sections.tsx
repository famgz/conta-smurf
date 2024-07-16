'use client';

import FloatingSideMenu from '@/app/_components/floating-side-menu';
import useIntersectionObserver from '@/app/_hooks/use-intersection-observer';
import { cn } from '@/app/_lib/utils';
import { ReactElement, useState } from 'react';

export interface SnapSection {
  id: string;
  label: string;
  content: React.JSX.Element;
  icon: ReactElement;
  enabled: boolean;
  className?: string;
}

interface SnapSectionsProps {
  sections: SnapSection[];
}

export default function SnapSections({ sections }: SnapSectionsProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    sections[0].id
  );
  const sectionRefs = useIntersectionObserver(setActiveSectionId);

  function handleScrollToSection(index: number) {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="page-sections-wrapper">
      <FloatingSideMenu
        sections={sections}
        activeSectionId={activeSectionId}
        onClick={handleScrollToSection}
      />
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={cn(
            section.enabled ? 'page-section snap-start' : 'hidden',
            section?.className
          )}
          ref={(el) => {
            if (el) {
              sectionRefs.current[index] = el;
            }
          }}
        >
          {section.enabled && section.content}
        </section>
      ))}
    </div>
  );
}

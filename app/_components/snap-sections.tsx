'use client';

import SideMenuButton from '@/app/_components/buttons/side-menu-button';
import FloatingSideMenu from '@/app/_components/floating-side-menu';
import useIntersectionObserver from '@/app/_hooks/use-intersection-observer';
import { cn } from '@/app/_lib/utils';
import { useEffect, useRef, useState } from 'react';

interface SnapSection {
  id: string;
  label: string;
  content: React.JSX.Element;
  icon: React.JSX.Element;
  className?: string;
}

interface SnapSectionsProps {
  sections: SnapSection[];
}

export default function SnapSections({ sections }: SnapSectionsProps) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useIntersectionObserver(setActiveSection);

  const handleScrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <FloatingSideMenu>
        {sections.map((section, index) => (
          <SideMenuButton
            key={index}
            active={activeSection === section.id}
            onClick={() => handleScrollToSection(index)}
          >
            {section.icon}
          </SideMenuButton>
        ))}
      </FloatingSideMenu>

      <div className="hide-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={cn('page-section snap-start', section?.className)}
            ref={(el) => {
              if (el) {
                sectionRefs.current[index] = el;
              }
            }}
          >
            {section.content}
          </section>
        ))}
      </div>
    </>
  );
}

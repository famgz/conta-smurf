'use client';

import SideMenuButton from '@/app/_components/buttons/side-menu-button';
import FloatingSideMenu from '@/app/_components/floating-side-menu';
import { useEffect, useRef, useState } from 'react';

interface SnapSection {
  id: string;
  label: string;
  content: React.JSX.Element;
  icon: React.JSX.Element;
}

interface SnapSectionsProps {
  sections: SnapSection[];
}

export default function SnapSections({ sections }: SnapSectionsProps) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          window.history.pushState(null, '', `#${entry.target.id}`);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    currentRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    // clean up function
    return () => {
      currentRefs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="">
      <FloatingSideMenu>
        {sections.map((section) => (
          <SideMenuButton
            key={section.id}
            href={`#${section.id}`}
            active={activeSection === section.id}
          >
            {section.icon}
          </SideMenuButton>
        ))}
      </FloatingSideMenu>

      <div className="hide-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className="page-section"
            ref={(el) => {
              if (el) {
                sectionRefs.current[index] = el;
              }
            }}
          >
            <span className="text-4xl">{section.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

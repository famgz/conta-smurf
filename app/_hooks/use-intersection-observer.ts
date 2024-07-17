'use client';

import { useEffect, useRef, MutableRefObject } from 'react';

type SetActiveSection = (id: string) => void;

export default function useIntersectionObserver(
  setActiveSection: SetActiveSection
): MutableRefObject<HTMLElement[]> {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          window.history.pushState(
            null,
            '',
            // `#${index > 0 ? entry.target.id : ''}`
            `#${entry.target.id}`
          );
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((section) => observer.observe(section));

    return () => {
      currentRefs.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return sectionRefs;
}

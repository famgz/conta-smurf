import { SnapSection } from '@/app/_components/snap-sections';

export function getDuplicateSectionIds(sections: SnapSection[]): string[] {
  const ids = sections.map((section) => section.id);
  const duplicates = new Set<string>();

  ids.forEach((id, index) => {
    if (ids.indexOf(id) !== index) {
      duplicates.add(id);
    }
  });

  return Array.from(duplicates);
}

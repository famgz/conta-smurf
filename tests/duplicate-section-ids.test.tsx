import { SnapSection } from '@/app/_components/snap-sections';
import { getDuplicateSectionIds } from '@/app/_lib/get-duplicate-section-ids';
import { expect, it, describe } from '@jest/globals'; // Adjust import from node:test to Jest globals
import fs from 'fs';
import path from 'path'; // Adjusted import from node:test to use path directly

describe('Check if getDuplicateSectionIds is working properly', () => {
  it('should return an array of duplicate IDs', () => {
    // Corrected from it to test
    const sections: SnapSection[] = [
      {
        id: 'user-profile',
        label: 'Profile',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
      {
        id: 'user-history',
        label: 'History',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
      {
        id: 'user-chat',
        label: 'Chat',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
      {
        id: 'user-profile',
        label: 'Profile Duplicate',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
    ];
    const duplicateIds = getDuplicateSectionIds(sections);
    expect(duplicateIds).toEqual(['user-profile']);
  });

  it('should return an empty array when there are no duplicates', () => {
    // Corrected from it to test
    const sections: SnapSection[] = [
      {
        id: 'user-profile',
        label: 'Profile',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
      {
        id: 'user-history',
        label: 'History',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
      {
        id: 'user-chat',
        label: 'Chat',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
      {
        id: 'user-config',
        label: 'Configuration',
        content: <div />,
        icon: <div />,
        enabled: true,
        className: '',
      },
    ];

    const duplicateIds = getDuplicateSectionIds(sections);
    expect(duplicateIds).toEqual([]);
  });
});

// TODO: to make this test work, the sections must be exported as default from a separated file
describe('Check duplicate project Section IDs', () => {
  it('should have unique IDs for all sections used in the project', () => {
    // Corrected from it to test
    const sections = collectSnapSections();
    const ids = sections.map((section) => section.id);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

    expect(duplicateIds).toEqual([]);
  });
});

function isSnapSectionArray(obj: any): obj is SnapSection[] {
  return Array.isArray(obj) && obj.every((item) => isSnapSection(item));
}

function isSnapSection(obj: any): obj is SnapSection {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.label === 'string' &&
    typeof obj.content === 'object' && // Assuming content is JSX.Element or similar
    typeof obj.icon === 'object' && // Assuming icon is JSX.Element or similar
    typeof obj.enabled === 'boolean' &&
    typeof obj.className === 'string'
  );
}

// Function to recursively find all files in a directory
function findFiles(dir: string): string[] {
  const files = fs.readdirSync(dir);
  let filelist: string[] = [];
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      filelist = filelist.concat(findFiles(filePath));
    } else {
      filelist.push(filePath);
    }
  });
  return filelist;
}

// Function to find and collect all SnapSection instances used in the project
function collectSnapSections(): SnapSection[] {
  const files = findFiles(path.join(__dirname, '..', 'app')); // Adjust as per your project structure
  const sections: SnapSection[] = [];

  files.forEach((file) => {
    try {
      let myModule = require(file); // Dynamic import
      if (
        myModule &&
        myModule.default &&
        isSnapSectionArray(myModule.default)
      ) {
        sections.push(...myModule.default); // Spread to push all items from the array
      }
    } catch (error) {
      // Handle import errors if any
      console.error(`Error importing ${file}:`, error);
    }
  });

  console.log(sections);

  return sections;
}

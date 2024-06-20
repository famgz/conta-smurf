import ChatIcon from '@/app/_components/icons/chat';
import GearIcon from '@/app/_components/icons/gear';
import ProfileIcon from '@/app/_components/icons/profile';
import SnapSections from '@/app/_components/snap-sections';

export default function UserPage() {
  const sections = [
    {
      id: 'user-history',
      label: 'History',
      content: <></>,
      icon: <ProfileIcon />,
    },
    { id: 'user-chat', label: 'Chat', content: <></>, icon: <ChatIcon /> },
    {
      id: 'user-config',
      label: 'Configuration',
      content: <></>,
      icon: <GearIcon />,
    },
  ];

  return <SnapSections sections={sections} />;
}

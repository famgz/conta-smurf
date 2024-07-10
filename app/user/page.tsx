import ChatIcon from '@/app/_components/icons/chat';
import GearIcon from '@/app/_components/icons/gear';
import ProfileIcon from '@/app/_components/icons/profile';
import SnapSections from '@/app/_components/snap-sections';
import UserHistory from '@/app/user/_components/section-history';

export default function UserPage() {
  const sections = [
    {
      id: '',
      label: 'History',
      content: <UserHistory />,
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

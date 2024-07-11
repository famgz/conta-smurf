import ChatIcon from '@/app/_components/icons/chat';
import GearIcon from '@/app/_components/icons/gear';
import ProfileIcon from '@/app/_components/icons/profile';
import SnapSections from '@/app/_components/snap-sections';
import UserChatSection from '@/app/user/_components/section-chat';
import UserConfigSection from '@/app/user/_components/section-config';
import UserHistorySection from '@/app/user/_components/section-history';

export default function UserPage() {
  const sections = [
    {
      id: '',
      label: 'History',
      content: <UserHistorySection />,
      icon: <ProfileIcon />,
    },
    {
      id: 'user-chat',
      label: 'Chat',
      content: <UserChatSection />,
      icon: <ChatIcon />,
    },
    {
      id: 'user-config',
      label: 'Configuration',
      content: <UserConfigSection />,
      icon: <GearIcon />,
    },
  ];

  return <SnapSections sections={sections} />;
}

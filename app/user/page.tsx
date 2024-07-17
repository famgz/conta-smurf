'use client';

import ChatIcon from '@/app/_components/icons/chat';
import GearIcon from '@/app/_components/icons/gear';
import ListIcon from '@/app/_components/icons/list';
import ProfileIcon from '@/app/_components/icons/profile';
import SnapSections, { SnapSection } from '@/app/_components/snap-sections';
import useWindowDimensions from '@/app/_hooks/use-window-dimensions';
import UserChatSection from '@/app/user/_components/section-chat';
import UserConfigSection from '@/app/user/_components/section-config';
import UserPurchaseHistorySection from '@/app/user/_components/section-history';
import UserProfileAndPurchaseHistorySection from '@/app/user/_components/section-profile-history';

export default function UserPage() {
  const { width, height } = useWindowDimensions();

  const sections: SnapSection[] = [
    {
      id: '',
      label: 'User Profile and History',
      content: <UserProfileAndPurchaseHistorySection />,
      icon: <ProfileIcon />,
      enabled: true,
      className: '',
    },
    {
      id: 'purchase-history',
      label: 'Purchase History',
      content: <UserPurchaseHistorySection />,
      icon: <ListIcon />,
      enabled: !!width && width < 1280,
      className: '',
    },
    {
      id: 'chat',
      label: 'Chat',
      content: <UserChatSection />,
      icon: <ChatIcon />,
      enabled: true,
      className: '',
    },
    {
      id: 'config',
      label: 'Configuration',
      content: <UserConfigSection />,
      icon: <GearIcon />,
      enabled: true,
      className: '',
    },
  ];

  return <SnapSections sections={sections} />;
}

import RocketIcon from '@/app/_components/icons/rocket';
import SwordIcon from '@/app/_components/icons/sword';
import TargetIcon from '@/app/_components/icons/target';
import SnapSections from '@/app/_components/snap-sections';

export default function ElojobPage() {
  const sections = [
    { id: '', label: 'Hero', content: <></>, icon: <RocketIcon /> },
    {
      id: 'elojob-order',
      label: 'Order',
      content: <></>,
      icon: <TargetIcon />,
    },
    {
      id: 'elojob-agent',
      label: 'Be An Agent',
      content: <></>,
      icon: <SwordIcon />,
    },
  ];

  return <SnapSections sections={sections} />;
}

import RocketIcon from '@/app/_components/icons/rocket';
import SwordIcon from '@/app/_components/icons/sword';
import TargetIcon from '@/app/_components/icons/target';
import SnapSections, { SnapSection } from '@/app/_components/snap-sections';
import EloJobHero from '@/app/elojob/_components/section-hero';

export default function ElojobPage() {
  const sections: SnapSection[] = [
    {
      id: '',
      label: 'Hero',
      content: <EloJobHero />,
      icon: <RocketIcon />,
      className: '!bg-[url(/images/bg/elojob-hero.png)]',
    },
    {
      id: 'elojob-order',
      label: 'Order',
      content: <></>,
      icon: <TargetIcon />,
      className: '',
    },
    {
      id: 'elojob-agent',
      label: 'Be An Agent',
      content: <></>,
      icon: <SwordIcon />,
      className: '',
    },
  ];

  return <SnapSections sections={sections} />;
}

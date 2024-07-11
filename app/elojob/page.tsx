import RocketIcon from '@/app/_components/icons/rocket';
import SwordIcon from '@/app/_components/icons/sword';
import TargetIcon from '@/app/_components/icons/target';
import SnapSections, { SnapSection } from '@/app/_components/snap-sections';
import EloJobBeAgentSection from '@/app/elojob/_components/section-be-agent';
import EloJobHeroSection from '@/app/elojob/_components/section-hero';
import ElojobOrderSection from '@/app/elojob/_components/section-order';

export default function ElojobPage() {
  const sections: SnapSection[] = [
    {
      id: '',
      label: 'Hero',
      content: <EloJobHeroSection />,
      icon: <RocketIcon />,
      className: '!bg-[url(/images/bg/elojob-hero.png)]',
    },
    {
      id: 'elojob-order',
      label: 'Order',
      content: <ElojobOrderSection />,
      icon: <TargetIcon />,
      className: '',
    },
    {
      id: 'elojob-agent',
      label: 'Be An Agent',
      content: <EloJobBeAgentSection />,
      icon: <SwordIcon />,
      className: '',
    },
  ];

  return <SnapSections sections={sections} />;
}

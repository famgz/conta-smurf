import HomeAboutUsSection from '@/app/(home)/_components/section-about-us';
import HomeBlogSection from '@/app/(home)/_components/section-blog';
import HomeFAQSection from '@/app/(home)/_components/section-faq';
import HomeHeroSection from '@/app/(home)/_components/section-hero';
import HomeMostWantedSection from '@/app/(home)/_components/section-most-wanted';
import HomeProductsSection from '@/app/(home)/_components/section-products';
import AboutUsIcon from '@/app/_components/icons/about-us';
import BlogIcon from '@/app/_components/icons/blog';
import FaqIcon from '@/app/_components/icons/faq';
import HomeIcon from '@/app/_components/icons/home';
import MostWantedIcon from '@/app/_components/icons/most-wanted';
import ProductsIcon from '@/app/_components/icons/products';
import SnapSections, { SnapSection } from '@/app/_components/snap-sections';

export default function Home() {
  const sections: SnapSection[] = [
    {
      id: '',
      label: 'Hero',
      content: <HomeHeroSection />,
      icon: <HomeIcon />,
      enabled: true,
      className: '!p-0',
    },
    {
      id: 'most-wanted',
      label: 'Most Wanted',
      content: <HomeMostWantedSection />,
      icon: <MostWantedIcon />,
      enabled: true,
      className: '',
    },
    {
      id: 'products',
      label: 'Products',
      content: <HomeProductsSection />,
      icon: <ProductsIcon />,
      enabled: true,
      className: '',
    },
    {
      id: 'about-us',
      label: 'About Us',
      content: <HomeAboutUsSection />,
      icon: <AboutUsIcon />,
      enabled: true,
      className: '!max-xl:px-0',
    },
    {
      id: 'faq',
      label: 'FAQ',
      content: <HomeFAQSection />,
      icon: <FaqIcon />,
      enabled: true,
      className: '!bg-[url(/images/bg/faq.png)]',
    },
    {
      id: 'blog',
      label: 'Blog',
      content: <HomeBlogSection />,
      icon: <BlogIcon />,
      enabled: true,
      className: '',
    },
  ];

  return <SnapSections sections={sections} />;
}

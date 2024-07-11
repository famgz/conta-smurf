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
import SnapSections from '@/app/_components/snap-sections';

export default function Home() {
  const sections = [
    {
      // id: 'home-hero',
      id: '',
      label: 'Hero',
      content: <HomeHeroSection />,
      icon: <HomeIcon />,
      className: '!p-0 !xl:pt-[116px] !xl:p-0',
    },
    {
      id: 'home-most-wanted',
      label: 'Most Wanted',
      content: <HomeMostWantedSection />,
      icon: <MostWantedIcon />,
      className: '',
    },
    {
      id: 'home-products',
      label: 'Products',
      content: <HomeProductsSection />,
      icon: <ProductsIcon />,
      className: '',
    },
    {
      id: 'home-about-us',
      label: 'About Us',
      content: <HomeAboutUsSection />,
      icon: <AboutUsIcon />,
      className: '',
    },
    {
      id: 'home-faq',
      label: 'FAQ',
      content: <HomeFAQSection />,
      icon: <FaqIcon />,
      className: '!bg-[url(/images/bg/faq.png)]',
    },
    {
      id: 'home-blog',
      label: 'Blog',
      content: <HomeBlogSection />,
      icon: <BlogIcon />,
      className: '',
    },
  ];

  return <SnapSections sections={sections} />;
}

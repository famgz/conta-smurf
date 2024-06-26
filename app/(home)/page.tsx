import AboutUs from '@/app/(home)/_components/section-about-us';
import HomeHero from '@/app/(home)/_components/section-hero';
import MostWanted from '@/app/(home)/_components/section-most-wanted';
import Products from '@/app/(home)/_components/section-products';
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
      id: 'home-hero',
      label: 'Hero',
      content: <HomeHero />,
      icon: <HomeIcon />,
    },
    {
      id: 'home-most-wanted',
      label: 'Most Wanted',
      content: <MostWanted />,
      icon: <MostWantedIcon />,
    },
    {
      id: 'home-products',
      label: 'Products',
      content: <Products />,
      icon: <ProductsIcon />,
    },
    {
      id: 'home-about-us',
      label: 'About Us',
      content: <AboutUs />,
      icon: <AboutUsIcon />,
    },
    { id: 'home-faq', label: 'FAQ', content: <></>, icon: <FaqIcon /> },
    { id: 'home-blog', label: 'Blog', content: <></>, icon: <BlogIcon /> },
  ];

  return <SnapSections sections={sections} />;
}

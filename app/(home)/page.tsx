import AboutUsIcon from '@/app/_components/icons/about-us';
import BlogIcon from '@/app/_components/icons/blog';
import FaqIcon from '@/app/_components/icons/faq';
import HomeIcon from '@/app/_components/icons/home';
import MostWantedIcon from '@/app/_components/icons/most-wanted';
import ProductsIcon from '@/app/_components/icons/products';
import SnapSections from '@/app/_components/snap-sections';

export default function Home() {
  const sections = [
    { id: 'home-hero', label: 'Hero', content: <></>, icon: <HomeIcon /> },
    {
      id: 'home-most-wanted',
      label: 'Most Wanted',
      content: <></>,
      icon: <MostWantedIcon />,
    },
    {
      id: 'home-products',
      label: 'Products',
      content: <></>,
      icon: <ProductsIcon />,
    },
    {
      id: 'home-about-us',
      label: 'About Us',
      content: <></>,
      icon: <AboutUsIcon />,
    },
    { id: 'home-faq', label: 'FAQ', content: <></>, icon: <FaqIcon /> },
    { id: 'home-blog', label: 'Blog', content: <></>, icon: <BlogIcon /> },
  ];

  return <SnapSections sections={sections} />;
}

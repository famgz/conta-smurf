import SideMenuButton from '@/app/_components/buttons/side-menu-button';
import FloatingSideMenu from '@/app/_components/floating-side-menu';
import AboutUsIcon from '@/app/_components/icons/about-us';
import BlogIcon from '@/app/_components/icons/blog';
import FaqIcon from '@/app/_components/icons/faq';
import HomeIcon from '@/app/_components/icons/home';
import MostWantedIcon from '@/app/_components/icons/most-wanted';
import ProductsIcon from '@/app/_components/icons/products';

export default function Home() {
  return (
    <>
      <div className="page-section" id="home-hero">
        <span className="text-4xl">Hero</span>
      </div>

      <div className="page-section" id="home-most-wanted">
        <span className="text-4xl">Most Wanteds</span>
      </div>

      <div className="page-section" id="home-products">
        <span className="text-4xl">Products</span>
      </div>

      <div className="page-section" id="home-about-us">
        <span className="text-4xl">About us</span>
      </div>

      <div className="page-section" id="home-faq">
        <span className="text-4xl">FAQ</span>
      </div>

      <div className="page-section" id="home-blog">
        <span className="text-4xl">Blog</span>
      </div>

      <FloatingSideMenu>
        <SideMenuButton href="/#home-hero">
          <HomeIcon />
        </SideMenuButton>

        <SideMenuButton href="/#home-most-wanted">
          <MostWantedIcon />
        </SideMenuButton>

        <SideMenuButton href="/#home-products">
          <ProductsIcon />
        </SideMenuButton>

        <SideMenuButton href="/#home-about-us">
          <AboutUsIcon />
        </SideMenuButton>

        <SideMenuButton href="/#home-faq">
          <FaqIcon />
        </SideMenuButton>

        <SideMenuButton href="/#home-blog">
          <BlogIcon />
        </SideMenuButton>
      </FloatingSideMenu>
    </>
  );
}

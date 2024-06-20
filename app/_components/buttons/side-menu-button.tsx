import HomeIcon from '@/app/_components/icons/home';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';

interface SideMenuButtonProps {
  children: string | JSX.Element | JSX.Element[];
  href: string;
}

export default function SideMenuButton({
  children,
  href,
}: SideMenuButtonProps) {
  return (
    <Button variant="secondary" size="icon">
      <Link href={href}>{children}</Link>
    </Button>
  );
}

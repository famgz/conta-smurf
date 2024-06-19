import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/app/_lib/utils';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Conta Smurf',
  description: 'Conta Smurf',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(outfit.className)}>
        <div className="flex min-h-screen flex-col bg-custom-gradient">
          <Header />
          <main className="mx-auto max-w-[1920px] flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

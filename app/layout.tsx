import Footer from '@/app/_components/footer';
import Header from '@/app/_components/header';
import { cn } from '@/app/_lib/utils';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
    <html lang="en" className="hide-scrollbar">
      <body className={cn(outfit.className)}>
        <Suspense>
          <Header />
        </Suspense>
        <div className="flex min-h-screen flex-col bg-custom-gradient">
          <main className="mx-auto w-full flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

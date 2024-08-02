import Footer from '@/app/_components/footer';
import Header from '@/app/_components/header';
import { cn } from '@/app/_lib/utils';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Outfit } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

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
        <SessionProvider>
          <Header />
          <div className="flex min-h-screen flex-col bg-custom-gradient">
            <Toaster />
            <main className="mx-auto w-full flex-1">{children}</main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}

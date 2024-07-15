import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-section !bg-[url('/images/bg/not-found.png')] max-lg:bg-right">
      <div className="flex-center !max-h-[500px] !max-w-[1024px] !rounded-none max-lg:flex-col lg:gap-10">
        <div className="relative size-[200px] lg:size-[354px]">
          <Image
            src={'/images/blitz.png'}
            height={354}
            width={354}
            alt="Imagem Blitz"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-start gap-2 max-lg:justify-between lg:gap-6">
          <div className="flex flex-col items-start max-lg:mx-auto">
            <h1 className="text-3xl font-bold lg:text-9xl">404</h1>
            <p className="text-3xl font-bold lg:text-6xl">Page not found</p>
            <div className="text-left font-light lg:space-y-2 lg:text-4xl">
              <p className="">Oops, Looks like blitz hooked this page</p>
              <p className="">Let&apos;s come back to a warded place</p>
            </div>
          </div>

          <div className="max-w-[400px] space-y-1 max-lg:mx-auto max-lg:mt-auto max-lg:w-full">
            <Button size="xl" variant="golden" className="max-lg:w-full">
              <Link href="/" className="text-3xl lg:text-6xl">
                Return to Base
              </Link>
            </Button>
            <p className="text-left text-xs text-muted-foreground">
              Click on this button return you to the homepage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

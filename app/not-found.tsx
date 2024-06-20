import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="page-section !bg-[url('/images/bg-not-found.png')]">
      <div className="flex-center !max-w-[1024px] gap-10">
        <Image
          src={'/images/blitz.png'}
          height={354}
          width={354}
          alt="Imagem Blitz"
        />
        <div className="flex flex-1 flex-col items-start gap-6">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-6xl font-bold">Page not found</p>
          <div className="space-y-2 text-left text-4xl font-light">
            <p className="">Oops, Looks like blitz hooked this page</p>
            <p className="">Let&apos;s come back to a warded place</p>
          </div>
          <Button size="xl" variant="golden">
            <span className="text-6xl">Return to Base</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

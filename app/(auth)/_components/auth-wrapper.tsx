import { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  imageUrl: string;
  children: ReactNode;
}

export default function AuthWrapper({ title, imageUrl, children }: Props) {
  return (
    <div className="page-section !px-0 max-xl:!pb-5">
      <div className="flex h-full w-full flex-col items-center justify-center pb-5 max-xl:gap-4 xl:grid xl:max-w-[1780px] xl:grid-cols-2 xl:px-[70px] xl:pb-10 xl:pt-3">
        <h1 className="text-5xl font-bold xl:hidden">{title}</h1>

        {/* Section image */}
        <div className="relative h-[300px] w-full max-w-[700px] overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[2px_10px_30px_rgba(8,_112,_184,_0.7)] max-xl:-mx-5 xl:h-full">
          <Image
            src={imageUrl}
            fill
            className="object-cover"
            alt="PC game cartoon character wearing a garment."
          />
        </div>

        {/* Form */}
        <div className="flex-center mx-auto w-full max-w-[280px] flex-col xl:max-w-[427px]">
          <h1 className="mb-6 text-6xl font-bold max-xl:hidden">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

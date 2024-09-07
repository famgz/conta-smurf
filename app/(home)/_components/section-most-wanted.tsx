import ProductCard from '@/app/(home)/_components/product-card';
import { getProducts } from '@/app/_actions/prisma';
import { ScrollArea } from '@/app/_components/ui/scroll-area';

export default async function HomeMostWantedSection() {
  let products = await getProducts();

  products = products.slice(0, 8);

  return (
    <div className="flex h-full max-w-[1580px] flex-col rounded-[30px] bg-folder p-1 py-4 xl:p-14 xl:pt-8">
      {/* title */}
      <h2 className="w-full text-center text-2xl font-extrabold uppercase text-brass shadow-brass text-shadow-sm xl:text-left xl:text-6xl">
        Most Wanted
      </h2>

      {/* cards */}
      <ScrollArea className="hide-scrollbar mt-5 flex-auto">
        <div className="flex-center flex-wrap gap-x-2.5 gap-y-5 pb-3 xl:gap-10">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

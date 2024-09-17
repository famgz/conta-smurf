import { getProductOrdersByUserId } from '@/app/_actions/prisma';
import { Button } from '@/app/_components/ui/button';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { cn } from '@/app/_lib/utils';
import { ProductOrderFull } from '@/app/_types/order';
import PurchaseOrderItem from '@/app/user/_components/purchase-order-item';
import { SearchIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function PurchaseHistoryTable() {
  const [orders, setOrders] = useState<ProductOrderFull[]>([]);
  const { data } = useSession();
  const user = data?.user;
  const [currentHistoryTab, setCurrentHistoryTab] = useState('Accounts');
  const purchaseHistoryTabs = [
    'All',
    'Elojob',
    'Accounts',
    'Services',
    'Lootbox',
    'Cheats',
    'Gifts',
  ];

  useEffect(() => {
    async function getOrders() {
      const orders = await getProductOrdersByUserId(user!.id);
      setOrders(orders);
    }
    if (user) {
      getOrders();
    }
  }, [user]);

  if (!user) return;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[30px] bg-light">
      {/* header */}
      <div className="flex-center h-[90px] gap-2 bg-tab-header px-4 sm:px-8 2xl:gap-5">
        <div className="relative size-14 shrink-0 2xl:size-20">
          <Image
            src="/images/icons/decoracao-1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <h2 className="flex-1 text-left 2xl:text-3xl">Purchase History</h2>

        <div className="flex-center gap-2 2xl:gap-5">
          {purchaseHistoryTabs.map((tab, index) => (
            <Button
              className={cn(
                'flex-center h-7 w-16 rounded-[3px] border-[1px] border-white bg-transparent text-white hover:text-muted 2xl:h-11 2xl:w-20 2xl:border-[2px]',
                index > 0 && 'max-xl:hidden',
                tab === currentHistoryTab ? 'bg-selected text-muted' : ''
              )}
              key={tab}
              onClick={() => setCurrentHistoryTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-5 px-5 py-5 xl:px-8 2xl:gap-9">
        {/* search input */}
        <div className="flex h-10 w-full items-center rounded-sm bg-white px-4 sm:gap-4 xl:max-w-[400px]">
          <input
            type="text"
            placeholder="Search a Purchase"
            className="!min-w-0 flex-1 bg-transparent font-light text-muted placeholder-muted-foreground outline-none max-sm:text-sm"
          />
          <SearchIcon className="size-5 shrink-0 text-muted-foreground" />
        </div>

        {/* table */}
        <ScrollArea className="h-[300px] flex-auto max-sm:-mr-3" type={'auto'}>
          <div className="flex flex-col">
            {orders.length > 0
              ? orders.map((order) =>
                  order.items.map(({ product }) => (
                    <PurchaseOrderItem
                      key={order.id}
                      product={product}
                      order={order}
                    />
                  ))
                )
              : 'No product orders were found'}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

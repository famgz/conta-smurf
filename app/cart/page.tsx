'use client';

import DeleteButton from '@/app/_components/buttons/delete-button';
import FinishButton from '@/app/_components/buttons/finish-button';
import MinusButton from '@/app/_components/buttons/minus-button';
import PlusButton from '@/app/_components/buttons/plus-button';
import { Button } from '@/app/_components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { config } from '@/app/config';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();
  const paymentMethods = [
    {
      id: 'pix',
      label: 'Pix',
      img: config.iconsPath + 'payment-pix.png',
    },
    {
      id: 'card-mastercard',
      label: 'Cartão de credito Nacional Mastercard',
      img: config.iconsPath + 'payment-card-mastercard.png',
    },
    {
      id: 'card-visa',
      label: 'Cartão de credito Nacional Visa',
      img: config.iconsPath + 'payment-card-visa.png',
    },
    {
      id: 'crypto',
      label: 'Cripto',
      img: config.iconsPath + 'payment-crypto.png',
    },
    {
      id: 'card-intl',
      label: 'Cartão de credito Internacional',
      img: config.iconsPath + 'payment-card-intl.png',
    },
  ];

  function finishOrder() {
    router.push('/user');
  }

  return (
    <div className="page-section" id="cart-home">
      <div className="!max-w-[1260px] py-12">
        <div className="grid h-full grid-cols-[1fr_2fr] overflow-hidden rounded-[30px]">
          {/* left column - summary */}
          <div className="flex flex-col bg-dark">
            {/* header */}
            <div className="flex h-32 items-center gap-6 px-9 py-3">
              <h2 className="text-4xl font-semibold">Resumo</h2>
            </div>

            {/* payment methods */}
            <div className="flex flex-1 flex-col justify-between p-10 pt-0">
              <div className="space-y-2">
                <h3 className="text-left text-xl">Método de pagamento</h3>
                <RadioGroup className="gap-1" defaultValue={'pix'}>
                  {paymentMethods.map((x) => (
                    <div className="flex items-center gap-3" key={x.id}>
                      <div className="relative size-6">
                        <Image
                          src={x.img}
                          alt={`payment method ${x}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <RadioGroupItem value={x.id} />
                      <span className="whitespace-nowrap text-sm font-light">
                        {x.label}
                      </span>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* discount coupon */}
              <div className="space-y-1">
                <p className="text-left font-extralight text-muted-foreground">
                  Cupom de desconto ou de Parceria?
                </p>

                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    name="discount-coupon"
                    placeholder="SMURFNOTA10"
                    className="h-10 w-48 flex-1 rounded-sm bg-white px-4 text-lg font-light text-muted placeholder-muted-foreground outline-none"
                  />
                  <Button variant={'dark'} className="px-6">
                    Apply
                  </Button>
                </div>
                <div className="flex items-center gap-5 py-3 font-extralight">
                  <span>-10% Cupom aplicado</span>
                  <span>=</span>
                  <span>$2,5</span>
                  <DeleteButton />
                </div>
              </div>

              {/* resume */}
              <div>
                <p className="text-right text-xs font-extralight text-muted-foreground">
                  Final order Price
                </p>
                <div className="flex items-center justify-between py-1">
                  <FinishButton onClick={finishOrder}>
                    Finish Order
                  </FinishButton>
                  <span className="text-4xl font-light">$22,5</span>
                </div>
                <p className="text-left text-xs font-extralight text-muted-foreground">
                  Você será redirecionado ao Sellix
                </p>
              </div>
            </div>
          </div>

          {/* right column - cart ietms */}
          <div className="flex flex-col bg-light">
            {/* header */}
            <div className="flex h-32 items-center gap-6 bg-tab-header px-9 py-3">
              <h2 className="text-4xl font-semibold">Carrinho</h2>
            </div>

            <div className="flex flex-1 flex-col p-8">
              <ScrollArea className="-mr-2 h-[300px] flex-auto pr-6">
                <div className="space-y-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex gap-3 rounded-2xl bg-black/20 p-3"
                    >
                      <div className="relative size-20 overflow-hidden rounded-2xl">
                        <Image
                          src="/images/icons/product-example.jpg"
                          alt="product image"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-1 justify-between">
                        <div className="text-left">
                          <p className="text-xl leading-5">LoL Account</p>
                          <p className="text-sm font-extralight leading-5">
                            GrandMaster Account
                          </p>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                          <DeleteButton />

                          <div className="flex items-center gap-2">
                            <MinusButton />
                            <span className="text-2xl">1</span>
                            <PlusButton />
                            <span className="text-3xl">$25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

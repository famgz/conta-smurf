'use client';

import DeleteButton from '@/app/_components/buttons/delete-button';
import FinishButton from '@/app/_components/buttons/finish-button';
import MinusButton from '@/app/_components/buttons/minus-button';
import PlusButton from '@/app/_components/buttons/plus-button';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { formatPrice } from '@/app/_lib/utils';
import { CartProduct, useCartStore } from '@/app/_store/cart-store';
import { basePaths } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();

  const { addToCart, cart, cartTotalItems, removeFromCart, cartTotalPrice } =
    useCartStore();

  const totalItems = cartTotalItems();
  const totalPrice = cartTotalPrice();

  const paymentMethods = [
    {
      id: 'pix',
      label: 'Pix',
      img: basePaths.iconsPath + 'payment-pix.png',
    },
    {
      id: 'card-mastercard',
      label: 'Cartão de credito Nacional Mastercard',
      img: basePaths.iconsPath + 'payment-card-mastercard.png',
    },
    {
      id: 'card-visa',
      label: 'Cartão de credito Nacional Visa',
      img: basePaths.iconsPath + 'payment-card-visa.png',
    },
    {
      id: 'crypto',
      label: 'Cripto',
      img: basePaths.iconsPath + 'payment-crypto.png',
    },
    {
      id: 'card-intl',
      label: 'Cartão de credito Internacional',
      img: basePaths.iconsPath + 'payment-card-intl.png',
    },
  ];

  function finishOrder() {
    router.push('/user');
  }

  function handleIncreaseProductQuantity(product: CartProduct) {
    if (product.quantity >= product.availableQuantity) return;
    addToCart(product);
  }

  function handleDecreaseProductQuantity(product: CartProduct) {
    if (product.quantity <= 1) return;
    removeFromCart(product);
  }

  return (
    <div className="page-section max-sm:px-0 max-sm:pb-0" id="cart">
      <div className="sm:!max-h-[800px] sm:!max-w-[1260px]">
        <div className="flex h-full flex-col-reverse overflow-hidden rounded-[30px] max-sm:rounded-none sm:grid sm:grid-cols-[1fr_2fr]">
          {/* left column - summary */}
          <div className="flex flex-col bg-dark max-sm:rounded-t-[30px]">
            {/* header */}
            <div className="flex h-20 items-center px-4 max-sm:hidden xl:px-9 2xl:h-32">
              <h2 className="text-xl font-semibold 2xl:text-4xl">Resumo</h2>
            </div>

            {/* payment methods */}
            <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:pt-0 xl:px-10 xl:pb-10">
              <div className="space-y-2">
                <h3 className="text-left text-lg 2xl:text-xl">
                  Método de pagamento
                </h3>
                <RadioGroup className="gap-1.5" defaultValue={'pix'}>
                  {paymentMethods.map((x) => (
                    <div
                      className="flex items-center gap-2 xl:gap-3"
                      key={x.id}
                    >
                      <div className="relative size-5 xl:size-6">
                        <Image
                          src={x.img}
                          alt={`payment method ${x}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <RadioGroupItem value={x.id} className="max-xl:size-4" />
                      <span className="whitespace-nowrap text-xs font-light xl:text-sm">
                        {x.label}
                      </span>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* discount coupon */}
              <div className="flex flex-col space-y-1 max-sm:items-center">
                <p className="text-left font-extralight text-muted-foreground">
                  Cupom de desconto ou de Parceria?
                </p>

                <div className="flex max-w-[400px] items-center gap-1">
                  <Input
                    type="text"
                    name="discount-coupon"
                    placeholder="SMURFNOTA10"
                    className="h-10 flex-1 rounded-sm bg-white px-4 text-lg font-light text-muted placeholder-muted-foreground outline-none sm:max-w-48"
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
                <div className="flex items-center justify-between gap-4 py-1">
                  <FinishButton onClick={finishOrder}>
                    Finish Order
                  </FinishButton>
                  <span className="text-3xl font-light 2xl:text-4xl">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <p className="text-left text-xs font-extralight text-muted-foreground">
                  Você será redirecionado ao Sellix
                </p>
              </div>
            </div>
          </div>

          {/* right column - cart ietms */}
          <div className="flex flex-1 flex-col sm:bg-light">
            {/* header */}
            <div className="flex items-center px-9 sm:h-20 sm:bg-tab-header 2xl:h-32">
              <h2 className="text-xl font-semibold 2xl:text-4xl">Carrinho</h2>
            </div>

            <div className="flex flex-1 flex-col p-8 max-sm:pt-2">
              <ScrollArea className="-mr-2 h-[100px] flex-auto pr-6">
                <div className="space-y-2">
                  {cart.length > 0 ? (
                    cart.map((product) => (
                      <div
                        key={product.id}
                        className="flex gap-3 rounded-2xl bg-black/20 p-3"
                      >
                        <div className="relative size-20 overflow-hidden rounded-2xl">
                          <Image
                            src={basePaths.imagesPath + product.imageUrl}
                            alt="product image"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-1 justify-between">
                          <div className="text-left">
                            <p className="text-lg leading-5 2xl:text-xl">
                              {product.title}
                            </p>
                            <p className="text-sm font-extralight leading-5">
                              {product.description}
                            </p>
                          </div>

                          <div className="flex flex-col items-end justify-between">
                            <DeleteButton />

                            <div className="flex items-center gap-2">
                              <MinusButton
                                onClick={() =>
                                  handleDecreaseProductQuantity(product)
                                }
                              />
                              <span className="text-xl 2xl:text-2xl">
                                {product.quantity}
                              </span>
                              <PlusButton
                                onClick={() =>
                                  handleIncreaseProductQuantity(product)
                                }
                              />
                              <span className="w-[150px] text-right xl:text-2xl 2xl:text-3xl">
                                {formatPrice(
                                  Number(product.price) * product.quantity
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="space-y-4 text-xl">
                      <p>Cart is empty.</p>
                      <div>
                        Go to{' '}
                        <Link
                          href={'/#products'}
                          className="font-bold hover:underline"
                        >
                          Products
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { useCartStore } from '@/store';
import { formatPrice } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CheckoutButton from './checkout-button';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CartDrawer() {
  const useStore = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center cursor-pointer relative">
          <svg
            min="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-default"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3 bottom-3">
            {useStore.cart.length}
          </span>
        </div>
      </SheetTrigger>

      <SheetContent>
        {useStore.cart.map((item) => (
          <div key={item.id} className="flex gap-4 py-4">
            <Image src={item.image.url} alt="car" width={120} height={120} />
            <div>
              <h2 className="w-42 truncate">{item.name}</h2>
              <h2>Quantidade: {item.quantity}</h2>
              <p className="text-teal-600 text-sm font-bold">
                {formatPrice(item.price)}
              </p>
              <button
                className="py-1 px-2 border rounded-md mt-2 text-sm mr-1"
                onClick={() => useStore.addToCart(item)}
              >
                Adicionar
              </button>
              <button
                className="py-1 px-2 border rounded-md mt-2 text-sm "
                onClick={() => useStore.removeFromCart(item)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}

        <Elements stripe={stripePromise}>
          <CheckoutButton />
        </Elements>
      </SheetContent>
    </Sheet>
  );
}

import { Button } from './ui/button';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartStore } from '@/store';
import Image from 'next/image';
import cartGif from '/public/cart.gif';

type Product = {
  name: string;
  price: number;
  quantity: number;
  image: {
    url: string;
  };
  id: string;
  description: string;
};

export default function CheckoutButton() {
  const stripe = useStripe();
  const { cart } = useCartStore();

  const handleCheckout = async (products: Product) => {
    try {
      if (!stripe) return null;

      await axios.post('/api/create-payment-intent', {
        data: products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {cart.length ? (
        <Button
          className="absolute mb-4 bottom-0 left-0 right-0 w-72 mx-auto"
          onClick={() => handleCheckout(cart as any)}
          size="sm"
        >
          Checkout
        </Button>
      ) : (
        <div className="flex h-svh w-full justify-center items-center">
          <span>no products found</span>
        </div>
      )}
    </>
  );
}

import { Button } from './ui/button';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CarType, useCartStore } from '@/store';

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

  const handleCheckout = async (products: CarType[]) => {
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
    <Button className="w-full" onClick={() => handleCheckout(cart)}>
      Checkout
    </Button>
  );
}

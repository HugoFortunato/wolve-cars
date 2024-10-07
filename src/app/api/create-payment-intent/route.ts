import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';

type Product = {
  id: string;
  description: string;
  image: {
    url: string;
  };
  name: string;
  price: number;
  quantity: number;
};

type ProductPrice = {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  const { data } = await req.json();

  const mappedData = data.map((item: Product) => {
    return {
      price_data: {
        currency: 'brl',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  try {
    const totalAmount = mappedData.reduce(
      (total: number, item: ProductPrice) => {
        console.log(item, 'itenzzz');
        return total + item.price_data.unit_amount * item.quantity;
      },
      0
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: 'brl',
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error) {
    return new NextResponse(error as string, {
      status: 400,
    });
  }
}

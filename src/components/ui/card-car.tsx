import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import CardBottom from './card-footer';
import { CarType } from '@/store';
import { formatPrice } from '@/lib/utils';

type CardListTypes = {
  car: CarType;
  handleAddToCart: (car: CarType) => void;
};

export default function CardCar({ car, handleAddToCart }: CardListTypes) {
  return (
    <Card className="w-[250px]">
      <CardHeader>
        <CardTitle></CardTitle>

        <CardDescription>Car Description</CardDescription>
      </CardHeader>

      <CardContent>
        <Image
          src={car?.image?.url}
          width={500}
          height={300}
          alt="Kitten"
          className="rounded-md"
        />
      </CardContent>

      <CardContent>
        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {formatPrice(car?.price)}
        </span>
      </CardContent>

      <CardBottom onClickAddToCart={() => handleAddToCart(car)} />
    </Card>
  );
}

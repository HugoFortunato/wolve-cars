import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { CarType } from '@/store';
import { formatPrice } from '@/lib/utils';
import CardBottom from './ui/card-footer';

type CardListTypes = {
  car: CarType;
  pushToCarDetail: (car: CarType) => void;
};

export default function CardCar({ car, pushToCarDetail }: CardListTypes) {
  return (
    <Card className="w-[250px]">
      <CardHeader>
        <CardTitle>{car?.name}</CardTitle>

        <CardDescription>{car?.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center">
        <Image
          src={car?.image?.url}
          width={160}
          height={10}
          alt="Kitten"
          className="rounded-md"
        />
      </CardContent>

      <CardContent className="flex flex-col gap-5">
        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {formatPrice(car?.price)}
        </span>

        <p className="text-gray-500 dark:text-gray-400 text-xs/[2px]">
          Price based per day*
        </p>
      </CardContent>

      <CardBottom onRedirectToCarDetail={() => pushToCarDetail(car)} />
    </Card>
  );
}

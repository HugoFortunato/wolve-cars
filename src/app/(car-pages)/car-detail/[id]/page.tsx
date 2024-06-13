import * as React from 'react';

import { Button } from '@/components/ui/button';

import { getCarDetail } from '@/graphql/car-list';
import { CarType, useCartStore } from '@/store';
import CarContent from '@/components/car-content';

type CarDetailParams = {
  params: {
    id: string;
  };
};

export type CarDetailType = {
  carList: CarType;
};

export default async function CarDetail({ params: { id } }: CarDetailParams) {
  const carDetail: CarDetailType = await getCarDetail(id);

  return (
    <div className="flex justify-center items-center w-svw h-svh">
      <CarContent carList={{ ...carDetail.carList }} />
    </div>
  );
}

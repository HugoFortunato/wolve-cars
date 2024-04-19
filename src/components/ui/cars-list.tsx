'use client';

import React, { useEffect, useState } from 'react';

import { CarType, useCartStore } from '@/store';
import CardCar from './card-car';
import { useRouter } from 'next/navigation';

export type CarListResponse = {
  carLists: CarType[];
};

export default function CarsList(carList: CarListResponse) {
  const router = useRouter();

  const [currentCarList, setCurrentCarList] =
    useState<CarListResponse>(carList);

  const { carLists } = currentCarList;

  useEffect(() => {
    setCurrentCarList(carList);
  }, [carList]);

  return (
    <>
      {carLists?.map((car: CarType) => (
        <CardCar
          key={car.id}
          car={car}
          pushToCarDetail={(_) => router.push(`/car-detail/${car.id}`)}
        />
      ))}
    </>
  );
}

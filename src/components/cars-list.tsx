'use client';

import React, { useEffect, useState } from 'react';

import { CarType, useCartStore } from '@/store';
import CardCar from './card-car';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export type CarListResponse = {
  carLists: CarType[];
};

export default function CarsList(carList: CarListResponse) {
  const router = useRouter();
  const session = useSession();

  const [currentCarList, setCurrentCarList] =
    useState<CarListResponse>(carList);

  const { carLists } = currentCarList;

  useEffect(() => {
    setCurrentCarList(carList);
  }, [carList]);

  if (!session.data) {
    router.push('/');
  }

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

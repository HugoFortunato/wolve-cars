'use client';

import React, { useEffect, useState } from 'react';

import { CarType, useCartStore } from '@/store';
import CardCar from './card-car';

export type CarListResponse = {
  carLists: CarType[];
};

export default function CarsList(carList: CarListResponse) {
  const useStore = useCartStore();

  const [currentCarList, setCurrentCarList] =
    useState<CarListResponse>(carList);

  const { carLists } = currentCarList;

  const handleAddToCart = (car: CarType) => {
    useStore.addToCart(car);
  };

  useEffect(() => {
    setCurrentCarList(carList);
  }, [carList]);

  return (
    <>
      {carLists?.map((car: CarType) => (
        <CardCar
          key={car.id}
          car={car}
          handleAddToCart={() => handleAddToCart(car)}
        />
      ))}
    </>
  );
}

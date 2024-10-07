'use client';

import React from 'react';
import { CarType } from '@/store';
import CardCar from './card-car';
import { useRouter } from 'next/navigation';
import useCarFilter from '@/hooks/useUserFilter';

export type CarListResponse = {
  carLists: CarType[];
};

export default function CarsList({ carList }: { carList: CarListResponse }) {
  const router = useRouter();
  const { filteredCars, setFilter } = useCarFilter(carList);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <input
        type="text"
        placeholder="Search"
        className="w-64 h-8 border border-gray-300 rounded-md px-2 outline-none"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCars?.map((car: CarType) => (
          <CardCar
            key={car.id}
            car={car}
            pushToCarDetail={(_) => router.push(`/car-detail/${car.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

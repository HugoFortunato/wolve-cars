'use client';

import React from 'react';
import { Button } from './button';
import { CardFooter } from '@/components/ui/card';

type CardFooterTypes = {
  onClickAddToCart: () => void;
};

export default function CardBottom({ onClickAddToCart }: CardFooterTypes) {
  return (
    <CardFooter className="flex justify-between gap-5">
      <Button className="w-full" onClick={onClickAddToCart}>
        Rent
      </Button>
    </CardFooter>
  );
}

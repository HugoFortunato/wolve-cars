'use client';

import React from 'react';
import { Button } from './button';
import { CardFooter } from '@/components/ui/card';

type CardFooterTypes = {
  onRedirectToCarDetail: () => void;
};

export default function CardBottom({ onRedirectToCarDetail }: CardFooterTypes) {
  return (
    <CardFooter className="flex justify-between gap-5">
      <Button className="w-full" onClick={onRedirectToCarDetail}>
        Detail
      </Button>
    </CardFooter>
  );
}

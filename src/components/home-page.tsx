'use client';

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <img src="/wolf.gif" alt="wolf gif" width={650} />

      <Button variant="outline" onClick={() => router.push('/auth')}>
        Explore
      </Button>
    </>
  );
}

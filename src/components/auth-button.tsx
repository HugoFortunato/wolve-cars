'use client';

import React from 'react';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button variant="default" onClick={() => signOut({ callbackUrl: '/' })}>
        Logout
      </Button>
    );
  }

  return (
    <Button variant="default" onClick={() => signIn()}>
      LogIn
    </Button>
  );
}

'use client';

import {
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSession, signIn } from 'next-auth/react';

export default function AuthPage() {
  const router = useRouter();
  const { status } = useSession();

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <span>carregando...</span>;
      case 'authenticated':
        router.push('/car-list');
        break;
      case 'unauthenticated':
        return (
          <div>
            <CardHeader className="flex justify-center items-center gap-6">
              <Image src="/github.webp" alt="logo" width={60} height={60} />
              <CardDescription>Press the button below to login</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <Button
                  className="w-full"
                  type="submit"
                  onClick={() => signIn()}
                >
                  Github
                </Button>
              </div>
            </CardContent>
          </div>
        );
      default:
        return;
    }
  };

  return <Card className="mx-auto max-w-sm">{renderContent()}</Card>;
}

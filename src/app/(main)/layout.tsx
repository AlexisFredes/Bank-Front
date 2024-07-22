'use client';
import { Footer } from '@/src/components/navigation/footer';
import { Header } from '@/src/components/navigation/header';
import Icon from '@/src/components/ui/icon';
import { RootState } from '@/src/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AUTH_LOGIN_ROUTE } from '../(auth)/auth-routes';

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const account = useSelector((state: RootState) => state.account.value);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!account) {
    router.push(AUTH_LOGIN_ROUTE);
  }

  if (!isMounted) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Icon
          name="progress_activity"
          className="animate-spin text-8xl font-bold text-red-600"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="flex-1 flex flex-col loverflow-y-auto grow">
        <main className="flex-1 flex flex-col px-6 lg:px-[84px] pt-16 bg-[#f5f5f5] pb-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

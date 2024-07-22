'use client';
import { Footer } from '@/src/components/navigation/footer';
import { Header } from '@/src/components/navigation/header';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Error404Icon } from '../components/icons/error-404-icon';
import { Button } from '../components/ui/button';
import { APP_BASE_ROUTE } from './app-routes';

export default function NotFound() {
  const { t } = useTranslation(['common']);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow h-full flex flex-col mt-16 items-center justify-center">
        <div className="flex flex-col items-center">
          <Error404Icon height={168} width={168} VBH={168} VBW={168} />
          <h1 className="font-bold text-4xl mt-2">Error 404</h1>
          <h2 className="text-xl text-gray-700 mt-4">
            {t('GLOBAL.PAGE_NOT_FOUND')}
          </h2>
          <div className="flex justify-between gap-8 mt-8">
            <Link href={APP_BASE_ROUTE}>
              <Button>{t('GLOBAL.GO_TO_HOME')}</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

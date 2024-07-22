'use client';
import { AUTH_LOGIN_ROUTE } from '@/src/app/(auth)/auth-routes';
import { APP_BASE_ROUTE } from '@/src/app/app-routes';
import { Sidebar } from '@/src/components/navigation/sidebar';
import { Button } from '@/src/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/src/components/ui/dropdown-menu';
import Icon from '@/src/components/ui/icon';
import { AppDispatch, RootState } from '@/src/store';
import { setAccount } from '@/src/store/accountSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

export const Header = ({ showSidebar = true }: { showSidebar?: boolean }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('header');
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const account = useSelector((state: RootState) => state.account.value);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeAvatar = () => {
    setIsOpen(false);
  };

  const navigateToHome = () => {
    router.push(APP_BASE_ROUTE);
  };

  const capitalizeFirstTwoLetters = (value: string) => {
    return value.slice(0, 2).toUpperCase();
  };

  const handleLogOut = () => {
    router.push(AUTH_LOGIN_ROUTE);
    setTimeout(() => dispatch(setAccount(null)), 200);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 bg-black/60 "
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
      <nav
        className={`w-full ${sidebarOpen ? 'pr-8' : ''} h-16 flex justify-between items-center bg-white shadow-02 z-10 fixed px-4`}
      >
        {showSidebar && (
          <button onClick={toggleSidebar} className="flex items-center">
            <Icon name="menu" className="text-2xl text-red-600" />
            <p className="text-2xl font-bold hidden md:block">
              {t('HEADER.MENU')}
            </p>
          </button>
        )}
        <div className="hover:cursor-pointer" onClick={navigateToHome}>
          <Image
            height={200}
            width={100}
            style={{ width: '150px', height: '60px' }}
            src="/assets/images/navigation/logo-bank-01.png"
            priority
            alt="Logo Banco Alex"
          />
        </div>
        <div className="flex items-center">
          <DropdownMenu
            open={isOpen}
            modal={false}
            onOpenChange={(open: boolean) => {
              setIsOpen(open);
            }}
          >
            <DropdownMenuTrigger className="bg-red-100 font-bold text-red-600 w-10 h-10 rounded-full">
              {capitalizeFirstTwoLetters(account.name as string)}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 mt-4 w-[272px] pb-4">
              <div className="p-4 pb-0">
                <div className="flex justify-end">
                  <div className="hover:cursor-pointer" onClick={closeAvatar}>
                    <Icon name="close" className="text-2xl text-red-600" />
                  </div>
                </div>

                <div className="max-h-[64px]">
                  <div className="text-lg leading-none font-bold">
                    {account.name}
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator className="m-0 mt-4 text-gray-300" />
              <DropdownMenuItem className="flex gap-x-4 py-2 px-4 h-[56px]">
                <Icon name="help" className="text-2xl text-red-600" />

                <p className="text-base">{t('USER_MENU.FAQS')}</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-x-4 py-2 px-4 h-[56px]">
                <Icon name="settings" className="text-2xl text-red-600" />

                <p className="text-base">{t('USER_MENU.CONFIGURATION')}</p>
              </DropdownMenuItem>
              <div className="flex justify-center items-center">
                <Button
                  size="sm"
                  className="w-[248px] mt-4 h-[32px] text-sm font-semibold"
                  onClick={handleLogOut}
                >
                  {t('USER_MENU.LOG_OUT')}
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      {sidebarOpen && (
        <Sidebar sidebarOpen={sidebarOpen} handleOpenSide={setSidebarOpen} />
      )}
    </>
  );
};

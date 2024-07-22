'use client';
import { Card } from '@/src/components/ui/card';
import { AccountData } from '@/src/interfaces/account';
import { maskNumber } from '@/src/lib/utils';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import ACCOUNTS_BASE_ROUTE from '../(routes)/cuentas/accounts-routes';

interface AccountItemProps {
  account: AccountData;
  showBalance?: boolean;
  balance: number;
}
export const AccountItem = ({
  account,
  showBalance,
  balance
}: AccountItemProps) => {
  const { t } = useTranslation(['home', 'common']);

  const router = useRouter();
  const redirectToAccount = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    router.push(`${ACCOUNTS_BASE_ROUTE}/${account.accountNumber}`);
  };

  return (
    <Card
      className="w-full xl:w-[408px] max-h-[112px] flex justify-between p-4 bg-white shadow-01 hover:cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={redirectToAccount}
    >
      <div className="w-full">
        <div className="h-[24px]">
          <p className="text-sm"> {account.name}</p>
        </div>
        <div className="flex flex-col justify-end mt-2">
          <p className="text-xs text-gray-700">
            {t('home:ACCOUNTS.AVAILABLE')}
          </p>
          <h3
            className={`text-base font-bold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            $ {showBalance ? balance : '****'}
          </h3>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between h-[24px]">
          <p className="text-base mr-2">
            {showBalance
              ? account.accountNumber
              : `${maskNumber(String(account.accountNumber))}`}
          </p>
        </div>
      </div>
    </Card>
  );
};

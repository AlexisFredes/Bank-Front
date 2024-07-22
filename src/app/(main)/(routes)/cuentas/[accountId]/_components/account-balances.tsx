'use client';
import { Card } from '@/src/components/ui/card';
import { useTranslation } from 'react-i18next';

interface AccountBalancesProps {
  balance: number;
}

export const AccountBalances = ({ balance }: AccountBalancesProps) => {
  const { t } = useTranslation(['common', 'account']);

  return (
    <Card className="p-4 shadow-01 items-center justify-center">
      <div
        className="flex flex-col justify-center"
        key={t('account:BALANCES.AVAILABLE_BALANCE')}
      >
        <div className="text-gray-700 text-lg mb-1 lg:mb-[10px] flex items-center gap-1">
          <span>{t('account:BALANCES.AVAILABLE_BALANCE')}</span>
        </div>
        <div
          className={
            balance >= 0 ? 'text-green-500 font-bold' : 'text-red-700 font-bold'
          }
        >
          <span className="mr-1">$</span>
          <span>{balance}</span>
        </div>
      </div>
    </Card>
  );
};

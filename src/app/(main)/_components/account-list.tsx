/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client';
import { accountService } from '@/src/api/account/account';
import { RootState } from '@/src/store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AccountItem } from './account-item';
import { HeaderSection } from './header-section';
export const AccountList = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [balance, setBalance] = useState(0);
  const { t } = useTranslation('home');

  const account = useSelector((state: RootState) => state.account.value);
  const getAccountBalance = async () => {
    const response = await accountService.getBalance({ id: account.id });
    if (response?.balance) {
      setBalance(Number(response.balance));
    }
  };
  useEffect(() => {
    getAccountBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visibleAccounts = [account];
  return (
    <>
      <HeaderSection
        setShowBalance={setShowBalance}
        sectionTitle={t('ACCOUNTS.TITLE')}
      />
      <div className="grid w-full lg:grid-cols-2 gap-6">
        {visibleAccounts.map((account) => (
          <AccountItem
            account={account}
            balance={balance}
            showBalance={showBalance}
            key={account.id}
          />
        ))}
      </div>
    </>
  );
};

'use client';
import { accountService } from '@/src/api/account/account';
import { AccountBalances } from '@/src/app/(main)/(routes)/cuentas/[accountId]/_components/account-balances';
import { TransactionsTableColumns } from '@/src/app/(main)/(routes)/cuentas/[accountId]/_components/transactions-table/transactions-table-columns';
import { PrimaryTable } from '@/src/components/table/table-primary';
import { Button } from '@/src/components/ui/button';
import { useModal } from '@/src/hooks/use-modal-store';
import { Transaction } from '@/src/interfaces/account';
import { RootState } from '@/src/store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AccountTitle } from './_components/account-title';

const AccountDetails = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const account = useSelector((state: RootState) => state.account.value);
  const { onOpen } = useModal();
  const { t } = useTranslation(['account']);

  const getTransactions = async () => {
    const response = await accountService.getTransactions({ id: account.id });
    if (!response?.error) {
      setTransactions(response as Transaction[]);
    }
  };

  const getAccountBalance = async () => {
    const response = await accountService.getBalance({ id: account.id });
    if (response?.balance) {
      setBalance(Number(response.balance));
    }
  };

  useEffect(() => {
    getTransactions();
    getAccountBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col mt-4">
        {account && (
          <AccountTitle
            alias={account.name}
            accountNumber={account.accountNumber}
          />
        )}
        <div className="flex mb-6">
          <AccountBalances balance={balance} />
        </div>
        <div className="flex gap-2 mb-6">
          <Button onClick={() => onOpen('transfer')}>
            {t('TRANSFER.BUTTON_TEXT')}
          </Button>
          <Button onClick={() => onOpen('deposit')}>
            {t('DEPOSIT.BUTTON_TEXT')}
          </Button>
        </div>
      </div>

      <div className="flex flex-1">
        <PrimaryTable
          loading={false}
          pageSize={9}
          columns={TransactionsTableColumns}
          data={transactions}
        />
      </div>
    </div>
  );
};

export default AccountDetails;

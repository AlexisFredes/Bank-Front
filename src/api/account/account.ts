import Api from '@/src/api/api-base';

export const accountService = {
  createAccount: async ({
    user,
    accountNumber,
    initialBalance
  }: {
    user: string;
    accountNumber: string;
    initialBalance: string;
  }) => {
    const accountData = await Api('accounts', 'POST', {
      name: user,
      accountNumber,
      initialBalance: Number(initialBalance)
    });
    return accountData;
  },
  getBalance: async ({ id }: { id: number }) => {
    const balance = await Api(`accounts/${id}/balance`, 'GET');

    return balance;
  },
  transaction: async ({
    accountId,
    amount,
    type
  }: {
    accountId: number;
    amount: number;
    type: string;
  }) => {
    const response = await Api('transactions', 'POST', {
      accountId,
      amount,
      type
    });
    return response;
  },
  getTransactions: async ({ id }: { id: number }) => {
    const transactions = await Api(`transactions/${id}`, 'GET');

    return transactions;
  }
};

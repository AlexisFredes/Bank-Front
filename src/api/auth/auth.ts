import Api from '@/src/api/api-base';

export const authService = {
  login: async ({
    user,
    accountNumber
  }: {
    user: string;
    accountNumber: string;
  }) => {
    const accountData = await Api('accounts/validate', 'POST', {
      name: user,
      accountNumber
    });

    return accountData;
  }
};

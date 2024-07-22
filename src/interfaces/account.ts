export interface AccountData {
  id: number;
  name: string;
  balance: number;
  accountNumber: number;
  updatedAt: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  accountId: number;
  type: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

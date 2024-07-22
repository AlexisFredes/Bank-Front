'use client';
import { useEffect, useState } from 'react';
import { DepositModal } from '../modals/account/deposit';
import { TransferModal } from '../modals/account/transfer';
import { CreateAccount } from '../modals/login/createAccount';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <TransferModal />
      <DepositModal />
      <CreateAccount />
    </>
  );
};

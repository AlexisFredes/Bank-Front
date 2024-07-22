import { create } from 'zustand';

export type ModalType = 'transfer' | 'deposit' | 'createAccount';

interface ModalStore<T> {
  type: ModalType | null;
  isOpen: boolean;
  data: T | null;
  accountNumber: string;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
  setData: (data: T) => void;
}

interface ModalData {
  data?: any;
}

export const useModal = create<ModalStore<ModalData>>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  accountNumber: '',
  onOpen: (type) => {
    set({ isOpen: true, type });
  },
  onClose: () => {
    set({ type: null, isOpen: false });
  },
  setData: (data) => set({ data })
}));

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'dd/MM/yyyy');
};

export const maskNumber = (accountNumber: string) => {
  return `${accountNumber
    .slice(0, accountNumber.length - 4)
    .split('')
    .map(() => '*')
    .join('')}${accountNumber.slice(
    accountNumber.length - 4,
    accountNumber.length
  )}`;
};

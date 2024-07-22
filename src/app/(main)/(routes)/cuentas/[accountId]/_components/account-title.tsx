import { Button } from '@/src/components/ui/button';
import Icon from '@/src/components/ui/icon';
import { maskNumber } from '@/src/lib/utils';
import { useState } from 'react';

interface AccountTitleProps {
  alias: string;
  accountNumber: string;
}

export const AccountTitle = ({ alias, accountNumber }: AccountTitleProps) => {
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-1">
        <h1 className="text-2xl md:text-[32px] md:leading-[44px] font-bold text-gray-900">
          {alias}
        </h1>
      </div>
      <div className="flex items-center gap-1">
        <h2 className=" text-gray-700 md:text-lg">
          {showAccountNumber
            ? `Nro ${accountNumber}`
            : `Nro ${maskNumber(accountNumber)}`}
        </h2>
        <Button
          variant="link"
          size="icon"
          className="hover:no-underline"
          onClick={() => {
            setShowAccountNumber(!showAccountNumber);
          }}
        >
          {showAccountNumber ? (
            <Icon name="visibility_off" />
          ) : (
            <Icon name="visibility" />
          )}
        </Button>
      </div>
    </div>
  );
};

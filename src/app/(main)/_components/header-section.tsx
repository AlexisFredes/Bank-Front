import { useState } from 'react';

import { Button } from '@/src/components/ui/button';
import Icon from '@/src/components/ui/icon';
import { useTranslation } from 'react-i18next';

export const HeaderSection = ({
  setShowBalance,
  sectionTitle,
  className
}: {
  setShowBalance?: (value: boolean) => void;
  sectionTitle: string;
  className?: string;
}) => {
  const [showBalance, setShowBalanceLocal] = useState(true);
  const { t } = useTranslation('common');

  return (
    <div className={`flex items-center py-1 mb-3 ${className ?? 'mt-6'}`}>
      <h3 className="text-[22px]">{sectionTitle}</h3>
      {setShowBalance && (
        <Button
          variant="link"
          onClick={() => {
            setShowBalanceLocal(!showBalance);
            setShowBalance && setShowBalance(!showBalance);
          }}
          className="text-sm gap-2 h-0 font-semibold"
        >
          {showBalance ? (
            <>
              {t('GLOBAL.HIDE_BALANCE')}
              <div className="h-6">
                <Icon name="visibility_off" />
              </div>
            </>
          ) : (
            <>
              {t('GLOBAL.SHOW_BALANCE')}
              <div className="h-6">
                <Icon name="visibility" />
              </div>
            </>
          )}
        </Button>
      )}
    </div>
  );
};

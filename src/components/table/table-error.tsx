'use client';
import { useTranslation } from 'react-i18next';
import { UnplugIcon } from '../icons/unplug-icon';

export const TableErrorState = ({ error }: { error: Error | null }) => {
  const { t } = useTranslation('common');

  return (
    <div className="w-full mx-auto my-16 flex flex-col items-center lg:w-[320px]">
      <UnplugIcon width={72} height={72} VBH={168} VBW={168} />
      <div className="text-lg mb-2">{t('GLOBAL.ERROR_STATE')}</div>
      <div className="text-center text-base text-gray-700">
        {t('GLOBAL.ERROR_STATE_MESSAGE')}
        <div className="text-sm italic">{error?.message}</div>
      </div>
      <div></div>
    </div>
  );
};

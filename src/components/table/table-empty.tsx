import Icon from '@/src/components/ui/icon';
import { useTranslation } from 'react-i18next';

export const TableEmptyState = () => {
  const { t } = useTranslation('common');

  return (
    <div className="w-full mx-auto my-16 flex flex-col items-center lg:w-[320px]">
      <Icon name="folder" className="text-[72px] text-red-600" />
      <div className="text-lg mb-2">{t('GLOBAL.EMPTY_STATE')}</div>
      <div className="text-center text-base text-gray-700">
        {t('GLOBAL.EMPTY_STATE_MESSAGE')}
      </div>
    </div>
  );
};

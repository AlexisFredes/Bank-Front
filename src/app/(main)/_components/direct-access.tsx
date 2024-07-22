import { CreditIcon } from '@/src/components/icons/credit-icon';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/src/components/ui/carousel';
import { useScreenDetector } from '@/src/hooks/use-screen-detector';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { HeaderSection } from './header-section';

const DIRECT_ACCESS = [
  {
    title: 'CREDITS',
    img: <CreditIcon width={37} height={38} VBW={37} VBH={38} />
  }
];

export const DirectAccess = () => {
  const router = useRouter();
  const { t } = useTranslation('home');
  const { isLaptop, isMobile, isTablet, isLaptopLg } = useScreenDetector();

  const ScrollComponent = isLaptop ? 'div' : Carousel;
  const ContentComponent = isLaptop || isLaptopLg ? 'div' : CarouselContent;

  const containerClass = clsx({
    'w-[1272px] flex gap-6': isLaptopLg,
    'grid grid-cols-3 gap-6': isLaptop && !isLaptopLg,
    'flex gap-6': !isLaptop && (isTablet || isMobile)
  });

  return (
    <>
      <HeaderSection sectionTitle={t('SHORTCUTS.TITLE')} />
      <ScrollComponent className={!isLaptopLg ? 'w-[100%]' : ''}>
        <ContentComponent className={containerClass}>
          {DIRECT_ACCESS.map((directAccess) => (
            <div
              className="px-8 min-w-[192px] h-[104px] bg-white hover:bg-red-600 hover:text-white fill-red-600 hover:fill-white hover:cursor-pointer transition-colors text-center shadow-01 flex justify-center items-center rounded-lg"
              key={directAccess.title}
              onClick={() => {
                router.push('#');
              }}
            >
              <div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 flex justify-center items-center">
                    {directAccess.img}
                  </div>
                </div>
                <div className="text-base">
                  {t(`SHORTCUTS.${directAccess.title}`)}
                </div>
              </div>
            </div>
          ))}
        </ContentComponent>
        {isMobile || isTablet ? (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        ) : null}
      </ScrollComponent>
    </>
  );
};

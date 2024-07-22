'use client';
import { useScreenDetector } from '@/src/hooks/use-screen-detector';
import Image from 'next/image';

export const Banner = () => {
  const { isMobile } = useScreenDetector();
  return (
    <div className="relative xl:w-[1272px]">
      <div className="relative w-full">
        <Image
          alt="banner"
          src={
            isMobile
              ? 'assets/images/home/banner-mobile.svg'
              : 'assets/images/home/banner.svg'
          }
          height={142}
          width={1272}
          priority={true}
        />
      </div>
    </div>
  );
};

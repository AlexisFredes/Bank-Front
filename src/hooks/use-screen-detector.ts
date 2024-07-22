import { useEffect, useState } from 'react';

export const useScreenDetector = () => {
  const isClient = typeof window === 'object';

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (isClient) {
      window.addEventListener('resize', handleWindowSizeChange);

      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }
  }, [isClient]);

  const isMobile = isClient && width <= 640;
  const isTablet = isClient && width > 640 && width <= 1024;
  const isLaptop = isClient && width > 1024 && width <= 1280;
  const isLaptopLg = isClient && width > 1280;

  return { isMobile, isTablet, isLaptop, isLaptopLg };
};

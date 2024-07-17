'use client';

import { useEffect, useState } from 'react';

type WindowDimentions = {
  width: number;
  height: number;
};

function useWindowDimensions(): WindowDimentions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize(): void {
      if (typeof window !== 'undefined') {
        setWindowDimensions({
          width: window.innerWidth || 0,
          height: window.innerHeight || 0,
        });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;

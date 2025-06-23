import { useEffect, useState } from 'react';

const breakpoints = {
  sm: 640,
  md: 800,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export default function useBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAbove = (key) => width >= breakpoints[key];
  const isBelow = (key) => width < breakpoints[key];

  return {
    width,
    isSm: isAbove('sm'),
    isMd: isAbove('md'),
    isLg: isAbove('lg'),
    isXl: isAbove('xl'),
    is2xl: isAbove('2xl'),
    isAbove,
    isBelow,
  };
}

import { useState, useEffect } from 'react';

export const useDeviceType = () => {
  const getDeviceType = () => {
    const width = window.innerWidth;
    return {
      isMobile: width <= 640,
      isTab: width > 640 && width <= 820,
      isLargeTab: width > 820 && width < 1025,
      isWeb: width >= 1025,
    };
  };

  const [device, setDevice] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return device;
};

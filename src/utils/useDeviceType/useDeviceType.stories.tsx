import { useDeviceType } from './useDeviceType';
import React from 'react';
export default {
  title: 'Utils/useDeviceType',
  component: useDeviceType,
};
const getDeviceLabel = (isMobile: boolean, isTab: boolean, isWeb: boolean) => {
  if (isMobile) return 'Mobile View';
  if (isTab) return 'Tablet View';
  if (isWeb) return 'Web View';
  return '';
};

export const Default = () => {
  const { isMobile, isTab, isWeb } = useDeviceType();
  return (
    <div>
      <p>{getDeviceLabel(isMobile, isTab, isWeb)}</p>
    </div>
  );
};

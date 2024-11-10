import { RefObject, useEffect } from 'react';

export interface PortalPosition {
  positionX: number;
  positionY: number;
  width: number;
  fromBottom: number;
}

const portalPosition: PortalPosition = {
  positionX: 0,
  positionY: 0,
  width: 0,
  fromBottom: 0,
};

const calculatePosition = (portalRef: RefObject<HTMLElement>) => {
  if (!portalRef?.current) {
    return portalPosition;
  }
  const dropdownRect = portalRef.current.getBoundingClientRect();
  const newPosition = {
    positionX: dropdownRect.left + window.scrollX,
    positionY: dropdownRect.top + window.scrollY,
    width: portalRef.current.offsetWidth,
    fromBottom: window.innerHeight - (dropdownRect.top + dropdownRect.height),
  };
  return newPosition;
};

const usePortalPosition = (
  portalRef: RefObject<HTMLElement>,
  isPortalOpen: Boolean
) => {
  useEffect(() => {
    const handleUpdate = () => {
      calculatePosition(portalRef);
    };

    if (isPortalOpen) {
      window.addEventListener('resize', handleUpdate);
      window.addEventListener('scroll', handleUpdate);
    }
    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate);
    };
  }, [isPortalOpen]);

  return calculatePosition;
};

export default usePortalPosition;

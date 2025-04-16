import { useEffect, RefObject } from 'react';
import { KeyboardAction } from './types';

export const useKeyboardActions = (
  actions: KeyboardAction[],
  ref?: RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (ref?.current) {
        if (!ref.current.contains(document.activeElement)) {
          return;
        }
      }

      actions.forEach(({ key, action }) => {
        if (event.key === key) {
          action();
        }
      });
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [actions, ref]);
};

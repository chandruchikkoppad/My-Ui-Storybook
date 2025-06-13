import { useRef, useCallback, useEffect } from 'react';

function useConditionalLock(fn: Function, unlockCondition: boolean) {
  const isLocked = useRef(false);

  useEffect(() => {
    if (unlockCondition) {
      isLocked.current = false;
    }
  }, [unlockCondition]);

  return useCallback(
    (...args: any[]) => {
      if (!isLocked.current) {
        fn(...args);
        isLocked.current = true;
      }
    },
    [fn]
  );
}

export default useConditionalLock;

import { useEffect } from 'react';

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  ignoreRefs: Array<React.RefObject<HTMLElement> | undefined> = []
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !ignoreRefs.some(
          (ignoreRef) =>
            ignoreRef?.current &&
            ignoreRef.current.contains(event.target as Node)
        )
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, ignoreRefs]);
};

export default useClickOutside;

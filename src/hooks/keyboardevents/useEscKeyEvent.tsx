import { useEffect } from 'react';
function useEscapeKey(key: string) {
  return (callBack: () => void) => {
    const handleKeyDown: (event: KeyboardEvent) => void = (event) => {
      if (event?.key === key) {
        callBack();
      }
    };
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [key, callBack]);
  };
}
export default useEscapeKey;
import { useEffect } from 'react';
function useEscapeKey(key: string) {
  return (callBack: () => void) => {
    const handleKeyDown: (event: KeyboardEvent) => void = (event) => {
      if (event?.key === key) {
        callBack();
      }
    };
    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [key, callBack]);
  };
}
export default useEscapeKey;
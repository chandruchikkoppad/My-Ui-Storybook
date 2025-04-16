import { useCallback } from 'react';

export function useMergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return useCallback(
    (node: T | null) => {
      refs.forEach((ref) => {
        if (!ref) return;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref && 'current' in ref) {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    },
    [refs]
  );
}

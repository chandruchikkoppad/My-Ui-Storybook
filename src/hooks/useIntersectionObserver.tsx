import { useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void;
}

export function useIntersectionObserver(
  elements: (Element | string)[] | null, // Accepts Element or id strings
  options: UseIntersectionObserverOptions
): void {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!elements || elements.length === 0) return;

    const {
      root = null,
      rootMargin = '0px',
      threshold = 0,
      onIntersect,
    } = options;

    // Resolve elements: convert ids to DOM elements
    const resolvedElements = elements
      .map((element) =>
        typeof element === 'string' ? document.getElementById(element) : element
      )
      .filter((el): el is Element => el !== null); // Ensure valid elements

    if (resolvedElements.length === 0) {
      console.warn('No valid elements to observe.');
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => onIntersect(entry, observer));
      },
      { root, rootMargin, threshold }
    );

    resolvedElements.forEach((element) =>
      observerRef.current?.observe(element)
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [elements, options]);
}

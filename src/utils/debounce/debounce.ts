type Callback = (...args: any[]) => void;

// Export the DebouncedFunction interface to make it publicly accessible
export interface DebouncedFunction extends Function {
  cancel: () => void;
}

export const debounce = (func: Callback, delay: number): DebouncedFunction => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debounced: DebouncedFunction = function (this: any, ...args: any[]) {
    // Clear the previous timeout if it exists
    if (timeoutId) clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };

  // Method to cancel the debounced function
  debounced.cancel = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = null;
  };

  return debounced;
};

type Callback = (...args: any[]) => void;

export interface ThrottledFunction extends Function {
  cancel: () => void;
}

export const throttle = (func: Callback, limit: number): ThrottledFunction => {
  let lastFunc: ReturnType<typeof setTimeout> | null;
  let lastRan: number | null = null;

  const throttled: ThrottledFunction = function (this: any, ...args: any[]) {
    const context = this;
    if (lastRan === null || Date.now() - lastRan >= limit) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        func.apply(context, args);
        lastRan = Date.now();
      }, limit - (Date.now() - lastRan));
    }
  };

  // Method to cancel the throttled function
  throttled.cancel = () => {
    if (lastFunc) clearTimeout(lastFunc);
    lastFunc = null;
    lastRan = null;
  };

  return throttled;
};

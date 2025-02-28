import { useState, useRef } from 'react';
import Toaster from '../Toast/Toast';
import { Variant, ToastProps, AcceptedType } from './types';

let openToast: (
  variant: Variant,
  arg1: AcceptedType,
  arg2?: AcceptedType
) => void;

export const Toastify = () => {
  const [toastProps, setToastProps] = useState<ToastProps>({
    isOpen: false,
    variant: 'info',
    toastTitle: '',
    toastMessage: '',
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  openToast = (variant: Variant, arg1: AcceptedType, arg2?: AcceptedType) => {
    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set the title and message based on the arguments
    let title = '';
    let message = '';

    // Function to format message
    const formatMessage = (input: AcceptedType) => {
      if (input && typeof input === 'object') {
        return JSON.stringify(input, null, 2);
      } else if (typeof input === 'function') {
        return input.toString();
      }
      return String(input);
    };

    // If arg2 exists, use it as the message
    if (arg2 !== undefined) {
      title = formatMessage(arg1);
      message = formatMessage(arg2);
    } else {
      title = formatMessage(arg1);
      message = '';
    }

    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

    // Close the existing toast if open, and then immediately show the new one
    setToastProps((prev) => ({ ...prev, isOpen: false }));

    setTimeout(() => {
      setToastProps({
        isOpen: true,
        variant,
        toastTitle: formattedTitle,
        toastMessage: message,
      });
    }, 10);

    timeoutRef.current = setTimeout(() => {
      setToastProps((prev) => ({ ...prev, isOpen: false }));
    }, 3000);
  };

  return (
    <Toaster
      isOpen={toastProps.isOpen}
      variant={toastProps.variant}
      toastTitle={toastProps.toastTitle}
      toastMessage={toastProps.toastMessage}
      zIndex={1000000000}
    />
  );
};

export default Toastify;

// Utility to trigger toast messages outside of the Toastify component
export const toast = {
  success: (arg1: AcceptedType, arg2?: AcceptedType) =>
    openToast('success', arg1, arg2),
  error: (arg1: AcceptedType, arg2?: AcceptedType) =>
    openToast('danger', arg1, arg2),
  warning: (arg1: AcceptedType, arg2?: AcceptedType) =>
    openToast('warning', arg1, arg2),
  info: (arg1: AcceptedType, arg2?: AcceptedType) =>
    openToast('info', arg1, arg2),
  alert: (arg1: AcceptedType, arg2?: AcceptedType) =>
    openToast('alert', arg1, arg2),
};

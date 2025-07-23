import { useState, useRef } from 'react';
import { Variant, ToastProps, AcceptedType } from './types';
import Toaster from '../Toast/Toast';

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
    toastId: '',
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isManuallyClosed = useRef(false);
  openToast = (variant: Variant, arg1: AcceptedType, arg2?: AcceptedType) => {
    // Immediately reset manual close flag
    isManuallyClosed.current = false;

    // Clear existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }

    const defaultTitles: Record<Variant, string> = {
      success: 'Success',
      danger: 'Error',
      warning: 'Warning',
      info: 'Info',
      alert: 'Alert',
    };

    let title = defaultTitles[variant];
    let message = '';

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
      message = formatMessage(arg1);
    }

    // Close the existing toast if open, and then immediately show the new one

    setToastProps((prev) => ({ ...prev, isOpen: false }));

    // Delay showing the new toast, if not cancelled
    showTimeoutRef.current = setTimeout(() => {
      //  check AGAIN here
      if (isManuallyClosed.current) return;

      setToastProps({
        isOpen: true,
        variant,
        toastTitle: title,
        toastMessage: message,
      });

      timeoutRef.current = setTimeout(() => {
        if (!isManuallyClosed.current) {
          setToastProps((prev) => ({ ...prev, isOpen: false }));
        }
      }, 3000);
    }, 10);
  };

  const handleCancelClick = () => {
    //  Mark it as manually closed BEFORE clearing show timeout
    isManuallyClosed.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }

    setToastProps((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Toaster
      isOpen={toastProps.isOpen}
      variant={toastProps.variant}
      toastTitle={toastProps.toastTitle}
      toastMessage={toastProps.toastMessage}
      zIndex={1000000000}
      onCancelClick={handleCancelClick}
    />
  );
};

export default Toastify;

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

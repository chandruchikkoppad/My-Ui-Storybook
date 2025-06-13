export type Variant = 'success' | 'warning' | 'danger' | 'info' | 'alert';

export interface ToastProps {
  isOpen: boolean;
  variant: Variant;
  toastTitle: string;
  toastMessage: string;
  toastId?: number | string;
}

export type AcceptedType =
  | string
  | (() => void)
  | Record<string, unknown>
  | unknown[];

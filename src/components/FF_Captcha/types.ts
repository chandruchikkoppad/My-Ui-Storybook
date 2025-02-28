import { ComponentProps } from 'react';
// Fix ReCAPTCHA type by casting to a compatible type
type FixedReCAPTCHA = React.ComponentType<{
  sitekey: string;
  onChange: (token: string | null) => void;
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'compact' | 'normal' | 'invisible';
  tabindex?: number;
  badge?: 'bottomright' | 'bottomleft' | 'inline';
}>;
export interface RecaptchaProps
  extends Omit<ComponentProps<FixedReCAPTCHA>, 'onChange'> {
  /**
   * Callback function that receives the verification token
   */
  onVerify: (token: string | null) => void;
  /**
   * Optional CSS class name
   */
  className?: string;
  /**
   * Optional error message to display
   */
  error?: string | null;
  /**
   * reCAPTCHA site key
   */
  sitekey: string;
}

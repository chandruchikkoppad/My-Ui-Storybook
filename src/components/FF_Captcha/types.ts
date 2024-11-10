import { ComponentProps } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface RecaptchaProps extends Omit<ComponentProps<typeof ReCAPTCHA>, 'onChange'> {
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


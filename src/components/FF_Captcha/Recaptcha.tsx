import React, { useState, forwardRef, ComponentType, Ref } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { RecaptchaProps } from './types';
import './Recaptcha.scss';
import classNames from 'classnames';
import Typography from '../Typography';
// Extend the props to include React.RefAttributes
const FixedReCAPTCHA = ReCAPTCHA as unknown as ComponentType<
  {
    sitekey: string;
    onChange: (token: string | null) => void;
    className?: string;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal' | 'invisible';
    tabindex?: number;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
  } & React.RefAttributes<ReCAPTCHA>
>;
const Recaptcha = forwardRef<ReCAPTCHA, RecaptchaProps>(
  (
    { onVerify, className = '', error: externalError, sitekey, ...props },
    ref: Ref<ReCAPTCHA>
  ) => {
    const [internalError, setInternalError] = useState<string | null>(null);
    const handleChange = (token: string | null) => {
      if (token) {
        setInternalError(null);
        onVerify(token);
      } else {
        setInternalError('Please complete the CAPTCHA');
      }
    };
    const error = externalError || internalError;
    return (
      <div className={classNames('ff-recaptcha-wrapper', className)}>
        <FixedReCAPTCHA
          ref={ref}
          sitekey={sitekey}
          onChange={handleChange}
          {...props}
        />
        {error && (
          <div className="ff-recaptcha-error">
            <Typography fontSize={12}>{error}</Typography>
          </div>
        )}
      </div>
    );
  }
);
export default Recaptcha;

import { useState, forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { RecaptchaProps } from './types';
import './Recaptcha.scss';
import classNames from 'classnames';
import Typography from '../Typography';

const Recaptcha = forwardRef<ReCAPTCHA, RecaptchaProps>(
  ({ onVerify, className = '', error: externalError, sitekey, ...props }, ref) => {
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
        <ReCAPTCHA
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
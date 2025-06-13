import React, { useState, useEffect, useRef } from 'react';
import './OtpVerification.scss';
import { OtpVerificationProps } from './type';
import Icon from '../Icon';
import Typography from '../Typography';
import Modal from '../Modal';
import Button from '../Button';

const OTP_LENGTH = 6;

const OtpVerification: React.FC<OtpVerificationProps> = ({
  handleClose,
  handleResend,
  handleOtp,
  resendTimeout = 30,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [countdown, setCountdown] = useState(resendTimeout);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(OTP_LENGTH).fill(null));

  useEffect(() => {
    if (!isResendDisabled) {
      inputRefs.current[0]?.focus();
    }
  }, [isResendDisabled]);

  useEffect(() => {
    let timer: number;
    if (countdown > 0) {
      timer = window.setInterval(() => setCountdown((prev) => prev - 1), 1000);
    }
    if (countdown === 0) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const { key } = e;
    if (/^[0-9]$/.test(key)) {
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = key;
      setOtp(newOtp);
      if (index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (key === 'Backspace') {
      e.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    const newOtp = Array(OTP_LENGTH).fill('');
    pastedData.split('').forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    const nextFocusIndex = Math.min(pastedData.length, OTP_LENGTH - 1);
    inputRefs.current[nextFocusIndex]?.focus();
  };

  const handleResendClick = () => {
    setCountdown(resendTimeout);
    setIsResendDisabled(true);
    setOtp(Array(OTP_LENGTH).fill(''));
    handleResend();
  };

  return (
    <Modal
      isOpen
      onClose={handleClose}
      isFooterDisplayed={false}
      isHeaderDisplayed={false}
      zIndex={999999}
      customWidth="340px"
    >
      <div className="ff-otp-popup">
        <div className="ff-otp-header">
          <Typography fontSize={24} lineHeight="36px" fontWeight="semi-bold">
            OTP Verification
          </Typography>
          <Icon name="close" height={16} width={16} onClick={handleClose} className="ff-close-icon" />
        </div>

        <div className="ff-otp-boxes">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className={`ff-otp-input ${value ? 'filled' : ''} ${index === otp.findIndex((val) => val === '') ? 'active' : ''}`}
              value={value}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
              readOnly 
            />
          ))}
        </div>

        <Button
          variant="primary"
          label="Submit"
          onClick={() => handleOtp(otp.join(''))}
          disabled={otp.includes('')}
          className="ff-submit-btn"
        />

        <div
          className={`ff-resend ${isResendDisabled ? 'disabled' : ''}`}
          onClick={isResendDisabled ? undefined : handleResendClick}
        >
          Re-send OTP{countdown > 0 ? ` (${countdown}s)` : ''}
        </div>
      </div>
    </Modal>
  );
};

export default OtpVerification;
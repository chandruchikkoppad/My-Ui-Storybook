import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import { PhoneInputProps } from './types';
import Typography from '../Typography';
import './phoneInput.scss';
import { countryPatterns } from './util';
const PhoneInputField: React.FC<PhoneInputProps> = ({
  country,
  value: initialValue,
  onChange,
  width = '100%',
  placeholder = 'Enter phone number',
  onFocus,
  onBlur,
  id,
  dropdownStyle = {},
  enableAreaCodeStretch = false,
  disabled = false,
  isValid: initialIsValid = true,
}) => {
  const [phone, setPhone] = useState<string>(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(initialIsValid);

  useEffect(() => {
    if (initialValue) {
      let formattedPhone = initialValue;
      if (!formattedPhone.startsWith('+')) {
        formattedPhone = `+${formattedPhone}`;
      }

      setPhone(formattedPhone);
    }
  }, [initialValue]);

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const pattern = countryPatterns[country];
    if (!pattern) {
      return false;
    }
    let formattedPhone = phoneNumber;
    if (!formattedPhone.startsWith('+')) {
      formattedPhone = `+${formattedPhone}`;
    }
    return pattern.test(formattedPhone);
  };

  const handlePhoneChange = (phone: string) => {
    const cleanedPhone = phone.replace(/[^0-9+]/g, '');
    setPhone(cleanedPhone);
    onChange(cleanedPhone);
    const isPhoneValid = validatePhoneNumber(cleanedPhone);
    setIsValid(isPhoneValid);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(event);
    const isPhoneValid = validatePhoneNumber(phone);
    setIsValid(isPhoneValid);
  };

  return (
    <div id={id}>
      <PhoneInput
        specialLabel=""
        countryCodeEditable={false}
        country={country}
        value={phone}
        onChange={handlePhoneChange}
        inputStyle={{
          width,
          height: '32px',
          border: isFocused
            ? '1px solid var(--brand-color)'
            : !isValid
            ? '1px solid var(--error_light)'
            : '1px solid var(--default-color)',
          borderRadius: '4px',
          fontSize: '14px',
          transition: 'border-color 0.3s ease',
        }}
        enableSearch
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        dropdownStyle={dropdownStyle}
        enableAreaCodeStretch={enableAreaCodeStretch}
        disabled={disabled}
      />
      {!isValid && !isFocused && (
        <Typography color={'var(--error_light)'} className="error">
          Invalid phone number format
        </Typography>
      )}
    </div>
  );
};

export default PhoneInputField;

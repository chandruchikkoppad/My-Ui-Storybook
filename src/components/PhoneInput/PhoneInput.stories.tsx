import React, { useState } from 'react';
import { PhoneInputProps } from './types';
import PhoneInputField from './PhoneInput';
import { countryPatterns } from './util';

export default {
  title: 'Components/PhoneInputComponent',
  component: PhoneInputField,
};

const Template = ({
  value,
  country,
  width,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  isValid: initialIsValid,
  international,
  enableAreaCodeStretch,
  defaultCountry,
  disabled,
  id,
}: PhoneInputProps) => {
  const [phone, setPhone] = useState<string>(value || '');
  const [valid, setValid] = useState<boolean>(initialIsValid);

  const handlePhoneChange = (newPhone: string) => {
    setPhone(newPhone);
    const isValidPhone = validatePhoneNumber(newPhone, country);
    setValid(isValidPhone);
    onChange(newPhone);
  };

  // Generic validation function based on country
  const validatePhoneNumber = (
    phoneNumber: string,
    countryCode: string
  ): boolean => {
    const pattern = countryPatterns[countryCode];

    if (!pattern) {
      console.error(`No pattern found for country: ${countryCode}`);
      return false;
    }
    return pattern.test(phoneNumber);
  };

  return (
    <PhoneInputField
      value={phone}
      country={country}
      onChange={handlePhoneChange}
      width={width}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      isValid={valid}
      international={international}
      enableAreaCodeStretch={enableAreaCodeStretch}
      defaultCountry={defaultCountry}
      disabled={disabled}
      id={id}
    />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  country: 'IN',
  value: '+91',
  width: '400px',
  placeholder: 'Enter phone number',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  isValid: true,
  international: true,
  enableAreaCodeStretch: true,
  defaultCountry: 'IN',
  disabled: false,
  id: 'addPrimaryNumberId',
};

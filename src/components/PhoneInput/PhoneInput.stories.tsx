import React, { useState } from 'react';
import { PhoneInputProps } from './types';
import PhoneInputField from './PhoneInput';
import { isValidPhoneNumber } from 'react-phone-number-input';

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
    const isValidPhone = isValidPhoneNumber(newPhone);
    setValid(isValidPhone);
    onChange(newPhone);
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

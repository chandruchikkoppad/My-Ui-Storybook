export interface PhoneInputProps {
  country: string;
  value: string;
  onChange: (phone: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  width?: string;
  placeholder?: string;
  isValid: any;
  id: string;
  international?: boolean;
  dropdownStyle?: React.CSSProperties;
  enableAreaCodeStretch?: boolean;
  defaultCountry?: string;
  disabled?: boolean;
  isVerified?:boolean,
  isVerifyDisplay?:boolean,
  onVerifyClick?:() => void,
}
export type CountryData = {
  name: string;
  dialCode: string;
  countryCode: string;
  format?: string;
};
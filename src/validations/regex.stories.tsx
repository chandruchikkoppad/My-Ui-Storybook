import React, { useState } from 'react';

import {
  EMAIL_REGEX,
  URL_REGEX,
  PHONE_REGEX,
  POSTAL_CODE_REGEX,
  IPV4_REGEX,
  IPV6_REGEX,
  HEX_COLOR_REGEX,
  PASSWORD_SIMPLE_REGEX,
  PASSWORD_COMPLEX_REGEX,
  ALPHABET_ONLY_REGEX,
  NUMBERS_ONLY_REGEX,
  ALPHANUMERIC_REGEX,
  ALPHANUMERIC_WITH_ROUND_BRACES_REGEX,
  DATE_REGEX,
  TIME_REGEX,
  FILE_EXTENSION_REGEX,
  MAC_ADDRESS_REGEX,
  CREDIT_CARD_REGEX,
  SSN_REGEX,
  UUID_REGEX,
  HTML_TAG_REGEX,
  WHITESPACE_REGEX,
  US_ZIP_CODE_REGEX,
  USERNAME_REGEX,
  INDIAN_PHONE_REGEX,
  INDIAN_PIN_CODE_REGEX,
  GSTIN_REGEX,
  PAN_CARD_REGEX,
  AADHAAR_REGEX,
  VEHICLE_REGISTRATION_REGEX,
  INDIAN_CURRENCY_REGEX,
  INTERNATIONAL_PHONE_REGEX,
  INDIAN_PASSPORT_REGEX,
  DRIVING_LICENSE_REGEX,
  USERNAME_SPECIAL_REGEX,
  DECIMAL_NUMBER_REGEX,
  HTML_ATTRIBUTE_REGEX,
  RGB_COLOR_REGEX,
  HSL_COLOR_REGEX,
  BASE64_REGEX,
  BINARY_NUMBER_REGEX,
  HEXADECIMAL_NUMBER_REGEX,
  ROMAN_NUMERALS_REGEX,
  CURRENCY_GENERIC_REGEX,
  LINKEDIN_PROFILE_REGEX,
  TWITTER_HANDLE_REGEX,
  NUMBER_REGEX,
  UNIT_REGEX,
  MEMORY_VALIDATION_REGEX,
  STEP_GROUP_NAME_REGEX,
  NLP_DESCRIPTION_REGEX,
  FILE_NAME_REGEX,
  ELEMENTS_TRAILING_SPACE_REGEX,
  ELEMENTS_WHITE_SPACE_REGEX,
  PARAMETER_ALPHANUMERIC_REGEX,
  EMAIL_VALID_START,
  SCRIPT_REGEX,
  STRIP_NEW_LINES_REGEX,
  CAMEL_CASE_REGEX,
  SPECIAL_REGEX_CHARACTERS_PATTERN,
  YOUTUBE_URL_VALIDATION_REGEX,
  DYNAMIC_VALUE__PLACEHOLDER_REGEX,
  DYNAMIC_VALUE_PATTERN_REGEX,
  DYNAMIC_VALUE_TYPE_REGEX,
  DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX,
  CERTIFICATES_NAME_REGEX,
  CHECK_CAMEL_CASE,
  START_END_WHITESPACE_REGEX,
  ALPHA_NUM_REGEX,
  EMAIL_VALIDATION_REGEX,
} from './regex';

export default {
  title: 'Regex/Validations',
};

export const Playground = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [selectedRegex, setSelectedRegex] = useState('');

  const validators = [
    {
      name: 'EMAIL_REGEX',
      regex: EMAIL_REGEX,
      description: 'Validates an email address (e.g. user@example.com)',
    },
    {
      name: 'URL_REGEX',
      regex: URL_REGEX,
      description: 'Validates a URL (e.g. https://www.example.com)',
    },
    {
      name: 'PHONE_REGEX',
      regex: PHONE_REGEX,
      description: 'Validates a general phone number (e.g. (123) 456-7890)',
    },
    {
      name: 'POSTAL_CODE_REGEX',
      regex: POSTAL_CODE_REGEX,
      description: 'Validates postal code format',
    },
    {
      name: 'IPV4_REGEX',
      regex: IPV4_REGEX,
      description: 'Validates IPv4 addresses (e.g. 192.168.0.1)',
    },
    {
      name: 'IPV6_REGEX',
      regex: IPV6_REGEX,
      description:
        'Validates IPv6 addresses (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334)',
    },
    {
      name: 'HEX_COLOR_REGEX',
      regex: HEX_COLOR_REGEX,
      description: 'Validates hex color codes (e.g. #FFFFFF)',
    },
    {
      name: 'PASSWORD_SIMPLE_REGEX',
      regex: PASSWORD_SIMPLE_REGEX,
      description: 'Validates a simple password (e.g. password123)',
    },
    {
      name: 'PASSWORD_COMPLEX_REGEX',
      regex: PASSWORD_COMPLEX_REGEX,
      description: 'Validates a complex password (e.g. P@ssw0rd!',
    },
    {
      name: 'ALPHABET_ONLY_REGEX',
      regex: ALPHABET_ONLY_REGEX,
      description: 'Validates alphabets only (e.g. abc)',
    },
    {
      name: 'NUMBERS_ONLY_REGEX',
      regex: NUMBERS_ONLY_REGEX,
      description: 'Validates numbers only (e.g. 123)',
    },
    {
      name: 'ALPHANUMERIC_REGEX',
      regex: ALPHANUMERIC_REGEX,
      description: 'Validates alphanumeric values (e.g. abc123)',
    },

    {
      name: 'ALPHANUMERIC_WITH_ROUND_BRACES_REGEX',
      regex: ALPHANUMERIC_WITH_ROUND_BRACES_REGEX,
      description:
        'Validates alphanumeric values with Underscore and RoundBraces Inclusive (e.g. abc123()_)',
    },
    {
      name: 'DATE_REGEX',
      regex: DATE_REGEX,
      description: 'Validates date in YYYY-MM-DD format (e.g. 2024-12-11)',
    },
    {
      name: 'TIME_REGEX',
      regex: TIME_REGEX,
      description: 'Validates time in HH:MM:SS format (e.g. 14:30:45)',
    },
    {
      name: 'FILE_EXTENSION_REGEX',
      regex: FILE_EXTENSION_REGEX,
      description: 'Validates file extensions (e.g. .jpg, .png)',
    },
    {
      name: 'MAC_ADDRESS_REGEX',
      regex: MAC_ADDRESS_REGEX,
      description: 'Validates MAC address (e.g. 00:14:22:01:23:45)',
    },
    {
      name: 'CREDIT_CARD_REGEX',
      regex: CREDIT_CARD_REGEX,
      description: 'Validates credit card number (e.g. 1234 5678 9012 3456)',
    },
    {
      name: 'SSN_REGEX',
      regex: SSN_REGEX,
      description: 'Validates Social Security Number (e.g. 123-45-6789)',
    },
    {
      name: 'UUID_REGEX',
      regex: UUID_REGEX,
      description: 'Validates UUID (e.g. 123e4567-e89b-12d3-a456-426614174000)',
    },
    {
      name: 'HTML_TAG_REGEX',
      regex: HTML_TAG_REGEX,
      description: 'Validates HTML tags (e.g. <div>, <span>)',
    },
    {
      name: 'WHITESPACE_REGEX',
      regex: WHITESPACE_REGEX,
      description: 'Validates whitespace characters (e.g. spaces, tabs)',
    },
    {
      name: 'US_ZIP_CODE_REGEX',
      regex: US_ZIP_CODE_REGEX,
      description: 'Validates US ZIP code (e.g. 90210)',
    },
    {
      name: 'USERNAME_REGEX',
      regex: USERNAME_REGEX,
      description: 'Validates username (e.g. user123)',
    },
    {
      name: 'INDIAN_PHONE_REGEX',
      regex: INDIAN_PHONE_REGEX,
      description: 'Validates Indian phone number (e.g. +91 9876543210)',
    },
    {
      name: 'INDIAN_PIN_CODE_REGEX',
      regex: INDIAN_PIN_CODE_REGEX,
      description: 'Validates Indian PIN code (e.g. 110001)',
    },
    {
      name: 'GSTIN_REGEX',
      regex: GSTIN_REGEX,
      description: 'Validates GSTIN number (e.g. 07AACCB1234K1Z5)',
    },
    {
      name: 'PAN_CARD_REGEX',
      regex: PAN_CARD_REGEX,
      description: 'Validates PAN card number (e.g. ABCDE1234F)',
    },
    {
      name: 'AADHAAR_REGEX',
      regex: AADHAAR_REGEX,
      description: 'Validates Aadhaar number (e.g. 1234 5678 9012)',
    },
    {
      name: 'VEHICLE_REGISTRATION_REGEX',
      regex: VEHICLE_REGISTRATION_REGEX,
      description: 'Validates vehicle registration number (e.g. DL 12 AB 1234)',
    },
    {
      name: 'INDIAN_CURRENCY_REGEX',
      regex: INDIAN_CURRENCY_REGEX,
      description: 'Validates Indian currency format (e.g. ₹1234.56)',
    },
    {
      name: 'INTERNATIONAL_PHONE_REGEX',
      regex: INTERNATIONAL_PHONE_REGEX,
      description:
        'Validates international phone numbers (e.g. +44 20 7946 0958)',
    },
    {
      name: 'INDIAN_PASSPORT_REGEX',
      regex: INDIAN_PASSPORT_REGEX,
      description: 'Validates Indian passport number (e.g. A1234567)',
    },
    {
      name: 'DRIVING_LICENSE_REGEX',
      regex: DRIVING_LICENSE_REGEX,
      description: 'Validates driving license number (e.g. DL-123456789012)',
    },
    {
      name: 'USERNAME_SPECIAL_REGEX',
      regex: USERNAME_SPECIAL_REGEX,
      description:
        'Validates username with special characters (e.g. user_123@)',
    },
    {
      name: 'DECIMAL_NUMBER_REGEX',
      regex: DECIMAL_NUMBER_REGEX,
      description: 'Validates decimal numbers (e.g. 123.45)',
    },
    {
      name: 'HTML_ATTRIBUTE_REGEX',
      regex: HTML_ATTRIBUTE_REGEX,
      description: 'Validates HTML attribute value (e.g. class="my-class")',
    },
    {
      name: 'RGB_COLOR_REGEX',
      regex: RGB_COLOR_REGEX,
      description: 'Validates RGB color format (e.g. rgb(255, 0, 0))',
    },
    {
      name: 'HSL_COLOR_REGEX',
      regex: HSL_COLOR_REGEX,
      description: 'Validates HSL color format (e.g. hsl(0, 100%, 50%))',
    },
    {
      name: 'BASE64_REGEX',
      regex: BASE64_REGEX,
      description: 'Validates base64 encoded string (e.g. aGVsbG8gd29ybGQ=)',
    },
    {
      name: 'BINARY_NUMBER_REGEX',
      regex: BINARY_NUMBER_REGEX,
      description: 'Validates binary number (e.g. 1010)',
    },
    {
      name: 'HEXADECIMAL_NUMBER_REGEX',
      regex: HEXADECIMAL_NUMBER_REGEX,
      description: 'Validates hexadecimal number (e.g. 1A3F)',
    },
    {
      name: 'ROMAN_NUMERALS_REGEX',
      regex: ROMAN_NUMERALS_REGEX,
      description: 'Validates Roman numerals (e.g. IV, X, MM)',
    },
    {
      name: 'CURRENCY_GENERIC_REGEX',
      regex: CURRENCY_GENERIC_REGEX,
      description: 'Validates generic currency format (e.g. $123.45)',
    },
    {
      name: 'LINKEDIN_PROFILE_REGEX',
      regex: LINKEDIN_PROFILE_REGEX,
      description:
        'Validates LinkedIn profile URL (e.g. https://www.linkedin.com/in/username)',
    },
    {
      name: 'TWITTER_HANDLE_REGEX',
      regex: TWITTER_HANDLE_REGEX,
      description: 'Validates Twitter handle (e.g. @username)',
    },
    {
      name: 'NUMBER_REGEX',
      regex: NUMBER_REGEX,
      description: 'Validates a number (integer or float)',
    },
    {
      name: 'UNIT_REGEX',
      regex: UNIT_REGEX,
      description: 'Validates a string of letters (unit)',
    },
    {
      name: 'MEMORY_VALIDATION_REGEX',
      regex: MEMORY_VALIDATION_REGEX,
      description:
        'Regular expression to match a number with an optional unit (GB, MB, or KB)',
    },
    {
      name: 'STEP_GROUP_NAME_REGEX',
      regex: STEP_GROUP_NAME_REGEX,
      description:
        'Step group name accept only ( ,) ,-,_ special characters(e.g,step-group_one(test))',
    },
    {
      name: 'NLP_DESCRIPTION_REGEX',
      regex: NLP_DESCRIPTION_REGEX,
      description:
        'NLP Description should allow _ and $ only (e.g ,$nlpName_test)',
    },
    {
      name: 'FILE_NAME_REGEX',
      regex: FILE_NAME_REGEX,
      description: `It should include a valid file extension (e.g.,'.txt', '.jpg') without special characters like '@' or multiple dots after the extension.`,
    },
    {
      name: 'ELEMENTS_TRAILING_SPACE_REGEX',
      regex: ELEMENTS_TRAILING_SPACE_REGEX,
      description: `Element Name should not have space in the initial and end.`,
    },
    {
      name: 'ELEMENTS_WHITE_SPACE_REGEX',
      regex: ELEMENTS_WHITE_SPACE_REGEX,
      description: `Elements name should not have only white space.`,
    },
    {
      name: 'PARAMETER_ALPHANUMERIC_REGEX,',
      regex: PARAMETER_ALPHANUMERIC_REGEX,
      description: `Parameter name should be alphanumeric.`,
    },
    {
      name: 'EMAIL_VALID_START,',
      regex: EMAIL_VALID_START,
      description: `Validates email format without special characters at the start.`,
    },
    {
      name: 'SCRIPT_REGEX',
      regex: SCRIPT_REGEX,
      description: `Trim to display only Script name.`,
    },
    {
      name: 'STRIP_NEW_LINES_REGEX',
      regex: STRIP_NEW_LINES_REGEX,
      description: `Regular expression to find newline characters.`,
    },
    {
      name: 'CAMEL_CASE_REGEX',
      regex: CAMEL_CASE_REGEX,
      description: `Regular expression to convert lower camel case by excluding space.`,
    },
    {
      name: 'SPECIAL_REGEX_CHARACTERS_PATTERN',
      regex: SPECIAL_REGEX_CHARACTERS_PATTERN,
      description: `Regular expression to targeting special characters.`,
    },
    {
      name: 'YOUTUBE_URL_VALIDATION_REGEX',
      regex: YOUTUBE_URL_VALIDATION_REGEX,
      description: `Regular expression to valid youtube URL.`,
    },
    {
      name: 'DYNAMIC_VALUE__PLACEHOLDER_REGEX',
      regex: DYNAMIC_VALUE__PLACEHOLDER_REGEX,
      description: `Regular expression to match placeholder for dynamic value of locator.`,
    },
    {
      name: 'DYNAMIC_VALUE_PATTERN_REGEX',
      regex: DYNAMIC_VALUE_PATTERN_REGEX,
      description: `Regular expression to check for correct pattern of dynamic value of locator.`,
    },
    {
      name: 'DYNAMIC_VALUE_TYPE_REGEX',
      regex: DYNAMIC_VALUE_TYPE_REGEX,
      description: `Regular expression to check for dynamic value of locator.`,
    },
    {
      name: 'DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX',
      regex: DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX,
      description: `Regular expression to validate valid brackets in dynamic locators.`,
    },
    {
      name: 'CERTIFICATES_NAME_REGEX',
      regex: CERTIFICATES_NAME_REGEX,
      description: 'Validates cetificates & host name.',
    },
    {
      name: 'CHECK_CAMEL_CASE',
      regex: CHECK_CAMEL_CASE,
      description: 'Regular expression to check word is camel case or not',
    },
    {
      name: 'START_END_WHITESPACE_REGEX',
      regex: START_END_WHITESPACE_REGEX,
      description: 'Starting and Ending Whitespace Validation Only.',
    },
    {
      name: 'ALPHA_NUM_REGEX',
      regex: ALPHA_NUM_REGEX,
      description: 'Alphanumeric Validation with specific Order.',
    },
    {
      name: 'EMAIL_VALIDATION_REGEX',
      regex:  EMAIL_VALIDATION_REGEX,
      description: 'Email Validation.',
    },
  ];

  const validateInput = () => {
    const validator = validators.find(
      (validator) => validator.name === selectedRegex
    );
    if (validator && validator.regex) {
      const isValid = validator.regex.test(input);
      setResult(isValid ? 'Valid input' : 'Invalid input');
    } else {
      setResult('No validator selected');
    }
  };

  const handleRegexChange = (e) => {
    setSelectedRegex(e.target.value);
    setResult('');
  };

  const selectedValidator = validators.find(
    (validator) => validator.name === selectedRegex
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Validation Regex Playground</h1>

      <select
        value={selectedRegex}
        onChange={handleRegexChange}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      >
        <option value="">Select Regex</option>
        {validators.map((validator) => (
          <option key={validator.name} value={validator.name}>
            {validator.name}
          </option>
        ))}
      </select>

      {selectedValidator && (
        <>
          <p>
            <b>{selectedValidator.name}</b>
          </p>
          <p style={{ fontStyle: 'italic' }}>{selectedValidator.description}</p>
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter input to test"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={validateInput} style={{ padding: '10px' }}>
          Validate
        </button>
      </div>

      <div
        style={{
          marginTop: '20px',
          color: result === 'Valid input' ? 'green' : 'red',
        }}
      >
        {result}
      </div>
    </div>
  );
};

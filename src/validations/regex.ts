// Validation Regex Collection

// Email Validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// URL Validation
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/;

// Phone Number Validation
const PHONE_REGEX = /^\+?[\d\s\-()]{7,15}$/;

// Postal Code Validation (Generic)
const POSTAL_CODE_REGEX = /^[A-Za-z\d\s\-]{3,10}$/;

// IPv4 Address Validation
const IPV4_REGEX =
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// IPv6 Address Validation
const IPV6_REGEX = /^(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;

// Hexadecimal Color Code Validation
const HEX_COLOR_REGEX = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

// Password Validation (At least 8 chars, one letter, one number)
const PASSWORD_SIMPLE_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Password Validation (At least 8 chars, one uppercase, one lowercase, one number, one special character)
const PASSWORD_COMPLEX_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Only Alphabets Validation
const ALPHABET_ONLY_REGEX = /^[A-Za-z]+$/;

// Only Numbers Validation
const NUMBERS_ONLY_REGEX = /^\d+$/;

// Alphanumeric Validation
const ALPHANUMERIC_REGEX = /^[A-Za-z0-9]+$/;

//Alphanumeric Validation With Round Braces and Underscore Inclusive (Used to validate Manual and Automation Script Names )
const ALPHANUMERIC_WITH_ROUND_BRACES_REGEX = /^[a-zA-Z0-9-_() ]*$/;

// Date Validation (YYYY-MM-DD)
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

// Time Validation (HH:MM:SS)
const TIME_REGEX = /^\d{2}:\d{2}:\d{2}$/;

// File Extension Validation (e.g., .jpg, .png, .gif, .bmp)
const FILE_EXTENSION_REGEX = /\.(jpg|png|gif|bmp)$/i;

// MAC Address Validation
const MAC_ADDRESS_REGEX = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

// Credit Card Number Validation (Basic)
const CREDIT_CARD_REGEX = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;

// Social Security Number (SSN) Validation (US Format)
const SSN_REGEX = /^\d{3}-\d{2}-\d{4}$/;

// UUID Validation
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// HTML Tags Validation
const HTML_TAG_REGEX = /<\/?[\w\s=\"'\/\.:;#-]*>/g;

// Whitespace Validation (Leading or Trailing)
const WHITESPACE_REGEX = /^\s+|\s+$/g;

// US ZIP Code Validation (5 or 9 digits)
const US_ZIP_CODE_REGEX = /^\d{5}(-\d{4})?$/;

// Username Validation (Alphanumeric, underscores, 3-16 characters)
const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,16}$/;

// Indian Specific Validations

// Indian Phone Number Validation
const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;

// Indian PIN Code Validation
const INDIAN_PIN_CODE_REGEX = /^\d{6}$/;

// GSTIN Validation
const GSTIN_REGEX = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;

// PAN Card Validation
const PAN_CARD_REGEX = /^[A-Z]{5}\d{4}[A-Z]{1}$/;

// Aadhaar Number Validation
const AADHAAR_REGEX = /^\d{12}$/;

// Vehicle Registration Validation
const VEHICLE_REGISTRATION_REGEX = /^[A-Z]{2}\d{2}[A-Z]{0,2}\d{4}$/;

// Indian Currency Format Validation
const INDIAN_CURRENCY_REGEX = /^\u20B9?\s?\d{1,3}(,\d{3})*(\.\d{1,2})?$/;

// Additional Generic and Specific Validations

// International Phone Number Validation
const INTERNATIONAL_PHONE_REGEX = /^\+?[1-9]\d{1,14}$/;

// Passport Number Validation (India)
const INDIAN_PASSPORT_REGEX = /^[A-Z]{1}-?\d{7}$/;

// Driving License Validation (India)
const DRIVING_LICENSE_REGEX = /^[A-Z]{2}-\d{2}-\d{4}-\d{7}$/;

// Username with Special Characters
const USERNAME_SPECIAL_REGEX = /^[a-zA-Z0-9._-]{3,16}$/;

// Decimal Number Validation
const DECIMAL_NUMBER_REGEX = /^-?\d+(\.\d+)?$/;

// HTML Attributes Validation
const HTML_ATTRIBUTE_REGEX = /\b[a-zA-Z-]+(="[^"]*"|='[^']*'|=[^\s>]*)?/g;

// RGB Color Code Validation
const RGB_COLOR_REGEX = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;

// HSL Color Code Validation
const HSL_COLOR_REGEX = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;

// Base64 String Validation
const BASE64_REGEX =
  /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;

// Binary Number Validation
const BINARY_NUMBER_REGEX = /^[01]+$/;

// Hexadecimal Number Validation
const HEXADECIMAL_NUMBER_REGEX = /^[0-9A-Fa-f]+$/;

// Roman Numerals Validation
const ROMAN_NUMERALS_REGEX =
  /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

// Currency Validation (Generic)
const CURRENCY_GENERIC_REGEX = /^[\u0024-\u20B9]?\d+(,\d{3})*(\.\d{1,2})?$/;

// LinkedIn Profile URL Validation
const LINKEDIN_PROFILE_REGEX =
  /^https?:\/\/(www\.)?linkedin\.com\/in\/([a-zA-Z0-9-]{5,30})$/;

// Twitter Handle Validation
const TWITTER_HANDLE_REGEX = /^@?([a-zA-Z0-9_]{1,15})$/;

//Match a number (integer or float)
const NUMBER_REGEX = /([0-9\.]+)/;

//Match a string of letters (unit)
const UNIT_REGEX = /[a-zA-Z]+/;

//Match a string of Script
const SCRIPT_REGEX = /SCR\d+/;

//Regular expression to match a number with an optional unit (GB, MB, or KB)
const MEMORY_VALIDATION_REGEX = /^(\d+\.?\d*)\s*(GB|MB|KB)?$/i;
const STEP_GROUP_NAME_REGEX = /^[a-zA-Z0-9()\-_ ]+$/;

const NLP_DESCRIPTION_REGEX = /^[a-zA-Z0-9_$\s]*$/;

const FILE_NAME_REGEX = /\.([^.@]+)$/;

const ELEMENTS_TRAILING_SPACE_REGEX = /^\S.*\S$/;

const ELEMENTS_WHITE_SPACE_REGEX = /.*\S.*/;

const PARAMETER_ALPHANUMERIC_REGEX =
  /^[-_A-Za-z0-9 ]*$|^[-_A-Za-z0-9 ][A-Za-z0-9 ]*[-_A-Za-z-_]$/;

const UPPERCASE_REGEX = /[A-Z]/;

const LOWERCASE_REGEX = /[a-z]/;

const PASSWORD_NUMBER_REGEX = /\d/;

const SPECIAL_CHARACTER_REGEX = /[!@#$%^&*(),.?":{}|<>]/;

const EMAIL_VALID_START =
  /^(?![!@#$%^&*()])[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const STRIP_NEW_LINES_REGEX = /\n/g;

//Regular expression to convert lower camel case by excluding spaces
const CAMEL_CASE_REGEX = /(?:^\w|[A-Z]|\b\w|\s+)/g;

const SPECIAL_REGEX_CHARACTERS_PATTERN = /[.*+?^${}()|[\]\\]/g;

const YOUTUBE_URL_VALIDATION_REGEX =
  /(?:youtube\.com\/(?:[^/]+\/[^/]+|(?:v|e(?:mbed)?)|.*[?&]v=)|youtu\.be\/)([^"&?/\s]+)/;

const DYNAMIC_VALUE__PLACEHOLDER_REGEX = /Dynamic Val[0-9]+/g;

const DYNAMIC_VALUE_PATTERN_REGEX = /\{Dynamic Val[0-9]+\}/g;

const DYNAMIC_VALUE_TYPE_REGEX = /{([^}]+)}/g;

const DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX =
  /\{Dynamic Val[A-Za-z0-9\s]+\}/g;

const CERTIFICATES_NAME_REGEX = /^[^:;/\\@()=?{}[\]<>,.]*$/;

// Verify the HTML Type Format
const HTML_FILE_TYPE_VALIDATION = /<html\b[^>]*>[\s\S]*<\/html>/i;

// Verify the TEXT Type Format
const BODY_TAG_TYPE_VALIDATION = /<body\b[^>]*>[\s\S]*<\/body>/i;

// Verify the XML Type Format
const XML_FILE_TYPE_VALIDATION =
  /<([A-Za-z_:][A-Za-z0-9_.:-]*)\b[^>]*>(.*?)<\/\1>/s;

// Verify the JavaScript Type Format
const JAVASCRIPT_FILE_TYPE_VALIDATION =
  /^\s*(function|const|let|var)\b|\b(return|if|for|while|switch|case)\b.*[{}]/s;

// Verify the Camel Case Format
const CHECK_CAMEL_CASE = /^[a-z]+([A-Z][a-z]*)*$/;

// To detect "@" character as last char in Comment box
const DETECT_AT_CHAR_IN_COMMENT = /@\w+/g;

// To detect "@" character inbetween string
const DETECT_AT_CHAR_BETWEEN_STRINGS_IN_COMMENT = /(?:^|\s)(@[\w]*)$/;

// To detect @username that are either at the start of the input or right after a space
const DETECT_MENTIONED_USERNAME_AFTER_SPACE = /(?:^|\s)(@[\w]*)$/;

// To detect @username that are either at the start of the input or right after a space also allowing special characters
const DETECT_MENTIONED_USERNAME_AFTER_SPACE_SPECIAL_CHARS_ALLOWED =
  /(?:^|\s)(@[\w]*)$/;

// To detect @username right before the caret position
const DETECT_MENTIONED_USERNAME_BEFORE_CARET = /(?:^|\s)(@\S+)$/;

// Starting and Ending Whitespace Validation Only.
const START_END_WHITESPACE_REGEX = /^[^\s].*[^\s]$/;

// Alphanumeric Validation with specific Order
const ALPHA_NUM_REGEX = /^[a-zA-Z0-9 ]+$/;

//Detect "@" at the start and after a space [Ex: "@hello" and "some text @username"]
const DETECT_AT_CHAR_AT_START = /(?:^|\s)@[^@\s]*$/;

//To check if textBeforeCaret ends with an @ followed by a word without spaces [Ex: "@hello" and "some text @username"]
const CHECK_AT_FOLLOWED_BY_WORD = /@(\S*)$/;
//To detect word starting with "@"
const DETECT_WORD_START_WITH_AT = /(\@\w+)/;
//To check email validations 
const EMAIL_VALIDATION_REGEX = /^[a-zA-Z0-9](?!.*[._-]{2})[a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export {
  DYNAMIC_VALUE__PLACEHOLDER_REGEX,
  DYNAMIC_VALUE_PATTERN_REGEX,
  DYNAMIC_VALUE_TYPE_REGEX,
  DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX,
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
  UNIT_REGEX,
  NUMBER_REGEX,
  MEMORY_VALIDATION_REGEX,
  STEP_GROUP_NAME_REGEX,
  NLP_DESCRIPTION_REGEX,
  FILE_NAME_REGEX,
  ELEMENTS_TRAILING_SPACE_REGEX,
  ELEMENTS_WHITE_SPACE_REGEX,
  PARAMETER_ALPHANUMERIC_REGEX,
  UPPERCASE_REGEX,
  LOWERCASE_REGEX,
  PASSWORD_NUMBER_REGEX,
  SPECIAL_CHARACTER_REGEX,
  EMAIL_VALID_START,
  SCRIPT_REGEX,
  STRIP_NEW_LINES_REGEX,
  CAMEL_CASE_REGEX,
  SPECIAL_REGEX_CHARACTERS_PATTERN,
  YOUTUBE_URL_VALIDATION_REGEX,
  CERTIFICATES_NAME_REGEX,
  HTML_FILE_TYPE_VALIDATION,
  BODY_TAG_TYPE_VALIDATION,
  XML_FILE_TYPE_VALIDATION,
  JAVASCRIPT_FILE_TYPE_VALIDATION,
  CHECK_CAMEL_CASE,
  DETECT_AT_CHAR_IN_COMMENT,
  DETECT_AT_CHAR_BETWEEN_STRINGS_IN_COMMENT,
  DETECT_MENTIONED_USERNAME_AFTER_SPACE,
  DETECT_MENTIONED_USERNAME_AFTER_SPACE_SPECIAL_CHARS_ALLOWED,
  DETECT_MENTIONED_USERNAME_BEFORE_CARET,
  START_END_WHITESPACE_REGEX,
  ALPHA_NUM_REGEX,
  DETECT_AT_CHAR_AT_START,
  CHECK_AT_FOLLOWED_BY_WORD,
  DETECT_WORD_START_WITH_AT,
  EMAIL_VALIDATION_REGEX
};

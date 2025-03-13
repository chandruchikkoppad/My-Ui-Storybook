import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as R}from"./index-DJO9vBfz.js";import{E as G,U as m,P as X,a as N,I as x,b as L,H as T,c as S,d as u,A as C,N as V,e as P,f as M,D,T as O,F as U,M as h,C as H,S as v,g as b,h as B,W as y,i as f,j as Y,k as w,l as F,G as W,m as j,n as k,V as K,o as Z,p as $,q as Q,r as q,s as z,t as J,u as ee,R as ne,v as ae,B as Ee,w as ie,x as te,y as re,z as se,L as Re,J as _e,K as de,O as oe,Q as le,X as ce,Y as ge,Z as Ae,_ as pe,$ as Ie,a0 as Ge,a1 as me,a2 as Xe,a3 as Ne,a4 as xe,a5 as Le,a6 as Te,a7 as Se,a8 as ue,a9 as Ce,aa as Ve,ab as Pe}from"./regex-CmAMYcQS.js";const Ue={title:"Regex/Validations"},a=()=>{const[_,g]=R.useState(""),[d,E]=R.useState(""),[i,A]=R.useState(""),t=[{name:"EMAIL_REGEX",regex:G,description:"Validates an email address (e.g. user@example.com)"},{name:"URL_REGEX",regex:m,description:"Validates a URL (e.g. https://www.example.com)"},{name:"PHONE_REGEX",regex:X,description:"Validates a general phone number (e.g. (123) 456-7890)"},{name:"POSTAL_CODE_REGEX",regex:N,description:"Validates postal code format"},{name:"IPV4_REGEX",regex:x,description:"Validates IPv4 addresses (e.g. 192.168.0.1)"},{name:"IPV6_REGEX",regex:L,description:"Validates IPv6 addresses (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334)"},{name:"HEX_COLOR_REGEX",regex:T,description:"Validates hex color codes (e.g. #FFFFFF)"},{name:"PASSWORD_SIMPLE_REGEX",regex:S,description:"Validates a simple password (e.g. password123)"},{name:"PASSWORD_COMPLEX_REGEX",regex:u,description:"Validates a complex password (e.g. P@ssw0rd!"},{name:"ALPHABET_ONLY_REGEX",regex:C,description:"Validates alphabets only (e.g. abc)"},{name:"NUMBERS_ONLY_REGEX",regex:V,description:"Validates numbers only (e.g. 123)"},{name:"ALPHANUMERIC_REGEX",regex:P,description:"Validates alphanumeric values (e.g. abc123)"},{name:"ALPHANUMERIC_WITH_ROUND_BRACES_REGEX",regex:M,description:"Validates alphanumeric values with Underscore and RoundBraces Inclusive (e.g. abc123()_)"},{name:"DATE_REGEX",regex:D,description:"Validates date in YYYY-MM-DD format (e.g. 2024-12-11)"},{name:"TIME_REGEX",regex:O,description:"Validates time in HH:MM:SS format (e.g. 14:30:45)"},{name:"FILE_EXTENSION_REGEX",regex:U,description:"Validates file extensions (e.g. .jpg, .png)"},{name:"MAC_ADDRESS_REGEX",regex:h,description:"Validates MAC address (e.g. 00:14:22:01:23:45)"},{name:"CREDIT_CARD_REGEX",regex:H,description:"Validates credit card number (e.g. 1234 5678 9012 3456)"},{name:"SSN_REGEX",regex:v,description:"Validates Social Security Number (e.g. 123-45-6789)"},{name:"UUID_REGEX",regex:b,description:"Validates UUID (e.g. 123e4567-e89b-12d3-a456-426614174000)"},{name:"HTML_TAG_REGEX",regex:B,description:"Validates HTML tags (e.g. <div>, <span>)"},{name:"WHITESPACE_REGEX",regex:y,description:"Validates whitespace characters (e.g. spaces, tabs)"},{name:"US_ZIP_CODE_REGEX",regex:f,description:"Validates US ZIP code (e.g. 90210)"},{name:"USERNAME_REGEX",regex:Y,description:"Validates username (e.g. user123)"},{name:"INDIAN_PHONE_REGEX",regex:w,description:"Validates Indian phone number (e.g. +91 9876543210)"},{name:"INDIAN_PIN_CODE_REGEX",regex:F,description:"Validates Indian PIN code (e.g. 110001)"},{name:"GSTIN_REGEX",regex:W,description:"Validates GSTIN number (e.g. 07AACCB1234K1Z5)"},{name:"PAN_CARD_REGEX",regex:j,description:"Validates PAN card number (e.g. ABCDE1234F)"},{name:"AADHAAR_REGEX",regex:k,description:"Validates Aadhaar number (e.g. 1234 5678 9012)"},{name:"VEHICLE_REGISTRATION_REGEX",regex:K,description:"Validates vehicle registration number (e.g. DL 12 AB 1234)"},{name:"INDIAN_CURRENCY_REGEX",regex:Z,description:"Validates Indian currency format (e.g. ₹1234.56)"},{name:"INTERNATIONAL_PHONE_REGEX",regex:$,description:"Validates international phone numbers (e.g. +44 20 7946 0958)"},{name:"INDIAN_PASSPORT_REGEX",regex:Q,description:"Validates Indian passport number (e.g. A1234567)"},{name:"DRIVING_LICENSE_REGEX",regex:q,description:"Validates driving license number (e.g. DL-123456789012)"},{name:"USERNAME_SPECIAL_REGEX",regex:z,description:"Validates username with special characters (e.g. user_123@)"},{name:"DECIMAL_NUMBER_REGEX",regex:J,description:"Validates decimal numbers (e.g. 123.45)"},{name:"HTML_ATTRIBUTE_REGEX",regex:ee,description:'Validates HTML attribute value (e.g. class="my-class")'},{name:"RGB_COLOR_REGEX",regex:ne,description:"Validates RGB color format (e.g. rgb(255, 0, 0))"},{name:"HSL_COLOR_REGEX",regex:ae,description:"Validates HSL color format (e.g. hsl(0, 100%, 50%))"},{name:"BASE64_REGEX",regex:Ee,description:"Validates base64 encoded string (e.g. aGVsbG8gd29ybGQ=)"},{name:"BINARY_NUMBER_REGEX",regex:ie,description:"Validates binary number (e.g. 1010)"},{name:"HEXADECIMAL_NUMBER_REGEX",regex:te,description:"Validates hexadecimal number (e.g. 1A3F)"},{name:"ROMAN_NUMERALS_REGEX",regex:re,description:"Validates Roman numerals (e.g. IV, X, MM)"},{name:"CURRENCY_GENERIC_REGEX",regex:se,description:"Validates generic currency format (e.g. $123.45)"},{name:"LINKEDIN_PROFILE_REGEX",regex:Re,description:"Validates LinkedIn profile URL (e.g. https://www.linkedin.com/in/username)"},{name:"TWITTER_HANDLE_REGEX",regex:_e,description:"Validates Twitter handle (e.g. @username)"},{name:"NUMBER_REGEX",regex:de,description:"Validates a number (integer or float)"},{name:"UNIT_REGEX",regex:oe,description:"Validates a string of letters (unit)"},{name:"MEMORY_VALIDATION_REGEX",regex:le,description:"Regular expression to match a number with an optional unit (GB, MB, or KB)"},{name:"STEP_GROUP_NAME_REGEX",regex:ce,description:"Step group name accept only ( ,) ,-,_ special characters(e.g,step-group_one(test))"},{name:"NLP_DESCRIPTION_REGEX",regex:ge,description:"NLP Description should allow _ and $ only (e.g ,$nlpName_test)"},{name:"FILE_NAME_REGEX",regex:Ae,description:"It should include a valid file extension (e.g.,'.txt', '.jpg') without special characters like '@' or multiple dots after the extension."},{name:"ELEMENTS_TRAILING_SPACE_REGEX",regex:pe,description:"Element Name should not have space in the initial and end."},{name:"ELEMENTS_WHITE_SPACE_REGEX",regex:Ie,description:"Elements name should not have only white space."},{name:"PARAMETER_ALPHANUMERIC_REGEX,",regex:Ge,description:"Parameter name should be alphanumeric."},{name:"EMAIL_VALID_START,",regex:me,description:"Validates email format without special characters at the start."},{name:"SCRIPT_REGEX",regex:Xe,description:"Trim to display only Script name."},{name:"STRIP_NEW_LINES_REGEX",regex:Ne,description:"Regular expression to find newline characters."},{name:"CAMEL_CASE_REGEX",regex:xe,description:"Regular expression to convert lower camel case by excluding space."},{name:"SPECIAL_REGEX_CHARACTERS_PATTERN",regex:Le,description:"Regular expression to targeting special characters."},{name:"YOUTUBE_URL_VALIDATION_REGEX",regex:Te,description:"Regular expression to valid youtube URL."},{name:"DYNAMIC_VALUE__PLACEHOLDER_REGEX",regex:Se,description:"Regular expression to match placeholder for dynamic value of locator."},{name:"DYNAMIC_VALUE_PATTERN_REGEX",regex:ue,description:"Regular expression to check for correct pattern of dynamic value of locator."},{name:"DYNAMIC_VALUE_TYPE_REGEX",regex:Ce,description:"Regular expression to check for dynamic value of locator."},{name:"DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX",regex:Ve,description:"Regular expression to validate valid brackets in dynamic locators."},{name:"CERTIFICATES_NAME_REGEX",regex:Pe,description:"Validates cetificates & host name."}],p=()=>{const n=t.find(s=>s.name===i);if(n&&n.regex){const s=n.regex.test(_);E(s?"Valid input":"Invalid input")}else E("No validator selected")},I=n=>{A(n.target.value),E("")},r=t.find(n=>n.name===i);return e.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsx("h1",{children:"Validation Regex Playground"}),e.jsxs("select",{value:i,onChange:I,style:{padding:"10px",width:"300px",marginRight:"10px"},children:[e.jsx("option",{value:"",children:"Select Regex"}),t.map(n=>e.jsx("option",{value:n.name,children:n.name},n.name))]}),r&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("b",{children:r.name})}),e.jsx("p",{style:{fontStyle:"italic"},children:r.description})]}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("input",{type:"text",placeholder:"Enter input to test",value:_,onChange:n=>g(n.target.value),style:{padding:"10px",width:"300px",marginRight:"10px"}}),e.jsx("button",{onClick:p,style:{padding:"10px"},children:"Validate"})]}),e.jsx("div",{style:{marginTop:"20px",color:d==="Valid input"?"green":"red"},children:d})]})};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [selectedRegex, setSelectedRegex] = useState('');
  const validators = [{
    name: 'EMAIL_REGEX',
    regex: EMAIL_REGEX,
    description: 'Validates an email address (e.g. user@example.com)'
  }, {
    name: 'URL_REGEX',
    regex: URL_REGEX,
    description: 'Validates a URL (e.g. https://www.example.com)'
  }, {
    name: 'PHONE_REGEX',
    regex: PHONE_REGEX,
    description: 'Validates a general phone number (e.g. (123) 456-7890)'
  }, {
    name: 'POSTAL_CODE_REGEX',
    regex: POSTAL_CODE_REGEX,
    description: 'Validates postal code format'
  }, {
    name: 'IPV4_REGEX',
    regex: IPV4_REGEX,
    description: 'Validates IPv4 addresses (e.g. 192.168.0.1)'
  }, {
    name: 'IPV6_REGEX',
    regex: IPV6_REGEX,
    description: 'Validates IPv6 addresses (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334)'
  }, {
    name: 'HEX_COLOR_REGEX',
    regex: HEX_COLOR_REGEX,
    description: 'Validates hex color codes (e.g. #FFFFFF)'
  }, {
    name: 'PASSWORD_SIMPLE_REGEX',
    regex: PASSWORD_SIMPLE_REGEX,
    description: 'Validates a simple password (e.g. password123)'
  }, {
    name: 'PASSWORD_COMPLEX_REGEX',
    regex: PASSWORD_COMPLEX_REGEX,
    description: 'Validates a complex password (e.g. P@ssw0rd!'
  }, {
    name: 'ALPHABET_ONLY_REGEX',
    regex: ALPHABET_ONLY_REGEX,
    description: 'Validates alphabets only (e.g. abc)'
  }, {
    name: 'NUMBERS_ONLY_REGEX',
    regex: NUMBERS_ONLY_REGEX,
    description: 'Validates numbers only (e.g. 123)'
  }, {
    name: 'ALPHANUMERIC_REGEX',
    regex: ALPHANUMERIC_REGEX,
    description: 'Validates alphanumeric values (e.g. abc123)'
  }, {
    name: 'ALPHANUMERIC_WITH_ROUND_BRACES_REGEX',
    regex: ALPHANUMERIC_WITH_ROUND_BRACES_REGEX,
    description: 'Validates alphanumeric values with Underscore and RoundBraces Inclusive (e.g. abc123()_)'
  }, {
    name: 'DATE_REGEX',
    regex: DATE_REGEX,
    description: 'Validates date in YYYY-MM-DD format (e.g. 2024-12-11)'
  }, {
    name: 'TIME_REGEX',
    regex: TIME_REGEX,
    description: 'Validates time in HH:MM:SS format (e.g. 14:30:45)'
  }, {
    name: 'FILE_EXTENSION_REGEX',
    regex: FILE_EXTENSION_REGEX,
    description: 'Validates file extensions (e.g. .jpg, .png)'
  }, {
    name: 'MAC_ADDRESS_REGEX',
    regex: MAC_ADDRESS_REGEX,
    description: 'Validates MAC address (e.g. 00:14:22:01:23:45)'
  }, {
    name: 'CREDIT_CARD_REGEX',
    regex: CREDIT_CARD_REGEX,
    description: 'Validates credit card number (e.g. 1234 5678 9012 3456)'
  }, {
    name: 'SSN_REGEX',
    regex: SSN_REGEX,
    description: 'Validates Social Security Number (e.g. 123-45-6789)'
  }, {
    name: 'UUID_REGEX',
    regex: UUID_REGEX,
    description: 'Validates UUID (e.g. 123e4567-e89b-12d3-a456-426614174000)'
  }, {
    name: 'HTML_TAG_REGEX',
    regex: HTML_TAG_REGEX,
    description: 'Validates HTML tags (e.g. <div>, <span>)'
  }, {
    name: 'WHITESPACE_REGEX',
    regex: WHITESPACE_REGEX,
    description: 'Validates whitespace characters (e.g. spaces, tabs)'
  }, {
    name: 'US_ZIP_CODE_REGEX',
    regex: US_ZIP_CODE_REGEX,
    description: 'Validates US ZIP code (e.g. 90210)'
  }, {
    name: 'USERNAME_REGEX',
    regex: USERNAME_REGEX,
    description: 'Validates username (e.g. user123)'
  }, {
    name: 'INDIAN_PHONE_REGEX',
    regex: INDIAN_PHONE_REGEX,
    description: 'Validates Indian phone number (e.g. +91 9876543210)'
  }, {
    name: 'INDIAN_PIN_CODE_REGEX',
    regex: INDIAN_PIN_CODE_REGEX,
    description: 'Validates Indian PIN code (e.g. 110001)'
  }, {
    name: 'GSTIN_REGEX',
    regex: GSTIN_REGEX,
    description: 'Validates GSTIN number (e.g. 07AACCB1234K1Z5)'
  }, {
    name: 'PAN_CARD_REGEX',
    regex: PAN_CARD_REGEX,
    description: 'Validates PAN card number (e.g. ABCDE1234F)'
  }, {
    name: 'AADHAAR_REGEX',
    regex: AADHAAR_REGEX,
    description: 'Validates Aadhaar number (e.g. 1234 5678 9012)'
  }, {
    name: 'VEHICLE_REGISTRATION_REGEX',
    regex: VEHICLE_REGISTRATION_REGEX,
    description: 'Validates vehicle registration number (e.g. DL 12 AB 1234)'
  }, {
    name: 'INDIAN_CURRENCY_REGEX',
    regex: INDIAN_CURRENCY_REGEX,
    description: 'Validates Indian currency format (e.g. ₹1234.56)'
  }, {
    name: 'INTERNATIONAL_PHONE_REGEX',
    regex: INTERNATIONAL_PHONE_REGEX,
    description: 'Validates international phone numbers (e.g. +44 20 7946 0958)'
  }, {
    name: 'INDIAN_PASSPORT_REGEX',
    regex: INDIAN_PASSPORT_REGEX,
    description: 'Validates Indian passport number (e.g. A1234567)'
  }, {
    name: 'DRIVING_LICENSE_REGEX',
    regex: DRIVING_LICENSE_REGEX,
    description: 'Validates driving license number (e.g. DL-123456789012)'
  }, {
    name: 'USERNAME_SPECIAL_REGEX',
    regex: USERNAME_SPECIAL_REGEX,
    description: 'Validates username with special characters (e.g. user_123@)'
  }, {
    name: 'DECIMAL_NUMBER_REGEX',
    regex: DECIMAL_NUMBER_REGEX,
    description: 'Validates decimal numbers (e.g. 123.45)'
  }, {
    name: 'HTML_ATTRIBUTE_REGEX',
    regex: HTML_ATTRIBUTE_REGEX,
    description: 'Validates HTML attribute value (e.g. class="my-class")'
  }, {
    name: 'RGB_COLOR_REGEX',
    regex: RGB_COLOR_REGEX,
    description: 'Validates RGB color format (e.g. rgb(255, 0, 0))'
  }, {
    name: 'HSL_COLOR_REGEX',
    regex: HSL_COLOR_REGEX,
    description: 'Validates HSL color format (e.g. hsl(0, 100%, 50%))'
  }, {
    name: 'BASE64_REGEX',
    regex: BASE64_REGEX,
    description: 'Validates base64 encoded string (e.g. aGVsbG8gd29ybGQ=)'
  }, {
    name: 'BINARY_NUMBER_REGEX',
    regex: BINARY_NUMBER_REGEX,
    description: 'Validates binary number (e.g. 1010)'
  }, {
    name: 'HEXADECIMAL_NUMBER_REGEX',
    regex: HEXADECIMAL_NUMBER_REGEX,
    description: 'Validates hexadecimal number (e.g. 1A3F)'
  }, {
    name: 'ROMAN_NUMERALS_REGEX',
    regex: ROMAN_NUMERALS_REGEX,
    description: 'Validates Roman numerals (e.g. IV, X, MM)'
  }, {
    name: 'CURRENCY_GENERIC_REGEX',
    regex: CURRENCY_GENERIC_REGEX,
    description: 'Validates generic currency format (e.g. $123.45)'
  }, {
    name: 'LINKEDIN_PROFILE_REGEX',
    regex: LINKEDIN_PROFILE_REGEX,
    description: 'Validates LinkedIn profile URL (e.g. https://www.linkedin.com/in/username)'
  }, {
    name: 'TWITTER_HANDLE_REGEX',
    regex: TWITTER_HANDLE_REGEX,
    description: 'Validates Twitter handle (e.g. @username)'
  }, {
    name: 'NUMBER_REGEX',
    regex: NUMBER_REGEX,
    description: 'Validates a number (integer or float)'
  }, {
    name: 'UNIT_REGEX',
    regex: UNIT_REGEX,
    description: 'Validates a string of letters (unit)'
  }, {
    name: 'MEMORY_VALIDATION_REGEX',
    regex: MEMORY_VALIDATION_REGEX,
    description: 'Regular expression to match a number with an optional unit (GB, MB, or KB)'
  }, {
    name: 'STEP_GROUP_NAME_REGEX',
    regex: STEP_GROUP_NAME_REGEX,
    description: 'Step group name accept only ( ,) ,-,_ special characters(e.g,step-group_one(test))'
  }, {
    name: 'NLP_DESCRIPTION_REGEX',
    regex: NLP_DESCRIPTION_REGEX,
    description: 'NLP Description should allow _ and $ only (e.g ,$nlpName_test)'
  }, {
    name: 'FILE_NAME_REGEX',
    regex: FILE_NAME_REGEX,
    description: \`It should include a valid file extension (e.g.,'.txt', '.jpg') without special characters like '@' or multiple dots after the extension.\`
  }, {
    name: 'ELEMENTS_TRAILING_SPACE_REGEX',
    regex: ELEMENTS_TRAILING_SPACE_REGEX,
    description: \`Element Name should not have space in the initial and end.\`
  }, {
    name: 'ELEMENTS_WHITE_SPACE_REGEX',
    regex: ELEMENTS_WHITE_SPACE_REGEX,
    description: \`Elements name should not have only white space.\`
  }, {
    name: 'PARAMETER_ALPHANUMERIC_REGEX,',
    regex: PARAMETER_ALPHANUMERIC_REGEX,
    description: \`Parameter name should be alphanumeric.\`
  }, {
    name: 'EMAIL_VALID_START,',
    regex: EMAIL_VALID_START,
    description: \`Validates email format without special characters at the start.\`
  }, {
    name: 'SCRIPT_REGEX',
    regex: SCRIPT_REGEX,
    description: \`Trim to display only Script name.\`
  }, {
    name: 'STRIP_NEW_LINES_REGEX',
    regex: STRIP_NEW_LINES_REGEX,
    description: \`Regular expression to find newline characters.\`
  }, {
    name: 'CAMEL_CASE_REGEX',
    regex: CAMEL_CASE_REGEX,
    description: \`Regular expression to convert lower camel case by excluding space.\`
  }, {
    name: 'SPECIAL_REGEX_CHARACTERS_PATTERN',
    regex: SPECIAL_REGEX_CHARACTERS_PATTERN,
    description: \`Regular expression to targeting special characters.\`
  }, {
    name: 'YOUTUBE_URL_VALIDATION_REGEX',
    regex: YOUTUBE_URL_VALIDATION_REGEX,
    description: \`Regular expression to valid youtube URL.\`
  }, {
    name: 'DYNAMIC_VALUE__PLACEHOLDER_REGEX',
    regex: DYNAMIC_VALUE__PLACEHOLDER_REGEX,
    description: \`Regular expression to match placeholder for dynamic value of locator.\`
  }, {
    name: 'DYNAMIC_VALUE_PATTERN_REGEX',
    regex: DYNAMIC_VALUE_PATTERN_REGEX,
    description: \`Regular expression to check for correct pattern of dynamic value of locator.\`
  }, {
    name: 'DYNAMIC_VALUE_TYPE_REGEX',
    regex: DYNAMIC_VALUE_TYPE_REGEX,
    description: \`Regular expression to check for dynamic value of locator.\`
  }, {
    name: 'DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX',
    regex: DYNAMIC_VALUE_WITH_VALID_BRACKETS_REGEX,
    description: \`Regular expression to validate valid brackets in dynamic locators.\`
  }, {
    name: 'CERTIFICATES_NAME_REGEX',
    regex: CERTIFICATES_NAME_REGEX,
    description: 'Validates cetificates & host name.'
  }];
  const validateInput = () => {
    const validator = validators.find(validator => validator.name === selectedRegex);
    if (validator && validator.regex) {
      const isValid = validator.regex.test(input);
      setResult(isValid ? 'Valid input' : 'Invalid input');
    } else {
      setResult('No validator selected');
    }
  };
  const handleRegexChange = e => {
    setSelectedRegex(e.target.value);
    setResult('');
  };
  const selectedValidator = validators.find(validator => validator.name === selectedRegex);
  return <div style={{
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  }}>\r
      <h1>Validation Regex Playground</h1>\r
\r
      <select value={selectedRegex} onChange={handleRegexChange} style={{
      padding: '10px',
      width: '300px',
      marginRight: '10px'
    }}>\r
        <option value="">Select Regex</option>\r
        {validators.map(validator => <option key={validator.name} value={validator.name}>\r
            {validator.name}\r
          </option>)}\r
      </select>\r
\r
      {selectedValidator && <>\r
          <p>\r
            <b>{selectedValidator.name}</b>\r
          </p>\r
          <p style={{
        fontStyle: 'italic'
      }}>{selectedValidator.description}</p>\r
        </>}\r
\r
      <div style={{
      marginTop: '20px'
    }}>\r
        <input type="text" placeholder="Enter input to test" value={input} onChange={e => setInput(e.target.value)} style={{
        padding: '10px',
        width: '300px',
        marginRight: '10px'
      }} />\r
        <button onClick={validateInput} style={{
        padding: '10px'
      }}>\r
          Validate\r
        </button>\r
      </div>\r
\r
      <div style={{
      marginTop: '20px',
      color: result === 'Valid input' ? 'green' : 'red'
    }}>\r
        {result}\r
      </div>\r
    </div>;
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const he=["Playground"];export{a as Playground,he as __namedExportsOrder,Ue as default};

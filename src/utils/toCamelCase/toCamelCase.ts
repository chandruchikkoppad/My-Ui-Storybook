import { CHECK_CAMEL_CASE } from "../../validations/regex";

export const toCamelCase = (str: string): string => {
    if (CHECK_CAMEL_CASE.test(str)) {
      return str;
    }
  
    return str
      .toLowerCase()
      .split(/[\s_-]+/)
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
      )
      .join('');
  };
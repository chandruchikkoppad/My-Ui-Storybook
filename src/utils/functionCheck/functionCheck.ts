import { checkEmpty } from '../checkEmpty/checkEmpty';

const functionCheck = (functionToCheck: any) =>
  !checkEmpty(functionToCheck) &&
  functionToCheck &&
  {}.toString.call(functionToCheck) === '[object Function]';

export default functionCheck;

type DynamicValues = any;

interface dynamicObject {
  [key: string]: DynamicValues;
}

type accessorType = string | undefined;

export const getLabel = (
  option: dynamicObject,
  accessor: accessorType = ''
) => {
  if (!accessor) {
    if (option.hasOwnProperty('label')) {
      return option.label;
    }
  }
  return option[accessor];
};

export const getValue = (
  option: dynamicObject,
  accessor: accessorType = ''
) => {
  if (!accessor) {
    if (option.hasOwnProperty('value')) {
      return option.value;
    }
  }
  return option[accessor];
};

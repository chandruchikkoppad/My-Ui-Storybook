export const toTitleCase = (str: string): string => {
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  };
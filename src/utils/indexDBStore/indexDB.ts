const encode = (data: string | object): string => {
  try {
    const stringValue = typeof data === 'object' ? JSON.stringify(data) : data;
    return btoa(unescape(encodeURIComponent(stringValue)));
  } catch (error) {
    console.error('Error encoding data:', error);
    throw new Error('Encoding failed');
  }
};

const decode = (data: string): string | unknown => {
  try {
    const decodedString = decodeURIComponent(escape(atob(data)));
    try {
      return JSON.parse(decodedString);
    } catch {
      return decodedString;
    }
  } catch (error) {
    console.error('Error decoding data:', error);
    throw new Error('Decoding failed');
  }
};

export const setStoreValue = (
  key: string,
  value: string | object | null
): void => {
  if (!key || value === undefined) {
    throw new Error('Key and value must be provided');
  }

  try {
    const encodedValue = encode(value || {});
    localStorage.setItem(key, encodedValue);
  } catch (error) {
    console.error('Failed to save data:', error);
    throw new Error('Failed to save data');
  }
};

export const getStoreValue = (key: string): string | unknown | null => {
  if (!key) {
    throw new Error('Key must be provided');
  }

  try {
    const encodedValue = localStorage.getItem(key);
    if (encodedValue) {
      return decode(encodedValue);
    }
    return null;
  } catch (error) {
    console.error('Failed to retrieve data:', error);
    throw new Error('Failed to retrieve data');
  }
};

export const deleteStoreValue = (key: string): void => {
  if (!key) {
    throw new Error('Key must be provided');
  }

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to delete data:', error);
    throw new Error('Failed to delete data');
  }
};

export const clearStore = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Failed to clear data:', error);
    throw new Error('Failed to clear data');
  }
};

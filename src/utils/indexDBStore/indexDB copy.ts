const encode = (data: string | object): string => {
  try {
    // If the data is an object, convert it to a JSON string
    const stringValue = typeof data === 'object' ? JSON.stringify(data) : data;
    // Encode the string value in UTF-8 before converting to Base64
    return btoa(unescape(encodeURIComponent(stringValue)));
  } catch (error) {
    console.error('Error encoding data:', error);
    throw new Error('Encoding failed');
  }
};

const decode = (data: string): string | object => {
  try {
    // Decode from Base64 and decode the UTF-8 string
    const decodedString = decodeURIComponent(escape(atob(data)));
    // Try parsing the string as JSON; if it fails, return the string as-is
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

const openIndexedDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('fireflink', 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Create object store if it doesn't exist
      if (!db.objectStoreNames.contains('keyValueStore')) {
        db.createObjectStore('keyValueStore', { keyPath: 'key' });
      }
    };

    request.onsuccess = (event: Event) =>
      resolve((event.target as IDBOpenDBRequest).result);
    request.onerror = (event: Event) => {
      console.error(
        'Error opening IndexedDB:',
        (event.target as IDBOpenDBRequest).error
      );
      reject('Error opening IndexedDB');
    };
  });
};

const withTransaction = <T>(
  storeName: string,
  mode: IDBTransactionMode,
  callback: (store: IDBObjectStore) => T
): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openIndexedDB();
      const transaction = db.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);

      if (!store) {
        reject(`Object store "${storeName}" not found.`);
        return;
      }

      const result = await callback(store);
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = (e: Event) => {
        console.error('Transaction error:', e);
        reject('Transaction failed');
      };
    } catch (error) {
      console.error('Error in transaction:', error);
      reject(`Transaction error: ${error}`);
    }
  });
};

export const setStoreValue = async (
  key: string,
  value: string | object
): Promise<void> => {
  if (!key || value === undefined) {
    throw new Error('Key and value must be provided');
  }

  await withTransaction(
    'keyValueStore',
    'readwrite',
    (store: IDBObjectStore) => {
      const encodedValue = encode(value);
      const request = store.put({ key, value: encodedValue });
      return new Promise<void>((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = (e: Event) => {
          console.error('Failed to save data:', e);
          reject('Failed to save data');
        };
      });
    }
  );
};

export const getStoreValue = async (
  key: string
): Promise<string | object | null> => {
  if (!key) {
    throw new Error('Key must be provided');
  }

  return await withTransaction(
    'keyValueStore',
    'readonly',
    (store: IDBObjectStore) => {
      const request = store.get(key);

      return new Promise<string | object | null>((resolve, reject) => {
        request.onsuccess = (event: Event) => {
          const result = (event.target as IDBRequest).result;
          if (result && result.value) {
            try {
              resolve(decode(result.value));
            } catch (decodeError) {
              console.error('Error decoding data:', decodeError);
              reject('Error decoding retrieved data');
            }
          } else {
            resolve(null);
          }
        };
        request.onerror = (e: Event) => {
          console.error('Failed to retrieve data:', e);
          reject('Failed to retrieve data');
        };
      });
    }
  );
};

export const deleteStoreValue = async (key: string): Promise<void> => {
  if (!key) {
    throw new Error('Key must be provided');
  }

  await withTransaction(
    'keyValueStore',
    'readwrite',
    (store: IDBObjectStore) => {
      const request = store.delete(key);
      return new Promise<void>((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = (e: Event) => {
          console.error('Failed to delete data:', e);
          reject('Failed to delete data');
        };
      });
    }
  );
};

export const clearStore = async (): Promise<void> => {
  await withTransaction(
    'keyValueStore',
    'readwrite',
    (store: IDBObjectStore) => {
      const request = store.clear();
      return new Promise<void>((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = (e: Event) => {
          console.error('Failed to clear data:', e);
          reject('Failed to clear data');
        };
      });
    }
  );
};

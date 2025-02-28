export const isFunction = (functionToCheck: any) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
};

export const convertTo24Hour = (time12h: string): string => {
  const [time, modifier] = time12h.split(' ');
  if (!time || !modifier) return '00:00';

  let [hours, minutes] = time.split(':');
  if (!hours || !minutes) return '00:00';

  if (hours === '12') {
    hours = '00';
  }

  if (modifier.toUpperCase() === 'PM') {
    hours = (parseInt(hours, 10) + 12).toString();
  }

  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};

export const convertTo12Hour = (time24: string): string => {
  const [hoursStr, minutesStr] = time24.split(':');
  const hours = parseInt(hoursStr ?? '0', 10);
  const minutes = parseInt(minutesStr ?? '0', 10);

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;

  return `${hours12.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')} ${ampm}`;
};

export const isValid12HourTime = (timeString: string): boolean => {
  const regex = /^(0[1-9]|1[0-2]):([0-5][0-9])(?:\s?(AM|PM))?$/i;
  return regex.test(timeString);
};

// Utility to normalize memory values to bytes
export const UNIT_MULTIPLIERS: Record<string, number> = {
  B: 1,
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
};

// Parses a storage value string and converts it into a normalized value in bytes along with its unit.
export function normalizeStorageValue(value: string): {
  normalizedValue: number;
  unit: string;
  value: number;
} {
  const match = value.match(/^(\d+(?:\.\d+)?)\s*(B|KB|MB|GB)$/i);
  if (!match) {
    throw new Error(`Invalid storage value format: ${value}`);
  }

  const [, numericPart, unit] = match;
  // Ensure numericPart and unit are defined
  if (!numericPart || !unit) {
    throw new Error(`Invalid storage value format: ${value}`);
  }

  const normalizedValue =
    parseFloat(numericPart) * (UNIT_MULTIPLIERS[unit.toUpperCase()] || 1);

  return {
    normalizedValue,
    unit: unit.toUpperCase(),
    value: parseFloat(numericPart),
  };
}

// Converts a byte value into a readable string with the largest appropriate unit (GB, MB, KB, B).
export function formatMemoryValue(valueInBytes: number): string {
  const units = ['GB', 'MB', 'KB', 'B'];

  for (const unit of units) {
    const factor = UNIT_MULTIPLIERS[unit];
    if (factor === undefined) {
      throw new Error(`Missing factor for unit: ${unit}`);
    }

    if (valueInBytes >= factor || unit === 'B') {
      const normalizedValue = valueInBytes / factor;
      const formattedValue = normalizedValue % 1 === 0 ? `${normalizedValue.toFixed(0)}` : `${normalizedValue.toFixed(2)}`;
      return `${formattedValue} ${unit}`;
    }
  }
  return `${valueInBytes} B`;
}


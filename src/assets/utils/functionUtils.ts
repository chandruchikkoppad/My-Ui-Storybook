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

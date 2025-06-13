import React, { useState } from 'react';
import { handleTimeZoneChange } from './handleTimeZoneChange';
import CustomDatePicker from '../../components/DatePicker/DatePicker';

// List of common timezones
const TIMEZONES = [
  { value: 'Pacific/Kiritimati', label: 'Pacific/Kiritimati (UTC+14)' },
  { value: 'Etc/GMT+12', label: 'IDLW (UTC-12)' },
  { value: 'America/New_York', label: 'New York (UTC-5)' },
  { value: 'Europe/London', label: 'London (UTC+0)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (UTC+9)' },
  { value: 'Australia/Sydney', label: 'Sydney (UTC+10)' },
];

export default {
  title: 'Utils/handleTimeZoneChange',
  component: handleTimeZoneChange,
};

export const Default = () => {
  const [timezone, setTimezone] = useState<string>('Pacific/Kiritimati');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(handleTimeZoneChange(timezone))
  );

  const handleTimezoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTimezone = e.target.value;
    setTimezone(newTimezone);
    // Update the date to reflect the new timezone
    if (selectedDate) {
      setSelectedDate(new Date(handleTimeZoneChange(newTimezone)));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="timezone-select" style={{ marginRight: '10px' }}>
          Select Timezone:
        </label>
        <select
          id="timezone-select"
          value={timezone}
          onChange={handleTimezoneChange}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minWidth: '250px',
          }}
        >
          {TIMEZONES.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Selected Timezone: {timezone}</h2>
        <p>
          Current time in zone:{' '}
          {new Date(handleTimeZoneChange(timezone)).toString()}
        </p>
      </div>

      <CustomDatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        timezone={timezone}
        dateFormat="dd MMM yyyy"
        zIndex={1000}
        placeholder="Select Date"
      />
    </div>
  );
};

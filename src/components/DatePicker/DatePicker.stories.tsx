import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CustomDatePicker from './DatePicker';
import { useState, useRef } from 'react';
import { handleTimeZoneChange } from '../../utils/timeZoneChange/handleTimeZoneChange';

const meta: Meta<typeof CustomDatePicker> = {
  title: 'Components/DatePicker',
  component: CustomDatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A custom date picker component with built-in calendar and input field.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    minDate: {
      description: 'The minimum selectable date',
      control: {
        type: 'date',
      },
    },
    maxDate: {
      description: 'The maximum selectable date',
      control: {
        type: 'date',
      },
    },
    value: {
      description: 'Selected date value',
      control: {
        type: 'date',
      },
    },
    onChange: {
      description: 'Function to handle date selection',
      action: 'changed',
    },
    placeholder: {
      description: 'Placeholder text for the input field',
      control: 'text',
    },
    disabled: {
      description: 'Disables the date picker',
      control: 'boolean',
    },
    dateFormat: {
      description: 'Date format to display',
      control: 'text',
    },
    timeFormat: {
      description: 'time format to display',
      control: 'text',
    },
    timezone: {
      description: 'Timezone for date formatting',
      control: 'text',
    },
    calendarWidth: {
      description: 'Custom width for the calendar in pixel',
      control: 'number',
    },
    error: {
      description: 'Displays the input field in an error state',
      control: 'boolean',
    },
    helperText: {
      description:
        'Helper text to show below the input, often used for error messages',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomDatePicker>;

// Default story for DatePicker
export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>();

    return <CustomDatePicker {...args} value={date} onChange={setDate} />;
  },
};

// Default story for DatePicker
export const FilterDatePicker: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <CustomDatePicker
        {...args}
        value={date}
        onChange={setDate}
        isFilterDatePicker
      />
    );
  },
};

// Start Date Filter story
export const StartDateFilter: Story = {
  render: (args) => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const startDateRef = useRef<HTMLDivElement>(null);

    return (
      <CustomDatePicker
        {...args}
        ref={startDateRef}
        value={startDate}
        onChange={setStartDate}
        calendarWidth={240}
        maxDate={new Date()} // Disable future dates for start date picker
        timezone="America/Adak"
      />
    );
  },
};

// End Date Input story
export const EndDateInput: Story = {
  render: (args) => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();

    return (
      <>
        <p>Select Start Date:</p>
        <CustomDatePicker
          {...args}
          value={startDate}
          onChange={setStartDate}
          maxDate={new Date()} // Disable future dates for start date picker
          timezone='Etc/GMT+12'
        />

        <p>Select End Date:</p>
        <CustomDatePicker
          {...args}
          value={endDate}
          onChange={setEndDate}
          disabled={!startDate}
          minDate={startDate || undefined} // Restrict the end date based on selected start date
          maxDate={new Date()} // Disable future dates for end date picker
          timezone='Etc/GMT+12'
        />
      </>
    );
  },
};

// Schedule Date Input story
export const ScheduleDateInput: Story = {
  args: {
    error: false,
    helperText: 'Error',
  },

  render: (args) => {
    const handleTimeZoneChange = (timeZone: string) => {
      const currentDate = new Date();
      return new Intl.DateTimeFormat('en-US', {
        timeZone,
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(currentDate);
    };

    const [selectDate, setSelectDate] = useState<Date | undefined>(
      new Date(handleTimeZoneChange('America/Adak'))
    );

    return (
      <CustomDatePicker
        {...args}
        value={selectDate}
        onChange={setSelectDate}
        minDate={new Date()} // Set minimum date to today
        timezone="America/Adak"
      />
    );
  },
};

export const Dateonly: Story = {
  render: (args) => {
    const [selectedDate, setSelectDate] = useState<Date | undefined>();

    console.log(selectedDate);
    return (
      <CustomDatePicker
        {...args}
        value={selectedDate}
        onChange={setSelectDate}
        calendarWidth={240}
        dateOnly
      />
    );
  },
};

export const PastOneYear: Story = {
  render: (args) => {
    const [selectedDate, setSelectDate] = useState<Date | undefined>();

    return (
      <>
        <CustomDatePicker
          {...args}
          value={selectedDate}
          onChange={setSelectDate}
          calendarWidth={240}
          maxDate={new Date()}
          minDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          }
          dateOnly
          dateFormat="dd MMM yyyy"
        />
        <button onClick={() => setSelectDate(undefined)}>clear</button>
      </>
    );
  },
};

export const DashboardFilter: Story = {
  render: (args) => {
    const [selectedDate, setSelectDate] = useState<Date | undefined>();

    return (
      <>
        <CustomDatePicker
          {...args}
          value={selectedDate}
          onChange={setSelectDate}
          calendarWidth={240}
          maxDate={new Date()}
          minDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          }
          dateOnly
          timezone="Pacific/Kiritimati"
          dateFormat="dd MMM yyyy"
          isSelectableDate
        />
        <button onClick={() => setSelectDate(undefined)}>clear</button>
      </>
    );
  },
};

export const DatePickerWithTimeZone: Story = {
  render: (args) => {
    const TIMEZONES = [
      { value: 'Pacific/Kiritimati', label: 'Pacific/Kiritimati (UTC+14)' },
      { value: 'Etc/GMT+12', label: 'IDLW (UTC-12)' },
      { value: 'America/New_York', label: 'New York (UTC-5)' },
      { value: 'Europe/London', label: 'London (UTC+0)' },
      { value: 'Asia/Tokyo', label: 'Tokyo (UTC+9)' },
      { value: 'Australia/Sydney', label: 'Sydney (UTC+10)' },
    ];
    const [selectDate, setSelectDate] = useState<Date | undefined>();

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
      <>
        <h1>With time zone no date initially selected</h1>
        <CustomDatePicker
          {...args}
          value={selectDate}
          onChange={setSelectDate}
          calendarWidth={240}
          maxDate={new Date(handleTimeZoneChange('Etc/GMT+12'))}
          minDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          }
          dateOnly
          timezone="Etc/GMT+12"
          dateFormat="dd MMM yyyy"
          isSelectableDate
        />
        <button onClick={() => setSelectDate(undefined)}>clear</button>
        <hr />
        <h1>By default selecting the current date based on time zone</h1>
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
            maxDate={new Date(handleTimeZoneChange(timezone))}
            timezone={timezone}
            dateFormat="dd MMM yyyy"
            zIndex={1000}
            placeholder="Select Date"
          />
        </div>
      </>
    );
  },
};

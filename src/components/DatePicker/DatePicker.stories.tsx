import type { Meta, StoryObj } from '@storybook/react';
import CustomDatePicker from './DatePicker';
import { useState } from 'react';

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
      control: "number"
    },
    error: {
      description: 'Displays the input field in an error state',
      control: 'boolean',
    },
    helperText: {
      description: 'Helper text to show below the input, often used for error messages',
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

    return(
      <CustomDatePicker
        {...args}
        value={date}
        onChange={setDate}
      />
    )
  }
};

// Start Date Filter story
export const StartDateFilter: Story = {
  render: (args) => {
    const [startDate, setStartDate] = useState<Date | undefined>();

    return (
      <CustomDatePicker
        {...args}
        value={startDate}
        onChange={setStartDate}
        calendarWidth = {240}
        maxDate={new Date()} // Disable future dates for start date picker
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
        />

        <p>Select End Date:</p>
        <CustomDatePicker
          {...args}
          value={endDate}
          onChange={setEndDate}
          disabled={!startDate}
          minDate={startDate || undefined} // Restrict the end date based on selected start date
          maxDate={new Date()} // Disable future dates for end date picker
        />
      </>
    );
  },
};

// Schedule Date Input story
export const ScheduleDateInput: Story = {
  args: {
    error: false,
    helperText: "Error"
  },

  render: (args) => {
    const [selectDate, setSelectDate] = useState<Date | undefined>(new Date());

    return (
      <CustomDatePicker
        {...args}
        value={selectDate}
        onChange={setSelectDate}
        minDate={new Date()} // Set minimum date to today
      />
    );
  }
};

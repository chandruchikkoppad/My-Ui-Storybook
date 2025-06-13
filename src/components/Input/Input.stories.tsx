import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { ChangeEvent, useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Input>;

const defaultArgs = {
  name: 'input',
  label: '',
  disabled: false,
  placeholder: 'Enter your name',
  value: '',
  type: 'text',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'default',
    type: 'text',
  },
};
export const Primary: Story = {
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'primary',
    type: 'text',
  },
};
export const DisabledWithValue: Story = {
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'primary',
    type: 'text',
    value: 'Disabled',
    disabled: true,
    required: true,
  },
};

export const AutoFocusInput: Story = {
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'primary',
    type: 'text',
    value: '',
    required: true,
    autoFocus: true,
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (event.target) {
        if (value.length <= 0) {
          setError(true);
          setHelperText(`${event?.target?.name} is required`);
        } else if (value.length >= 10) {
          setError(true);
          setHelperText(`Name should be within 10 characters`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
      setValue(value);
    };

    return (
      <>
        <Input
          {...defaultArgs}
          type="text"
          onChange={onChangeHandler}
          disabled={false}
          value={value}
          name="Name"
          label="Name"
          placeholder="Enter name here"
          variant="primary"
          required={true}
          error={error}
          helperText={helperText}
          isLabelRequired={false}
        />
      </>
    );
  },
};

export const withSearchIcon: Story = {
  args: {
    ...defaultArgs,
    label: 'Url',
    variant: 'primary',
    type: 'text',
    placeholder: 'Enter url here',
    showSearchIcon: true,
    handleSearchIconClick: (e) => {
      e.preventDefault();
    },
    searchIconProps: {
      name: 'search',
      disabled: false,
      toolTipTitle: 'Search'
    },
  },
};

export const withNumber: Story = {
  render: () => {
    const [value, setValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setValue(parseInt(inputValue));
      if (event.target) {
        if (value <= -2 || value >= 111) {
          setError(true);
          setHelperText(`value is out of range`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
    };

    return (
      <>
        <Input
          {...defaultArgs}
          type="number"
          minValue="-2"
          maxValue="111"
          onChange={onChangeHandler}
          disabled={false}
          value={value}
          name="Value"
          label="Value"
          placeholder="Enter value here"
          variant="primary"
          required={true}
          error={error}
          helperText={helperText}
          setUpdatedNumberValue={(value) => setValue(value)}
        />
      </>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (event.target) {
        if (value.length <= 0) {
          setError(true);
          setHelperText(`${event?.target?.name} is required`);
        } else if (value.length >= 10) {
          setError(true);
          setHelperText(`Name should be within 10 characters`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
      setValue(value);
    };
    return (
      <>
        <Input
          {...defaultArgs}
          type="text"
          onChange={onChangeHandler}
          disabled={false}
          value={value}
          name="Name"
          label="Name"
          placeholder="Enter name here"
          variant="primary"
          required={true}
          error={error}
          helperText={helperText}
        />
      </>
    );
  },
};

  export const OnBlurErrorDisplay: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value.length <= 0) {
        setError(true);
        setHelperText(`${event.target.name} is required`);
      } else if (value.length >= 10) {
        setError(true);
        setHelperText(`Name should be within 10 characters`);
      } else {
        setError(false);
        setHelperText('');
      }
      setValue(value);
    };

    return (
      <>
        <Input
          {...defaultArgs}
          type="text"
          onChange={onChangeHandler}
          disabled={false}
          value={value}
          name="Name"
          label="Name"
          placeholder="Enter name here"
          variant="primary"
          required={true}
          error={error}
          helperText={helperText}
          displayErrorImmediately={false}
        />
      </>
    );
  },
};

export default meta;

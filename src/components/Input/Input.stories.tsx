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

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (event.target.required) {
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

export default meta;

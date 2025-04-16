import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import { ChangeEvent, useState } from 'react';
import { URL_REGEX } from '../../validations/regex';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Link>;

const defaultArgs = {
  name: 'input',
  label: '',
  disabled: false,
  placeholder: 'Attached Link will be shown here if any URL is added',
  value: '',
  type: 'text',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Link',
    variant: 'default',
    type: 'text',
  },
};
export const Primary: Story = {
  args: {
    ...defaultArgs,
    label: 'Link',
    variant: 'primary',
    type: 'text',
  },
};
export const DisabledWithValue: Story = {
  args: {
    ...defaultArgs,
    label: 'Link',
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
    label: 'Link',
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
      const newValue = event.target.value;
      if(error || !newValue){
        if (!URL_REGEX.test(newValue)) {
          setError(true);
          setHelperText('Enter a valid URL');
        }else{
          setError(false);
          setHelperText('');
        }
      }
        setValue(newValue);
    };
    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (!newValue) {
        setError(true);
        setHelperText('This field is required');
      } else if (!URL_REGEX.test(newValue)) {
        setError(true);
        setHelperText('Enter a valid URL');
      } else {
        setError(false);
        setHelperText('');
      }
    };
    return (
      <>
        <Link
          {...defaultArgs}
          type="text"
          onChange={onChangeHandler}
          disabled={false}
          value={value}
          name="Link"
          onBlur={onBlurHandler}
          label="Link"
          placeholder="Attached Link will be shown here if any URL is added"
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

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if(error || !newValue){
        if (!URL_REGEX.test(newValue)) {
          setError(true);
          setHelperText('Enter a valid URL');
        }else{
          setError(false);
          setHelperText('');
        }
      }
        setValue(newValue);
          
        };
        const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
          const newValue = event.target.value;
          if (!newValue) {
            setError(true);
            setHelperText('This field is required');
          } else if (!URL_REGEX.test(newValue)) {
            setError(true);
            setHelperText('Enter a valid URL');
          } else {
            setError(false);
            setHelperText('');
          }
        };
    return (
      <>
        <Link
          {...defaultArgs}
          type="text"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          disableLinkIcon={error || !value}
          value={value}
          name="Link"
          label="Link"
          placeholder="Attached Link will be shown here if any URL is added"
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

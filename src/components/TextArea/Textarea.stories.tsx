import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';
import React, { ChangeEvent, useState } from 'react';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Textarea>;

const defaultArgs = {
  name: 'textarea',
  label: '',
  disabled: false,
  placeholder: 'Type Your Description Here',
  value: '',
  variant: 'primary',
  rows: 4,
  cols: 30,
  capacity: 200,
  resize: false,
  errorText: 'Add Description',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'default',
  },
};
export const Primary: Story = {
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'primary',
  },
};
export const Disabled: Story = {
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'primary',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();

    const handleValidation = (
      value: string,
      name: string,
      isRequired: boolean
    ) => {
      if (isRequired && checkEmpty(value)) {
        setError(true);
        setHelperText(`${name} is required`);
        return false;
      }
      setError(false);
      setHelperText('');
      return true;
    };

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValue(value);
      handleValidation(value, event.target.name, event.target.required);
    };

    const onBlurHandler = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      handleValidation(value, event.target.name, event.target.required);
    };

    return (
      <>
        <Textarea
          {...defaultArgs}
          onChange={onChangeHandler}
          disabled={false}
          capacity={200}
          value={value}
          name="Description"
          label="Description"
          placeholder="Type Your Description Here"
          variant="primary"
          required={true}
          error={error}
          onBlur={onBlurHandler}
          errorText={helperText}
        />
      </>
    );
  },
};

export const ReadOnlyTextArea: Story = {
  render: () => {
    const [value, setValue] = useState<string>(
      'If you want to use a ref instead of a useState for storing facetQueries, you can use useRef. This is useful when:\nYou don’t need re-renders when facetQueries updates.\nYou want to mutate the value withou'
    );

    return (
      <>
        <Textarea
          {...defaultArgs}
          disabled={false}
          value={value}
          label="Description"
          variant="primary"
          placeholder=""
          readOnly
        />
      </>
    );
  },
};

export const WebServiceTextArea: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

    return (
      <>
        <Textarea
          {...defaultArgs}
          disabled={false}
          value={value}
          variant="primary"
          placeholder="Web Service Placeholder....."
          displayCapacity={false}
          isLabelRequired={false}
          onChange={(e) => setValue(e.target.value)}
        />
      </>
    );
  },
};

export default meta;

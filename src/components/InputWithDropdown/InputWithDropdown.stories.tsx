import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputWithDropdown from './InputWithDropdown';
import { ChangeEvent, useState } from 'react';
import { Option } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const meta: Meta<typeof InputWithDropdown> = {
  title: 'Components/InputWithDropdown',
  component: InputWithDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputWithDropdown>;

let optionsList = [
  { label: 'option 1', value: 'option 1' },
  { label: 'option 2', value: 'option 2' },
  { label: 'option 3', value: 'option 3' },
  { label: 'option 4', value: 'option 4' },
];
let selectedOption = { label: 'option 2', value: 'option 2' };

const defaultArgs = {
  label: 'Field-Name',
  disabled: false,
  placeholder: 'Enter your name',
  optionsList: optionsList,
  selectedOption: selectedOption,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    disabled: false,
    required: false,
  },
};

export const DisabledWithValue: Story = {
  args: {
    ...defaultArgs,
    variant: 'primary',
    value: 12345,
    disabled: true,
    required: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>('');

    const optionsListToPass = [
      { label: 'milliseconds', value: 'milliseconds' },
      { label: 'seconds', value: 'seconds' },
      { label: 'minutes', value: 'minutes' },
      { label: 'hours', value: 'hours' },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'milliseconds',
      value: 'milliseconds',
    });

    const onDropdownChangeHandler = (option: Option) => {
      setSelectedOption(option);
      setValue(0);
    };

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = parseInt(event.target.value);
      setValue(event.target.value);

      if (event.target) {
        if (inputValue < 0 || checkEmpty(value)) {
          setError(true);
          setHelperText(`${event.target.name} is required`);
        } else if (inputValue > 999) {
          setError(true);
          setHelperText(`${event.target.name} should be upto 999`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
    };

    return (
      <InputWithDropdown
        {...defaultArgs}
        name="ImplicitTime"
        label="ImplicitTime"
        placeholder={`Enter ImplicitTime here`}
        value={value}
        required={true}
        error={error}
        helperText={helperText}
        optionsList={optionsListToPass}
        selectedOption={selectedOption}
        onInputChangeHandler={onInputChangeHandler}
        onDropdownChangeHandler={onDropdownChangeHandler}
      />
    );
  },
};

export const InputWithStaticLabelWithoutOptions: Story = {
  render: () => {
    const [value, setValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>('');

    const optionsListToPass = [{ label: 'Days', value: 'Days' }];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'Days',
      value: 'Days',
    });

    const onDropdownChangeHandler = (option: Option) => {
      setSelectedOption(option);
      setValue(0);
    };

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = parseInt(event.target.value);
      setValue(inputValue);

      if (event.target) {
        if (checkEmpty(inputValue)) {
          setError(true);
          setHelperText(`${event.target.name} is required`);
        } else if (inputValue >= 366) {
          setError(true);
          setHelperText(`${event.target.name} should be upto 365`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
    };

    return (
      <InputWithDropdown
        {...defaultArgs}
        name="Duration"
        label="Duration"
        placeholder={`Enter Duration here`}
        value={value}
        required={true}
        error={error}
        helperText={helperText}
        optionsList={optionsListToPass}
        selectedOption={selectedOption}
        optionsRequired={false}
        onInputChangeHandler={onInputChangeHandler}
        onDropdownChangeHandler={onDropdownChangeHandler}
      />
    );
  },
};

export default meta;

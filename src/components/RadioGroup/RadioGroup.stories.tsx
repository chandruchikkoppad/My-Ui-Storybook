import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';
import { useState } from 'react';
import Icon from '../Icon';
import React from 'react';
import { Option } from '../MultiSelect/MultiSelectTypes';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof RadioGroup>;

export const Controlled: Story = {
  render: () => {
    const radioOptions = [
      { value: 'men', label: 'Men' },
      { value: 'women', label: 'Women' }, // Disabled option
      { value: 'other', label: 'Other' },
    ];
    const [selectedOption, setSelectedOption] = useState('option2');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return (
      <RadioGroup
        options={radioOptions}
        onChange={handleOptionChange}
        name="option"
        selectedValue={selectedOption}
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: () => {
    const radioOptions = [
      { value: 'men', label: 'Men', disabled: true },
      { value: 'women', label: 'Women' }, // Disabled option
      { value: 'other', label: 'Other' },
    ];
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return (
      <RadioGroup
        options={radioOptions}
        onChange={handleOptionChange}
        name="option"
        selectedValue={selectedOption}
      />
    );
  },
};

export const DisabledSelected: Story = {
  render: () => {
    const radioOptions = [
      { value: 'men', label: 'Men' },
      { value: 'women', label: 'Women', disabled: true }, // Disabled option
      { value: 'other', label: 'Other' },
    ];
    const [selectedOption, setSelectedOption] = useState('women');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return (
      <RadioGroup
        options={radioOptions}
        onChange={handleOptionChange}
        name="gender"
        selectedValue={selectedOption}
      />
    );
  },
};

export const WithToolTipIcon: Story = {
  render: () => {
    const radioOptions = [
      {
        value: 'men',
        label: 'Men',
        showTooltip: true,
        tooltipChildren: <Icon name="info" />,
        tooltipTitle: 'Info',
        tooltipPosition: 'bottom',
      },
      {
        value: 'women',
        label: 'Women',
        showTooltip: true,
        disabled: true,
        tooltipPosition: 'left',
      },
      {
        value: 'other',
        label: 'Other',
        showTooltip: true,
        tooltipChildren: <Icon name="info" />,
        tooltipTitle: 'Info',
      },
    ];
    const [selectedOption, setSelectedOption] = useState('women');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return (
      <RadioGroup
        options={radioOptions}
        onChange={handleOptionChange}
        name="gender"
        selectedValue={selectedOption}
      />
    );
  },
};

export const WithLabelled: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('restApi');
    const radioOptions = [
      { value: 'restApi', label: 'RestAPI' },
      { value: 'snippets', label: 'Snippet' },
      { value: 'history', label: 'History' },
    ];
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return (
      <RadioGroup
        options={radioOptions}
        onChange={handleOptionChange}
        name="option"
        selectedValue={selectedOption}
        isAsteriskRequired
        isLabel
        label={'Web Services'}
        classNameForLabel="ff-radio-label-wrapper"
      />
    );
  },
};

export const WithLabelledError: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState(false);
    const radioOptions = [
      { value: 'restApi', label: 'RestAPI' },
      { value: 'snippets', label: 'Snippet' },
      { value: 'history', label: 'History' },
    ];
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
      setError(false);
    };

    const handleBlur = () => {
      if (selectedOption === '') {
        setError(true);
      } else {
        setError(false);
      }
    };

    return (
      <RadioGroup
        options={radioOptions}
        onChange={handleOptionChange}
        name="option"
        selectedValue={selectedOption}
        isAsteriskRequired
        isLabel
        label={'Web Services'}
        classNameForLabel="ff-radio-label-wrapper"
        isError={error}
        onBlur={handleBlur}
        errorMessage="It is required to activate"
        disabled={true}
      />
    );
  },
};

export default meta;

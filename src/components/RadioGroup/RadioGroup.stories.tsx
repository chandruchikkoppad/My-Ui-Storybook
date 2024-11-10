import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';
import { useState } from 'react';

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

export const DisabledSelcted: Story = {
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
export default meta;

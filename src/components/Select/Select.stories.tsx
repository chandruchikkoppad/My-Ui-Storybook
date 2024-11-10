import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { useState } from 'react';
import { Option } from './types';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select',
    optionsList: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Select',
    optionsList: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    errorMsg: 'Please select a option',
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    optionsList: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};

export const EmptyOptions: Story = {
  args: {
    label: 'Select',
    optionsList: [],
    errorMsg: 'No options available',
  },
};

export const Disable: Story = {
  args: {
    label: 'Select',
    optionsList: [],
    disabled: true,
  },
};

export const WithInitialValue: Story = {
  args: {
    label: 'Select',
    selectedOption: { label: 'Option 2', value: '2' },
    optionsList: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
    ],
  },
};

export const OptionSelection: Story = {
  render: () => {
    const optionsList = [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'Option 2',
      value: '2',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        label="Option"
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={handleChange}
      />
    );
  },
};

export const CustomJSX: Story = {
  render: () => {
    const optionsList: Option[] = [
      {
        label: <p style={{ color: 'red' }}>Option 1</p>,
        value: 'option 1',
      },
      {
        label: <p style={{ color: 'green' }}>Option 2</p>,
        value: 'option 2',
      },
      {
        label: <p style={{ color: 'beige' }}>Option 3</p>,
        value: 'option 3',
      },
      {
        label: <p style={{ color: 'crimson' }}>Option 4</p>,
        value: 'option 4',
      },
      {
        label: <p style={{ color: 'cyan' }}>Option 5</p>,
        value: 'option 5',
      },
      {
        label: <p style={{ color: 'red' }}>Option 6</p>,
        value: 'option 6',
      },
    ];

    const [selectedOption, setSelectedOption] = useState<Option>({
      label: <p style={{ color: 'red' }}>Option 6</p>,
      value: 'option 6',
    });

    const handleChange = (option: Option) => {
      setSelectedOption(option);
    };

    return (
      <Select
        label="Option"
        optionsList={optionsList}
        selectedOption={selectedOption}
        onChange={handleChange}
      />
    );
  },
};

export default meta;

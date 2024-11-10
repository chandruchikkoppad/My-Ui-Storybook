import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from './MultiSelect';
import { useState } from 'react';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MultiSelect>;

const defaultArgs = {
  label: 'Fruits',
  disabled: false,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    required: true,
    withSelectButton: true,
    onSelect: () => {
      alert('selected');
    },
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' },
      { label: 'Grape', value: 'grape' },
      // { label: 'Kiwi', value: 'kiwi' },
      // { label: 'Mango', value: 'mango' },
      // { label: 'Orange', value: 'orange' },
      // { label: 'Peach', value: 'peach' },
      // { label: 'Strawberry', value: 'strawberry' },
    ],
    // selectedOptions: [{ label: 'Apple', value: 'apple' }],
  },
};

export const Default2: Story = {
  args: {
    ...defaultArgs,
  },
};
export const Default3: Story = {
  args: {
    ...defaultArgs,
  },
};
export const EmailGroup: Story = {
  render: () => {
    const [options] = useState([
      { label: 'Sample1@gmail.com', value: 'sample1@gmail.com' },
      { label: 'Sample2@gmail.com', value: 'sample2@gmail.com' },
    ]);
    const [selectedOptions, setSelectedOptions] = useState<
      { label?: string; value?: string }[]
    >([{ label: 'Sample1@gmail.com', value: 'sample1@gmail.com' }]);
    const onChange = (options: { label?: string; value?: string }[]) => {
      setSelectedOptions(options);
    };
    return (
      <MultiSelect
        label={'Enter Email'}
        type="email"
        required
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
        acceptNewOption={true}
        displayCount={true}
      />
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [options] = useState([
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' },
      { label: 'Grape', value: 'grape' },
      { label: 'Kiwi', value: 'kiwi' },
      { label: 'Mango', value: 'mango' },
      { label: 'Orange', value: 'orange' },
      { label: 'Peach', value: 'peach' },
      { label: 'Strawberry', value: 'strawberry' },
    ]);
    const [selectedOptions, setSelectedOptions] = useState<
      { label?: string; value?: string }[]
    >([{ label: 'Apple', value: 'apple' }]);
    const onChange = (options: { label?: string; value?: string }[]) => {
      setSelectedOptions(options);
    };
    return (
      <MultiSelect
        label={'Fruits'}
        required
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
      />
    );
  },
};

export default meta;

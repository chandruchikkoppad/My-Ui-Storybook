import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enter label',
  },
};

export const Partial: Story = {
  args: {
    label: 'Enter label',
    partial: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked((event.target as HTMLInputElement).checked);
    };

    return (
      <Checkbox
        label="click here to proceed with controlled component"
        disabled={false}
        checked={checked}
        onChange={handleChange}
      />
    );
  },
};

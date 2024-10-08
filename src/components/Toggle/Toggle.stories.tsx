import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    id: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
    id: 'toggle',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return <Toggle checked={checked} onChange={handleChange} />;
  },
};

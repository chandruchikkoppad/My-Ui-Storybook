import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AiToggle from './AiToggle';
const meta: Meta<typeof AiToggle> = {
  title: 'Components/AiToggle',
  component: AiToggle,
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

type Story = StoryObj<typeof AiToggle>;

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
    id: 'toggle1',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    id: 'toggle2',
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
    return <AiToggle id="toggle8" checked={checked} onChange={handleChange} />;
  },
};

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
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
    id: 'toggle1',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    id: 'toggle2',
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
    id: 'toggle3',
  },
};

export const SmallSize: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return (
      <Toggle
        id="toggle4"
        size="small"
        checked={checked}
        onChange={handleChange}
      />
    );
  },
};

export const MediumSize: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return (
      <Toggle
        id="toggle5"
        size="medium"
        checked={checked}
        onChange={handleChange}
      />
    );
  },
};

export const DynamicIconAndSize: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return (
      <Toggle
        id="toggle7"
        size="large"
        checked={checked}
        onChange={handleChange}
        icon={{
          checked: { name: 'moon_stars_icon', width: 14, height: 14 },
          unchecked: { name: 'sun_icon', width: 14, height: 14 },
        }}
      />
    );
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
    return (
      <Toggle
        id="toggle8"
        size="large"
        checked={checked}
        onChange={handleChange}
      />
    );
  },
};

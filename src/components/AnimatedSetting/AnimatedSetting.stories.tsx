import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import AnimatedSetting from './AnimatedSetting';

const meta: Meta<typeof AnimatedSetting> = {
  title: 'Components/AnimatedSetting',
  component: AnimatedSetting,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AnimatedSetting>;

export default meta;

export const Default: Story = {
  args: {
    disabled: false,
    name: 'setting_icon',
  },
};

export const Disabled: Story = {
  render: () => {
    return <AnimatedSetting name="setting_icon"  disabled={true} />;
  },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MessageBox from './MessageBox';

const meta: Meta<typeof MessageBox> = {
  title: 'Components/MessageBox',
  component: MessageBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageBox>;

export const Default: Story = {
  args: {
    content: '1. How To Create a New Project?',
    isVisible: true,
    maxWidth: 300,
    onClick: () => alert('Message box clicked!'),
    isClickable: false,
    arrowPosition: 'right',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Typography>;

export const Docs: Story = {
  args: {
    children: 'Typography',
  },
};

export const Regular12px: Story = {
  args: {
    fontWeight: 'regular',
    fontSize: '12px',
    as: 'h1',
    children: 'This is Regular text with 400 font weight and 12px font size.',
  },
};

export const Medium12px: Story = {
  args: {
    fontWeight: 'medium',
    fontSize: '14px',
    as: 'p',
    children: 'This is Medium text with 500 font weight and 14px font size.',
  },
};

export const SemiBold14px: Story = {
  args: {
    fontWeight: 'bold',
    fontSize: '14px',
    as: 'li',
    children: 'This is SemiBold text with 600 font weight and 14px font size.',
  },
};

export const Bold14px: Story = {
  args: {
    fontWeight: 'bold',
    fontSize: '16px',
    as: 'h2',
    children: 'This is Bold text with 700 font weight and 16px font size.',
  },
};

export default meta;

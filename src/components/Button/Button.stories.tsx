import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Button>;

const defaultArgs = {
  label: 'Button',
  disabled: false,
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
    transparentBackground: true,
  },
};
export const Danger: Story = {
  args: {
    ...defaultArgs,
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    ...defaultArgs,
    variant: 'success',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    ...defaultArgs,
    withIcon: true,
    iconName: 'add_icon',
  },
};

export default meta;

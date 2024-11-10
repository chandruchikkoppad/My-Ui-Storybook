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
  disabled: false,
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    label: 'Secondary Button',
    variant: 'secondary',
  },
};
export const Tertiary: Story = {
  args: {
    ...defaultArgs,
    label: 'Tertiary Button',
    variant: 'tertiary',
  },
};
export const Delete: Story = {
  args: {
    ...defaultArgs,
    label: 'Delete',
    variant: 'delete',
  },
};
export const PrimaryWithIcon: Story = {
  args: {
    ...defaultArgs,
    label: 'Primary Button',
    variant: 'primary',
    iconName: 'manage_apps',
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    ...defaultArgs,
    label: 'Secondary Button',
    variant: 'secondary',
    iconName: 'manage_apps',
  },
};
export const TertiaryWithIcon: Story = {
  args: {
    ...defaultArgs,
    label: 'Tertiary Button',
    variant: 'tertiary',
    iconName: 'manage_apps',
  },
};

export default meta;

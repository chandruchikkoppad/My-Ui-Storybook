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
export const Warning: Story = {
  args: {
    ...defaultArgs,
    label: 'Warning',
    variant: 'warning',
  },
};
export const Danger: Story = {
  args: {
    ...defaultArgs,
    label: 'Danger',
    variant: 'danger',
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
export const CustomButton: Story = {
  args: {
    ...defaultArgs,
    label: 'Website Button',
    variant: 'custom',
    border: '1px solid #29102D',
    typographyStyle: {
      color: '#29102D',
    },
    fontSize: 14,
    style: {
      padding: '12px 24px 12px 24px',
      backgroundColor: '#E9E9E9',
      borderRadius: '24px',
    },
  },
};

export const DangerWithIcon: Story = {
  args: {
    ...defaultArgs,
    label: 'Danger Button',
    variant: 'danger',
    iconName: 'manage_apps',
  },
};

export default meta;

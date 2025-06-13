import { Meta, StoryObj } from '@storybook/react';
import StatusIndicator from './StatusIndicator';

const meta: Meta<typeof StatusIndicator> = {
  title: 'Components/StatusIndicator',
  component: StatusIndicator,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'success', 'danger'],
      control: { type: 'select' },
    },
    isDisable: { control: 'boolean' },
    backgroundColor: { control: 'boolean' },
    border: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Default',
    iconName: 'update_icon',
    variant: 'default',
    backgroundColor: false,
    border: false,
  },
};
export default meta;

type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    variant: 'success',
    backgroundColor: true,
    label: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    border: true,
    label: 'Danger',
  },
};

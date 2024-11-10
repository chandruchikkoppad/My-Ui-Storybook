import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'men',
  },
};

export const Checked: Story = {
  args: {
    label: 'women',
    checked: true,
  },
};
export const UncheckedDisabled: Story = {
  args: {
    label: 'women',
    disabled: true,
  },
};
export const CheckedDisabled: Story = {
  args: {
    label: 'women',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';
import Recaptcha from './Recaptcha';

const meta: Meta<typeof Recaptcha> = {
  title: 'Components/Recaptcha',
  component: Recaptcha,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Recaptcha>;

const defaultArgs = {
  sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Test key
  onVerify: () => {},
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    error: 'Custom error message',
  },
};

export const WithCustomTheme: Story = {
  args: {
    ...defaultArgs,
    theme: 'dark',
  },
};

export default meta;

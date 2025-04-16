import type { Meta, StoryObj } from '@storybook/react';
import StatusButton from './StatusButton';

const meta: Meta<typeof StatusButton> = {
  title: 'Components/StatusButton',
  component: StatusButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StatusButton>;

const defaultArgs = {
  disabled: false,
};

export const Passed: Story = {
  args: {
    ...defaultArgs,
    label: 'Passed',
    status: 'passed',
  },
};

export const Failed: Story = {
  args: {
    ...defaultArgs,
    label: 'Failed',
    status: 'failed',
  },
};

export const Running: Story = {
  args: {
    ...defaultArgs,
    label: 'Running',
    status: 'running',
  },
};

export const Terminated: Story = {
  args: {
    ...defaultArgs,
    label: 'Terminated',
    status: 'terminated',
  },
};

export const Skipped: Story = {
  args: {
    ...defaultArgs,
    label: 'Skipped',
    status: 'skipped',
  },
};

export const Warning: Story = {
  args: {
    ...defaultArgs,
    label: 'Warning',
    status: 'warning',
  },
};

export const PartiallyExecuted: Story = {
  args: {
    ...defaultArgs,
    label: 'Partially Executed',
    status: 'partially-executed',
  },
};

export const Aborted: Story = {
  args: {
    ...defaultArgs,
    label: 'Aborted',
    status: 'aborted',
  },
};

export const NotExecuted: Story = {
  args: {
    ...defaultArgs,
    label: 'Not Executed',
    status: 'not-executed',
  },
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Any Status',
    status: 'default',
  },
};

export default meta;

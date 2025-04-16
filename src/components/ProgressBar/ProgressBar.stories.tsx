import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const DashBoardProgressBar: Story = {
  args: {
    color: 'var(--brand-color)',
    totalMemory: '1 GB',
    usedMemory:  '200 MB',
  },
};

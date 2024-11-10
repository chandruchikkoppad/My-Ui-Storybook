import { Meta, StoryObj } from '@storybook/react';
import RadialChart from './RadialChart';

const meta: Meta<typeof RadialChart> = {
  title: 'Components/RadialChart',
  component: RadialChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: { control: 'number' },
    lineWidth: { control: 'number' },
    statusValues: { control: 'object' },
    onClick: { action: 'clicked' },
    fontSize: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof RadialChart>;

export const ChartWithStatus: Story = {
  args: {
    radius: 15,
    lineWidth: 5,
    statusValues: [
      { status: 'Passed', value: 40 },
      { status: 'Failed', value: 20 },
      { status: 'Warning', value: 20 },
      { status: 'Skipped', value: 20 },
    ],
    onClick: () => {},
    fontSize: 8,
  },
};

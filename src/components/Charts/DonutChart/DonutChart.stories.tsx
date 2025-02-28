import { Meta, StoryObj } from '@storybook/react';
import DonutChart from './DonutChart';

const meta: Meta<typeof DonutChart> = {
  title: 'Components/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
  args: {
    radius: 70,
    lineWidth: 15,
    legendDetailsType: 'Scripts',
    isLegendDetails: true,
    totalCount: 500,
    resultStats: [
      { status: 'passed', percentage: 50, count: 250 },
      { status: 'failed', percentage: 20, count: 100 },
      { status: 'warning', percentage: 20, count: 100 },
      { status: 'skipped', percentage: 10, count: 50 },
    ],
    gapAngle: 0.06,
  },
};

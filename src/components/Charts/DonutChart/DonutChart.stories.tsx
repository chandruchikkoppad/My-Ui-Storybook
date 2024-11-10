import { Meta, StoryObj } from '@storybook/react/*';
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
    statusValues: [
      { status: 'Passed', value: 60 },
      { status: 'failed', value: 20 },
      { status: 'Warning', value: 10 },
      { status: 'skipped', value: 10 },
    ],
    gapAngle: 0.06,
  },
};

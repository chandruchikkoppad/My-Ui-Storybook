import { Meta, StoryObj } from '@storybook/react/*';
import DashboardDonutChart from './DashboardDonutChart';

const meta: Meta<typeof DashboardDonutChart> = {
  title: 'Components/DashboardDonutChart',
  component: DashboardDonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DashboardDonutChart>;

export const Default: Story = {
  args: {
    radius: 70,
    lineWidth: 15,
    legendDetailsType: 'Scripts',
    isLegendDetails: true,
    statusValues: [
      { key: 'Passed', value: 60, color: 'var(--status-success-text-color)' },
      { key: 'failed', value: 20, color: 'var(--status-rejected-text-color)' },
      { key: 'Warning', value: 10, color: 'var(--status-warning-text-color)' },
      { key: 'skipped', value: 10, color: 'var(--status-skipped-text-color)' },
    ],
    gapAngle: 0,
    legendType: 'numberLegend',
    showOnlyLabel: false,
  },
};

export const MemoryLegend: Story = {
  args: {
    radius: 65,
    lineWidth: 15,
    legendDetailsType: 'Memory',
    isLegendDetails: true,
    statusValues: [
      {
        key: 'Available Memory',
        value: 37.5,
        color: 'var(--status-warning-text-color)',
      },
      { key: 'Used Memory', value: 72.5, color: 'var(--brand-color)' },
    ],
    gapAngle: 0,
    legendType: 'memoryLegend',
    showOnlyLabel: true,
  },
};

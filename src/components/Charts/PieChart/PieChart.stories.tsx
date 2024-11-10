import { Meta, StoryObj } from '@storybook/react';
import PieChart from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Components/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: { control: 'number' },
    colors: { control: 'object' },
    data: { control: 'object' },
    chartBorder: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const PieChartDashBoard: Story = {
  args: {
    radius: 55,
    colors: ['#71347B', '#4C90FF', '#F8A509'],
    data: [
      { label: 'SuperAdmin', value: 2 },
      { label: 'Admin', value: 6 },
      { label: 'Users', value: 2 },
    ],
    chartBorder: false,
  },
};

export const PieChartDashBoardWithBorder: Story = {
  args: {
    radius: 55,
    colors: ['#b6b6b6', '#08CB84', '#BE3131'],
    data: [
      { label: 'All User', value: 0 },
      { label: 'Active', value: 8 },
      { label: 'Pending', value: 2 },
    ],
    chartBorder: true,
  },
};

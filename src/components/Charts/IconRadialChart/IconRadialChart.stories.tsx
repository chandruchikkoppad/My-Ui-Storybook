import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconRadialChart from './IconRadialChart';

const meta: Meta<typeof IconRadialChart> = {
  title: 'Components/IconRadialChart',
  component: IconRadialChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: { control: 'number' },
    lineWidth: { control: 'number' },
    percentageValue: { control: 'number' },
    icon: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof IconRadialChart>;

export const Default: Story = {
  args: {
    radius: 20,
    lineWidth: 7,
    percentageValue: 9,
    icon: 'dashboard_web_icon',
    label: 'Memory',
  },
};

export const Mobile: Story = {
  args: {
    radius: 20,
    lineWidth: 7,
    percentageValue: 18,
    icon: 'dashboard_mobile_icon',
    label: 'Memory',
    arcColor: 'var(--brand-color)',
  },
};

export const WithoutIcon: Story = {
  args: {
    radius: 25,
    lineWidth: 10,
    percentageValue: 100,
    label: 'Step',
    fontSize: 12,
    labelColor: 'black',
  },
};

export const ArchClickable: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const charts = [
      { id: 'chart1', percentage: 75 },
      { id: 'chart2', percentage: 45 },
      { id: 'chart3', percentage: 45 },
      { id: 'chart4', percentage: 45 },
      { id: 'chart5', percentage: 45 },
    ];
    return (
      <div>
        {charts.map((chart) => (
          <IconRadialChart
            key={chart.id}
            radius={25}
            fontSize={12}
            lineWidth={10}
            label="Step"
            labelColor="black"
            percentageValue={chart.percentage}
            isSelectedArch={selectedId === chart.id}
            onSelect={() => setSelectedId(chart.id)}
          />
        ))}
      </div>
    );
  },
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MultiRadialChart from './MultiRadialChart';

const meta: Meta<typeof MultiRadialChart> = {
  title: 'Components/MultiRadialChart',
  component: MultiRadialChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MultiRadialChart>;

export const Default: Story = {
  args: {
    radius: 50,
    lineWidth: 4,
    labelHeading: '    Memory',
    fontSize: 16,
    barValues: [
      {
        value: 10,
        arcColor: '#A83FC4',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Available',
      },
      {
        value: 20,
        arcColor: '#10B981',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Assigned',
      },
      {
        value: 30,
        arcColor: '#F59E0B',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Used',
      },
    ],
    lineCap: 'round',
    legendType: 'numberLegend',
    isLegendDetails: true,
    chartToLegendGap: '16px',
    legendGap: '15px',
  },
};

export const numberLegend: Story = {
  args: {
    radius: 50,
    lineWidth: 4,
    labelHeading: '10 Memory Usage',
    fontSize: 16,
    barValues: [
      {
        value: 10,
        arcColor: '#A83FC4',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Available',
      },
      {
        value: 20,
        arcColor: '#E2750F',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Assigned',
      },
      {
        value: 30,
        arcColor: '#9C1732',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Used',
      },
    ],
    lineCap: 'square',
    legendType: 'numberLegend',
    isLegendDetails: true,
    chartToLegendGap: '16px',
    legendGap: '15px',
  },
};

export const PillLegend: Story = {
  args: {
    radius: 50,
    lineWidth: 4,
    labelHeading: '00 module',
    barValues: [
      {
        value: 10,
        arcColor: '#A83FC4',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Available',
      },
      {
        value: 20,
        arcColor: '#E2750F',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Warning',
      },
      {
        value: 30,
        arcColor: '#9C1732',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Failed',
      },
      {
        value: 5,
        arcColor: ' #179C5F',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Passed',
      },
    ],
    lineCap: 'round',
    legendType: 'pillLegend',
    isLegendDetails: true,
    isPillValueVisible: false,
    labelFontSize: 12,
    subLabelFontSize: 8,
    chartToLegendGap: '16px',
    legendGap: '15px',
  },
};

export const ExecutionCompare: Story = {
  render: () => {
    return (
      <MultiRadialChart
        barValues={[
          {
            arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
            arcColor: 'var(--ff-card-skipped-status-bg-color)',
            barLabel: 'Skipped',
            value: '0%',
          },
          {
            arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
            arcColor: 'var(--ff-card-warning-status-bg-color)',
            barLabel: 'Warning',
            value: '0%',
          },
          {
            arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
            arcColor: 'var(--ff-card-failed-status-bg-color)',
            barLabel: 'Failed',
            value: '33.33%',
          },
          {
            arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
            arcColor: 'var(--ff-card-passed-status-bg-color)',
            barLabel: 'Passed',
            value: '66.66%',
          },
        ]}
        fontSize={12}
        isLegendDetails
        labelHeading="00 Module"
        legendType="pillLegend"
        lineCap="round"
        subLabelFontSize={12}
        lineWidth={3}
        radius={35}
        chartToLegendGap="16px"
        legendGap="8px"
        gapBetweenArch={6}
        capsuleStyle={{ padding: '10px' }}
      />
    );
  },
};

export const Memory: Story = {
  args: {
    radius: 50,
    lineWidth: 4,
    labelHeading: 'Memory',
    fontSize: 16,
    barValues: [
      {
        value: "1TB",
        arcColor: '#A83FC4',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Available',
      },
      {
        value: "20mb",
        arcColor: '#10B981',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Assigned',
      },
      {
        value: "30GB",
        arcColor: '#F59E0B',
        arcBackgroundColor: '#F0F0F0',
        barLabel: 'Used',
      },
    ],
    lineCap: 'round',
    legendType: 'numberLegend',
    isLegendDetails: true,
    chartToLegendGap: '16px',
    legendGap: '15px',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import LineChart from './LineChart';
import { LineChartProps } from './types';
import React from 'react';

const meta: Meta<typeof LineChart> = {
  title: 'Components/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const DefaultLineChart: StoryObj<LineChartProps> = {
  args: {
    data: [
      {
        color: '#4C90FF',
        name: 'default',
        data: [
          {
            date: '25 Oct',
            totalMemory: '1 GB',
          },

          {
            date: '29 Oct',
            totalMemory: '200 KB',
          },
          {
            date: '30 Oct',
            totalMemory: '40 MB',
          },
          {
            date: '3 Nov',
            totalMemory: '20 MB',
          },
          {
            date: '23 Nov',
            totalMemory: '90 MB',
          },
        ],
      },
    ],
    width: 1010,
    height: 232,
    axisColor: '#000000',
    lineChartWidth: 3,
    yAxisLabel: 'Total Memory (GB)',
    yAxisValueColor: '#252C37',
    xAxisColor: '#D9D9D9',
    yAxisColor: '#252C37',
    numberSize: '10px',
    proportionalSpacing: false,
    chartName: 'memory',
    shouldCenterSinglePoint: false,
  },
  render: (args) => (
    <div className="linechart-container">
      <LineChart {...args} />
    </div>
  ),
};

export const multiLineScriptsChart: StoryObj<LineChartProps> = {
  args: {
    data: [
      {
        color: '#3F5AC4',
        name: 'Flaky',
        show: true,
        data: [
          { date: '1 oct', value: 10 },
          { date: '2 oct', value: 0 },
          { date: '3 oct', value: 0 },
          { date: '4 oct', value: 0 },
          { date: '5 oct', value: 0 },
          { date: '6 oct', value: 0 },
          { date: '7 oct', value: 0 },
        ],
      },
    ],
    width: 700,
    height: 232,
    axisColor: '#000000',
    lineChartWidth: 2,
    yAxisLabel: 'Number Of Scripts',
    xAxisLabel: 'Number Of Days',
    yAxisValueColor: '#252C37',
    xAxisColor: '#D9D9D9',
    yAxisColor: '#252C37',
    yAxisLabelColor: '#252C37',
    textSize: '12px',
    proportionalSpacing: false,
    chartName: 'scripts',
  },
  render: (args) => (
    <div className="linechart-container">
      <LineChart {...args} />
    </div>
  ),
};
export const multiLineDefectsChart: StoryObj<LineChartProps> = {
  args: {
    data: [
      {
        color: '#179C5F',
        name: 'Success',
        show: true,
        data: [
          { date: '1 oct', value: 20 },
          { date: '2 oct', value: 10 },
          { date: '3 oct', value: 30 },
          { date: '4 oct', value: 60 },
          { date: '5 oct', value: 90 },
          { date: '6 oct', value: 10 },
          { date: '7 oct', value: 12 },
        ],
      },
      {
        color: '#9C1732',
        name: 'Failed',
        show: true,
        data: [
          { date: '1 oct', value: 50 },
          { date: '2 oct', value: 0 },
          { date: '3 oct', value: 40 },
          { date: '4 oct', value: 20 },
          { date: '5 oct', value: 90 },
          { date: '6 oct', value: 70 },
          { date: '7 oct', value: 0 },
        ],
      },
      {
        color: '#E2750F',
        name: 'Warning',
        show: true,
        data: [
          { date: '1 oct', value: 10 },
          { date: '2 oct', value: 20 },
          { date: '3 oct', value: 0 },
          { date: '4 oct', value: 20 },
          { date: '5 oct', value: 10 },
          { date: '6 oct', value: 10 },
          { date: '7 oct', value: 10 },
        ],
      },
      {
        color: '#A83FC4',
        name: 'Skipped',
        show: true,
        data: [
          { date: '1 oct', value: 0 },
          { date: '2 oct', value: 20 },
          { date: '3 oct', value: 10 },
          { date: '4 oct', value: 20 },
          { date: '5 oct', value: 10 },
          { date: '6 oct', value: 30 },
          { date: '7 oct', value: 0 },
        ],
      },
      {
        color: '#3F5AC4',
        name: 'Flaky',
        show: true,
        data: [
          { date: '1 oct', value: 50 },
          { date: '2 oct', value: 40 },
          { date: '3 oct', value: 30 },
          { date: '4 oct', value: 20 },
          { date: '5 oct', value: 0 },
          { date: '6 oct', value: 40 },
          { date: '7 oct', value: 20 },
        ],
      },
    ],
    width: 700,
    height: 232,
    axisColor: '#000000',
    lineChartWidth: 2,
    yAxisLabel: 'Number Of Defects',
    xAxisLabel: 'Number Of Days',
    yAxisValueColor: '#252C37',
    xAxisColor: '#D9D9D9',
    yAxisColor: '#252C37',
    yAxisLabelColor: '#252C37',
    textSize: '12px',
    fontWeight: 'semi-bold',
    proportionalSpacing: false,
    chartName: 'defects',
    xAxisLabelGap: 20,
  },
  render: (args) => (
    <div className="linechart-container">
      <LineChart {...args} />
    </div>
  ),
};

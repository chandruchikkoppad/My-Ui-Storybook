import { Meta, StoryObj } from '@storybook/react';
import BarChart from './BarChart';
import React, { useState } from 'react';

const meta: Meta<typeof BarChart> = {
  title: 'Components/BarChart',
  component: BarChart,
  parameters: {
    layout: 'bottom',
  },
  argTypes: {
    barWidth: { control: 'number' },
    height: { control: 'number' },
    data: { control: 'object' },
    colors: { control: 'object' },
    xAxisLabel: { control: 'text' },
    yAxisLabel: { control: 'text' },
    barGap: { control: 'number' },
    barBorderRadius: { control: 'number' },
    legend: { control: 'boolean' },
    showXAxisLabels: { control: 'boolean' },
    iconSize: { control: 'number' },
    isTruncateText: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const BarChartDashboard: Story = {
  args: {
    data: [
      { label: 'FireFox', value: 0, percent: 50 },
      { label: 'Edge', value: 20, id: 'divya@gmail.com', percent: 50 },
      { label: 'Chrome', value: 25, id: 'divya@gmail.com', percent: 50 },
      { label: 'Safari', value: 10, id: '', percent: 50 },
      { label: 'IE', value: 1, id: 'divya@gmail.com', percent: 50 },
      { label: 'Opera', value: 15, id: 'divya@gmail.com', percent: 50 },
    ],

    barWidth: 20,
    height: 250,
    colors: [
      ['#FFC300', '#FF5733'],
      ['#01D34F', '#013E7C'],
      ['#FFC107', '#E4AD09'],
      ['#5FC2F5', '#3061C5'],
      ['#00BBEF', '#0FA2CB'],
      ['#9C0000', '#9C0000'],
    ],
    isTruncateText: true,
    xAxisLabel: 'Status',
    yAxisLabel: 'Count',
    padding: 30,
    barGap: 40,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    legendPosition: 'top',
    icons: [
      'fire_fox',
      'edge',
      'chrome_icon',
      'safari_icon',
      'internet_explorer',
      'opera',
    ],
    iconSize: 20,
    onSelectedBar: (label) => {
      console.log(label);
    },
    totalLabel: 'Total count',
    customToolTip: true,
    isOnclick: true,
  },
};

export const BarChartIsStickyYAxis: Story = {
  args: {
    isYaxisSticky : true,
    data: [
      { label: 'FireFox', value: 0, percent: 50 },
      { label: 'Edge', value: 20, id: 'divya@gmail.com', percent: 50 },
      { label: 'Chrome', value: 25, id: 'divya@gmail.com', percent: 50 },
      { label: 'Safari', value: 10, id: '', percent: 50 },
      { label: 'IE', value: 1, id: 'divya@gmail.com', percent: 50 },
      { label: 'Opera', value: 15, id: 'divya@gmail.com', percent: 50 },
      { label: 'FireFox', value: 0, percent: 50 },
      { label: 'Edge', value: 20, id: 'divya@gmail.com', percent: 50 },
      { label: 'Chrome', value: 25, id: 'divya@gmail.com', percent: 50 },
      { label: 'Safari', value: 10, id: '', percent: 50 },
      { label: 'IE', value: 1, id: 'divya@gmail.com', percent: 50 },
      { label: 'Opera', value: 15, id: 'divya@gmail.com', percent: 50 },
      { label: 'FireFox', value: 0, percent: 50 },
      { label: 'Edge', value: 20, id: 'divya@gmail.com', percent: 50 },
      { label: 'Chrome', value: 25, id: 'divya@gmail.com', percent: 50 },
      { label: 'Safari', value: 10, id: '', percent: 50 },
      { label: 'IE', value: 1, id: 'divya@gmail.com', percent: 50 },
      { label: 'Opera', value: 15, id: 'divya@gmail.com', percent: 50 },
      { label: 'FireFox', value: 0, percent: 50 },
      { label: 'Edge', value: 20, id: 'divya@gmail.com', percent: 50 },
      { label: 'Chrome', value: 25, id: 'divya@gmail.com', percent: 50 },
      { label: 'Safari', value: 10, id: '', percent: 50 },
      { label: 'IE', value: 1, id: 'divya@gmail.com', percent: 50 },
      { label: 'Opera', value: 15, id: 'divya@gmail.com', percent: 50 },
    ],

    barWidth: 20,
    height: 250,
    colors: [
      ['#FFC300', '#FF5733'],
      ['#01D34F', '#013E7C'],
      ['#FFC107', '#E4AD09'],
      ['#5FC2F5', '#3061C5'],
      ['#00BBEF', '#0FA2CB'],
      ['#9C0000', '#9C0000'],
    ],
    isTruncateText: true,
    xAxisLabel: 'Status',
    yAxisLabel: 'Count',
    padding: 30,
    barGap: 40,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    legendPosition: 'top',
    icons: [
      'fire_fox',
      'edge',
      'chrome_icon',
      'safari_icon',
      'internet_explorer',
      'opera',
    ],
    iconSize: 20,
    onSelectedBar: (label) => {
      console.log(label);
    },
    totalLabel: 'Total count',
    customToolTip: true,
    isOnclick: true,
  },
};

export const MemoryBarChartDashboard: Story = {
  args: {
    data: [
      {
        label: 'Web',
        value: '150mb',
        percent: 50,
      },
      {
        label: 'Mobile',
        value: '15gb',
        id: 'divya@gmail.com',
        percent: 50,
      },
      {
        label: 'Web & Mobile',
        value: '150 gb',
        id: 'divya@gmail.com',
        percent: 50,
      },
      {
        label: 'Web Service',
        value: '5 mb',
        id: '',
        percent: 50,
      },
      {
        label: 'IE',
        value: '0 Bytes',
        id: 'divya@gmail.com',
        percent: 50,
      },
      {
        label: 'Opera',
        value: '25mb',
        id: 'divya@gmail.com',
        percent: 50,
      },
    ],

    barWidth: 20,
    height: 250,
    colors: [
      ['#FFC300', '#FF5733'],
      ['#01D34F', '#013E7C'],
      ['#FFC107', '#E4AD09'],
      ['#5FC2F5', '#3061C5'],
      ['#00BBEF', '#0FA2CB'],
      ['#9C0000', '#9C0000'],
    ],
    isTruncateText: true,
    xAxisLabel: 'Status',
    yAxisLabel: 'Count',
    padding: 30,
    barGap: 40,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    legendPosition: 'top',
    icons: [],
    iconSize: 20,
    onSelectedBar: (label) => {
      console.log(label);
    },
    totalLabel: 'Total count',
    isOnclick: true,
    isMemory: true,
  },
};
export const FailureAnalysis: Story = {
  render: () => {
    return (
      <div style={{ width: '500px' }}>
        <BarChart
          data={[
            {
              label: 'Known Failures',
              value: 25,
            },
            {
              label: 'Unknown Failures',
              value: 45,
            },
            {
              label: 'Partially Analysed Failures',
              value: 20,
            },
          ]}
          height={137}
          barBorderRadius={4}
          barGap={156}
          colors={[
            ['#FFEB3B', '#FFEB3B'],
            ['#9C0000', '#9C0000'],
            ['#FFC107', '#FFC107'],
          ]}
          barWidth={18}
          padding={30}
          showXAxisLabels
          legend={false}
          xAxisLabel="Failure Type"
          yAxisLabel="Failure Rate"
          isTruncateText={false}
          yAxisDivisions={4}
          extendBarChartRightWidth={70}
          isYAxisValuePercentage={true}
          isOnclick
          type="failureAnalysis"
        />

        <BarChart
          data={[
            { label: '0%-25%', value: 1 },
            { label: '26%-50%', value: 0 },
            { label: '51%-75%', value: 1 },
            { label: '76%-100%', value: 2 },
          ]}
          height={137}
          barBorderRadius={4}
          barGap={113}
          colors={[
            ['#52A2F2', '#52A2F2'],
            ['#52A2F2', '#52A2F2'],
            ['#52A2F2', '#52A2F2'],
            ['#52A2F2', '#52A2F2'],
          ]}
          barWidth={18}
          padding={30}
          showXAxisLabels
          legend={false}
          xAxisLabel="Failure Rate"
          yAxisLabel="No. of Scripts"
          yAxisDivisions={4}
          isOnclick
          type="topFailure"
        />
      </div>
    );
  },
};

export const TopFailure: Story = {
  render: () => {
    const [selectedBar, setSelectedBar] = useState<string | null>('76% - 100%');
    return (
      <div style={{ height: '100vh', overflow: 'auto' }}>
        <div style={{ height: '60vh' }}></div>
        <BarChart
          data={[
            {
              label: '1% - 25%',
              value: 3,
            },
            {
              label: '26% - 50%',
              value: 10,
            },
            {
              label: '51% - 75%',
              value: 2,
            },
            {
              label: '76% - 100%',
              value: 7,
            },
          ]}
          height={137}
          barBorderRadius={4}
          barGap={113}
          colors={[
            ['#52A2F2', '#52A2F2'],
            ['#52A2F2', '#52A2F2'],
            ['#52A2F2', '#52A2F2'],
            ['#52A2F2', '#52A2F2'],
          ]}
          barWidth={18}
          padding={30}
          showXAxisLabels
          legend={false}
          xAxisLabel="Failure Rate"
          yAxisLabel="No. of Scripts"
          yAxisDivisions={4}
          isOnclick
          selectedBar={selectedBar}
          setSelectedBar={setSelectedBar}
        />
      </div>
    );
  },
};

export const BarChartDashboardVersions: Story = {
  args: {
    data: [
      {
        label: 'FireFox',
        value: 10,
        percent: 50,
        versions: ['111.0.1.8480', '104.0', '108.0', '119.0.1', '126.0.1.8912'],
      },
      {
        label: 'Edge',
        value: 20,
        id: 'divya@gmail.com',
        percent: 50,
        versions: ['111.0.1661.54', '126.0.2592.68', '125.0.2535.79'],
      },
      {
        label: 'Chrome',
        value: 25,
        id: 'divya@gmail.com',
        percent: 50,
        versions: [
          '111.0.5563.112',
          '110.0.5481.77',
          '108.0.5359.124',
          '119.0.6045.159',
          '126.0.6478.127',
          '125.0.6422.141',
        ],
      },
      {
        label: 'Safari',
        value: 10,
        id: '',
        percent: 50,
        versions: [
          '111.0.5563.112',
          '110.0.5481.77',
          '108.0.5359.124',
          '119.0.6045.159',
          '126.0.6478.127',
          '125.0.6422.141',
        ],
      },
      {
        label: 'IE',
        value: 1,
        id: 'divya@gmail.com',
        percent: 50,
        versions: [
          '11.1.22621.0',
          '111.0.5563.112',
          '110.0.5481.77',
          '108.0.5359.124',
          '119.0.6045.159',
          '126.0.6478.127',
          '125.0.6422.141',
        ],
      },
      {
        label: 'Opera',
        value: 15,
        id: 'divya@gmail.com',
        percent: 50,
        versions: [
          '111.0.5563.112',
          '110.0.5481.77',
          '108.0.5359.124',
          '119.0.6045.159',
          '126.0.6478.127',
          '125.0.6422.141',
        ],
      },
    ],
    barWidth: 20,
    height: 250,
    colors: [
      ['#FFC300', '#FF5733'],
      ['#01D34F', '#013E7C'],
      ['#FFC107', '#E4AD09'],
      ['#5FC2F5', '#3061C5'],
      ['#00BBEF', '#0FA2CB'],
      ['#9C0000', '#9C0000'],
    ],
    isTruncateText: true,
    xAxisLabel: 'Status',
    yAxisLabel: 'Count',
    padding: 30,
    barGap: 40,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    legendPosition: 'top',
    icons: [
      'fire_fox',
      'edge',
      'chrome_icon',
      'safari_icon',
      'internet_explorer',
      'opera',
    ],
    iconSize: 20,
    onSelectedBar: (label) => {
      console.log(label);
    },
    totalLabel: 'System',
    isOnclick: true,
    isDashboardVersions: true,
  },
};
export const BarChartWithMemoryData: Story = {
  args: {
    data: [
      { label: 'App A', value: '50 mb' },
      { label: 'App B', value: '300 mb' },
      { label: 'App C', value: '230mb' },
      { label: 'App D', value: '500mb' },
    ],
    barWidth: 20,
    height: 250,
    colors: [
      ['#4CAF50', '#66BB6A'],
      ['#2196F3', '#42A5F5'],
      ['#FFC107', '#FFCA28'],
      ['#F44336', '#EF5350'],
    ],
    xAxisLabel: 'Applications',
    yAxisLabel: 'Memory (GB)',
    padding: 30,
    barGap: 120,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    iconSize: 20,
    isTruncateText: true,
    type: 'memory',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import DashboardDonutChart from './DashboardDonutChart';
import React, { useState } from 'react';

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
    tableWidth: 500,
    tableHeight: 190,
    legendDetailsType: 'Scripts',
    isLegendDetails: true,
    statusValues: [
      {
        key: 'Passed',
        value: 0,
        color: 'var(--status-success-text-color)',
        percentage: '',
      },
      {
        key: 'failed',
        value: 20,
        color: 'var(--status-rejected-text-color)',
        percentage: '',
      },
      {
        key: 'Warning',
        value: 10,
        color: 'var(--status-warning-text-color)',
        percentage: '',
      },
      {
        key: 'skipped',
        value: 10,
        color: 'var(--status-button-text-skipped)',
        percentage: '',
      },
      {
        key: 'Warning',
        value: 10,
        color: 'var(--status-warning-text-color)',
        percentage: '',
      },
      {
        key: 'skipped',
        value: 7,
        color: 'var(--status-button-text-skipped)',
        percentage: '',
      },
    ],
    gapAngle: 0,
    legendType: 'numberLegend',
    showOnlyLabel: false,
    apiDataLabel: '',
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
        key: 'Total Available Memory',
        value: '37.5 KB',
        color: 'var(--status-warning-text-color)',
      },
      { key: 'Used Memory', value: '72.5 KB', color: 'var(--brand-color)' },
      { key: 'Screenshots', value: '30.5 KB', color: 'blue' },
      { key: 'Videos', value: '146.7 KB', color: 'yellow' },
      { key: 'Program element', value: '2.1 MB', color: 'green' },
    ],
    gapAngle: 0,
    legendType: 'memoryLegend',
    apiDataLabel: '',
  },
};

export const SpecificDefect: Story = {
  render: () => {
    const [selectedStatusKey, setSelectedStatusKey] = useState<string>('');
    return (
      <div style={{ width: 140, height: 200 }}>
        <DashboardDonutChart
          gapAngle={0}
          isLegendDetails
          legendDetailsType="Total Defects"
          legendType="pillLegend"
          lineWidth={25}
          radius={50}
          statusValues={[
            {
              key: 'Critical',
              value: 20,
              color: 'var(--status-warning-text-color)',
            },
            { key: 'Blocker', value: 30, color: 'var(--brand-color)' },
            { key: 'Minor', value: 45, color: 'blue' },
            { key: 'Critical', value: 17, color: 'yellow' },
            { key: 'Text', value: 22, color: 'green' },
            {
              key: 'Blockerhgkhhklhkhkhhklkjhkjhkhlhkhkhlhlkhjh',
              value: 30,
              color: 'var(--brand-color)',
            },
            { key: 'Minor', value: 45, color: 'blue' },
            { key: 'Critical', value: 17, color: 'yellow' },
            { key: 'Text', value: 22, color: 'green' },
          ]}
          legendValueFontSize={8}
          legendKeyFontSize={10}
          legendWithVersionFontSize={12}
          labelFontSize={20}
          subLabelYoffSet={10}
          subLabelFontSize={11}
          apiDataLabel={''}
          legendGap={4}
          chartGap={8}
          capsuleStyle={{ width: 18, height: 14 }}
          legendTruncate={5}
          isLegendToolTip={true}
          containerHeight={200}
          isOnClick
          selectedStatusKey={selectedStatusKey}
          setSelectedStatusKey={setSelectedStatusKey}
          onSelectedStatus={(status) => console.log(status)}
        />
        <button onClick={() => setSelectedStatusKey('')}>clear</button>
      </div>
    );
  },
};

export const WithVersion: Story = {
  args: {
    radius: 70,
    lineWidth: 15,
    tableWidth: 500,
    tableHeight: 190,
    legendDetailsType: 'Total Machines',
    isLegendDetails: true,
    versionErrorText: '',
    statusValues: [
      {
        key: 'linux',
        value: 60,
        color: 'var(--status-success-text-color)',
        version: [
          '182.0.6834.160',
          '132.0.6834.160',
          '122.0.6834.160',
          '172.0.6834.160',
          '152.0.6834.160',
          '145.0.6834.160',
          '192.0.6834.160',
          '112.0.6834.160',
        ],
        versionColor: [
          '#E18900',
          '#A9E100',
          '#00CAE1',
          '#0040E1',
          '#E100E1',
          '#E10065',
          '#7D0000',
          '#060401',
        ],
        osIcon: 'linux',
      },
    ],
    gapAngle: 0,
    legendType: 'numberLegend',
    showOnlyLabel: false,
    apiDataLabel: '',
  },
};

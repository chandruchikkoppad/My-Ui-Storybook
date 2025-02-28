import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from './StatusCard';
import { CardProps } from './types';
import StatusCard from './StatusCard';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CardProps>;

export const Passed: Story = {
  args: {
    icon: 'passed_status_icon',
    status: 'Passed',
    count: 66,
    text: 'Scripts were passed all the time.',
    style: { width: '200px' },
  },
};

export const Failed: Story = {
  args: {
    icon: 'failed_status_icon',
    status: 'Failed',
    count: 33,
    text: 'Scripts were failed all the time.',
  },
};

export const Warning: Story = {
  args: {
    icon: 'warning_status_icon',
    status: 'Warning',
    count: 22,
    text: 'Scripts were marked as warning.',
  },
};

export const Skipped: Story = {
  args: {
    icon: 'skipped_status_icon',
    status: 'Skipped',
    count: 11,
    text: 'Scripts were not part of any execution.',
  },
};

export const Flaky: Story = {
  args: {
    icon: 'flaky_status_icon',
    status: 'Flaky',
    count: 44,
    text: 'Scripts were flaky in their behavior.',
  },
};

export const TotalDefect: Story = {
  args: {
    icon: 'total_defects_status_icon',
    status: 'Total Defects',
    count: 66,
    text: 'Total Defects',
  },
};

export const DefectDensity: Story = {
  args: {
    icon: 'defect_density_icon',
    status: 'Defect Density',
    count: 33,
    text: 'Defect Density',
  },
};

export const OpenDefects: Story = {
  args: {
    icon: 'open_defects_icon',
    status: 'Open Defects',
    count: 22,
    text: 'Open Defects',
  },
};

export const ClosedDefects: Story = {
  args: {
    icon: 'close_defects_icon',
    status: 'Closed Defects',
    count: 11,
    text: 'Closed Defects',
  },
};

export const QualityScore: Story = {
  args: {
    icon: 'quality_score_icon',
    status: 'Quality Score',
    count: 44,
    text: 'Quality Score',
  },
};

export const AllCards: Story = {
  render: () => {
    const [toggledCard, setToggledCard] = useState<number | null>(0);//initially selected the card

    const data: { name: CardProps['status']; count: number; text: string }[] = [
      {
        name: 'Passed',
        count: 6,
        text: 'Scripts were Passed all the time',
      },
      {
        name: 'Failed',
        count: 6,
        text: 'Scripts were Failed all the time',
      },
      {
        name: 'Warning',
        count: 6,
        text: 'Scripts were Warning all the time',
      },
      {
        name: 'Skipped',
        count: 6,
        text: 'Scripts were Skip all the time',
      },
      {
        name: 'Flaky',
        count: 6,
        text: 'Scripts were Flaky all the time',
      },
      {
        name: 'Total Defects',
        count: 66,
        text: 'Total Defects',
      },
      {
        name: 'Defect Density',
        count: 33,
        text: 'Defect Density',
      },
      {
        name: 'Open Defects',
        count: 22,
        text: 'Open Defects',
      },
      {
        name: 'Closed Defects',
        count: 11,
        text: 'Close Defects',
      },
      {
        name: 'Quality Score',
        count: 4,
        text: 'Quality Score',
      },
    ];

    const onHandleStatus = (status: string, index: number) => {
      setToggledCard(index);
      console.log(`Selected status: ${status}`);
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {data.map((row, index) => (
          <div key={index}>
            <StatusCard
              count={row?.count}
              icon={`${row.name
                .toLowerCase()
                .split(' ')
                .join('_')}_status_icon`}
              status={row?.name}
              text={row.text}
              onSelectedStatus={(status) => onHandleStatus(status, index)}
              resetToggle={toggledCard !== index}
            />
          </div>
        ))}
      </div>
    );
  },
};

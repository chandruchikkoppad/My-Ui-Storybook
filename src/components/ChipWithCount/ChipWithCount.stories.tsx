import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChipWithCount from './ChipWithCount';
import './ChipWithCount.scss';

const meta: Meta<typeof ChipWithCount> = {
  title: 'Components/ChipWithCount',
  component: ChipWithCount,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ChipWithCount>;

export const Primary: Story = {
  render: () => {
    const labelsList = [
      'Automation Testing',
      'Functional Testing',
      'Smoke Testing',
      'Manual Testing',
    ];
    return <ChipWithCount labelsList={labelsList} />;
  },
};

export default meta;

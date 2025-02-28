import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HistoryCard from './HistoryCard';
import './HistoryCard.scss';
import Typography from '../Typography';

const meta: Meta<typeof HistoryCard> = {
  title: 'Components/HistoryCard',
  component: HistoryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HistoryCard>;

export const Sample: Story = {
  args: {
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque eaque dolorum nihil corrupti minus, illo, natus beatae, ex corporis nisi! Perspiciatis tempora nostrum numquam tenetur enim, beatae praesentium adipisci?',
    title: (
      <span>
        <Typography fontWeight="semi-bold">Prajwal</Typography> approved the
        Element on
        <Typography fontWeight="semi-bold"> 19 Dec 2023 </Typography>
        1.30 PM
      </span>
    ),
    tabTitle: `approved 1.0`,
    variant: 'success',
    profileShortName: 'PB',
  },
};

export default meta;

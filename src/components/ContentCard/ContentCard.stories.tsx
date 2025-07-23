import type { Meta, StoryObj } from '@storybook/react';
import ContentCard from './ContentCard';
import './ContentCard.scss';

const meta: Meta<typeof ContentCard> = {
  title: 'Components/ContentCard',
  component: ContentCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ContentCard>;

export const Sample: Story = {
  args: {
    contentHeader: 'Params',
    data: {
      Value: '#Small\\-Searchterms',
      Using: 'Css Selector',
    },
    maxHeight: '100px',
  },
};

export default meta;

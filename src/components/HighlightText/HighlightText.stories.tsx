import type { Meta, StoryObj } from '@storybook/react';
import HighlightText from './HighlightText';

const meta: Meta<typeof HighlightText> = {
  title: 'Components/HighlightText',
  component: HighlightText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HighlightText>;

export const Primary: Story = {
  args: {
    text: 'Hello team do use Highlight component in Name column to highlight searched text',
    highlight: 'hello',
  },
};

export default meta;

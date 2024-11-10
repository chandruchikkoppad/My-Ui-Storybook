import type { Meta, StoryObj } from '@storybook/react';
import StyleGuide from './ColorPalette';

const meta: Meta<typeof StyleGuide> = {
  title: 'StyleGuide/Colors',
  component: StyleGuide,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StyleGuide>;

export const ColorList: Story = {
  args: {},
};

export default meta;

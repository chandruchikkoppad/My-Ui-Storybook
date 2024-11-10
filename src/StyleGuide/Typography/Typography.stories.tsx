import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'StyleGuide/Typography',
  component: Typography,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Typography>;

export const AllFonts: Story = {
  args: {},
};

export default meta;

import { Meta, StoryObj } from '@storybook/react';
import ScriptGenerationLoader from './ScriptGenerationLoader';

const meta: Meta<typeof ScriptGenerationLoader> = {
  title: 'Components/ScriptGenerationLoader',
  component: ScriptGenerationLoader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScriptGenerationLoader>;

export const Default: Story = {
  args: {
    actions: ['Analyzing', 'Gathering', 'Generating'],
  },
};

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
    actions: [
      {
        text: 'Analyzing your application flow...',
        color: 'var(--brand-color)',
      },
      {
        text: 'AI agents are on action...',
        color: 'var(--ff-electric-indigo)',
      },
      {
        text: 'Thinking like a QA expert… just a few more seconds...',
        color: 'var(--ff-vivid-orange)',
      },
      {
        text: 'Hold on, test cases are on the way!',
        color: 'var(--ff-dodger-blue)',
      },
    ],
    path: 'https://testyantrademourl.s3.ap-south-1.amazonaws.com/fireflink-ai/ai_sparkle.gif',
  },
};

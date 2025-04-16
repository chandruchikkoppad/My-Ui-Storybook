import type { Meta, StoryObj } from '@storybook/react';
import Prompt from './Prompt';
import React, { ChangeEvent, useState } from 'react';

const meta: Meta<typeof Prompt> = {
  title: 'Components/Prompt',
  component: Prompt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Prompt>;

export const DefaultPrompt: Story = {
  render: () => {
    const [promptValue, setPromptValue] = useState('');

    const handlePromptChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPromptValue(value);
    };

    return (
      <div>
        <Prompt
          width={430}
          height={40}
          placeholder="Enter your question here"
          iconName="right_arrow_filled_icon"
          iconPosition="right"
          borderRadius={80}
          tooltipTitle="send"
          iconHeight={24}
          iconWidth={24}
          iconColor="var(--brand-color)"
          value={promptValue}
          onPromptChange={handlePromptChange}
          submitPrompt={() => alert('enter button clicked')}
        />
      </div>
    );
  },
};

export default meta;

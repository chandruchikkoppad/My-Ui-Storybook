import type { Meta, StoryObj } from '@storybook/react';
import ffid from './ffid'; // Adjust the import path if needed
import { useState } from 'react';

const meta: Meta<typeof ffid> = {
  title: 'Utils/ffid',
  component: ffid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj;

// Primary story to display a generated ID
export const Primary: Story = {
  render: () => {
    const [generatedId, setGeneratedId] = useState(ffid());

    const regenerateId = () => {
      setGeneratedId(ffid());
    };

    return (
      <div>
        <h3>Generated Unique ID</h3>
        <p>{generatedId}</p>
        <button onClick={regenerateId}>Generate New ID</button>
      </div>
    );
  },
};

export default meta;

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useKeyboardActions } from './UseKeyboardActions';

// A demonstration component to showcase the `useKeyboardAction` utility
const UseKeyboardActionComponent: React.FC = () => {
  const [message, setMessage] = useState<string>(
    'Press Escape or Enter to see actions.'
  );

  // Registering keyboard actions using the `useKeyboardAction` utility
  useKeyboardActions([
    {
      key: 'Escape',
      action: () => setMessage('Escape key was pressed.'),
    },
    {
      key: 'Enter',
      action: () => setMessage('Enter key was pressed.'),
    },
    {
      key: 'ArrowUp',
      action: () => setMessage('ArrowUp key was pressed.'),
    },
  ]);

  return (
    <div
      style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd' }}
    >
      <h3>Keyboard Action Utility</h3>
      <p>{message}</p>
      <p>Try pressing Escape, Enter, or ArrowUp keys.</p>
    </div>
  );
};

// Meta configuration for the story
const meta: Meta<typeof UseKeyboardActionComponent> = {
  title: 'Utils/UseKeyboardAction',
  component: UseKeyboardActionComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UseKeyboardActionComponent>;

// Default story for the component
export const Primary: Story = {};

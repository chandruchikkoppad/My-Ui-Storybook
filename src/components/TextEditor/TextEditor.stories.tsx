import React, { Dispatch, SetStateAction, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextEditor from './TextEditor';

const meta: Meta<typeof TextEditor> = {
  title: 'Components/TextEditor',
  component: TextEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextEditor>;

// Primary Story: Default editor state with controlled input
export const Primary: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

    const handleChange: Dispatch<SetStateAction<string>> = (newValue) => {
      setValue(newValue); // Correctly handles the change and updates the editor state
    };

    return (
      <TextEditor convertedContent={value} setConvertedContent={handleChange} />
    );
  },
  parameters: {
    docs: {
      storyDescription:
        'This story demonstrates the default TextEditor component with controlled input and default toolbar options.',
    },
  },
};

// Custom Initial Content Story: Using predefined custom content
export const CustomInitialContent: Story = {
  render: () => {
    const customContent = {
      blocks: [
        {
          key: 'initialContent',
          text: 'this editor starts with custom initial content.',
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
        },
      ],
      entityMap: {},
    };

    const [value, setValue] = useState<string>(JSON.stringify(customContent));

    const handleChange: Dispatch<SetStateAction<string>> = (newValue) => {
      setValue(newValue);
    };

    return (
      <TextEditor helperText='Text Editor is required.' required label='Text Editor Label' convertedContent={value} setConvertedContent={handleChange} />
    );
  },
  parameters: {
    docs: {
      storyDescription:
        'This story demonstrates the TextEditor component with a custom initial content value.',
    },
  },
};

// ReadOnly Mode Story: The editor is in read-only mode, so no content changes can happen
export const ReadOnly: Story = {
  render: () => {
    const value = '';
    const handleChange: Dispatch<SetStateAction<string>> = (newValue) => {
      // In read-only mode, we do not handle changes
    };

    return (
      <TextEditor
        convertedContent={value}
        setConvertedContent={handleChange}
        readOnly={true}
      />
    );
  },
  parameters: {
    docs: {
      storyDescription:
        'This story demonstrates the TextEditor component in read-only mode, where the user cannot make changes to the content.',
    },
  },
};

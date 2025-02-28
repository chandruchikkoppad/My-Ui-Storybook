// EditorComponent.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Editor from './Editor';
import { EditorProps } from './types';
import { variableList } from './constants';
import React,{ useState } from 'react';

const meta: Meta<EditorProps> = {
  title: 'Components/Editor',
  component: Editor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: {
        type: 'select',
        options: ['javascript', 'html', 'json', 'plaintext', 'xml'],
      },
      description: 'Select the content type for the editor',
    },
    isRequisiteType: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<EditorProps>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('// Start typing your code here');

    const handleChange = (newValue: string | undefined): void => {
      setValue(newValue || '');
    };
    const handlePaste = (value: string) => {
      console.log('User Pasted some content :', value);
    };

    return (
      <Editor
        {...args}
        value={value}
        setValue={setValue}
        handleChange={handleChange}
        onPaste={(pastedText) => handlePaste(pastedText)}
      />
    );
  },
  args: {
    language: 'javascript',
    width: '100%',
    height: '90vh',
    readOnly: false,
    variableOptionsList: variableList,
  },
};

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

    const handleSubmit = (newContent: string) => {
      setValue(newContent);
    };

    return (
      <TextEditor
        helperText="Text Editor is required."
        required
        label="Text Editor Label"
        convertedContent={value}
        setConvertedContent={handleChange}
        editableTextEditor={true}
        onSubmit={handleSubmit}
      />
    );
  },
  parameters: {
    docs: {
      storyDescription:
        'This story demonstrates the EditableTextEditor component with a custom initial content value.',
    },
  },
};

// ReadOnly Mode Story: The editor is in read-only mode, so no content changes can happen
export const ReadOnly: Story = {
  render: () => {
    const value =
      '{"blocks":[{"key":"d70a6142-e828-4d8b-ac00-37d2e19750c8","text":"Steps to reproduce :","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":20,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"b5f9df7b-8b89-44d5-8ce7-6511b5a228e9","text":"OpenBrowser","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"db030db2-a6a2-4e46-95be-89d3226c9a74","text":"Maximize browser window","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e3c1043e-0b7d-4c0d-95f7-0ff32b40b58e","text":"Navigate to URL https://demowebshop.tricentis.com/","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"02e182d2-2cf7-4964-9b39-b1164aa59fdb","text":"Click on Wrong element textfield","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2c44ed67-0bf0-4d09-ba26-b28a475d0526","text":"CloseBrowser","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"442554bd-9562-4501-a163-5685e8375492","text":"Environment Details","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":19,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"8c67ba2b-9b67-445a-a4b2-31295825736e","text":"Browser: Google Chrome 135.0.7049.85","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d41e6640-5f7f-4863-90d0-7ca57a4f3c28","text":"Operating System: Windows 11 Enterprise 10.0.26100","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1d949858-7a3e-4382-9e24-3d7a9c5dc1c4","text":"Execution environment: Local","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"69418e3e-9080-4e84-9e01-e0dc1deedc18","text":"Machine: TYSS-Rakesh","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}';
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

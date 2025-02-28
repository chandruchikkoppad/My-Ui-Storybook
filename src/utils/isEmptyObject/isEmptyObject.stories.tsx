import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useState } from 'react';

// Utility function to check if an object is empty
const isEmptyObject = (obj: any): boolean =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

const meta: Meta<typeof isEmptyObject> = {
  title: 'Utils/isEmptyObject',
  component: isEmptyObject,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj;

// Primary story to test the isEmptyObject function
export const Primary: Story = {
  render: () => {
    const [testObject, setTestObject] = useState<Record<string, any>>({});
    const [isEmpty, setIsEmpty] = useState(isEmptyObject(testObject));

    const toggleObject = () => {
      const newObject = isEmpty ? { key: 'value' } : {};
      setTestObject(newObject);
      setIsEmpty(isEmptyObject(newObject));
    };

    return (
      <div>
        <h3>isEmptyObject Utility</h3>
        <p>Current Object: {JSON.stringify(testObject)}</p>
        <p>Is Empty: {isEmpty ? 'Yes' : 'No'}</p>
        <button onClick={toggleObject}>Toggle Object</button>
      </div>
    );
  },
};

export default meta;

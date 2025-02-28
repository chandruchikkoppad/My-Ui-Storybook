import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { hasDuplicateFile } from './checkDuplicates';

export default {
  title: 'Utils/HasDuplicateFile',
  argTypes: {
    array: {
      control: 'object',
      description: 'Array of objects to check for duplicates.',
    },
    property: {
      control: 'text',
      description: 'Optional property to check for duplicates.',
    },
  },
} satisfies Meta;

export const Default: StoryObj = {
  args: {
    array: [
      { id: 1, name: 'file1' },
      { id: 2, name: 'file2' },
      { id: 1, name: 'file1' },
    ],
    property: 'id',
  },
  render: (args) => {
    const result = hasDuplicateFile(args.array, args.property);
    return (
      <div>
        <h3>
          Duplicate Check Result:{' '}
          {result ? 'Duplicates Found' : 'No Duplicates'}
        </h3>
        <pre>{JSON.stringify(args.array, null, 2)}</pre>
      </div>
    );
  },
};

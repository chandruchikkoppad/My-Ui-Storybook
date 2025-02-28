import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FieldSet from './FieldSet';
import Typography from '../Typography';

const meta: Meta<typeof FieldSet> = {
  title: 'Components/FieldSet',
  component: FieldSet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FieldSet>;

const defaultArgs = {
  legendName: 'Default Legend',
  height: '200px',
  width: '300px',
  children: <Typography>'Default content inside the FieldSet.'</Typography>,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const CustomDimensions: Story = {
  args: {
    ...defaultArgs,
    height: '300px',
    width: '400px',
    legendName: 'Custom Dimensions',
  },
};

export const WithNestedChildren: Story = {
  args: {
    ...defaultArgs,
    legendName: 'Nested Content',
    children: (
      <div>
        <p>This is some nested content inside the FieldSet.</p>
        <button>Click Me</button>
      </div>
    ),
  },
};

export const Controlled: Story = {
  render: () => {
    const [legend, setLegend] = useState('Controlled FieldSet');
    const [content, setContent] = useState('Initial Content');

    const handleLegendChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setLegend(event.target.value);

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setContent(event.target.value);

    return (
      <>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Legend:
            <input
              type="text"
              value={legend}
              onChange={handleLegendChange}
              style={{ marginLeft: '0.5rem' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Content:
            <input
              type="text"
              value={content}
              onChange={handleContentChange}
              style={{ marginLeft: '0.5rem' }}
            />
          </label>
        </div>
        <FieldSet legendName={legend} height="250px" width="350px">
          {content}
        </FieldSet>
      </>
    );
  },
};

export const EmptyFieldSet: Story = {
  args: {
    legendName: 'Empty FieldSet',
    height: '32px',
    width: '317px',
    children: null,
  },
};

export default meta;

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConnectingBranch from './ConnectingBranch';
import machineData from './data';
import Button from '../Button/Button';
import { ConnectingNodeConfig } from './types';

const meta: Meta<typeof ConnectingBranch> = {
  title: 'Components/ConnectingBranch',
  component: ConnectingBranch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ConnectingBranch>;

const getChildNodeComponent = ({ isButton }: ConnectingNodeConfig) => {
  if (isButton) {
    return (
      <div>
        {' '}
        <Button variant="primary" label="Add execution Env" />
      </div>
    );
  } else {
    return (
      <div className="ff-child-node-container"> Execution Env details</div>
    );
  }
};

const getParentNodeComponentActionItems = () => {
  return <div> Machine Action Items</div>;
};

const getParentNodeComponent = ({ isMultiSelect }: ConnectingNodeConfig) => (
  <div className="ff-parent-node-container">
    {' '}
    {isMultiSelect ? 'MultiSelect' : 'Select'} DropDown
  </div>
);

export const Default: Story = {
  args: {
    data: machineData,
    getParentNodeComponent,
    getParentNodeComponentActionItems,
    getChildNodeComponent,
  },
};

export const readOnly: Story = {
  args: {
    data: machineData,
    getParentNodeComponent,
    getParentNodeComponentActionItems,
    getChildNodeComponent,
    isReadOnlyMode: true,
  },
};

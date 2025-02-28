import type { Meta, StoryObj } from '@storybook/react';
import MachineInputField from './MachineInputField';
import { MachineType } from './types';

const meta: Meta<typeof MachineInputField> = {
  title: 'Components/MachineInputField',
  component: MachineInputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MachineInputField>;

// Sample data for the MachineInputField
const sampleOptions: MachineType[] = [
  { label: 'Local Environment', type: 'local' },
  { label: '10.100.233.23', type: 'windows' },
  { label: '121.25.333.344.2', type: 'Browserstack' },
  { label: 'iphone 17 pro max', type: 'mac' },
  { label: 'samsung galaxy s23', type: 'android' },
];

export const Primary: Story = {
  args: {
    width: '530px', // Example width
    options: sampleOptions,
    runCount: 1,
  },
};

export default meta;

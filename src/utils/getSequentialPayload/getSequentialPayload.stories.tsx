import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getSequentialPayload } from './getSequentialPayload';
import { MachineExecutionInstance, SequentialMachineInstance } from './types';
import { ffid } from '../ffID/ffid';

const SequentialPayloadComponent: React.FC<{
  machineInstances: MachineExecutionInstance[];
}> = ({ machineInstances }) => {
  const payload: SequentialMachineInstance[] =
    getSequentialPayload(machineInstances);

  return (
    <div>
      <h3>Converted Payload</h3>
      <pre>{JSON.stringify(payload, null, 2)}</pre>
    </div>
  );
};

const meta: Meta<typeof SequentialPayloadComponent> = {
  title: 'Utils/getSequentialPayload',
  component: SequentialPayloadComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof SequentialPayloadComponent>;

export const Primary: Story = {
  args: {
    machineInstances: [
      {
        id: ffid(),
        clientId: 'flinko-client-win-daa67320-d70c-438e-b417-62d76669e7a2',
        numberOfRuns: '3',
        executionEnv: 'Local',
        browserName: 'Google Chrome',
        browserVersion: '107.0.5304.88',
        systemUrl: '',
        machineInfo: {
          osName: 'Windows 11 Home Single Language',
          osVersion: '10.0.22000',
          hostName: 'LAPTOP-T793RVQN',
          iconName: 'chrome'
        },
        deviceInfo: [],
        headless: false,
        runLevelExecutionDataSets: [
          {
            peVariableSetId: 'UUID',
            globalVariableSetId: 'UUID',
            testDataSetId: 'UUID',
          },
          {
            peVariableSetId: 'UUID',
            globalVariableSetId: 'UUID',
            testDataSetId: 'UUID',
          },
          {
            peVariableSetId: 'UUID',
            globalVariableSetId: 'UUID',
            testDataSetId: 'UUID',
          },
        ],
      },
    ],
  },
};

export default meta;

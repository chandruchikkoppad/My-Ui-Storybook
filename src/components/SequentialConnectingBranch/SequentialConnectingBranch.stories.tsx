import type { Meta, StoryObj } from '@storybook/react';
import SequentialConnectingBranch from './SequentialConnectingBranch';
import { useState } from 'react';
import React from 'react';
import { Option } from '../Select/types';
import { ExecutionContext } from './types';

const meta: Meta<typeof SequentialConnectingBranch> = {
  title: 'Components/SequentialConnectingBranch',
  component: SequentialConnectingBranch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof SequentialConnectingBranch>;

export const Primary: Story = {
  render: () => {
    const [machineSelect, setMachineSelect] = useState<Option>({
      label: 'ffe-Mahesh',
      value: {
        status: 'running',
        clientId: 'test',
      },
      name: 'ffe-Mahesh',
    });
    const [machineInstance, setMachineInstance] = useState<
      {}[] | ExecutionContext[]
    >([
      {
        numberOfRuns: 2,
        clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
        executionEnv: 'Local',
        browserName: 'Google Chrome',
        browserVersion: '121.0.6167.185',
        systemUrl: '',
        runCount: 1,
        machineInfo: {
          osName: 'Windows 11 Pro',
          osVersion: '10.0.22631',
          hostName: 'FFE-Abhishek-G-FFE181',
        },
        deviceInfo: [],
        headless: false,
        runLevelExecutionDataSets: [
          {
            peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30',
          },
        ],
      },
      {
        numberOfRuns: 2,
        clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
        executionEnv: 'Local',
        browserName: 'Google Chrome',
        browserVersion: '121.0.6167.185',
        systemUrl: '',
        runCount: 1,
        machineInfo: {
          osName: 'Windows 11 Pro',
          osVersion: '10.0.22631',
          hostName: 'FFE-Abhishek-G-FFE181',
        },
        deviceInfo: [],
        headless: false,
        runLevelExecutionDataSets: [
          {
            peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30',
          },
        ],
      },
      {
        numberOfRuns: 2,
        clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
        executionEnv: 'Local',
        browserName: 'Google Chrome',
        browserVersion: '121.0.6167.185',
        systemUrl: '',
        runCount: 1,
        machineInfo: {
          osName: 'Windows 11 Pro',
          osVersion: '10.0.22631',
          hostName: 'FFE-Abhishek-G-FFE181',
        },
        deviceInfo: [],
        headless: false,
        runLevelExecutionDataSets: [
          {
            peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30',
          },
        ],
      },
      {
        numberOfRuns: 2,
        clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
        executionEnv: 'Local',
        browserName: 'Google Chrome',
        browserVersion: '121.0.6167.185',
        systemUrl: '',
        runCount: 1,
        machineInfo: {
          osName: 'Windows 11 Pro',
          osVersion: '10.0.22631',
          hostName: 'FFE-Abhishek-G-FFE181',
        },
        deviceInfo: [],
        headless: false,
        runLevelExecutionDataSets: [
          {
            peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
            testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30',
          },
        ],
      },
    ]);

    const machineOptionList = [
      {
        label: 'ffe-Ganesh',
        value: {
          status: 'running',
          clientId: 'test',
        },
        name: 'ffe-Ganesh',
        clientId: 'test',
      },
      {
        label: 'ffe-Mahesh',
        value: {
          status: 'running',
          clientId: 'test',
        },
        name: 'ffe-Mahesh',
        clientId: 'test',
      },
    ];

    const onMachineHandleSelect = (option: Option) => {
      setMachineSelect(option);
    };

    const addBrowser = () => {
      setMachineInstance([
        ...machineInstance,
        {
          numberOfRuns: 1,
          clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
          executionEnv: 'Local',
          browserName: 'Google Chrome',
          browserVersion: '121.0.6167.185',
          systemUrl: '',
          machineInfo: {
            osName: 'Windows 11 Pro',
            osVersion: '10.0.22631',
            hostName: 'FFE-Abhishek-G-FFE181',
          },
          runCount: 1,
          deviceInfo: [],
          headless: false,
          runLevelExecutionDataSets: [
            {
              peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
              globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
              testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30',
            },
          ],
        },
      ]);
    };
    return (
      <>
        <SequentialConnectingBranch
          dataSetValues={{
            globalVariableSetName: 'test dev',
            peVariableSetName: 'test dev',
            testDataSetName: 'test dev',
            peVariableSetId: 'Test dev',
            globalVariableSetId: 'Test dev',
            testDataSetId: 'Test dev',
          }}
          machineColumnWidth={340}
          machineColumnCount={2}
          machineOptionsList={machineOptionList}
          machineInstances={machineInstance}
          selectedMachine={machineSelect}
          onHandleSelect={onMachineHandleSelect}
          onAddBrowserInstance={addBrowser}
          readOnly
          scriptType='manual'
        />
      </>
    );
  },
};

export default meta;

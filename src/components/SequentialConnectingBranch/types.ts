import { Option } from '../Select/types';

export type EnvironmentVariableMaps = {
  testDataSetMap: Record<string, string>;
  globalVariableMap: Record<string, string>;
  projectVariableMap: Record<string, string>;
};
export interface SequentialConnectingBranchProps {
  machineInstances: ExecutionContext[] | {}[];
  machineColumnWidth?: number;
  machineColumnCount?: number;
  selectedMachine?: Option;
  machineOptionsList?: Option[];
  onHandleSelect?: (option: Option) => void;
  onAddBrowserInstance?: (modalId: string) => void;
  onUpdateAddBrowserInstance?: (
    modalId: string,
    machineInstance: ExecutionContext
  ) => void;
  onDeleteBrowserInstance?: (id: string, runCount: number) => void;
  onAddRunBrowserInstance?: (machineInstanceId: string) => void;
  onDeleteMachineInstance?: () => void;
  onUpdateDataSetList?: (
    id: string,
    dataSetObject?: dataSetValues,
    isInstance?: boolean,
    noOfRuns?: number,
    machineInstanceId?: string
  ) => void;
  dataSetValues?: dataSetValues;
  addInstanceLabel?: string;
  scriptType?: string;
  projectType?: string;
  readOnly?: boolean;
  integrationInstance?: IntegrationInstance;
  zIndex?: number;
  placeholder?: string;
  maxRunCount?: number;
  environmentVariableMaps?: EnvironmentVariableMaps;
}

export interface IntegrationInstance {
  usename: string;
  accessKey: string;
}

// Type for machine information
export interface MachineInfo {
  osName: string;
  osVersion: string;
  hostName: string;
  iconName: string;
}

// Type for device information
export interface DeviceInfo {
  name: string;
  platform: string;
}

export interface ExecutionContext {
  machineInstanceId: string;
  clientId: string;
  numberOfRuns: number;
  runCount: number;
  executionEnv?: 'Local' | string;
  browserName?: 'Local' | 'mac' | 'android' | 'Google Chrome';
  browserVersion: string;
  systemUrl: string;
  machineInfo: MachineInfo;
  deviceInfo: DeviceInfo[];
  headless: boolean;
  peVariableSetId: string;
  testDataSetName: string;
  globalVariableSetName: string;
  peVariableSetName: string;
  globalVariableSetId: string;
  testDataSetId: string;
  integrationInstance: IntegrationInstance;
}

export interface dataSetValues {
  peVariableSetId: string;
  globalVariableSetId: string;
  testDataSetId: string;
  testDataSetName: string;
  globalVariableSetName: string;
  peVariableSetName: string;
}

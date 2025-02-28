export interface OperatingSystemInfo {
  osName: string;
  osVersion: string;
  hostName: string;
  iconName: string;
}

export interface RunLevelExecutionDataSet {
  peVariableSetId: string;
  peVariableSetName: string;
  globalVariableSetId: string;
  globalVariableSetName: string;
  testDataSetId: string;
  testDataSetName: string;
}

export interface MachineExecutionInstance {
  id: string;
  clientId: string;
  numberOfRuns: string | number;
  executionEnv: string;
  browserName: string;
  browserVersion: string;
  systemUrl: string;
  machineInfo: OperatingSystemInfo;
  deviceInfo: any[];
  runLevelExecutionDataSets: RunLevelExecutionDataSet[];
  headless: boolean;
}

export interface SequentialMachineInstance
  extends Omit<MachineExecutionInstance, 'runLevelExecutionDataSets'> {
  peVariableSetId: string;
  globalVariableSetId: string;
  testDataSetId: string;
  peVariableSetName: string;
  globalVariableSetName: string;
  testDataSetName: string;
}

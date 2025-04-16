import { ReactElement, type FC } from 'react';

type MachineInstanceData = any;
export interface MachineInstance {
  [key: string]: MachineInstanceData;
}

type machineDataObj = any;

export interface MachineData {
  [key: string]: machineDataObj;
}
export interface MachineInstancesProps {
  parentNodeIndex: number;
  parentNodeData: MachineData;
  verticalLineHeight: number;
  datasetHeight: number;
  curveHeights: number[];
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  datasetRef: React.RefObject<HTMLDivElement>;
  getChildNodeComponent: FC<ConnectingNodeConfig>;
  isReadOnlyMode?: boolean;
}

export type indexType = number;
export type rowType = number;
export interface RunLevelExecutionDataSet {
  peVariableSetId: string;
  globalVariableSetId: string;
  testDataSetId: string;
  runScriptCount?: number;
  [key: string]: any;
}
export interface ConnectingNodeConfig {
  isButton?: boolean;
  isMultiSelect?: boolean;
  parentNodeData?: { [key: string]: any };
  parentNodeIndex?: number;
  childNodeData?: { [key: string]: any };
  childNodeIndex?: number;
  runLevelExecutionDataSetIndex?: number;
  runLevelExecutionDataSet?: RunLevelExecutionDataSet;
}
export interface ConnectBranchProps {
  data: MachineData;
  noOfScripts?:number;
  childNodeCurveHeight?: number;
  getParentNodeComponent: (nodeArgs: ConnectingNodeConfig) => ReactElement;
  getParentNodeComponentActionItems: (
    nodeArgs: ConnectingNodeConfig
  ) => ReactElement;
  getChildNodeComponent: (nodeArgs: ConnectingNodeConfig) => ReactElement;
  isReadOnlyMode?: boolean;
}

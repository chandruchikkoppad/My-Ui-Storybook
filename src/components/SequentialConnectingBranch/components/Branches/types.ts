import { dataSetValues, ExecutionContext } from '../../types';

export interface BranchesProps {
  machineInstances: ExecutionContext[] | {}[];
  rowIndex: number;
  machineColumnCount: number;
  machineColumnWidth?: number;
  nextRowMachineInstance?: ExecutionContext | {} | undefined;
  previousRowMachineInstance?: ExecutionContext | {} | undefined;
  onAddBrowser: (modalId: string) => void;
  onDeleteBrowser: (id: string, runCount: number) => void;
  onAddRunBrowser: (id: string) => void;
  onUpdateDataSetList: (
    id: string,
    dataSetObject: dataSetValues,
    isInstance?: boolean,
    noOfRuns?: number,
    machineInstanceId?: string
  ) => void;
  addInstanceLabel?: string;
  scriptType?: string;
  onUpdateAddBrowserInstance: (
    modalId: string,
    machineInstance: ExecutionContext
  ) => void;
  projectType?: string;
  readOnly: boolean;
  maxRunCount:number;
}

export interface branchTypeProps {
  currentBranch: ExecutionContext | undefined | {};
  nextBranch: ExecutionContext | undefined | {};
}

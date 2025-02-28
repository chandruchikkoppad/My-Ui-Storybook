import { dataSetValues, ExecutionContext } from '../../types';

export interface ConnectingBranchesProps {
  machineBranchInstances: ExecutionContext[] | {}[];
  machineColumnCount: number;
  machineColumnWidth: number;
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
  projectType?: string;
  onUpdateAddBrowserInstance: (
    modalId: string,
    machineInstance: ExecutionContext
  ) => void;
  readOnly: boolean;
  maxRunCount:number;
}

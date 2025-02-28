import { useEffect, useState } from 'react';
import { ExecutionContext } from '../../types';
import { ConnectingBranchesProps } from './types';
import { Fragment } from 'react/jsx-runtime';
import { ffid } from '../../../../utils/ffID/ffid';
import Branches from '../Branches/Branches';
import './ConnectingBranches.scss';

const ConnectingBranches = ({
  machineBranchInstances,
  machineColumnCount,
  machineColumnWidth,
  onAddBrowser,
  onDeleteBrowser,
  onAddRunBrowser,
  onUpdateDataSetList,
  onUpdateAddBrowserInstance,
  addInstanceLabel = '',
  scriptType = '',
  projectType = 'Web',
  readOnly = false,
  maxRunCount,
}: ConnectingBranchesProps) => {
  const [machineInstance, setMachineInstance] = useState<
    ExecutionContext[] | {}[]
  >(machineBranchInstances);

  useEffect(() => {
    setMachineInstance(machineBranchInstances);
  }, [machineBranchInstances]);

  const getMachineBranchInstancesChunk = (
    machineBranchInstances: ExecutionContext[] | {}[],
    chunkSize: number
  ) => {
    const machineBranchInstancesChunk = [];
    for (let i = 0; i < machineBranchInstances.length; i += chunkSize) {
      machineBranchInstancesChunk.push(
        machineBranchInstances.slice(i, i + chunkSize)
      );
    }
    return machineBranchInstancesChunk;
  };

  const machineInstancesRow = getMachineBranchInstancesChunk(
    machineInstance,
    machineColumnCount
  );

  return (
    <div className="ff-connecting-branch-grid-wrapper">
      {machineInstancesRow.map((machineInstances, index) => (
        <Fragment key={ffid()}>
          <Branches
            machineInstances={machineInstances}
            rowIndex={index}
            machineColumnCount={machineColumnCount}
            machineColumnWidth={machineColumnWidth}
            onAddBrowser={onAddBrowser}
            onDeleteBrowser={onDeleteBrowser}
            onAddRunBrowser={onAddRunBrowser}
            nextRowMachineInstance={machineInstancesRow[index + 1]?.[0]}
            previousRowMachineInstance={
              machineInstancesRow[index - 1]?.[machineColumnCount - 1]
            }
            onUpdateDataSetList={onUpdateDataSetList}
            onUpdateAddBrowserInstance={onUpdateAddBrowserInstance}
            addInstanceLabel={addInstanceLabel}
            scriptType={scriptType}
            projectType={projectType}
            readOnly={readOnly}
            maxRunCount={maxRunCount}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default ConnectingBranches;

import classNames from 'classnames';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import Button from '../Button';
import Icon from '../Icon';
import Select from '../Select';
import Typography from '../Typography';
import './SequentialConnectingBranch.scss';
import { FC, useEffect, useRef, useState } from 'react';
import ConnectingBranches from './components/ConnectingBranches/ConnectingBranches';
import {
  dataSetValues,
  EnvironmentVariableMaps,
  ExecutionContext,
  SequentialConnectingBranchProps,
} from './types';
import Tooltip from '../Tooltip';
import DataSetTooltip from './components/DatasetTooltip/DataSetTooltip';
import { DataSetToolTip } from './components/DatasetTooltip/types';
import { EnvironmentVariableMapsContext } from './context/EnvironmentVariableMapsContext';

const SequentialConnectingBranch: FC<SequentialConnectingBranchProps> = ({
  machineInstances = [],
  machineColumnWidth = 180,
  machineColumnCount = 1,
  selectedMachine = {},
  machineOptionsList = [],
  onHandleSelect = () => {},
  onAddBrowserInstance = () => {},
  onAddRunBrowserInstance = () => {},
  onDeleteBrowserInstance = () => {},
  onUpdateDataSetList = () => {},
  onDeleteMachineInstance = () => {},
  dataSetValues = {
    testDataSetId: '',
    globalVariableSetId: '',
    peVariableSetId: '',
    globalVariableSetName: '',
    peVariableSetName: '',
    testDataSetName: '',
  },
  onUpdateAddBrowserInstance = () => {},
  addInstanceLabel = 'Add Environment',
  placeholder = 'Choose Machine',
  scriptType = 'Automation',
  projectType = 'Web',
  readOnly = false,
  zIndex = 99999,
  maxRunCount = 35,
  environmentVariableMaps,
  isRequired = false,
}) => {
  const [selectedMachineInstance, setSelectedMachineInstance] = useState({});
  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const defaultMachineColumnCount = Math.max(machineColumnCount, 1);
  const defaultMachineColumnWidth = Math.max(machineColumnWidth, 180);

  const [machineBranchInstances, setMachineBranchInstances] = useState<
    ExecutionContext[] | {}[]
  >([]);

  const isMachineInstances = checkEmpty(machineInstances);
  let isMachineSelected = checkEmpty(selectedMachine.value?.clientId);

  if (scriptType === 'Manual') {
    isMachineSelected = checkEmpty(selectedMachine.value);
  }

  const getMachineStatusColor = (machineStatus: string = '') => {
    if (machineStatus.toLowerCase().includes('inactive'))
      return 'var(--ff-machine-inactive-status-color)';
    if (machineStatus.toLowerCase().includes('running'))
      return 'var(--ff-machine-running-status-color)';
    if (machineStatus.toLowerCase().includes('active'))
      return 'var(--ff-machine-active-status-color)';
    return 'var(--ff-machine-active-status-color))';
  };

  useEffect(() => {
    setSelectedMachineInstance(selectedMachine);
  }, [selectedMachine]);

  useEffect(() => {
    if (readOnly) {
      setMachineBranchInstances(machineInstances);
    } else {
      setMachineBranchInstances([...machineInstances, {}]);
    }
  }, [machineInstances]);

  const hideDataSet = scriptType.toLowerCase() !== 'manual';

  const removeKeysContainingSubstring = (
    obj: dataSetValues,
    substring: string
  ) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !key.includes(substring))
    );
  };

  const filteredDataSetValues = removeKeysContainingSubstring(
    dataSetValues,
    'Id'
  );
  const showBranchPoint =
    (readOnly && !isMachineInstances) ||
    (!readOnly && isMachineInstances) ||
    (!readOnly && !isMachineInstances);
  return (
    <EnvironmentVariableMapsContext.Provider
      value={environmentVariableMaps as EnvironmentVariableMaps}
    >
      <div className="ff-sequential-connecting-branch-wrapper">
        <div className="ff-connecting-select-branch-wrapper">
          <div className="ff-select-branch-wrapper">
            <Select
              onChange={onHandleSelect}
              optionsList={machineOptionsList}
              label={placeholder}
              required={isRequired}
              showLabel={true}
              className="ff-sequential-select-branch"
              width={'240px'}
              selectedOption={selectedMachineInstance}
              valueAccessor={'name'}
              optionsRequired={!readOnly}
              disableInput={readOnly}
              optionZIndex={zIndex}
            />
            {!isMachineSelected && (
              <div
                className={classNames({
                  'ff-select-branch-arrow': isMachineInstances,
                  'ff-select-branch-arrow-down': !isMachineInstances,
                })}
              >
                {showBranchPoint && (
                  <div className="ff-select-branch-point"></div>
                )}
                <div className="ff-select-branch-arrow">
                  {!readOnly && (
                    <div className="ff-branch-arrow-wrapper">
                      {isMachineInstances && (
                        <div className="ff-branch-arrow"></div>
                      )}
                    </div>
                  )}
                  {isMachineInstances && !readOnly && (
                    <>
                      <Button
                        variant="tertiary"
                        label={
                          scriptType === 'Manual'
                            ? '+ Machine'
                            : '+ Environment'
                        }
                        size="small"
                        className="branch-button"
                        ref={selectButtonRef}
                        onClick={() =>
                          onAddBrowserInstance('ff-sequential-branch-button')
                        }
                        id="ff-sequential-branch-button"
                      />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          {!isMachineSelected && (
            <div className="ff-select-scope-datalist">
              <div className="ff-scope-wrapper">
                <Typography
                  as="span"
                  color={getMachineStatusColor(selectedMachine.value?.status)}
                  className="ff-scope-text"
                >
                  {selectedMachine.value?.status}
                </Typography>
              </div>

              <div className="ff-datalist-wrapper">
                {hideDataSet && (
                  <div
                    id="ff-sequential-machine-datalist"
                    onClick={() => {
                      if (readOnly) return;
                      onUpdateDataSetList(
                        'ff-sequential-machine-datalist',
                        dataSetValues
                      );
                    }}
                  >
                    <Tooltip
                      placement="bottom"
                      title={
                        <div>
                          <DataSetTooltip
                            datSetToolTip={
                              filteredDataSetValues as DataSetToolTip
                            }
                          />
                        </div>
                      }
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Icon
                        name="datalist_icon"
                        className="ff-dataset-icon"
                        hoverEffect
                      />
                      <Typography
                        as="span"
                        color="var(--ff-connecting-branch-color)"
                        className="ff-datalist-text"
                      >
                        Data Set List
                      </Typography>
                    </Tooltip>
                  </div>
                )}
                {!readOnly && (
                  <Tooltip title="Delete" placement="bottom">
                    <Icon
                      name="delete"
                      className="ff-run-delete-icon"
                      color="var(--ff-connecting-branch-delete-color)"
                      onClick={onDeleteMachineInstance}
                      hoverEffect
                    />
                  </Tooltip>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="ff-sequential-branches-wrapper">
          {!isMachineInstances && (
            <ConnectingBranches
              machineBranchInstances={machineBranchInstances}
              machineColumnCount={defaultMachineColumnCount}
              machineColumnWidth={defaultMachineColumnWidth}
              onAddBrowser={onAddBrowserInstance}
              onDeleteBrowser={onDeleteBrowserInstance}
              onAddRunBrowser={onAddRunBrowserInstance}
              onUpdateDataSetList={onUpdateDataSetList}
              onUpdateAddBrowserInstance={onUpdateAddBrowserInstance}
              addInstanceLabel={addInstanceLabel}
              scriptType={scriptType}
              projectType={projectType}
              readOnly={readOnly}
              maxRunCount={maxRunCount}
            />
          )}
        </div>
      </div>
    </EnvironmentVariableMapsContext.Provider>
  );
};

export default SequentialConnectingBranch;

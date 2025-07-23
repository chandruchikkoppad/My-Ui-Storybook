import classNames from 'classnames';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
import { BranchesProps } from './types';
import { Fragment } from 'react/jsx-runtime';
import { ffid } from '../../../../utils/ffID/ffid';
import { ExecutionContext } from '../../types';
import MachineInputField from '../../../MachineInputField';
import Icon from '../../../Icon';
import Typography from '../../../Typography';
import Button from '../../../Button';
import './Branches.scss';
import { MachineType } from '../../../MachineInputField/types';
import Tooltip from '../../../Tooltip';
import DataSetTooltip from '../DatasetTooltip/DataSetTooltip';
import { isEmptyObject } from '../../../../utils/isEmptyObject/isEmptyObject';
import { useEnvironmentalVariableMaps } from '../../context/EnvironmentVariableMapsContext';

const Branches = ({
  machineInstances,
  rowIndex,
  machineColumnCount,
  nextRowMachineInstance,
  previousRowMachineInstance,
  onAddBrowser,
  onDeleteBrowser,
  onAddRunBrowser,
  onUpdateDataSetList,
  onUpdateAddBrowserInstance,
  addInstanceLabel = '',
  scriptType = '',
  projectType = '',
  readOnly,
  maxRunCount,
}: BranchesProps) => {
  const evenRow = rowIndex % 2 === 0;
  const lastMachineInstance = checkEmpty(
    machineInstances[machineColumnCount - 1]
  );
  const environmentalMaps = useEnvironmentalVariableMaps();
  const {
    testDataSetMap = {},
    globalVariableMap = {},
    projectVariableMap = {},
  } = environmentalMaps || {};
  const showLEndArrow = () =>
    readOnly
      ? !lastMachineInstance && !checkEmpty(nextRowMachineInstance)
      : !lastMachineInstance;

  const getBorderStyle = (
    currentBranch: ExecutionContext | {} | undefined,
    nextBranch: ExecutionContext | {} | undefined
  ) => {
    if (
      currentBranch &&
      nextBranch &&
      'machineInstanceId' in currentBranch &&
      'machineInstanceId' in nextBranch
    ) {
      return currentBranch.machineInstanceId === nextBranch.machineInstanceId
        ? 'dashed'
        : 'solid';
    }
    return 'solid';
  };

  const showMiddleArrow = (index: number) =>
    machineInstances.length - 1 !== index && machineColumnCount > 1;

  const getGridTemplateColumnStyle = () => {
    if (machineColumnCount === 1) {
      return `24px minmax(420px, auto) 24px`;
    }
    return `24px minmax(420px, auto) repeat(${
      machineColumnCount - 1
    }, 40px minmax(420px, auto)) 24px`;
  };

  const getMachineLabelOptionList = (
    type: string = '',
    machineInstance: ExecutionContext | {}
  ) => {
    const {
      executionEnv,
      browserName,
      browserVersion,
      machineInfo: { osVersion, iconName, osName, hostName },
      deviceInfo,
    } = machineInstance as ExecutionContext;
    const getEnvironment = (environment: string = '') => {
      if (environment.toLowerCase().includes('browserstack'))
        return 'Browserstack';
      if (environment.toLowerCase().includes('lambdatest')) return 'LambdaTest';
      if (environment.toLowerCase().includes('saucelabs')) return 'SauceLabs';
      return '';
    };

    // Base options
    const baseOptions = [
      {
        label: executionEnv,
        type: getEnvironment(executionEnv),
      },
    ];
    if (scriptType.toLowerCase() === 'manual') {
      baseOptions.push({
        label: hostName || '',
        type: 'local',
      });
    }

    // Web-specific options
    const webOptions = [
      {
        label: osVersion,
        type: iconName || osName,
      },
      {
        label: browserVersion,
        type: browserName,
      },
    ];

    // Mobile-specific options
    const mobileOptions = deviceInfo?.reduce((acc, device, index) => {
      if (device?.name) {
        acc.push({
          label: device?.name,
          type: index === 0 ? 'android' : 'mac',
          version:
            scriptType?.toLowerCase() === 'manual' ? device?.version : '',
        });
      }
      return acc;
    }, [] as { label: string; type: string; version?: string }[]);

    // Determine options based on the type
    switch (type.toLowerCase()) {
      case 'web':
        return [...baseOptions, ...webOptions];
      case 'web & mobile':
        return [...baseOptions, ...webOptions, ...mobileOptions];
      case 'mobile':
        return [...baseOptions, ...mobileOptions];
      default:
        return [];
    }
  };

  const hideDataSet = scriptType.toLowerCase() !== 'manual';

  // checkEmpty is not suitable for this case
  const showEndDot = (machineInstances: any): boolean => {
    return checkEmpty(machineInstances)
      ? isEmptyObject(machineInstances) || nextRowMachineInstance !== undefined
      : true;
  };

  return (
    <div
      className={classNames({
        'ff-connecting-branch-grid': evenRow,
        'ff-connecting-branch-grid-reverse': !evenRow,
      })}
      style={{
        gridTemplateColumns: getGridTemplateColumnStyle(),
      }}
    >
      <div className="ff-connecting-branch-start-wrapper">
        <div
          className={classNames({
            'ff-connecting-branch-arrow': evenRow,
            'ff-connecting-branch-arrow-reverse': !evenRow,
          })}
        ></div>
        <div
          className={classNames({
            'ff-connecting-branch-container': evenRow,
            'ff-connecting-branch-container-reverse': !evenRow,
          })}
          style={{
            border: `1px ${getBorderStyle(
              machineInstances[0],
              previousRowMachineInstance
            )} var(--ff-connecting-branch-color)`,
            borderTop: 'none',
            borderLeft: `${!evenRow && 'none'}`,
            borderRight: `${evenRow && 'none'}`,
          }}
        ></div>
      </div>
      {machineInstances?.map((machineInstance, index) => {
        const {
          runCount = 'runCount' in machineInstance
            ? machineInstance.runCount
            : 0,
          numberOfRuns = 0,
          machineInstanceId = '',
          peVariableSetId = '',
          globalVariableSetId = '',
          testDataSetId = '',
          testDataSetName = '',
          peVariableSetName = '',
          globalVariableSetName = '',
        } = machineInstance as ExecutionContext;
        return (
          <Fragment key={ffid()}>
            {!checkEmpty(machineInstance) ? (
              <div>
                <div className="ff-connecting-branch-input-point-wrapper">
                  {showEndDot(machineInstances[index + 1]) && (
                    <div
                      className={classNames({
                        'ff-connecting-branch-point': evenRow,
                        'ff-connecting-branch-point-reverse': !evenRow,
                      })}
                    ></div>
                  )}
                  <MachineInputField
                    runCount={runCount}
                    key={ffid()}
                    options={
                      getMachineLabelOptionList(
                        projectType,
                        machineInstance
                      ) as MachineType[]
                    }
                    contentReverse={!evenRow}
                    modalId={`${machineInstanceId}-runCount-${runCount - 1}`}
                    onClick={() =>
                      runCount == 1 || scriptType !== 'Automation'
                        ? onUpdateAddBrowserInstance(
                            `${machineInstanceId}-runCount-0`,
                            machineInstance as ExecutionContext
                          )
                        : null
                    }
                    scriptType={scriptType}
                    readOnly={readOnly}
                  />
                </div>
                <div
                  className={classNames({
                    'ff-connecting-branch-datalist': evenRow,
                    'ff-connecting-branch-datalist-reverse': !evenRow,
                  })}
                >
                  {hideDataSet && (
                    <>
                      <div
                        id={`ff-sequential-branch-dataset-${machineInstanceId}-${runCount}`}
                        className="ff-dataset-list-branch"
                        onClick={() => {
                          if (readOnly) return;
                          onUpdateDataSetList(
                            `ff-sequential-branch-dataset-${machineInstanceId}-${runCount}`,
                            {
                              peVariableSetId: peVariableSetId,
                              globalVariableSetId: globalVariableSetId,
                              testDataSetId: testDataSetId,
                              testDataSetName: testDataSetName,
                              globalVariableSetName: globalVariableSetName,
                              peVariableSetName: peVariableSetName,
                            },
                            true,
                            numberOfRuns,
                            machineInstanceId
                          );
                        }}
                      >
                        <Tooltip
                          placement="bottom"
                          title={
                            <>
                              <DataSetTooltip
                                datSetToolTip={{
                                  peVariableSetName:
                                    projectVariableMap[peVariableSetId] || '',
                                  globalVariableSetName:
                                    globalVariableMap[globalVariableSetId] ||
                                    '',
                                  testDataSetName:
                                    testDataSetMap[testDataSetId] || '',
                                }}
                              />
                            </>
                          }
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <Icon
                            name="datalist_icon"
                            className="ff-connecting-icon"
                            hoverEffect
                          />
                          <Typography
                            className="ff-connecting-text"
                            color="var(--ff-connecting-branch-color)"
                          >
                            Data Set List
                          </Typography>
                        </Tooltip>
                      </div>

                      {!readOnly && (
                        <>
                          <Tooltip
                            placement="bottom"
                            title={
                              numberOfRuns >= maxRunCount
                                ? `Maximum ${maxRunCount} runs are allowed.`
                                : ''
                            }
                          >
                            <div
                              className="ff-environment-run-container"
                              onClick={
                                numberOfRuns >= maxRunCount
                                  ? undefined
                                  : () => onAddRunBrowser(machineInstanceId)
                              }
                            >
                              <Icon
                                name="plus_icon"
                                className="ff-connecting-run-icon"
                                color="var(--ff-connecting-branch-color)"
                                hoverEffect
                                disabled={
                                  numberOfRuns >= maxRunCount ? true : false
                                }
                              />
                              <Typography
                                className="ff-connecting-run-text"
                                color="var(--ff-connecting-branch-color)"
                                style={{
                                  opacity:
                                    numberOfRuns >= maxRunCount ? 0.5 : 1,
                                }}
                              >
                                Run
                              </Typography>
                            </div>
                          </Tooltip>
                        </>
                      )}
                    </>
                  )}
                  {!readOnly && (
                    <Tooltip title="Delete">
                      <Icon
                        name="delete"
                        className="ff-connecting-delete-icon"
                        onClick={() =>
                          onDeleteBrowser(machineInstanceId, runCount)
                        }
                        color="var(--ff-connecting-branch-delete-color)"
                        hoverEffect
                      />
                    </Tooltip>
                  )}
                </div>
              </div>
            ) : (
              !readOnly && (
                <div className="ff-connecting-branch-browser-button">
                  <Button
                    id={`ff-sequential-branch-add-${machineInstanceId}`}
                    variant="secondary"
                    label={addInstanceLabel}
                    onClick={() => {
                      if (readOnly) return;
                      onAddBrowser(
                        `ff-sequential-branch-add-${machineInstanceId}`
                      );
                    }}
                  />
                </div>
              )
            )}
            {showMiddleArrow(index) && (
              <div
                className="ff-connecting-branch-middle-arrow"
                style={{
                  borderTop: `1px ${getBorderStyle(
                    machineInstance,
                    machineInstances[index + 1]
                  )} var(--ff-connecting-branch-color)`,
                }}
              >
                <div
                  className={classNames({
                    'ff-connecting-branch-arrow': evenRow,
                    'ff-connecting-branch-arrow-reverse': !evenRow,
                  })}
                ></div>
              </div>
            )}
          </Fragment>
        );
      })}
      {showLEndArrow() && (
        <div
          className={classNames({
            'ff-connecting-branch-end-arrow': evenRow,
            'ff-connecting-branch-end-arrow-reverse': !evenRow,
          })}
          style={{
            border: `1px ${getBorderStyle(
              machineInstances[machineColumnCount - 1],
              nextRowMachineInstance
            )} var(--ff-connecting-branch-color)`,
            borderBottom: 'none',
            borderLeft: `${evenRow && 'none'}`,
            borderRight: `${!evenRow && 'none'}`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Branches;

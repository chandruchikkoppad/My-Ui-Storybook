import { StoryObj, Meta } from '@storybook/react';
import StepLandingTable from './StepLandingTable';
import React, { useRef, useState } from 'react';
import Typography from '../Typography';
import EditComponent from './Components/EditComponent';
import IconButton from '../IconButton';
import RenderNlpInput from './Components/RenderNlpInput';
import { DynamicObj } from '../CreateVariable/types';
import Icon from '../Icon';
import { nlpList } from '../NLPInput/sampleData';
import { rearrangeDragItem } from '../../utils/swapArrayItem/dragAndDropUtils';
import { AddNlpProp } from './types';
import Tooltip from '../Tooltip';
import { addStepGroup } from '../../utils/AddStepGroup/AddStepGroup';
import StepGroupDetailView from '../PrePostTable/components/StepGroupDetailView';
import Drawer from '../Drawer';
import { sampleData } from './constant.tsx';
import StepResultStats from './Components/StepResultStats';
import { ffid } from '../../utils/ffID/ffid.ts';
import MenuOption from '../MenuOption/MenuOption';

const meta: Meta<typeof StepLandingTable> = {
  title: 'Components/StepLandingTable',
  component: StepLandingTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StepLandingTable>;

export const StepLandingTableAcc: Story = {
  render: () => {
    const [tableData, setTableData] = useState<any>(sampleData);
    const [editMode, setEditMode] = useState<any>('');
    const [AddNewNlp, setNewNlp] = useState<AddNlpProp>();
    const [isMaximize, setDoMaximize] = useState(true);
    const [mode, setMode] = useState<string>('');
    const childRef = useRef<any>(null);
    //Dummy api call
    const newSteps: any = [
      {
        name: 'DesiredCapability create instance of DesiredCapabilities',
        type: 'step',
        nlpName: 'CreateCapabilitiesInstance',
        executionOrder: 1,
        nlpId: 'NLP1001',
        passMessage: 'Instance of Desired Capabilities is created',
        failMessage: 'Failed to create an instance of DesiredCapabilities',
        stepReferenceInfo: {
          stepNumber: 0,
          name: 'Capability',
          type: 'GLOBAL',
          value: null,
          returnValue: null,
          masked: null,
          referenceId: null,
        },
        stepInputs: [
          {
            value: 'MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION',
            name: 'ifCheckPointIsFailed',
            type: 'java.lang.String',
            parameter: false,
          },
        ],
        skip: false,
        returnType: 'DesiredCapabilities',
        status: 'PASS',
        displayName: 'DesiredCapability create instance of DesiredCapabilities',
        defaultDisplayName:
          'DesiredCapability create instance of DesiredCapabilities',
        stepId: 'STP100111111',
        toolTip: 'Create instance of Desired Capabilities',
        defaultToolTip: 'Create instance of Desired Capabilities',
        hierarchy: 0,
        mustExecute: false,
        displayOrder: '1.1',
        imported: false,
        uniqueId:
          'cc1ed1ab-9fd9-4c91-a739-4e09c77ee294-837f4b0c-27f1-40db-b618-b895293b1273',
        isStepGroupStep: false,
        isJDBCStep: false,
        message: 'Instance of Desired Capabilities is created',
        afterBreakStep: false,
        afterContinueStep: false,
        isDisabled: true,
      },
      {
        name: 'DesiredCapability set browser name as browser',
        type: 'PRE',
        nlpName: 'SetBrowserName',
        executionOrder: 2,
        nlpId: 'NLP1002',
        passMessage: 'Browser name is Desired Capability',
        failMessage: 'Failed to set browser name as *browserName*',
        stepReferenceInfo: {
          stepNumber: 0,
          name: 'BrowserCapability',
          type: 'GLOBAL',
          value: null,
          returnValue: null,
          masked: null,
          referenceId: null,
        },
        skip: false,
        returnType: 'DesiredCapabilities: desiredCapabilities',
        status: 'PASS',
        displayName: 'DesiredCapability set browser name as browser',
        defaultDisplayName:
          'DesiredCapability set browser name as *browserName*',
        stepId: ffid(),
        toolTip: 'Set browser name as browser in Desired Capability',
        defaultToolTip:
          'Set browser name as *browserName* in Desired Capability',
        hierarchy: 0,
        mustExecute: false,
        displayOrder: '1.2',
        imported: false,
        uniqueId:
          '7f8ceff8-5d42-40a7-97f4-c7f1d1453b04-62e23d91-1c1d-44cc-a534-2380d6b0fbc7',
        isStepGroupStep: false,
        isJDBCStep: false,
        message: 'Browser name is set as chrome',
        afterBreakStep: false,
        afterContinueStep: false,
        isDisabled: false,
      },
      {
        name: 'Open browser window',
        type: 'step',
        nlpName: 'OpenBrowser',
        executionOrder: 3,
        nlpId: 'NLP1003',
        passMessage: 'Browser window is opened',
        failMessage: 'Failed to open browser window',
        stepReferenceInfo: {
          stepNumber: 0,
          name: 'Capability2',
          type: 'GLOBAL',
          value: null,
          returnValue: null,
          masked: null,
          referenceId: null,
        },
        skip: false,
        returnType: 'WebDriver: driver',
        status: 'PASS',
        displayName: 'Open browser window',
        defaultDisplayName: 'Open browser window',
        stepId: 'STP1001333333',
        toolTip: 'Browser window open',
        defaultToolTip: 'Browser window open',
        hierarchy: 0,
        mustExecute: false,
        displayOrder: '1.3',
        imported: false,
        uniqueId:
          'e0ea4ef6-32fd-4809-9337-0acbb0b62f45-8afe10a7-eccd-4ed2-acba-4468d1fc78c9',
        isStepGroupStep: false,
        isJDBCStep: false,
        message: 'Browser window is opened',
        afterBreakStep: false,
        afterContinueStep: false,
      },
    ];
    const handleViewComponent = (data: any, toggleViewRow: any) => {
      if (data.stepId) {
        return () => (
          <StepGroupDetailView rowData={data} toggleViewRow={toggleViewRow} />
        );
      }
      return null;
    };

    const handleAccordion = (row: any) => {
      const updatedData = addStepGroup(
        tableData,
        row.tableType,
        row.stepId,
        newSteps
      );
      setTableData(updatedData);
    };
    const options = [
      {
        label: <Icon name="edit" />,
        value: 'opt1',
        icon: 'success',
      },
      { label: 'Option 2', value: 'opt2', icon: 'success' },
      {
        label: 'Delete',
        value: 'deleteOpt',
        icon: 'delete',
        iconColor: 'var(--delete-text-color)',
      },
    ];
    const columnsData = [
      {
        header: 'Description',
        accessor: 'name',
        width: isMaximize ? 470 : 750,
        cell: ({ row, value, index }: DynamicObj) => {
          return (
            <>
              <div className="column_data">
                <Tooltip title={value}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: isMaximize
                        ? 250 - (row?.marginLeft ?? 0)
                        : 480 - (row?.marginLeft ?? 0),
                    }}
                  >
                    <Typography
                      as="div"
                      color="var(--brand-color)"
                      fontWeight={row?.isSpecialNlp ? 'bold' : 'regular'}
                      lineHeight="18px"
                      onClick={() => {
                        if (!row?.isDisabled) {
                          setNewNlp({});
                          setEditMode(row.stepId);
                        }
                      }}
                      style={{
                        opacity: row?.isDisabled ? '0.5' : '',
                        textWrap: 'nowrap',
                      }}
                    >
                      {index + 1}.{value}
                    </Typography>
                  </div>
                </Tooltip>
              </div>
            </>
          );
        },
        extraInfo: ({ row, indexNumber, tableType }: DynamicObj) => {
          const handleDelete = (row: any) => {
            const updatedData = tableData.map((item) => {
              if (item.title === 'Steps') {
                return {
                  ...item,
                  data: item.data.filter(
                    (step: any) => step.stepId !== row?.stepId
                  ),
                };
              }
              return item;
            });
            setTableData(updatedData);
          };
          if (tableType === 'Steps') {
            let metadata: any = {
              total: 12,
              totalPassed: 6,
              totalFailed: 1,
              totalWarning: 1,
              totalSkipped: 1,
              totalTerminated: 2,
              totalAborted: 2,
              totalNA: 3,
              totalPartiallyExecuted: 0,
              totalNonCascadedPreConditionFailed: 0,
              totalNonCascadedPostConditionFailed: 0,
              totalNonCascadedPreConditionWarning: 0,
              totalNonCascadedPostConditionWarning: 0,
              executionDuration: 80129,
              executionDurationInHourMinSecFormat: '00:01:20:129',
              message: 'One or more steps are failed',
              status: 'FAIL',
            };
            return (
              <>
                {row?.stepResultStats && (
                <StepResultStats
                  metaData={metadata}
                  width={
                    isMaximize
                      ? 100 - (row?.marginLeft ?? 0)
                      : 250 - (row?.marginLeft ?? 0)
                  }
                />
                 )} 
                <div
                  className="icon-container"
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name="add_file"
                    hoverEffect={false}
                    height={8}
                    width={8}
                    onClick={() => {
                      setEditMode('');
                      setMode('');
                      setNewNlp({
                        action: 'addBelow',
                        sourceIndex: indexNumber,
                      });
                    }}
                  />

                  {!row?.isDisabled && (
                    <Icon
                      name="edit"
                      disabled={row?.isDisabled}
                      onClick={() => {
                        setEditMode('');
                        setMode('edit');
                        setNewNlp({
                          action: 'EditNlp',
                          sourceIndex: indexNumber,
                          nlpName: row?.name,
                        });
                      }}
                    />
                  )}
                  {!row?.isDisabled && (
                    <Icon
                      name="delete"
                      disabled={row?.isDisabled}
                      onClick={() => handleDelete(row)}
                    />
                  )}
                  <MenuOption
                    iconName="more"
                    tooltipTitle="More"
                    key="more"
                    tooltipPlacement="bottom"
                    targetRef={row?.stepId}
                    options={options}
                  />
                </div>
              </>
            );
          }
        },
      },

      {
        header: 'Results',
        accessor: 'message',
        width: isMaximize ? 300 : 400,
      },
      {
        header: 'Status',
        accessor: 'status',
        width: isMaximize ? 100 : 150,
      },
    ];

    const handelChange = (value: string) => {
      console.warn('NlpONChange', value);
    };

    const handleNlpSelect = (value) => {
      setEditMode(value.stepId);
      setNewNlp({
        action: mode === 'edit' ? 'EditNlp' : 'replaceNlp',
        sourceIndex: value.indexValue,
      });
    };
    const handleSave = (_, index: number) => {
      setNewNlp({});
      setEditMode('');
      //? uncomments this below for add And continue
      // setNewNlp({ action: 'addBelow', sourceIndex: index - 1 });
    };
    const onSelectClick = (data: any) => {
      setNewNlp({});
      setEditMode('');
    };
    const handleCancel = () => {
      setNewNlp({});
      setEditMode('');
    };

    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const filterStep = tableData.find((item) => item.title === 'Steps');
      if (!filterStep) return;
      const updatedData = rearrangeDragItem(
        filterStep.data,
        oldIndex,
        newIndex
      );
      const updatedTableData = tableData.map((item) =>
        item.title === 'Steps' ? { ...item, data: updatedData } : item
      );
      childRef?.current?.deleteRow(updatedData[newIndex]);
      setTableData(updatedTableData);
    };

    const handleComponent = (action: string) => {
      switch (action) {
        case 'noDataContent': {
          return (
            <IconButton
              iconName="add_file"
              label="Add"
              onClick={() => {
                setEditMode('');
                setNewNlp({ action: 'addLast' });
              }}
            />
          );
        }
        case 'Edit': {
          return (
            <EditComponent handleCancel={handleCancel} handleAdd={handleSave} />
          );
        }
        case 'NlpInput': {
          return (
            <RenderNlpInput
              nlpList={nlpList}
              handelChangeNlp={handelChange}
              handleNlpSelect={handleNlpSelect}
              optionZIndex={1500}
            />
          );
        }
        default: {
          <></>;
        }
      }
    };
    const handleDelete = () => {
      const updatedData = tableData.map((item) => {
        if (item.title === 'Steps') {
          return { ...item, data: [] };
        }
        return item;
      });
      childRef?.current?.resetSelection();
      setTableData(updatedData);
    };
    return (
      <>
        <Drawer
          isOpen={true}
          top="89px"
          right={9}
          height="calc(100% - 92px)"
          size={isMaximize ? 'large' : 'x-large'}
          isFooterRequired={false}
          _isCloseModalButtonVisible={false}
          title={
            <>
              <Icon
                hoverEffect
                name={isMaximize ? 'maximize_script' : 'minimize_script'}
                onClick={() => setDoMaximize(!isMaximize)}
              />
              <IconButton
                iconName="add_file"
                label="Add"
                onClick={() => {
                  setEditMode('');
                  setNewNlp({ action: 'addLast' });
                }}
              />
              <Tooltip title="delete">
                <Icon name="delete" onClick={handleDelete} />
              </Tooltip>
            </>
          }
        >
          <StepLandingTable
            tableMeta={columnsData}
            tableData={tableData}
            headerType={'default'}
            AddNlp={AddNewNlp}
            editMode={editMode}
            noDataContent={handleComponent('noDataContent')}
            handleDragStart={() => {
              setNewNlp({});
              setEditMode('');
            }}
            onDragEnd={onDragEnd}
            NlpComponent={handleComponent('NlpInput')}
            editComponent={handleComponent('Edit')}
            handleAccordion={handleAccordion}
            onSelectClick={onSelectClick}
            handleViewComponent={handleViewComponent}
            height="440px"
            isViewPrivilegeMode={false}
            defaultExpanded="All"
            ref={childRef}
            isClientSide={false}
          />
        </Drawer>
      </>
    );
  },
};

export default meta;

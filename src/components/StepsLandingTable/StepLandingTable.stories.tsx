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
    const childRef = useRef<any>(null);
    const newSteps: any = [
      {
        stepId: ffid(),
        name: 'New Step 1',
        modifiedBy: 'User',
        suiteName: 'test suite',
        type: 'PRE',
        displayOrder: '1.1',
        stepInputs: [
          { name: 'ExpectedFilePath', value: 'Root/Login/Jira (1).csv' },
          { name: 'ExpectedFilePath', value: 'ExpectedFilePath' },
          {
            name: 'if CheckPoint Is Failed',
            value: 'MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION',
          },
        ],
      },
      {
        stepId: ffid(),
        name: 'New Step 2',
        modifiedBy: 'User',
        suiteName: 'test suite',
        displayOrder: '1.2',
        stepInputs: [
          { name: 'ExpectedFilePath', value: 'Root/Login/Jira (1).csv' },
          { name: 'ExpectedFilePath', value: 'ExpectedFilePath' },
          {
            name: 'if Failed',
            value: 'MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION',
          },
        ],
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
    const columnsData = [
      {
        header: 'Description',
        accessor: 'name',
        width: isMaximize ? 470 : 700,
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
                      maxWidth: isMaximize ? 220 : 700,
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
                        childRef?.current?.handleCloneCheckbox(row);
                      }}
                      style={{ opacity: row?.isDisabled ? '0.5' : '' }}
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
            childRef?.current?.handleUpdateCheckbox(row);
          };
          if (tableType === 'Steps') {
            return (
              <>
                {row?.stepResultStats && (
                  <StepResultStats metaData={row?.stepResultStats} />
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
                </div>
              </>
            );
          }
        },
      },

      {
        header: 'Results',
        accessor: 'suiteName',
        width: isMaximize ? 300 : 400,
      },
      {
        header: 'Status',
        accessor: 'suiteName',
        width: isMaximize ? 100 : 150,
      },
    ];

    const handelChange = (value: string) => {
      console.warn('NlpONChange', value);
    };

    const handleNlpSelect = (value) => {
      setEditMode(value.stepId);
      setNewNlp({
        action: 'replaceNlp',
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
      //  updatedData[newIndex].conditionSearchKey,
      //    updatedData[newIndex].conditionId;
      const updatedTableData = tableData.map((item) =>
        item.title === 'Steps' ? { ...item, data: updatedData } : item
      );
      setTableData(updatedTableData);
      // childRef?.current?.handleUpdateCheckbox(
      //   updatedData[newIndex],
      //   updatedTableData
      // );
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
            height="500px"
            isViewPrivilegeMode={false}
            defaultExpanded="Steps"
            ref={childRef}
          />
        </Drawer>
      </>
    );
  },
};

export default meta;

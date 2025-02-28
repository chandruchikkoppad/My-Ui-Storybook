import { StoryObj, Meta } from '@storybook/react';
import StepLandingTable from './StepLandingTable';
import React, { useState } from 'react';
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
import { ffid } from '../../utils/ffID/ffid';
import { addStepGroup } from '../../utils/AddStepGroup/AddStepGroup';
import StepGroupDetailView from '../PrePostTable/components/StepGroupDetailView';
import Drawer from '../Drawer';

const meta: Meta<typeof StepLandingTable> = {
  title: 'Components/StepLandingTable',
  component: StepLandingTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StepLandingTable>;

// !back up for action cells
const sampleData = [
  {
    title: 'Depends on Script',
    data: [
      {
        stepId: ffid(),
        name: 'Open Browser',
        modifiedBy: 'Ram',
        suiteName: 'test',
        isDisabled: true,
        marginLeft: 0,
      },
    ],
  },
  {
    title: 'Pre conditions',
    data: [
      {
        stepId: ffid(),
        name: 'Open Browser',
        modifiedBy: 'Ram',
        suiteName: 'test',
        isDisabled: true,
        type: 'PRE',
      },
      {
        stepId: ffid(),
        name: 'Close Browser',
        modifiedBy: 'Ram',
        suiteName: 'test',
      },
    ],
  },
  {
    title: 'Steps',
    data: [
      {
        stepId: ffid(),
        name: 'Open Browser hg uiyguyg iugiug uiggiug uighuyg busdyguygau guywge gwDGUIg iuhgaiudgh iuggiug uyguyg',
        modifiedBy: 'Ram',
        suiteName: 'suite1',
        isSpecialNlp: true,
        marginLeft: 0,
      },
      {
        stepId: ffid(),
        name: 'Start if',
        modifiedBy: 'Laxman',
        suiteName: 'suite 2',
        specialNlp: true,
        marginLeft: 0,
      },
      {
        stepId: ffid(),
        name: 'wait for a sec',
        modifiedBy: 'Laxman',
        suiteName: 'suite 2',
        marginLeft: 8,
      },
      {
        stepId: ffid(),
        name: 'End if',
        modifiedBy: 'Laxman',
        suiteName: 'suite 2',
        marginLeft: 0,
      },
      {
        stepId: ffid(),
        name: 'wait for Second',
        modifiedBy: 'Laxman',
        suiteName: 'suite 2',
        marginLeft: 80,
      },
      {
        stepId: ffid(),
        name: 'Click on Element Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque corrupti exercitationem amet voluptatem ex nulla dolor vitae deleniti, ullam perferendis in esse tempore! Distinctio rem, vero ut eligendi voluptate a',
        modifiedBy: 'Laxman',
        suiteName: 'suite 2',
        marginLeft: 0,
      },
    ],
    actionCell: ({ row }: DynamicObj) => {
      return (
        <div>
          <Icon name="edit" />
        </div>
      );
    },
  },
  {
    title: 'Post conditions',
    data: [
      {
        stepId: ffid(),
        name: 'close browser',
        modifiedBy: 'Krishna',
        suiteName: 'test 2',
        type: 'POST',
      },
    ],
  },
];

export const StepLandingTableAcc: Story = {
  render: () => {
    const [tableData, setTableData] = useState<any>(sampleData);
    const [editMode, setEditMode] = useState<any>('');
    const [AddNewNlp, setNewNlp] = useState<AddNlpProp>();
    const [isMaximize, setDoMaximize] = useState(true);

    const handleViewComponent = (data: any, toggleViewRow: any) => {
      if (data.stepId) {
        return () => (
          <StepGroupDetailView rowData={data} toggleViewRow={toggleViewRow} />
        );
      }
      return null;
    };
    //Dummy data from api call
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
                      lineHeight="18px"
                      onClick={() => {
                        if (!row?.isDisabled) {
                          setNewNlp({});
                          setEditMode(row.stepId);
                        }
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
          if (tableType === 'Steps') {
            return (
              <>
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
      const updatedTableData = tableData.map((item) =>
        item.title === 'Steps' ? { ...item, data: updatedData } : item
      );
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
          />
        </Drawer>
      </>
    );
  },
};

export default meta;

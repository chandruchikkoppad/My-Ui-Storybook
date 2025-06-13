import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import PrePostTable from './PrePostTable';
import { ffid } from '../../utils/ffID/ffid';
import { rearrangeDragItem } from '../../utils/swapArrayItem/dragAndDropUtils';
import Typography from '../Typography';
import { nlpList } from '../NLPInput/sampleData';
import IconButton from '../IconButton';
import Icon from '../Icon';
import { AddNlpProp } from './Types';
import { DynamicObj } from '../CreateVariable/types';
import Tooltip from '../Tooltip';
import { addPrePostStepGroup } from '../../utils/AddStepGroup/AddStepGroup';
import StepGroupDetailView from './components/StepGroupDetailView';
import RenderNlpInput from '../StepsLandingTable/Components/RenderNlpInput';
import EditComponent from '../StepsLandingTable/Components/EditComponent';
const meta: Meta<typeof PrePostTable> = {
  title: 'Components/PrePostTable',
  component: PrePostTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof PrePostTable>;
const defaultArgs = {
  data: [],
  columns: [],
};
const sampleData = [
  {
    project: {
      stepId: ffid(),
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test1',
      type: 'PRE',
      status: 'Passed',
      checked: true,
      disabled: false,
      cascaded: 'cascaded',
      id: 'temp1',
    },
  },
  {
    project: {
      stepId: ffid(),
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test2',
      type: 'POST',
      status: 'Failed',
      checked: false,
      disabled: false,
      cascaded: 'cascaded',
      id: 'temp2',
    },
  },
  {
    project: {
      stepId: ffid(),
      modifiedByUname: 'user4',
      modifiedOn: '18-03-2024 10:47',
      name: 'Test3',
      type: 'Web',
      status: 'Passed',
      checked: false,
      disabled: false,
      cascaded: 'not_cascaded',
      id: 'temp3',
    },
  },
  {
    project: {
      stepId: ffid(),
      modifiedByUname: 'user3',
      modifiedOn: '13-03-2024 15:15',
      name: 'Test4',
      status: 'Failed',
      checked: true,
      disabled: false,
      cascaded: 'not_cascaded',
      id: 'temp4',
    },
  },
  {
    project: {
      stepId: ffid(),
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test5',
      type: 'PRE',
      status: 'Passed',
      checked: true,
      disabled: true,
      cascaded: 'not_cascaded',
      id: 'temp5',
    },
  },
  {
    project: {
      stepId: ffid(),
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test6',
      status: 'Passed',
      checked: false,
      disabled: false,
      cascaded: 'not_cascaded',
      id: 'temp6',
    },
  },
];

const columnsData = [
  {
    header: 'Name',
    accessor: 'name',
    width: 150,
    cell: (e: any) => {
      return (
        <div title={e.value} style={{ color: 'blue' }}>
          {e.value}
        </div>
      );
    },
  },
  {
    header: 'Type',
    accessor: 'type',
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Status',
    accessor: 'status',
    width: 150,
    cell: ({ value }: any) => <div>{value}</div>,
  },
];

export const Default: Story = {
  args: {
    ...defaultArgs,
    data: sampleData.map((x) => x.project),

    columns: columnsData,
  },
};

export const DynamicTable: Story = {
  args: {
    ...defaultArgs,
    data: sampleData.map((data) => data.project),

    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)',
  },
  render: () => {
    //! Important prerequisite: tableData should have a unique ID key, which should be either _id or stepId.
    const [tableData, setTableData] = useState(
      sampleData.map((data) => data.project)
    );
    const [editMode, setEditMode] = useState<number | string>('');
    const [AddNewNlp, setNewNlp] = useState<AddNlpProp>();

    //Dummy data from api call
    const newSteps: any = [
      {
        stepId: 'ffid()',
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
        stepId: 'ffid()',
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
      const updatedData = addPrePostStepGroup(tableData, row.stepId, newSteps);
      setTableData(updatedData);
    };

    const handleViewComponent = (rowData: any, toggleViewRow: any) => {
      if (rowData.stepId) {
        return () => (
          <StepGroupDetailView
            rowData={rowData}
            toggleViewRow={toggleViewRow}
          />
        );
      }
      return null;
    };
    const columnsData = [
      {
        header: 'Name',
        accessor: 'name',
        width: 300,
        cell: ({ row, value, index }: DynamicObj) => {
          return (
            <>
              <Tooltip title={value}>
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
              </Tooltip>
            </>
          );
        },
        extraInfo: ({ row, indexNumber }: DynamicObj) => {
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
                        id: row.id,
                      });
                    }}
                  />
                )}
              </div>
            </>
          );
        },
      },

      {
        header: 'Result',
        accessor: 'type',
        width: 150,
        cell: ({ value }: any) => <div>{value}</div>,
      },
      {
        header: 'Status',
        accessor: 'status',
        width: 150,
        cell: ({ value }: any) => <div>{value}</div>,
      },
    ];

    const handleDragStart = () => {
      setNewNlp({});
      setEditMode('');
    };

    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const updatedData = rearrangeDragItem(tableData, oldIndex, newIndex);
      setTableData(updatedData);
    };

    const handleSave = (_, index: number) => {
      setNewNlp({});
      setEditMode('');
      //? uncomments this below for add And continue
      // setNewNlp({ action: 'addBelow', sourceIndex: index - 1 });
    };

    const handleCancel = () => {
      setNewNlp({});
      setEditMode('');
    };
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

    return (
      <>
        <IconButton
          iconName="add_file"
          label="Add"
          onClick={() => {
            setEditMode('');
            setNewNlp({ action: 'addLast' });
          }}
        />
        <PrePostTable
          draggable
          onDragEnd={onDragEnd}
          data={tableData}
          columns={columnsData}
          headerType="secondary"
          noDataContent={'No data found'}
          headerIconName={'expand_icon'}
          editMode={editMode}
          height="500px"
          AddNlp={AddNewNlp}
          handleDragStart={handleDragStart}
          handleAccordion={handleAccordion}
          handleViewComponent={handleViewComponent}
          editComponent={
            <EditComponent handleCancel={handleCancel} handleAdd={handleSave} />
          }
          NlpComponent={
            <RenderNlpInput
              nlpList={nlpList}
              handelChangeNlp={handelChange}
              handleNlpSelect={handleNlpSelect}
            />
          }
          scriptType
        />
      </>
    );
  },
};

export default meta;

import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Table from './Table';
import { ffid } from '../../utils/ffID/ffid';
import { rearrangeDragItem } from '../../utils/swapArrayItem/dragAndDropUtils';
import EditComponent from './EditComponent';
import { DynamicObj } from '../CreateVariable/types';
import { FormValues } from './Types';
import Typography from '../Typography';
import Button from '../Button';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Table>;
const defaultArgs = {
  data: [],
  columns: [],
};
const sampleData = [
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user4',
      modifiedOn: '18-03-2024 10:47',
      name: 'Test1',
      type: 'Web',
      status: 'Open',
      checked: false,
      disabled: false,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user3',
      modifiedOn: '13-03-2024 15:15',
      name: 'Test2',
      type: 'Mobile',
      status: 'Close',
      checked: true,
      disabled: true,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test3',
      type: 'Web',
      status: 'Close',
      checked: true,
      disabled: true,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test4',
      type: 'Web & Mobile',
      status: 'Open',
      checked: false,
      disabled: false,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user4',
      modifiedOn: '18-03-2024 10:47',
      name: 'Test1',
      type: 'Web',
      status: 'Open',
      checked: false,
      disabled: true,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user3',
      modifiedOn: '13-03-2024 15:15',
      name: 'Test2',
      type: 'Mobile',
      status: 'Close',
      checked: true,
      disabled: true,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test3',
      type: 'Web',
      status: 'Close',
      checked: true,
      disabled: true,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test4',
      type: 'Web & Mobile',
      status: 'Open',
      checked: false,
      disabled: false,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user4',
      modifiedOn: '18-03-2024 10:47',
      name: 'Test1',
      type: 'Web',
      status: 'Open',
      checked: false,
      disabled: false,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user3',
      modifiedOn: '13-03-2024 15:15',
      name: 'Test2',
      type: 'Mobile',
      status: 'Close',
      checked: true,
      disabled: false,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test3',
      type: 'Web',
      status: 'Close',
      checked: true,
      disabled: false,
    },
  },
  {
    project: {
      id: ffid(),
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test4',
      type: 'Web & Mobile',
      status: 'Open',
      checked: false,
      disabled: false,
    },
  },
];
const columnsData = [
  {
    header: 'Name',
    accessor: 'name',
    width: 300,
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
    width: 100,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Status',
    accessor: 'status',
    width: 150,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified By',
    accessor: 'modifiedByUname',
    width: 150,
  },
  {
    header: 'Modified On',
    accessor: 'modifiedOn',
    width: 150,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 1',
    accessor: 'modifiedOn',
    width: 150,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 2',
    accessor: 'modifiedOn',
    width: 150,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 3',
    accessor: 'modifiedOn',
    width: 250,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 4',
    accessor: 'modifiedOn',
    width: 350,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 5',
    accessor: 'modifiedOn',
    width: 350,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 6',
    accessor: 'modifiedOn',
    width: 350,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 7',
    accessor: 'modifiedOn',
    width: 350,
    cell: ({ value }: any) => <div>{value}</div>,
  },
  {
    header: 'Modified On 8',
    accessor: 'modifiedOn',
    width: 350,
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

export const PrimaryHeaderTextColor: Story = {
  args: {
    ...defaultArgs,
    data: sampleData.map((x) => x.project),

    columns: columnsData,
    headerTextColor: 'primary',
  },
};

export const TableDataTextColor: Story = {
  args: {
    ...defaultArgs,
    data: sampleData.map((x) => x.project),

    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)',
  },
};

export const PageTable: Story = {
  args: {
    ...defaultArgs,
    data: [],
    columns: [],
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach((data) => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    const handleIconClick = () => {};

    return (
      <>
        <Table
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="secondary"
          noDataContent="No data found"
          headerIconName={'expand_icon'}
          headerIconOnClick={handleIconClick}
        />
      </>
    );
  },
};

export const PrimaryHeader: Story = {
  args: {
    ...defaultArgs,
    data: [],
    columns: [],
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach((data) => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);

    return (
      <>
        <Table
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="primary"
          noDataContent="No data found"
        />
      </>
    );
  },
};
export const FixedHeaderWithBorder: Story = {
  args: {
    ...defaultArgs,
    data: [],
    columns: [],
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach((data) => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);

    return (
      <>
        <Table
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="primary"
          withFixedHeader={true}
          borderWithRadius={true}
          noDataContent="No data found"
          height="300px"
          freezeColumns={2}
          tableHeaderZindex={100}
        />
      </>
    );
  },
};
export const WithCheckBox: Story = {
  args: {
    ...defaultArgs,
    data: [],
    columns: [],
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    const [allSelected, setAllSelected] = useState(false);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach((data) => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);

    const onSelectClick = (obj: any) => {
      if (obj['allSelected'] !== undefined) {
        setAllSelected(!allSelected);
      }
    };

    return (
      <>
        <Table
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="primary"
          withCheckbox={true}
          onSelect={onSelectClick}
          allSelected={allSelected}
          noDataContent="No data found"
        />
      </>
    );
  },
};
export const TableWithNoData: Story = {
  args: {
    ...defaultArgs,
    data: [],
    columns: [],
  },
  render: () => {
    const tableData: [] = [];

    return (
      <>
        <Table
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="primary"
          noDataContent="No data found"
          noDataImageSize="small"
          height="500px"
        />
      </>
    );
  },
};

export const DragAndDropTable: Story = {
  args: {
    ...defaultArgs,
    data: sampleData.map((x) => x.project),

    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)',
  },
  render: () => {
    //! Important prerequisite: tableData should have a unique ID key, which should be either _id or id.
    const [tableData, setTableData] = useState(
      sampleData.map((data) => data.project)
    );
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach((data) => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);

    const handleIconClick = () => {};

    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const updatedData = rearrangeDragItem(tableData, oldIndex, newIndex);
      setTableData(updatedData);
    };
    return (
      <>
        <Table
          draggable
          onDragEnd={onDragEnd}
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="secondary"
          noDataContent="No data found"
          headerIconName={'expand_icon'}
          headerIconOnClick={handleIconClick}
        />
      </>
    );
  },
};

export const EditComponentTable: Story = {
  args: {
    ...defaultArgs,
    data: sampleData.map((data) => data.project),

    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)',
  },
  render: () => {
    //! Important prerequisite: tableData should have a unique ID key, which should be either _id or id.
    const [tableData, setTableData] = useState(
      sampleData.map((data) => data.project)
    );
    const [editMode, setEditMode] = useState<string>('');
    const columnsData = [
      {
        header: 'Name',
        accessor: 'name',
        width: 150,
        cell: ({ value }: any) => (
          <Typography color="var(--brand-color)">{value}</Typography>
        ),
        onClick: (_: string, row: DynamicObj) => {
          if (!row?.disabled) setEditMode(row.id);
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
      {
        header: 'Modified By',
        accessor: 'modifiedByUname',
      },
      {
        header: 'Modified On',
        accessor: 'modifiedOn',
        cell: ({ value }: any) => <div>{value}</div>,
      },
    ];
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach((data) => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    const handleIconClick = () => {};
    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const updatedData = rearrangeDragItem(tableData, oldIndex, newIndex);
      setTableData(updatedData);
    };
    const handleSave = (data: FormValues) => {
      console.warn('data', data);
      setEditMode('');
    };
    return (
      <>
        <Table
          draggable
          onDragEnd={onDragEnd}
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="secondary"
          noDataContent={'No data found'}
          headerIconName={'expand_icon'}
          headerIconTooltipTitle={'Expand'}
          headerIconOnClick={handleIconClick}
          editMode={editMode}
          editComponent={
            <EditComponent
              key={editMode}
              handleCancel={() => setEditMode('')}
              handleSave={handleSave}
            />
          }
        />
      </>
    );
  },
};

export const WithAccordion: Story = {
  args: {
    ...defaultArgs,
    data: [],
    columns: [],
  },
  render: () => {
    const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

    const getAccordionStatus = (rowId: any, toggle = false) => {
      if (toggle) {
        setOpenAccordionId((prev) => (prev === rowId ? null : rowId));
      }
      return openAccordionId === rowId;
    };

    const data = [
      {
        id: 1,
        name: 'Row 1',
        description: 'This is the description for Row 1',
      },
      {
        id: 2,
        name: 'Row 2',
        description: 'This is the description for Row 2',
      },
      {
        id: 3,
        name: 'Row 3',
        description: 'This is the description for Row 3',
      },
    ];
    const columns = [
      {
        header: 'Name',
        accessor: 'name',
        cell: (e: any) => {
          return (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => getAccordionStatus(e.row.id, true)}
            >
              click me{' '}
            </div>
          );
        },
      },
      { header: 'Description', accessor: 'description' },
    ];
    return (
      <>
        <Table
          {...defaultArgs}
          data={data}
          columns={columns}
          headerType="primary"
          noDataContent="No data found"
          getAccordionStatus={getAccordionStatus}
          accordionContent={<div>Accordion content</div>}
        />
      </>
    );
  },
};
export default meta;

export const ScrollToCallBack: Story = {
  render: () => {
    const SampleData = [
      {
        defectId: '3PA10002',
        summary: 'Def',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10005',
        summary: 'gfdhj',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10027',
        summary: 'defect1',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10028',
        summary: 'def1',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10029',
        summary: 'def12oi3uy',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10030',
        summary: 'def789',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10031',
        summary: 'def',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10032',
        summary: 'def1',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10033',
        summary: 'def4567890[',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10037',
        summary: 'def567',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10038',
        summary: 'def657890',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10023',
        summary: 'def11111',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10024',
        summary: 'def2',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10025',
        summary: 'qwsedf',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10026',
        summary: 'swdefrgt',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10012',
        summary: 'Def',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10039',
        summary: 'javascript:/*/scriptimg/',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10040',
        summary: 'hgiuyiu',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10046',
        summary: 'unable to login',
        createdBy: 'Sanjay',
      },
      {
        defectId: '3PA10048',
        summary: 'kiuytfr',
        createdBy: 'Sanjay',
      },
    ];

    const columnsData = [
      {
        header: 'Bug ID',
        accessor: 'defectId',
        width: '20%',
      },
      {
        header: 'Bug Summary',
        accessor: 'summary',
        width: '60%',
      },
      {
        header: 'Created By',
        accessor: 'createdBy',
        width: '20%',
      },
    ];
    const tableRef = useRef<HTMLTableSectionElement>(null);

    const scrollFun = () => {
      if (tableRef.current) {
        const tableCurrent = tableRef.current;
        tableCurrent.scrollTop = tableCurrent.scrollHeight;
      }
    };

    return (
      <>
        <Button variant="primary" label="Click To Scroll" onClick={scrollFun} />

        <Table
          data={SampleData || []}
          columns={columnsData}
          headerType="secondary"
          withFixedHeader
          tableRef={tableRef}
          noDataContent={
            <Typography
              fontWeight="semi-bold"
              color="var(--toggle-disable-icon-color)"
              style={{ padding: '8px 0px' }}
            >
              No scripts found
            </Typography>
          }
          height={'256px'}
        />
      </>
    );
  },
};

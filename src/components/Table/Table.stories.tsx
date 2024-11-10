import { useEffect, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Table from './Table';
import Icon from '../Icon';

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
      modifiedByUname: 'user4',
      modifiedOn: '18-03-2024 10:47',
      name: 'Test1',
      type: 'Web',
      status: 'Open',
      checked: false,
      disabled:true
    },
  },
  {
    project: {
      modifiedByUname: 'user3',
      modifiedOn: '13-03-2024 15:15',
      name: 'Test2',
      type: 'Mobile',
      status: 'Close',
      checked: true,
      disabled:true
    },
  },
  {
    project: {
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test3',
      type: 'Web',
      status: 'Close',
      checked: true,
      disabled:true
    },
  },
  {
    project: {
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test4',
      type: 'Web & Mobile',
      status: 'Open',
      checked: false,
      disabled:false
    },
  },
  {
    project: {
      modifiedByUname: 'user4',
      modifiedOn: '18-03-2024 10:47',
      name: 'Test1',
      type: 'Web',
      status: 'Open',
      checked: false,
      disabled:true
    },
  },
  {
    project: {
      modifiedByUname: 'user3',
      modifiedOn: '13-03-2024 15:15',
      name: 'Test2',
      type: 'Mobile',
      status: 'Close',
      checked: true,
      disabled:true
    },
  },
  {
    project: {
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test3',
      type: 'Web',
      status: 'Close',
      checked: true,
      disabled:true
    },
  },
  {
    project: {
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test4',
      type: 'Web & Mobile',
      status: 'Open',
      checked: false,
      disabled:false
    },
  },
  {
    project: {
      modifiedByUname: 'user4',
      modifiedOn: '18-03-2024 10:47',
      name: 'Test1',
      type: 'Web',
      status: 'Open',
      checked: false,
      disabled:false
    },
  },
  {
    project: {
      modifiedByUname: 'user3',
      modifiedOn: '13-03-2024 15:15',
      name: 'Test2',
      type: 'Mobile',
      status: 'Close',
      checked: true,
      disabled:false
    },
  },
  {
    project: {
      modifiedByUname: 'user2',
      modifiedOn: '13-03-2024 15:30',
      name: 'Test3',
      type: 'Web',
      status: 'Close',
      checked: true,
      disabled:false
    },
  },
  {
    project: {
      modifiedByUname: 'user1',
      modifiedOn: '18-03-2024 15:36',
      name: 'Test4',
      type: 'Web & Mobile',
      status: 'Open',
      checked: false,
      disabled:false
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
          <div style={{ textAlign: 'right' }} className="icon-container">
            <span>
              <Icon name="edit_icon" height={12} width={12} />
            </span>
            <span>
              <Icon name="delete" height={12} width={12} />
            </span>
          </div>
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

export const Default: Story = {
  args: {
    ...defaultArgs,
    data: sampleData.map((x) => x.project),

    columns: columnsData,
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

    return (
      <>
        <Table
          {...defaultArgs}
          data={tableData}
          columns={columnsData}
          headerType="secondary"
          noDataContent="No data found"
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
    const [tableData] = useState([]);

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
export default meta;

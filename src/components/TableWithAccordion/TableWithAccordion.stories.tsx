import { StoryObj, Meta } from '@storybook/react';
import TableWithAccordion from './TableWithAccordion';
import { sampleData } from './data';

const meta: Meta<typeof TableWithAccordion> = {
  title: 'Components/TableWithAccordion',
  component: TableWithAccordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TableWithAccordion>;
const defaultArgs = {
  tableMeta: [],
  tableData: [],
};

const emptyData: never[] = [];
const columnsData = [
  {
    header: 'Description',
    accessor: 'desc',
    width: 100,
  },
  {
    header: 'SUITE NAME',
    accessor: 'suiteName',
    width: 100,
  },
  {
    header: 'SUITE TYPE',
    accessor: 'suiteName',
    width: 100,
  },
  {
    header: 'SUITE ACCESS',
    accessor: 'suiteName',
    width: 100,
  },
  {
    header: 'Modified By',
    accessor: 'modifiedBy',
    width: 100,
  },
];

export const TableWithRowAccordion: Story = {
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: sampleData,
    accordionType: 'row',
    TableAccordionStateIconWidth:4,
    TableAccordionStateIconHeight:8,
  },
};
export const TableWithColumnAccordion: Story = {
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: sampleData,
    accordionType: 'column',
    TableAccordionStateIconWidth:4,
    TableAccordionStateIconHeight:8,
  },
};

export const EmtptyTableWithColumnAccordion: Story = {
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: emptyData,
    accordionType: 'column',
    TableAccordionStateIconWidth:4,
    TableAccordionStateIconHeight:8,
  },
};

export const AccordionTableWithFixedHeader: Story = {
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: sampleData,
    accordionType: 'row',
    height: '200px',
    withFixedHeader: true,
    TableAccordionStateIconWidth:4,
    TableAccordionStateIconHeight:8,
  },
};

export default meta;

import { ReactElement, ReactNode } from 'react';

export interface ColumnsProps {
  /**
   * column name
   */
  header: string;
  /**
   * data key for particular column
   */
  accessor: string;
  /**
   * className for a column
   */
  className?: string;
  /**
   * width of a column
   */
  width?: number;
  /**
   * data for the column
   */
  cell?: (e: any) => JSX.Element | string | ReactNode;

  extraInfo: (e: any) => JSX.Element | string | ReactNode;

  onClick?: (colum: string, row: DataProps, index: number) => void;
}
export interface DataProps {
  /**
   * data for each row
   */
  [key: string]: any;

}
export interface AddNlpProp {
  action?: 'addBelow' | 'addLast' | 'replaceNlp' | 'EditNlp';

  nlpName?: string;

  sourceIndex?: number;

  id?: string,
}

export interface SelectedItemProps {
  /**
   * selected row object | All selected flag
   */
  [key: string]: string | number | boolean;
}
export interface PrePostTableProps {
  /**
   * Data for table
   */
  data: Array<number | string | DataProps>;
  /**
   * Column details for table
   */
  columns: Array<any>;
  /**
   * Header type to have different background color
   */
  headerType: 'default' | 'primary' | 'secondary' | 'tertiary';
  /**
   * withFixedHeader prop to have non-scrollable fixed table header
   */
  withFixedHeader?: boolean;
  /**
   * borderWithRadius prop to have table with border 1px and borderRadius 5px
   */
  borderWithRadius?: boolean;
  /**
   * Check box feature to select the row
   */
  withCheckbox?: boolean;
  /**
   * Event for checkbox onClick
   */
  onSelect?: (e: object, arg: SelectedItemProps) => void;
  /**
   * Check box feature to select the row
   */
  allSelected?: boolean;
  /**
   * send true to show partial checkbox in the header
   */
  partialSelected?: boolean;
  /**
   * send true to disable the checkbox in the header
   */
  headerCheckboxDisabled?: boolean;
  /**
   * The content that to be displayed if no data not found
   */
  noDataContent: string | ReactNode;
  /**
   * Image that to be displayed if you don't have data
   */
  noDataImage?: string;
  /**
   * Size of the image that to be displayed if you don't have data
   */
  noDataImageSize?: 'x-large' | 'large' | 'medium' | 'small' | 'x-small';
  /**
   *  Height of the table in string
   */
  height?: string;
  /**
   *  classNames for the table container
   */
  className?: string;
  /**
   *  classNames for the table Header container
   */
  tableHeadClass?: string;
  /**
   *  classNames for the table Row container
   */
  tableBodyRowClass?: string;
  /**
   * custom color for the column text
   */
  headerTextColor?: 'default' | 'primary';
  /**
   * custom color for the row text
   */
  tableDataTextColor?: string;
  /**
   * icon for the table header, for expand or other purposes
   */
  headerIconName?: string;
  /**
   * handle function for the table header icon
   */
  headerIconOnClick?: () => void;
  /**
   * Drag and Drop pass true to enable
   */
  draggable?: boolean;
  /**
   * Drag and Drop indexes
   */
  onDragEnd?: (startIndex: number, endIndex: number) => void | undefined;

  loadMore?: (_direction?: string) => void;
  /**
   * enable editMode by setting state row id
   */
  editMode?: number | string;
  /**
    * The content that to be displayed if editComponent
    */
  editComponent?: ReactNode;
  /**
   * The content that to be displayed NlpInput Component
   */
  NlpComponent?: ReactNode;
  /**
  * state for the Add new Row in Table
  */

  AddNlp?: AddNlpProp | undefined | null;

  /**
    * handle function for Drag Starting in the Table
    */
  handleDragStart?: () => void;

  loading?: boolean

  handleViewComponent?: (
    _rowData: DataProps,
    _toggleViewRow: (_val: null) => void
  ) => (() => ReactElement) | null;

  handleAccordion?: (row: any) => void;
}

export interface FormValues {
  ifFailed: string | null;
}

export interface TableMainRow {
  row: DataProps;
  columns: DataProps;
  tableBodyRowClass?: string;
  handleOnclick: (column: ColumnsProps, row: DataProps, index: number) => void
  tableDataTextColor?: string;
  withCheckbox?: boolean;
  onSelectClick?: any
  draggable?: boolean | undefined;
  indexNumber?: number;
  tableType?: string;
  viewModeId?: string | null
  ViewComponent?: React.FC | null
  handleClick?: (item: DataProps) => void;
  handleStepGroupExpand?: (item: DataProps) => void;
  isStepGroupExpanded?: (stepId: string) => boolean;
  dataLength?: number
}

export interface PrePostStepAccordionsProps {
  data: DataProps[];
  level?: number;
  columnCount?: number;
  viewModeId?: string | null
  ViewComponent?: React.FC | null
  handleClick?: (item: DataProps) => void;
  tableType?: string;
  handleStepGroupExpand?: (item: DataProps) => void;
  isStepGroupExpanded?: (stepId: string) => boolean;
}
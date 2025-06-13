import { ReactElement, ReactNode } from "react";

export interface ColumnProps {
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

  extraInfo?: (e: any) => JSX.Element | string | ReactNode;
}
export interface AddNlpProp {
  action?: 'addBelow' | 'addLast' | 'replaceNlp' | 'EditNlp';
  nlpName?: string;
  sourceIndex?: number;
}
export interface DataProps {
  /**
   * data for each row
   */
  [key: string]: any;
}

export interface TableProps {
  /**
   * Column details for table
   */
  tableMeta: Array<ColumnProps>;
  /**
   * Data for table
   */
  tableData: Array<DataProps>;

  /**
   *  Specific sentence to be displayed data not found
   */
  noDataContent?: string | ReactNode;
  /**
   * withFixedHeader prop to have non-scrollable fixed accordion table header
   */
  withFixedHeader?: boolean;
  /**
   *  Height of the table in string
   */
  height?: string;
  /**
   * Header type to have different background color
   */
  headerType: 'default' | 'primary' | 'secondary';

  onDragEnd?: (startIndex: number, endIndex: number) => void | undefined;

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
  handleDragStart?: VoidFunction;

  handleAccordion?: (e: any) => void;
  /**
   * Event for checkbox onClick
   */
  onSelectClick?: (e: any) => void;
  /**
   * Check box feature to select the row
   */

  handleViewComponent?: (
    _rowData: DataProps,
    _toggleViewRow: (_val: null) => void
  ) => (() => ReactElement) | null;

  loading?: boolean;

  isViewPrivilegeMode?: boolean;

  defaultExpanded?: 'Steps' | 'POST' | 'PRE' | 'Depends' | 'All';

  isHeaderRequired?: boolean;
}

import React, { LegacyRef, ReactNode } from 'react';

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

  onClick?: (colum: string, row: DataProps) => void;
}
export interface DataProps {
  /**
   * data for each row
   */
  [key: string]: any;
}
export interface SelectedItemProps {
  /**
   * selected row object | All selected flag
   */
  [key: string]: string | number | boolean;
}
export interface TableProps {
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
  noDataContent?: string | ReactNode;
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
   * get the status of the accordion which is open or close
   */
  getAccordionStatus?: Function;
  /**
   * content for the accordion
   */
  accordionContent?: ReactNode;
  /**
   * enable editMode by setting state row id
   */
  editMode?: string | null;
  /**
   * The content that to be displayed if editComponent
   */
  editComponent?: ReactNode;
  columnSticky?: boolean;
  /**
   * tableRef to get the scroll position & to pass control of table to parent component
   */
  tableRef?:
    | LegacyRef<HTMLTableSectionElement>
    | React.RefObject<HTMLTableSectionElement>
    | null;
  /**
   * Explicitly handling the checkbox disability for the row.
   */
  isRowCheckBoxDisable?: boolean;
  /**
   * Explicitly handling the disability for the row.
   */
  isRowDisabled?: boolean;

  /**
   * z-index for the table header
   */
  tableHeaderZindex?: number;
}

export interface FormValues {
  ifFailed: string | null;
}
export interface SortableRowProps {
  columnSticky?: boolean;
}

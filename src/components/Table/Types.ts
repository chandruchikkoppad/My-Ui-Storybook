import { ReactNode } from 'react';

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
    headerType: 'default' | 'primary' | 'secondary';
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
  }
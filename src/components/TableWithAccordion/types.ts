import { ReactNode } from "react";

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
     * Table type
     */
    accordionType: 'row' | 'column';
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
    /**
     * Accordion collapse and expand Icon width
     */
    TableAccordionStateIconWidth:number,
    /**
     * Accordion collapse and expand Icon height
     */
    TableAccordionStateIconHeight:number,
    highlightText?: string;
  }
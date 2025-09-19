interface WorkSheet {
  /** The name of the worksheet */
  sheetName: string;

  /** 2D array of worksheet data (cells) */
  data: WorkData[][];

  /** Additional properties for configuring rows, columns, and cells */
  rows?: {
    /** Specifies which rows should be read-only (indexed from 1) */
    readOnly?: number[];
    inputType?: { [key: number]: InputType };
  };
  columns?: {
    /** Specifies which columns should be read-only (indexed from 1) */
    readOnly?: number[];
    inputType?: { [key: number]: InputType };
  };
  cells?: {
    /** Specifies which cells should be read-only (indexed with row and column numbers, starting from 1) */
    readOnly?: number[][]; // 2D array for specifying read-only cells
    inputType?: { position: [number, number]; config: InputType }[];
  };
}

interface InputType {
  type: 'dropDown' | 'text' | 'file';
  options?: {
    disable: boolean;
    label: string;
    name: string;
    value: string;
    color: string;
  }[];
  inputProps?: {};
}

interface WorkData {
  /** Value of the cell */
  value: string;
  /** Styling options for the cell */
  style: BackendStyle;
  type?: boolean;
  readOnly?: boolean;
  inputType?: InputType;
  contextDisable?: Record<string, boolean>;
}

type BackendStyle = {
  name: string;
  size: number;
  bold: boolean;
  italic: boolean;
  color: string;
  backgroundColor: string;
  borderColor: string;
  underline: boolean;
  border: {
    top: string;
    bottom: string;
    left: string;
    right: string;
  };
  alignment: {
    horizontal: string;
    vertical: string;
    wrapText: boolean;
  };
};

interface SaveData {
  sheetName: string;
  data: {
    value: string;
    style: BackendStyle;
    readOnly: boolean;
    inputType: InputType;
  }[][];
}

/** A generic type to represent a 2D matrix of any type (or undefined values) */
type Matrix<T> = (T | undefined)[][];

interface ContextAction {
  /** Name of the right-click option */
  name: string;

  /** Display title of the right-click menu option */
  title: React.ReactNode;

  /** The action that occurs when the right-click menu option is selected */
  action: () => void;
}

interface ContextOption {
  /** Type of the context option ('cell', 'row', 'column') */
  name: string;

  /** Array of context menu actions for right-click options */
  value: ContextAction[];
}

interface SelectedCell {
  /** The row index of the selected cell */
  row: number;

  /** The column index of the selected cell */
  column: number;
}

interface ColorContainer {
  /** The color used for the text (hex code) */
  color: string;

  /** The background color used for the cell (hex code) */
  backgroundColor: string;

  /** The border color used for the cell (hex code) */
  borderColor: string;
}

interface ContextMenuState {
  open: boolean;
  contextType: 'sheet' | 'column' | 'row' | 'cell' | null;
  options: optionsType[];
}

interface optionsType {
  label: string;
  value: string;
  iconName: string;
  action: () => void;
  disableTooltip: string;
  visible: boolean;
  disable: boolean;
}

interface SelectedValue {
  /** The value inside the selected cell */
  value: string;

  /** The row index of the selected cell */
  row: number;

  /** The column index of the selected cell */
  column: number;

  /** The column represented as an alphabetical string ('A', 'B') */
  alphaCol: string;

  /** The style applied to the selected cell */
  style: React.CSSProperties;

  /** The sheet name where the cell is located */
  sheet: string;
}
interface ExcelSheetBarProps {
  /** Object containing details about the file, including sheet names */
  fileDetails: {
    sheetNames: string[];
  };

  /** Function to handle sheet change events */
  handleSheetChange: (name: string, index: number) => void;

  /** Function to open the context menu on a sheet */
  contextMenu: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    name: string,
    index: number
  ) => void;

  /** Function to add a new sheet */
  addSheet: () => void;

  /** Object representing the currently selected sheet */
  selectedSheet: {
    name: string;
    index: number;
  };
  /** Function to update the context Type */
  contextSelect: (event: React.MouseEvent) => void;
}

interface ContextMenuProps {
  /** Custom context menu options */
  customContext: {
    name: string;
    title: React.ReactNode;
    action: () => void;
  }[];

  /** Object that holds different context actions based on the type (cell, row, column, sheet_options) */
  contextAction: {
    /** Function to add a row */
    addRow: () => void;

    /** Function to delete a row */
    deleteRow: () => void;

    /** Function to add a column */
    addColumn: () => void;

    /** Function to delete a column */
    deleteColumn: () => void;

    /** Function to add a new sheet */
    addSheet: () => void;

    /** Function to delete a sheet */
    deleteSheet: () => void;
  };

  /** The state of the context menu, controlling its visibility and position */
  contextData: ContextMenuState;

  /** Function to update the context menu state */
  setContextData: React.Dispatch<React.SetStateAction<ContextMenuState>>;
}

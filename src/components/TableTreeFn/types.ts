import { ReactNode } from 'react';
import { TreeNodeProps as TreeNode } from '../../ComponentProps/TreeNodeProps';

interface NewNode {
  sourceId?: string;
  payloadSourceId?: string;
  action?: 'addAbove' | 'addBelow' | 'addInside';
  type?: 'input' | 'inputWithDropdown';
  options?: [];
  selectedOption?: string;
  value?: string;
  error?: string;
  label?: string;
  confirmIconTooltip?: string;
  cancelIconTooltip?: string;
  firstNodeKey?: string;
}

declare type JSX = ReactNode | JSX.Element[] | string | null;

export interface TableCellProps {
  treeRowRef?: React.RefObject<HTMLDivElement | null>;
  col: any;
  node: any;
  selected: string[];
  select: string | null;
  onCheckBoxChange: (e: any, node: string[] | any) => void;
  onToggleExpand: (node: any) => void;
  index?: number;
  onAddConfirm?: (_name: string, _type?: Option) => void;
  onAddCancel?: () => void;
  handleEditFieldError?: (inputText: string) => string;
  isExpanding?: boolean;
  columnTextColor?: string;
  hideOnDisable?: boolean;
  scriptLengthTruncate: number;
  addModuleInputWidth?: number;
  addModuleSelectWidth?: number;
  disableEditLabelConfirmIcon?: boolean;
}
export type RootNode = {
  node: any;
  select: 'radio' | 'checkbox' | 'none';
  cell?: (row: any) => JSX;
  actions?: (
    row: any,
    treeRowRef?: React.RefObject<HTMLDivElement | null>
  ) => JSX;
};

export interface TableHeadProps {
  columnsData: any[];
  rootNode?: RootNode;
  selected: string[];
  selectedNode?: string;
  tableHeaderBgColor?: string;
  onCheckBoxChange: (e: any, node: string[] | any) => void;
  hideOnDisable?: boolean;
  transparentHeader?: boolean;
  scriptLengthTruncate?: number;
}

export interface TableBodyProps {
  flattenedTreeData: any[];
  columnsData: any[];
  selected: string[];
  select: string | null;
  onRowClick: (e: any, node: any) => void;
  onToggleExpand: (node: TreeNode) => void;
  onCheckBoxChange: (e: any, node: string[] | any) => void;
  newNode?: NewNode;
  onAddConfirm?: (_name: string, _type?: Option) => void;
  onAddCancel?: () => void;
  handleEditFieldError?: (inputText: string) => string;
  expanding?: string | null;
  rootNode: TreeNode;
  selectedNode?: string;
  hideOnDisable?: boolean;
  scriptLengthTruncate: number;
  addModuleInputWidth?: number;
  addModuleSelectWidth?: number;
  disableEditLabelConfirmIcon?: boolean;
}

export interface TableRowProps {
  node: any;
  columnsData: any[];
  selected: string[];
  select: string | null;
  onRowClick: (e: any, node: any) => void;
  onToggleExpand: (node: TreeNode) => void;
  onCheckBoxChange: (e: any, node: string[] | any) => void;
  index?: number;
  onAddConfirm?: (_name: string, _type?: Option) => void;
  onAddCancel?: () => void;
  handleEditFieldError?: (inputText: string) => string;
  isExpanding?: boolean;
  selectedNode?: string;
  hideOnDisable?: boolean;
  scriptLengthTruncate: number;
  addModuleInputWidth?: number;
  addModuleSelectWidth?: number;
  disableEditLabelConfirmIcon?: boolean;
}

export interface Column {
  name: string | JSX;
  accessor: string;
  width: string;
  isClickable?: boolean;
  cell?: (row: any) => JSX;
  actions?: (
    row: any,
    treeRowRef?: React.RefObject<HTMLDivElement | null>
  ) => JSX;
  isTree?: boolean;
  defaultValue?: string;
  defaultActions?: () => JSX;
}

export interface TreeTableProps {
  treeData: any;
  columnsData: Column[];
  selected?: string[];
  select?: 'radio' | 'checkbox' | 'none';
  onChange?: (e: any, node: string[] | any) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, row: TreeNode) => void;
  onExpand?: (node: TreeNode) => void;
  loadMore?: (_direction?: string) => void;
  tableBorder?: string;
  height?: number | string;
  newNode?: NewNode;
  onAddConfirm?: (_name: string, _type?: Option) => void;
  onAddCancel?: () => void;
  loading?: boolean;
  rootNode?: RootNode;
  getContentLength?: number;
  handleEditFieldError?: (inputText: string) => string;
  pagination?: boolean;
  selectedNode?: string;
  tableHeaderBgColor?: string;
  hideOnDisable?: boolean;
  freezeColumns?: number;
  scriptLengthTruncate?: number;
  addModuleInputWidth?: number;
  addModuleSelectWidth?: number;
  onScroll?: () => void;
  disableEditLabelConfirmIcon?: boolean;
  transparentHeader?: boolean;
  navigateTreeNode?: string | null;
  handleRemoveNavigateTreeNode?: () => void;
  scrollThreshold?: number;
}

type OptionValue = any;

export interface Option {
  [key: string]: OptionValue;
}

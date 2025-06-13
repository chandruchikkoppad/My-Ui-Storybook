import type { TableBodyProps } from '../types';
import { addNewRow } from '../Utils/addNewRow';

import TableRow from './TableRow';

const TableBody = ({
  flattenedTreeData,
  columnsData,
  selected,
  select,
  onRowClick,
  onToggleExpand,
  onCheckBoxChange,
  newNode,
  onAddConfirm,
  onAddCancel,
  handleEditFieldError,
  expanding,
  rootNode,
  selectedNode,
  hideOnDisable,
  scriptLengthTruncate,
  addModuleInputWidth,
  addModuleSelectWidth,
  disableEditLabelConfirmIcon,
}: TableBodyProps) => {
  // commenting this code to add editLabel component to rootnode when data is empty
  // if (checkEmpty(flattenedTreeData)) {
  //   return null;
  // }

  return (
    <tbody className="ff-table-tree-body">
      <div
        style={{ position: 'sticky', left: 0 }}
        id="ff-table-tree-first-node"
      />

      {addNewRow(flattenedTreeData, newNode ?? {}, rootNode)?.map(
        (node, index) =>
          !node?.hide ? (
            <TableRow
              key={node.key}
              node={node}
              columnsData={columnsData}
              selected={selected}
              select={select}
              onRowClick={onRowClick}
              onToggleExpand={onToggleExpand}
              onCheckBoxChange={onCheckBoxChange}
              onAddConfirm={onAddConfirm}
              onAddCancel={onAddCancel}
              handleEditFieldError={handleEditFieldError}
              isExpanding={node.key === expanding}
              index={index}
              selectedNode={selectedNode}
              hideOnDisable={hideOnDisable}
              scriptLengthTruncate={scriptLengthTruncate}
              addModuleInputWidth={addModuleInputWidth}
              addModuleSelectWidth={addModuleSelectWidth}
              disableEditLabelConfirmIcon={disableEditLabelConfirmIcon}
            />
          ) : null
      )}
      <div
        style={{ position: 'sticky', left: 0 }}
        id="ff-table-tree-last-node"
      />
    </tbody>
  );
};

export default TableBody;

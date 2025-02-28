import React, { useRef } from 'react';

import type { TableRowProps } from '../types';

import TableCell from './TableCell';

const TableRow = React.memo(
  ({
    node,
    columnsData,
    selected,
    select,
    onRowClick,
    onToggleExpand,
    onCheckBoxChange,
    onAddConfirm,
    onAddCancel,
    handleEditFieldError,
    isExpanding,
    index,
    selectedNode,
    hideOnDisable
  }: TableRowProps) => {
    const treeRowRef = useRef<HTMLTableRowElement | null>(null);
    return (
      <tr
        data-level={node.hierarchy}
        ref={treeRowRef}
        className={`ff-table-tree-row show ${
          selectedNode && selectedNode === node.key ? 'hover' : ''
        }`}
        onClick={(e) => onRowClick(e, node)}
        id={index === 0 ? 'table-first-row' : node.key}
      >
        {columnsData.map((col) => (
          <TableCell
            treeRowRef={treeRowRef}
            key={col.name}
            col={col}
            node={node}
            selected={selected}
            select={select}
            onCheckBoxChange={onCheckBoxChange}
            onToggleExpand={onToggleExpand}
            onAddConfirm={onAddConfirm}
            onAddCancel={onAddCancel}
            handleEditFieldError={handleEditFieldError}
            isExpanding={isExpanding}
            hideOnDisable={hideOnDisable}
          />
        ))}
      </tr>
    );
  }
);

export default TableRow;

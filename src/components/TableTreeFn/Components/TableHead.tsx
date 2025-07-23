import React, { useState, useEffect, useRef } from 'react';
import { TableHeadProps } from '../types';
import Checkbox from '../../Checkbox';
import RadioButton from '../../RadioButton';
import { formatCellData } from '../Utils/formatDataCell';
import { prepareData } from '../../../utils/TableCell/TableCell';

const TableHead = React.memo(
  ({
    columnsData,
    rootNode,
    selected,
    onCheckBoxChange,
    selectedNode,
    tableHeaderBgColor,
    hideOnDisable,
    transparentHeader,
    scriptLengthTruncate = 25,
  }: TableHeadProps) => {
    // const hasDefaultValues = useMemo(
    //   () => columnsData.some(({ defaultValue }) => !!defaultValue),
    //   [columnsData]
    // );
    const rootNodeRowRef = useRef<HTMLTableRowElement | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    return (
      <thead className="ff-table-tree-head">
        <tr className="ff-table-tree-row no-hover">
          {columnsData.map(({ name, width }) => (
            <th
              className="ff-table-tree-th"
              key={name}
              style={{
                width: width,
                backgroundColor: transparentHeader
                  ? 'transparent'
                  : tableHeaderBgColor,
                pointerEvents: transparentHeader ? 'none' : 'auto',
              }}
            >
              {name}
            </th>
          ))}
        </tr>
        {rootNode && (
          <tr
            className={`ff-table-tree-row show ${
              selectedNode && selectedNode === rootNode?.node?.key
                ? 'hover'
                : ''
            }`}
            ref={rootNodeRowRef}
          >
            {columnsData.map((col, index) => (
              <td className="ff-table-tree-td" key={index}>
                {/* {defaultValue && ( */}
                <span className="tree-table-default-content">
                  {index === 0 &&
                    rootNode.select === 'checkbox' &&
                    !(hideOnDisable && rootNode.node.isDisabled) && (
                      <Checkbox
                        checked={
                          rootNode?.node?.selectedStatus !== 'partially' &&
                          (rootNode?.node?.selectedStatus === 'completely' ||
                            false)
                        }
                        partial={rootNode.node.selectedStatus === 'partially'}
                        onChange={(e) => onCheckBoxChange(e, rootNode.node)}
                        disabled={rootNode.node.isDisabled}
                      />
                    )}
                  {index === 0 &&
                    rootNode.select === 'radio' &&
                    !(hideOnDisable && rootNode.node.isDisabled) && (
                      <RadioButton
                        name={rootNode.node.key}
                        checked={selected.includes(rootNode.node.key)}
                        value={rootNode.node.key}
                        onChange={(e) => onCheckBoxChange(e, rootNode.node)}
                        disabled={rootNode.node.isDisabled}
                      />
                    )}
                  <span className="tree-table-td-content-text">
                    {col.accessor === 'name' ? (
                      <span>{rootNode.node[col.accessor]}</span>
                    ) : (
                      <span>
                        {formatCellData(
                          prepareData(rootNode.node, col),
                          scriptLengthTruncate
                        )}
                      </span>
                    )}
                    {rootNode.cell && index === 0 && (
                      <span className="table-tree-root-cell">
                        {(() => {
                          return rootNode.cell(rootNode.node);
                        })()}
                      </span>
                    )}
                  </span>
                  {rootNode.actions &&
                    index === 0 &&
                    isMounted &&
                    rootNodeRowRef.current && (
                      <div className="table-tree-row-action">
                        {(() => {
                          return rootNode.actions(
                            rootNode.node,
                            rootNodeRowRef
                          );
                        })()}
                      </div>
                    )}
                </span>
                {/* )} */}
              </td>
            ))}
          </tr>
        )}
      </thead>
    );
  }
);

export default TableHead;

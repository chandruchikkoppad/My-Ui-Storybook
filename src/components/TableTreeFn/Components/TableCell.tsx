import React from 'react';
import { prepareData } from '../../../utils/TableCell/TableCell';
import Checkbox from '../../Checkbox';
import RadioButton from '../../RadioButton';
import { TableCellProps } from '../types';
import { checkEmpty } from '../../../utils/checkEmpty/checkEmpty';
import AddModule from '../../EditLabel';
import Arrow from '../../../assets/icons/arrows_down_icon.svg?react';
import Spinner from '../../../assets/icons/spinner.svg?react';
import Tooltip from '../../Tooltip';
import { formatCellData } from '../Utils/formatDataCell';

const renderSpaces = (
  level: number,
  parentSiblings: boolean[] = [],
  isLast?: boolean | undefined,
  nextSibling?: boolean | undefined,
  isContainer?: boolean | undefined
) => {
  let siblingsArray = parentSiblings;
  let isLastNode = nextSibling !== undefined ? !nextSibling : isLast;
  if (checkEmpty(parentSiblings)) {
    if (!isNaN(level)) {
      siblingsArray = Array(level).fill(true);
    }
  }

  return (
    <div className="tree-table-space-container">
      {siblingsArray?.map((line, i) => (
        <span
          key={i}
          className={`tree-table-space-block tree-table-space-block-${i} ${
            !line ? 'no-lines' : ''
          } ${isLastNode && i === level - 1 ? 'last-node' : ''} ${
            isContainer ? 'folder' : ''
          }`}
        />
      ))}
    </div>
  );
};

const TableCell = React.memo(
  ({
    treeRowRef,
    col,
    node,
    selected,
    select,
    onCheckBoxChange,
    onToggleExpand,
    onAddConfirm,
    onAddCancel,
    handleEditFieldError,
    isExpanding,
    columnTextColor,
    hideOnDisable,
    scriptLengthTruncate,
    addModuleInputWidth,
    addModuleSelectWidth,
    disableEditLabelConfirmIcon,
  }: TableCellProps) => {
    //Todo uncomment the following code when we are highlighting the tree table nodes on hover
    // useEffect(() => {
    //   const handleHover = (event: MouseEvent, isHovering: boolean) => {
    //     const target = event.target as HTMLElement;
    //     const levelClass = Array.from(target.classList).find((cls) =>
    //       cls.startsWith('tree-table-space-block-')
    //     );

    //     if (levelClass) {
    //       const level = levelClass.split('-').pop();

    //       // Check if level is valid before selecting elements
    //       if (level) {
    //         const sameLevelBlocks = document.querySelectorAll(
    //           `.tree-table-space-block-${level}`
    //         ) as NodeListOf<HTMLElement>;

    //         sameLevelBlocks.forEach((block) => {
    //           if (isHovering) {
    //             block.classList.add('tree-table-hovered');
    //           } else {
    //             block.classList.remove('tree-table-hovered');
    //           }
    //         });
    //       }
    //     }
    //   };

    //   const spaceBlocks = document.querySelectorAll(
    //     '.tree-table-space-block'
    //   ) as NodeListOf<HTMLElement>;

    //   spaceBlocks.forEach((block) => {
    //     block.addEventListener('mouseenter', (e) => handleHover(e, true));
    //     block.addEventListener('mouseleave', (e) => handleHover(e, false));
    //   });

    //   return () => {
    //     spaceBlocks.forEach((block) => {
    //       block.removeEventListener('mouseenter', (e) => handleHover(e, true));
    //       block.removeEventListener('mouseleave', (e) => handleHover(e, false));
    //     });
    //   };
    // }, []);
    return (
      <td
        className={`ff-table-tree-td ${
          col.isTree && node.container ? 'folder' : ''
        }`}
        style={{
          color: `${columnTextColor || 'var(--ff-primary-text-color)'}`,
        }}
      >
        {col.isTree &&
          renderSpaces(
            node.hierarchy,
            node.parentSiblings,
            node.lastChild,
            node.nextSibling,
            node.container
          )}
        <div className="tree-title-container">
          {col.isTree && (
            <span
              className={`tree-table-space-block  last-block last-block tree-table-space-block-${
                node.hierarchy
              } ${
                node?.expanded ? 'tree-row-expanded' : 'tree-row-collapsed'
              } ${node.container && node.expandable ? '' : 'no-folder'}`}
            >
              {node.container && node.expandable && (
                <span onClick={() => onToggleExpand(node)}>
                  {' '}
                  {isExpanding ? <Spinner /> : <Arrow />}
                </span>
              )}
            </span>
          )}
          <span
            className={`tree-table-td-content ${
              col.isTree && node.container ? 'folder' : ''
            }`}
          >
            {!node?.isNewNode && (
              <>
                {col.isTree &&
                  select === 'checkbox' &&
                  !(hideOnDisable && node.unselectable) && (
                    <span className="tree-table-td-content-select">
                      {node.selectedStatus === 'none' ? (
                        <Tooltip
                          title={
                            node?.currentEnvId &&
                            node?.envId &&
                            node?.currentEnvId !== node?.envId
                              ? 'This script is assigned to another environment. Selecting it will reassign it to the current environment.'
                              : undefined
                          }
                        >
                          <Checkbox
                            checked={node.selectedStatus === 'completely'}
                            partial={node.selectedStatus === 'partially'}
                            onChange={(e) => onCheckBoxChange(e, node)}
                            disabled={
                              node.unselectable ||
                              node.state === 'REVIEW' ||
                              node?.isDisable === true
                            }
                            isDefaultHover={
                              node.selectedStatus === 'none' && !!node.machine
                            }
                          />
                        </Tooltip>
                      ) : (
                        <Checkbox
                          checked={node.selectedStatus === 'completely'}
                          partial={node.selectedStatus === 'partially'}
                          onChange={(e) => onCheckBoxChange(e, node)}
                          disabled={
                            node.unselectable ||
                            node.state === 'REVIEW' ||
                            node?.isDisable === true
                          }
                        />
                      )}
                    </span>
                  )}
                {col.isTree &&
                  select === 'radio' &&
                  !(hideOnDisable && node.unselectable) && (
                    <span className="tree-table-td-content-select">
                      <RadioButton
                        name={node.key}
                        checked={selected.includes(node.key)}
                        value={node.key}
                        onChange={(e) => onCheckBoxChange(e, node)}
                        disabled={
                          node.unselectable ||
                          node.state === 'REVIEW' ||
                          node?.isDisable === true
                        }
                      />
                    </span>
                  )}
              </>
            )}
            {node.isNewNode && col.isTree ? (
              <AddModule
                onCancel={onAddCancel}
                onConfirm={onAddConfirm}
                value={node.value}
                label={node?.label}
                optionsList={node.options}
                selectedOption={node.selectedOption}
                withDropdown={node.type === 'inputWithDropdown'}
                handleCustomError={handleEditFieldError}
                inputFieldWidth={addModuleInputWidth}
                selectFieldWidth={addModuleSelectWidth}
                confirmIconTooltip={node.confirmIconTooltip}
                cancelIconTooltip={node.cancelIconTooltip}
                isOnBlurTrue={true}
                isDisable={{ confirm: disableEditLabelConfirmIcon }}
              />
            ) : (
              <span className="tree-table-td-content-text">
                {formatCellData(prepareData(node, col), scriptLengthTruncate)}
              </span>
            )}
          </span>
        </div>
        {col.actions && !node?.isNewNode && (
          <div className={`table-tree-row-action`}>
            {(() => {
              return col.actions(node, treeRowRef);
            })()}
          </div>
        )}
      </td>
    );
  }
);

export default TableCell;

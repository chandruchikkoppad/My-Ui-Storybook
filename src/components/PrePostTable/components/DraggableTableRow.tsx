import { useSortable } from '@dnd-kit/sortable';
import classNames from 'classnames';
import { FC, useMemo, memo } from 'react';
import { prepareData } from '../../../utils/TableCell/TableCell';
import Checkbox from '../../Checkbox';
import Icon from '../../Icon';
import Typography from '../../Typography';
import { TableMainRow } from '../Types';
import PrePostStepAccordions from './PrePostStepAccordions';
import { CSS } from '@dnd-kit/utilities';
import '../PrePostTable.scss';

const DraggableTableRow: FC<TableMainRow> = ({
  row,
  columns,
  tableBodyRowClass,
  handleOnclick,
  tableDataTextColor,
  withCheckbox,
  onSelectClick,
  draggable,
  indexNumber = 0,
  dataLength = 0,
  viewModeId,
  ViewComponent,
  handleClick,
  handleStepGroupExpand,
  isStepGroupExpanded,
}) => {
  const isDisabled = row?.isDisabled;
  const rowId = row?._id || row?.stepId;
  const isDragDisabled =
    isDisabled || dataLength <= 1 || row.cascaded === 'cascaded';
  let serialNumber = (indexNumber + 1).toString();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: rowId,
      disabled: isDragDisabled,
    });

  const style = useMemo(
    () => ({
      transform: CSS.Transform.toString(transform),
      transition,
    }),
    [transform, transition]
  );

  const expanded = isStepGroupExpanded?.(row.stepId);
  const dragStyle = {
    opacity: isDragDisabled ? '0' : '1',
    cursor: isDragDisabled ? 'default' : 'grab',
  };

  return (
    <>
      <tr
        ref={setNodeRef}
        style={style}
        key={rowId}
        className={classNames(tableBodyRowClass, {
          'disabled-row': isDisabled,
        })}
      >
        {columns.map((column: any, index: number) => {
          const firstColumn = index === 0;
          return (
            <td
              key={`${column.accessor}${index}`}
              style={{ paddingLeft: firstColumn && draggable ? '0px' : '8px' }}
              onClick={() => handleOnclick(column, row, index)}
              className={classNames(column.className, {
                'clickable-cell': column.onClick,
              })}
            >
              <Typography
                as="div"
                color={tableDataTextColor}
                className="ff-data-checkbox-container"
              >
                {firstColumn && withCheckbox && (
                  <span className="ff-table-checkbox">
                    <Checkbox
                      onChange={(e) => onSelectClick(e, row)}
                      checked={row.checked}
                      disabled={!!isDisabled}
                    />
                  </span>
                )}
                {firstColumn && draggable && (
                  <div
                    className={
                      isDisabled ? 'ff-table-drag' : 'ff-table-drag-icon'
                    }
                    {...listeners}
                    {...attributes}
                  >
                    <span style={dragStyle}>
                      <Icon name="drag" />
                    </span>
                  </div>
                )}
                {prepareData(row, column, indexNumber)}
                {firstColumn && ['PRE', 'POST', 'Group'].includes(row.type) && (
                  <div
                    className={`pre-accordion-arrow ${
                      expanded ? 'expanded' : ''
                    }`}
                  >
                    <Icon
                      name="arrow_right"
                      color={
                        expanded ? 'var(--brand-color)' : 'var(--default-color)'
                      }
                      width={12}
                      height={12}
                      className="pre-arrow-svg"
                      onClick={() => {
                        handleStepGroupExpand?.({ ...row, serialNumber });
                      }}
                    />
                  </div>
                )}
                {column.extraInfo && column.extraInfo({ row, indexNumber })}
              </Typography>
            </td>
          );
        })}
      </tr>
      {expanded && (
        <PrePostStepAccordions
          data={row.data}
          columnCount={columns.length}
          viewModeId={viewModeId}
          ViewComponent={ViewComponent}
          handleClick={handleClick}
          handleStepGroupExpand={handleStepGroupExpand}
          isStepGroupExpanded={isStepGroupExpanded}
        />
      )}
    </>
  );
};

export default memo(DraggableTableRow);

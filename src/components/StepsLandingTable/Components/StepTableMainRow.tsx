import { useSortable } from '@dnd-kit/sortable';
import classNames from 'classnames';
import { FC, useMemo, memo } from 'react';
import { ffid } from '../../../utils/ffID/ffid';
import { prepareData } from '../../../utils/TableCell/TableCell';
import Checkbox from '../../Checkbox';
import Icon from '../../Icon';
import Typography from '../../Typography';
import StepGroupAccordions from './StepGroupAccordions';
import { TableMainRowProp } from './Types';
import { CSS } from '@dnd-kit/utilities';

const StepTableMainRow: FC<TableMainRowProp> = ({
  row,
  columns,
  tableBodyRowClass,
  handleOnclick,
  tableDataTextColor,
  withCheckbox,
  onSelectClick,
  draggable,
  indexNumber = 0,
  tableType = '',
  viewModeId,
  ViewComponent,
  handleClick,
  selectedRows,
  handleStepGroupExpand,
  isStepGroupExpanded,
  dataLength,
  stepPartialSelect,
  isViewPrivilegeMode,
  isClientSide,
}) => {
  const isDisabled = useMemo(
    () => row?.isDisabled || (dataLength ?? 0) <= 1 || row.isSpecialNlp,
    [row, dataLength]
  );
  let serialNumber = (indexNumber + 1).toString();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: row?._id || row?.stepId,
      disabled: isDisabled,
    });

  const style = useMemo(
    () => ({
      transform: CSS.Transform.toString(transform),
      transition,
    }),
    [transform, transition]
  );
  const key = row?._id || row?.stepId;

  const getPadding = (index: number): string => {
    if (isViewPrivilegeMode || isClientSide) {
      if (
        ['Group', 'PRE', 'POST', 'Script'].includes(row.type) &&
        index === 0
      ) {
        return '4px 8px';
      }
      return '7px 8px';
    }
    if (index !== 0) {
      return tableType === 'Steps' ? '4px 8px' : '7px 8px';
    }
    if (tableType === 'Steps') {
      return draggable ? '4px 8px 4px 0px' : '4px 8px 4px 24px';
    }
    return '4px 8px 4px 24px';
  };

  const renderDragHandle = () => (
    <div
      className={isDisabled ? 'ff-table-drag' : 'ff-table-drag-icon'}
      {...listeners}
      {...attributes}
    >
      <Icon
        name="drag"
        className={isDisabled ? 'drag-icon-disabled' : 'drag-icon'}
      />
    </div>
  );

  const renderCheckbox = () => (
    <span
      className={
        (tableType && selectedRows[tableType]?.has(row.stepId)) ||
        stepPartialSelect?.has(row.stepId)
          ? ''
          : 'ff-table-checkbox-step'
      }
    >
      <Checkbox
        onChange={(e) => onSelectClick(tableType, row, e.target.checked)}
        checked={!!selectedRows[tableType]?.has(row.stepId)}
        partial={stepPartialSelect?.has(row.stepId)}
        disabled={row?.isSpecialNlp && row?.name?.includes('End')}
      />
    </span>
  );

  const renderGroupToggle = () => (
    <div
      className={`ff-accordion-arrow ${
        isStepGroupExpanded?.(row?.stepId) ? 'expanded' : ''
      }`}
    >
      <Icon
        name="arrow_right"
        className="steps-arrow-svg"
        color={
          isStepGroupExpanded?.(row?.stepId)
            ? 'var(--brand-color)'
            : 'var(--default-color)'
        }
        width={12}
        height={12}
        onClick={() =>
          handleStepGroupExpand?.({ ...row, tableType, serialNumber })
        }
      />
    </div>
  );
  return (
    <>
      <tr
        ref={setNodeRef}
        style={style}
        key={key}
        className={classNames(tableBodyRowClass, {
          'disabled-inner-row': isDisabled,
        })}
        id={key}
      >
        {columns?.map((column: any, index: number) => {
          return (
            <>
              <td
                key={`${column.accessor}-${ffid()}`}
                style={{
                  padding: getPadding(index),
                  maxWidth: column.width,
                }}
                onClick={() => handleOnclick(column, row, indexNumber)}
              >
                <Typography
                  as="div"
                  color={tableDataTextColor}
                  className="ff-data-checkbox-container"
                >
                  {index === 0 &&
                    !isClientSide &&
                    draggable &&
                    renderDragHandle()}
                  {index === 0 &&
                    !isClientSide &&
                    withCheckbox &&
                    renderCheckbox()}
                  <div
                    className="ff-margin-container"
                    style={{
                      marginLeft: index === 0 ? row.marginLeft : 0,
                    }}
                  >
                    {prepareData(row, column, indexNumber, tableType)}

                    {['Group', 'PRE', 'POST', 'Script'].includes(row.type) &&
                      index === 0 &&
                      !isClientSide &&
                      renderGroupToggle()}
                    {column.extraInfo?.({ row, indexNumber, tableType })}
                  </div>
                </Typography>
              </td>
            </>
          );
        })}
      </tr>
      {isStepGroupExpanded?.(row?.stepId) && (
        <StepGroupAccordions
          data={row.data || row?.stepResults}
          columnCount={columns.length}
          viewModeId={viewModeId}
          ViewComponent={ViewComponent}
          handleClick={handleClick}
          tableType={tableType}
          handleStepGroupExpand={handleStepGroupExpand}
          isStepGroupExpanded={isStepGroupExpanded}
          level={row?.marginLeft}
          isViewPrivilegeMode={isViewPrivilegeMode}
          columns={columns}
        />
      )}
    </>
  );
};

export default memo(StepTableMainRow);

import {
  useEffect,
  useRef,
  cloneElement,
  isValidElement,
  ReactElement,
  useMemo,
  type FC,
} from 'react';
import './StepInnerTable.scss';
import { isFunction } from '../../../assets/utils/functionUtils';
import classNames from 'classnames';
import {
  ColumnsProps,
  DataProps,
  PrePostTableProps,
  SelectedItemProps,
} from './Types';
import { prepareData } from '../../../utils/TableCell/TableCell';
import Checkbox from '../../Checkbox';
import Typography from '../../Typography';
import Icon from '../../Icon';
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import StepGroupAccordions from './StepGroupAccordions';
import { TableMainRowProp } from './Types';
import { ffid } from '../../../utils/ffID/ffid';
import { appendNewRow } from '../../../utils/AppendNewRow/AppendNewRow';

const SortableRow: FC<TableMainRowProp> = ({
  row,
  columns,
  tableBodyRowClass,
  handleOnclick,
  tableDataTextColor,
  withCheckbox,
  onSelectClick,
  draggable,
  indexNumber,
  tableType = '',
  viewModeId,
  ViewComponent,
  handleClick,
  selectedRows,
  handleStepGroupExpand,
  isStepGroupExpanded,
  dataLength,
}) => {
  const isDisabled = useMemo(
    () => row?.isDisabled || (dataLength ?? 0) <= 1 || row.isSpecialNlp,
    [row, dataLength]
  );

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
  const key = row._id || row.stepId;

  const getPadding = (index: number): string => {
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
      <span
        style={{
          opacity: isDisabled ? '0' : '',
          cursor: isDisabled ? 'default' : 'grab',
        }}
      >
        <Icon name="drag" />
      </span>
    </div>
  );

  const renderCheckbox = () => (
    <span
      className={
        tableType && selectedRows[tableType]?.has(row.stepId)
          ? ''
          : 'ff-table-checkbox'
      }
    >
      <Checkbox
        onChange={(e) => onSelectClick(tableType, row, e.target.checked)}
        checked={!!selectedRows[tableType]?.has(row.stepId)}
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
        width={16}
        height={16}
        onClick={() => handleStepGroupExpand?.({ ...row, tableType })}
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
                  {index === 0 && draggable && renderDragHandle()}
                  {index === 0 && withCheckbox && renderCheckbox()}
                  <div
                    className="ff-margin-container"
                    style={{
                      marginLeft: index === 0 ? row.marginLeft : 0,
                    }}
                  >
                    {prepareData(row, column, indexNumber, tableType)}

                    {['Group', 'PRE', 'POST', 'Script'].includes(row.type) &&
                      index === 0 &&
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
          data={row.data}
          columnCount={columns.length}
          viewModeId={viewModeId}
          ViewComponent={ViewComponent}
          handleClick={handleClick}
          tableType={tableType}
          handleStepGroupExpand={handleStepGroupExpand}
          isStepGroupExpanded={isStepGroupExpanded}
        />
      )}
    </>
  );
};

const PrePostTable = ({
  data = [],
  columns = [],
  headerType,
  withCheckbox = false,
  onSelect,
  withFixedHeader = true,
  borderWithRadius = false,
  noDataContent,
  height = '100%',
  className = '',
  tableBodyRowClass = '',
  headerTextColor,
  tableDataTextColor,
  draggable = false,
  onDragEnd,
  loadMore = () => {},
  editMode = '',
  editComponent,
  NlpComponent,
  AddNlp,
  handleDragStart,
  tableType,
  viewModeId,
  ViewComponent,
  handleClick,
  selectedRows,
  handleStepGroupExpand,
  isStepGroupExpanded,
}: PrePostTableProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const scrollContainer = document.getElementById(
      'ff-table-scroll-container'
    );
    const firstNode = document.getElementById('ff-table-first-node');
    const lastNode = document.getElementById('ff-table-last-node');

    // Exit early if data is empty or elements are missing
    if (!scrollContainer || !firstNode || !lastNode || !data?.length) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const direction =
              entry.target.id === 'ff-table-last-node' ? 'below' : 'above';
            loadMore(direction);
          }
        });
      },
      {
        root: scrollContainer,
        rootMargin: '8px',
        threshold: 0.1,
      }
    );

    observerRef.current.observe(firstNode);
    observerRef.current.observe(lastNode);

    return () => {
      // Cleanup observer
      observerRef.current?.disconnect();
    };
  }, [data, loadMore]);

  const handleOnclick = (
    column: ColumnsProps,
    row: DataProps,
    index: number
  ) => {
    let { onClick, accessor } = column;
    if (onClick && isFunction(onClick)) {
      onClick(accessor, row, index);
    }
  };

  const onSelectClick = (
    tableType: string,
    rowData: SelectedItemProps,
    isChecked: boolean
  ) => {
    if (onSelect) {
      onSelect(tableType, rowData, isChecked);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = data.findIndex(
      (item: any) => item._id === active.id || item.stepId === active.id
    );
    const newIndex = data.findIndex(
      (item: any) => item._id === over.id || item.stepId === over.id
    );

    if (oldIndex === -1 || newIndex === -1) return;
    if (onDragEnd) onDragEnd(oldIndex, newIndex);
  };
  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        disabled={!draggable}
        items={data?.map((row: any) => row._id || row.stepId)}
        strategy={verticalListSortingStrategy}
      >
        <div
          style={{ height: height, position: 'relative' }}
          id="ff-table-scroll-container"
          className={classNames(className, {
            'ff-fixed-header-steps-table': withFixedHeader,
            'steps-border-borderRadius': borderWithRadius,
          })}
        >
          <table className={classNames(`ff-table-steps`)} cellSpacing={0}>
            <thead className={'steps-inner-thead'}>
              <tr>
                {columns?.map((column) => (
                  <th
                    className={classNames(
                      `${headerType && `${headerType}-bg`}`,
                      `${headerTextColor && `${headerTextColor}-color`}`
                    )}
                    key={`${column.header}-${ffid()}`}
                    style={{ width: column?.width }}
                  ></th>
                ))}
              </tr>
            </thead>
            <tbody className="ff-steps-tbody">
              <tr id="ff-table-first-node" />
              {appendNewRow(data, AddNlp ?? {})?.map(
                (row: any, index: number) => {
                  const isEdit = editMode === row.stepId;
                  const isEditOrNew = isEdit || row.isNew;

                  const renderEditableRow = () => (
                    <tr key={row.stepId || index} className="steps-edit-row">
                      {isEdit && isValidElement(editComponent) && (
                        <td colSpan={columns.length}>
                          {cloneElement(editComponent as ReactElement, {
                            rowData: row,
                            rowIndex: index + 1,
                          })}
                        </td>
                      )}
                      {row.isNew && !isEdit && isValidElement(NlpComponent) && (
                        <td colSpan={columns.length}>
                          {cloneElement(NlpComponent as ReactElement, {
                            rowIndex: index,
                            rowData: row,
                          })}
                        </td>
                      )}
                    </tr>
                  );

                  const renderSortableRow = () => (
                    <SortableRow
                      row={row}
                      indexNumber={index}
                      columns={columns}
                      tableBodyRowClass={tableBodyRowClass}
                      handleOnclick={handleOnclick}
                      tableDataTextColor={tableDataTextColor}
                      withCheckbox={withCheckbox}
                      onSelectClick={onSelectClick}
                      draggable={draggable}
                      tableType={tableType}
                      viewModeId={viewModeId}
                      ViewComponent={ViewComponent}
                      handleClick={handleClick}
                      selectedRows={selectedRows}
                      handleStepGroupExpand={handleStepGroupExpand}
                      isStepGroupExpanded={isStepGroupExpanded}
                      dataLength={data?.length}
                    />
                  );

                  return isEditOrNew
                    ? renderEditableRow()
                    : renderSortableRow();
                }
              )}
              <tr id="ff-table-last-node" />
            </tbody>
          </table>
          {data?.length <= 0 && (
            <div
              className="steps-no-data-content"
              style={{ height: `calc(${height} - 50px)` }}
            >
              {noDataContent}
            </div>
          )}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default PrePostTable;

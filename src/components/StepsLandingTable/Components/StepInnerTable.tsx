import {
  useEffect,
  useRef,
  cloneElement,
  isValidElement,
  ReactElement,
} from 'react';
import './StepInnerTable.scss';
import { isFunction } from '../../../assets/utils/functionUtils';
import classNames from 'classnames';
import {
  ColumnsProps,
  DataProps,
  StepInnerTableProp,
  SelectedItemProps,
} from './Types';
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ffid } from '../../../utils/ffID/ffid';
import { appendNewRow } from '../../../utils/AppendNewRow/AppendNewRow';
import StepTableMainRow from './StepTableMainRow';

const StepInnerTable = ({
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
  stepPartialSelect,
  isViewPrivilegeMode,
}: StepInnerTableProp) => {
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
                    <tr
                      key={row.stepId || index}
                      className="steps-edit-row"
                      id="getInFocus"
                    >
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
                    <StepTableMainRow
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
                      stepPartialSelect={stepPartialSelect}
                      isViewPrivilegeMode={isViewPrivilegeMode}
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

export default StepInnerTable;

import './Table.scss';
import { isFunction } from '../../assets/utils/functionUtils';
import classNames from 'classnames';
import {
  ColumnsProps,
  DataProps,
  TableProps,
  SelectedItemProps,
} from './Types';
import { prepareData } from '../../utils/TableCell/TableCell';
import Checkbox from '../Checkbox';
import Typography from '../Typography';
import Icon from '../Icon';
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  useEffect,
  useRef,
  cloneElement,
  ReactElement,
  isValidElement,
} from 'react';

const getColumnWidth = (
  index: number,
  column?: { width?: number },
  columns?: { width?: number }[]
) => {
  if (index === 0) return `${index * (column?.width || 0)}px`;
  if (index === 1) return `${columns?.[0]?.width || 0}px`;
  return 'auto';
};

const SortableRow = ({
  row,
  columns,
  tableBodyRowClass,
  handleOnclick,
  tableDataTextColor,
  withCheckbox,
  onSelectClick,
  draggable,
  serialNumber,
  editMode,
  isAccordionOpen,
  accordionContent,
  columnSticky,
  isRowCheckBoxDisable,
}: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: row?._id || row?.id,
      disabled: row.disabled || !!editMode,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const key = row._id || row.id;
  return (
    <>
      <tr
        ref={setNodeRef}
        style={style}
        key={key}
        className={classNames(tableBodyRowClass, {
          'disabled-row': row.disabled,
        })}
        id={key}
      >
        {columns.map((column: any, index: number) => {
          const isSticky = columnSticky && (index === 0 || index === 1);
          return (
            <td
              style={{
                paddingLeft: index === 0 && draggable ? '0px' : '8px',
                position: isSticky ? 'sticky' : 'static',
                left: getColumnWidth(index, column, columns),
                zIndex: isSticky ? 999 : 'auto',
                backgroundColor: isSticky
                  ? 'var(--input-label-bg-color)'
                  : 'transparent',
              }}
              key={column.accessor + index}
              onClick={() => handleOnclick(column, row)}
              className={classNames(column.className, {
                'clickable-cell': column.onClick,
              })}
            >
              <Typography
                as="div"
                color={tableDataTextColor}
                className="ff-data-checkbox-container"
              >
                {index === 0 && withCheckbox && (
                  <span className="ff-table-checkbox">
                    <Checkbox
                      onChange={(e) => {
                        onSelectClick(e, row);
                      }}
                      checked={row.checked}
                      disabled={
                        isRowCheckBoxDisable === undefined
                          ? !!row.disabled
                          : isRowCheckBoxDisable
                      }
                    />
                  </span>
                )}
                {index === 0 && draggable && (
                  <>
                    <span
                      className={
                        row.disabled ? 'ff-table-drag' : 'ff-table-drag-icon'
                      }
                      {...listeners}
                      {...attributes}
                    >
                      <Icon name="drag" />
                    </span>
                    <Typography color="var(--brand-color)">
                      {serialNumber}.
                    </Typography>
                  </>
                )}
                {prepareData(row, column)}
              </Typography>
            </td>
          );
        })}
      </tr>
      {isAccordionOpen ? (
        <tr className="accordion-row">
          <td colSpan={columns.length}>
            <div className="accordion-content">
              {accordionContent ? accordionContent : null}
            </div>
          </td>
        </tr>
      ) : null}
    </>
  );
};

const Table = ({
  data = [],
  columns = [],
  headerType,
  withCheckbox = false,
  onSelect,
  allSelected,
  partialSelected = false,
  withFixedHeader = true,
  borderWithRadius = false,
  headerCheckboxDisabled = false,
  noDataContent,
  height = '100%',
  className = '',
  tableHeadClass = '',
  tableBodyRowClass = '',
  headerTextColor,
  tableDataTextColor,
  headerIconName = '',
  headerIconOnClick = () => {},
  draggable = false,
  onDragEnd,
  loadMore = () => {},
  editMode = '',
  editComponent,
  getAccordionStatus = () => {},
  accordionContent,
  columnSticky = false,
  tableRef = null,
  isRowCheckBoxDisable,
}: TableProps) => {
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

  const handleOnclick = (column: ColumnsProps, row: DataProps) => {
    let { onClick, accessor } = column;
    if (onClick && isFunction(onClick)) {
      onClick(accessor, row);
    }
  };

  const onSelectClick = (e: object, item: SelectedItemProps) => {
    if (onSelect) {
      onSelect(e, item);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = data.findIndex(
      (item: any) => item._id === active.id || item.id === active.id
    );
    const newIndex = data.findIndex(
      (item: any) => item._id === over.id || item.id === over.id
    );

    if (oldIndex === -1 || newIndex === -1) return;
    if (onDragEnd) onDragEnd(oldIndex, newIndex);
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <SortableContext
        disabled={!draggable}
        items={data?.map((row: any) => row._id || row.id)}
        strategy={verticalListSortingStrategy}
      >
        <div
          style={{
            height: height,
            position: 'relative',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: draggable ? 'none' : 'auto',
          }}
          id="ff-table-scroll-container"
          className={classNames(className, {
            'ff-fixed-header-table': withFixedHeader,
            'border-borderRadius': borderWithRadius,
          })}
          ref={tableRef}
        >
          <table className={classNames(`ff-table`)} cellSpacing={0}>
            <thead
              className={classNames(
                {
                  'ff-fixed-header': withFixedHeader,
                },
                tableHeadClass
              )}
            >
              <tr>
                {columns.map((column, index) => (
                  <th
                    className={classNames(
                      `${headerType && `${headerType}-bg`}`,
                      `${headerTextColor && `${headerTextColor}-color`}`,
                      {
                        'sticky-column':
                          columnSticky && (index === 0 || index === 1),
                      }
                    )}
                    key={column.header}
                    style={{
                      width: column?.width,
                      left: getColumnWidth(index, column, columns),
                    }}
                  >
                    <div className="ff-table-icon">
                      <Icon
                        height={14}
                        width={14}
                        name={headerIconName}
                        onClick={headerIconOnClick}
                      />
                    </div>
                    <Typography
                      style={column?.width && { width: column?.width }}
                      as="div"
                      fontWeight="semi-bold"
                      className="ff-label-checkbox-container"
                    >
                      {index === 0 && withCheckbox && (
                        <span className="ff-table-checkbox">
                          <Checkbox
                            onChange={(e) => {
                              onSelectClick(e, {
                                allSelected: e.target.checked,
                              });
                            }}
                            checked={
                              allSelected !== undefined ? allSelected : false
                            }
                            partial={!!partialSelected}
                            disabled={headerCheckboxDisabled}
                          />
                        </span>
                      )}

                      {column.header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="ff-fixed-header-table">
              <tr id="ff-table-first-node" />
              {data?.length > 0 &&
                data?.map((row: any, index) => {
                  const isOpen = getAccordionStatus(
                    row?.id || row?._id || row?.scriptId
                  );
                  return (
                    <>
                      {editMode === row._id || editMode === row.id ? (
                        <tr
                          key={row?._id || index}
                          className={classNames(tableBodyRowClass, 'edit-row', {
                            'disabled-row': row.disabled,
                          })}
                        >
                          <td
                            colSpan={columns.length}
                            style={{ padding: '0px' }}
                          >
                            {editMode &&
                              isValidElement(editComponent) &&
                              cloneElement(editComponent as ReactElement, {
                                rowData: row,
                                rowIndex: index + 1,
                              })}
                          </td>
                        </tr>
                      ) : (
                        <SortableRow
                          row={row}
                          serialNumber={index + 1}
                          columns={columns}
                          tableBodyRowClass={tableBodyRowClass}
                          handleOnclick={handleOnclick}
                          tableDataTextColor={tableDataTextColor}
                          withCheckbox={withCheckbox}
                          onSelectClick={onSelectClick}
                          draggable={draggable}
                          columnSticky={columnSticky}
                          isAccordionOpen={isOpen}
                          accordionContent={accordionContent}
                          isRowCheckBoxDisable={isRowCheckBoxDisable}
                        />
                      )}
                    </>
                  );
                })}
              <tr id="ff-table-last-node" />
            </tbody>
          </table>
          {data?.length <= 0 && (
            <div
              className="no-data-content"
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

export default Table;

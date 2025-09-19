import { isFunction } from '../../assets/utils/functionUtils';
import classNames from 'classnames';
import {
  ColumnsProps,
  DataProps,
  PrePostTableProps,
  SelectedItemProps,
} from './Types';
import './PrePostTable.scss';
import Checkbox from '../Checkbox';
import Typography from '../Typography';
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useEffect,
  useRef,
  cloneElement,
  isValidElement,
  ReactElement,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import DraggableTableRow from './components/DraggableTableRow';
import { appendNewRow } from '../../utils/AppendNewRow/AppendNewRow';
import { scrollToView } from '../../utils/ScrollToview/ScrollToView';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const PrePostTable = forwardRef<any, PrePostTableProps>(
  (
    {
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
      draggable = false,
      onDragEnd,
      loadMore = () => {},
      editMode = '',
      editComponent,
      NlpComponent,
      AddNlp,
      handleDragStart,
      handleViewComponent,
      handleAccordion,
      loading,
      scriptType = false,
    },
    ref
  ) => {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [ViewComponent, setViewComponent] = useState<any | null>(null);
    const [viewModeId, setViewModeId] = useState<string | null>(null);
    const toggleViewRow = (row: any) => {
      setViewModeId((prev) => (prev === row?.stepId ? null : row?.stepId));
    };
    const handleClick = (item: any) => {
      toggleViewRow(item);
      const Component = handleViewComponent?.(item, toggleViewRow);
      if (Component) {
        setViewComponent(() => Component);
      } else {
        toggleViewRow(null);
      }
    };

    const [expandStepGroup, setExpandStepGroup] = useState(
      new Map<string, boolean>()
    );
    const isStepGroupExpanded = (stepId: string) => expandStepGroup.has(stepId);
    const handleStepGroupExpand = (rowData: any) => {
      if (!isStepGroupExpanded(rowData?.stepId)) {
        if (viewModeId) toggleViewRow(null);
        handleAccordion?.(rowData);
      }
      if (!loading) {
        setExpandStepGroup((prev) => {
          const newMap = new Map(prev);
          if (newMap.has(rowData?.stepId)) {
            newMap.delete(rowData?.stepId);
          } else {
            newMap.set(rowData?.stepId, true);
          }
          return newMap;
        });
      }
    };

    // const resetStepGroupAccordion = () => {
    //   setExpandStepGroup(new Map());
    // };

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

    const onSelectClick = (e: object, item: SelectedItemProps) => {
      if (onSelect) {
        onSelect(e, item);
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
    useEffect(() => {
      scrollToView('getInFocus');
    }, [AddNlp, viewModeId]);
    if (ref) {
      useImperativeHandle(ref, () => ({
        resetStepGroupAccordion: () => {
          setExpandStepGroup(new Map());
        },
      }));
    }
    return (
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={() => {
          handleDragStart?.();
          expandStepGroup.clear();
        }}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          disabled={!draggable}
          items={data?.map((row: any) => row.stepId || row._id)}
          strategy={verticalListSortingStrategy}
        >
          <div
            style={{ height: height }}
            id="ff-table-scroll-container"
            className={classNames(className, {
              'pre-fixed-header-table': withFixedHeader,
              'pre-border-borderRadius': borderWithRadius,
            })}
          >
            <table className={classNames(`ff-table-pre-post`)} cellSpacing={0}>
              <thead
                className={classNames(
                  {
                    'pre-table-thead': withFixedHeader,
                  },
                  tableHeadClass
                )}
              >
                <tr>
                  {columns.map((column, index) => (
                    <th
                      className={classNames(
                        `${headerType && `${headerType}-bg`}`,
                        `${headerTextColor && `${headerTextColor}-color`}`
                      )}
                      key={column.header}
                      style={{ width: column?.width }}
                    >
                      <Typography
                        as="div"
                        fontWeight="semi-bold"
                        className="ff-label-checkbox-container"
                        lineHeight="18px"
                        color="var(--drawer-title-color)"
                      >
                        {index === 0 && withCheckbox && (
                          <span className="ff-table-pre-post-checkbox">
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
              <tbody className="pre-table-tbody">
                <tr id="ff-table-first-node" />
                {appendNewRow(data, AddNlp ?? {})?.map(
                  (row: any, index: number) => {
                    const isEdit = editMode === row.stepId;
                    const isEditOrNew = isEdit || row.isNew;

                    const renderEditableRow = () => (
                      <tr
                        key={row.stepId || index}
                        id="getInFocus"
                        className="pre-edit-row"
                      >
                        {isEdit && isValidElement(editComponent) && (
                          <td colSpan={columns.length}>
                            {cloneElement(editComponent as ReactElement, {
                              rowData: row,
                              rowIndex: index + 1,
                            })}
                          </td>
                        )}
                        {row.isNew &&
                          !isEdit &&
                          isValidElement(NlpComponent) && (
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
                      <DraggableTableRow
                        row={row}
                        indexNumber={index}
                        columns={columns}
                        tableBodyRowClass={tableBodyRowClass}
                        handleOnclick={handleOnclick}
                        tableDataTextColor={tableDataTextColor}
                        withCheckbox={withCheckbox}
                        onSelectClick={onSelectClick}
                        draggable={draggable}
                        dataLength={data?.length}
                        viewModeId={viewModeId}
                        ViewComponent={ViewComponent}
                        handleClick={handleClick}
                        handleStepGroupExpand={handleStepGroupExpand}
                        isStepGroupExpanded={isStepGroupExpanded}
                        scriptType={scriptType}
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
            {checkEmpty(data) && checkEmpty(AddNlp) && (
              <div
                className="ff-no-data-content"
                style={{ height: `calc(${height} - 50px)` }}
              >
                {noDataContent}
              </div>
            )}
          </div>
        </SortableContext>
      </DndContext>
    );
  }
);

export default PrePostTable;

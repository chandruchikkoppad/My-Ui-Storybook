import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';
import './StepLandingTable.scss';
import '../../../index.scss';
import Typography from '../Typography';
import { TableProps } from './types';
import StepInnerTable from './Components';
import {
  gettingBlockMap,
  getUpdatedExpandedRows,
  getUpdatedPartialSelect,
  getUpdatedSelectedRows,
  hasSelectedIds,
  updateCheckboxStatus,
} from './Components/handleStepCheckBox';
import StepsTitle from './Components/StepsTitle';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { scrollToView } from '../../utils/ScrollToview/ScrollToView';

const StepLandingTable = forwardRef<any, TableProps>(
  (
    {
      tableMeta = [],
      tableData = [],
      noDataContent,
      height = '100%',
      withFixedHeader = false,
      headerType,
      handleDragStart,
      onDragEnd,
      editMode,
      editComponent,
      NlpComponent,
      AddNlp,
      handleAccordion,
      handleViewComponent,
      onSelectClick,
      loading = false,
      isViewPrivilegeMode = false,
      defaultExpanded = 'Steps',
      isHeaderRequired = true,
      isClientSide = false,
    },
    ref
  ) => {
    const [ViewComponent, setViewComponent] = useState<any | null>(null);
    const [viewModeId, setViewModeId] = useState<string | null>(null);
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>(
      {}
    );
    const [expandStepGroup, setExpandStepGroup] = useState(
      new Map<string, boolean>()
    );
    const [isBulkEnable, setBulkEnable] = useState(false);

    const onAccordionClick = (title: string) => {
      const row = tableData.find((row) => row.title === title);
      if (!row || !row.data || row.data.length === 0) {
        return;
      }
      setExpandedRows((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    };

    const isExpanded = useMemo(
      () => (title: string) => expandedRows[title] ?? false,
      [expandedRows]
    );

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

    const [selectedRows, setSelectedRows] = useState<{
      [key: string]: Set<string>;
    }>(
      Object.fromEntries(tableData.map((section) => [section.title, new Set()]))
    );
    const [stepPartialSelect, setStepPartialSelect] = useState<Set<string>>(
      new Set()
    );
    useEffect(() => {
      setSelectedRows((pre: any) => getUpdatedSelectedRows(tableData, pre));
      setStepPartialSelect((prevPartialSelect) =>
        getUpdatedPartialSelect(tableData, prevPartialSelect)
      );
      setExpandedRows((prev) =>
        getUpdatedExpandedRows(tableData, prev, defaultExpanded)
      );
      if (selectedRows && !hasSelectedIds(selectedRows)) return;
      let { updateSelectRow, updateStepPartialSelect } = gettingBlockMap(
        tableData,
        selectedRows,
        stepPartialSelect
      );
      if (updateStepPartialSelect)
        setStepPartialSelect(updateStepPartialSelect as Set<string>);
      if (updateSelectRow) setSelectedRows(updateSelectRow);
    }, [tableData]);

    useEffect(() => {
      if (hasSelectedIds(selectedRows)) {
        const updatedSelection = {
          ...selectedRows,
          partialSelected: stepPartialSelect,
        };
        onSelectClick?.(updatedSelection);
      }
    }, [selectedRows]);

    const handleMainCheckbox = (sectionTitle: string, checked: boolean) => {
      const allRowIds = tableData
        .find((section) => section.title === sectionTitle)
        ?.data.map((row: any) => row.stepId);
      if (allRowIds) {
        setSelectedRows((prev) => ({
          ...prev,
          [sectionTitle]: checked ? new Set(allRowIds) : new Set(),
        }));
        if (!checked) setStepPartialSelect(new Set());
      }
    };
    const handleUpdateCheckboxState = (
      tableData: any,
      rowData: any,
      isChecked: boolean,
      sectionTitle?: string
    ) => {
      const { updateSelectRow, updateStepPartialSelect } = updateCheckboxStatus(
        tableData,
        rowData,
        isChecked,
        selectedRows,
        stepPartialSelect,
        sectionTitle
      );
      if (updateStepPartialSelect)
        setStepPartialSelect(updateStepPartialSelect as Set<string>);
      if (updateSelectRow) setSelectedRows(updateSelectRow);
    };
    const handleRowCheckbox = (
      sectionTitle: string,
      row: any,
      isChecked: boolean
    ) => {
      handleUpdateCheckboxState(tableData, row, isChecked, sectionTitle);
    };

    const isAllSelected = (
      sectionTitle: string,
      totalRows: number
    ): boolean => {
      const isSelected =
        totalRows > 0 && selectedRows[sectionTitle]?.size === totalRows;
      if (sectionTitle.includes('Script')) {
        setBulkEnable(isSelected);
      }

      return isSelected;
    };

    const isPartialSelected = (
      sectionTitle: string,
      totalRows: number
    ): boolean => {
      const selectedCount = selectedRows[sectionTitle]?.size || 0;
      return selectedCount > 0 && selectedCount < totalRows;
    };

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

    const getAccordionTableContent = (rows: any) => {
      if (rows.title === 'Steps' && !isViewPrivilegeMode) {
        return (
          <StepInnerTable
            draggable
            columns={tableMeta}
            onDragEnd={onDragEnd}
            data={rows.data}
            headerType={headerType}
            withCheckbox
            editMode={editMode}
            editComponent={editComponent}
            noDataContent={noDataContent}
            NlpComponent={NlpComponent}
            AddNlp={AddNlp}
            tableType={rows.title}
            handleDragStart={() => {
              expandStepGroup.clear();
              handleDragStart?.();
            }}
            onSelect={handleRowCheckbox}
            selectedRows={selectedRows}
            viewModeId={viewModeId}
            ViewComponent={ViewComponent}
            handleClick={handleClick}
            handleStepGroupExpand={handleStepGroupExpand}
            isStepGroupExpanded={isStepGroupExpanded}
            stepPartialSelect={stepPartialSelect}
            height={tableData.length === 1 ? height : ''}
            isClientSide={isClientSide}
          />
        );
      } else {
        return (
          <StepInnerTable
            editMode={editMode}
            withCheckbox={!isViewPrivilegeMode}
            editComponent={editComponent}
            columns={tableMeta}
            data={rows.data}
            headerType={headerType}
            noDataContent={noDataContent}
            tableType={rows.title}
            onSelect={handleRowCheckbox}
            selectedRows={selectedRows}
            viewModeId={viewModeId}
            ViewComponent={ViewComponent}
            handleClick={handleClick}
            handleStepGroupExpand={handleStepGroupExpand}
            isStepGroupExpanded={isStepGroupExpanded}
            isViewPrivilegeMode={isViewPrivilegeMode}
            height={tableData.length === 1 ? height : ''}
            isClientSide={isClientSide}
          />
        );
      }
    };

    useImperativeHandle(ref, () => ({
      resetSelection: () => {
        setSelectedRows(
          Object.fromEntries(
            tableData.map((section) => [section.title, new Set()])
          )
        );
        setStepPartialSelect(new Set());
      },
      handleUpdateCheckbox: (rowData: any, updatedTableData: any) => {
        const parentSpecialNlpId = rowData?.parentSpecialNlpId;
        const conditionSearchKey = rowData?.conditionSearchKey;
        if (parentSpecialNlpId || conditionSearchKey)
          if (updatedTableData) {
            handleUpdateCheckboxState(updatedTableData, rowData, false);
          } else {
            handleUpdateCheckboxState(tableData, rowData, false);
          }
      },
      deleteRow: (rowData: any) => {
        setSelectedRows((prev) =>
          Object.fromEntries(
            Object.entries(prev)?.map(([key, ids]) => [
              key,
              new Set([...ids].filter((id) => id !== rowData?.stepId)),
            ])
          )
        );
      },
      resetStepGroupAccordion: () => {
        setExpandStepGroup(new Map());
      },
    }));

    useEffect(() => {
      scrollToView('getInFocus');
      if (!checkEmpty(AddNlp)) {
        setViewComponent(() => null);
        setViewModeId(null);
      }
    }, [AddNlp]);

    return (
      <div
        className={classNames('ff-accordion-table-container-steps', {
          'ff-accordion-fixed-header-table': withFixedHeader,
        })}
      >
        {isHeaderRequired && !isClientSide && (
          <table
            cellSpacing={0}
            className={classNames('ff-accordion-table', {
              'ff-accordion-fixed-header': withFixedHeader,
            })}
          >
            <thead className="table-thead">
              <tr className="ff-table-row">
                {tableMeta.map((column, index) => (
                  <th
                    key={`${column.header}-${index}`}
                    style={{ width: column?.width }}
                    className={classNames(
                      'ff-table-header',
                      headerType && `ff-accordion-table--${headerType}-bg`
                    )}
                  >
                    <Typography
                      as="div"
                      fontWeight="semi-bold"
                      lineHeight="18px"
                      color="var(--drawer-title-color)"
                    >
                      {column.header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        )}
        <div
          className="ff-accordion-table-body"
          style={{ height: (tableData?.length === 1 && '100%') || height }}
        >
          {tableData?.map((row) => {
            const { title, data, actionCell, metaData } = row;
            const totalRows = data.length;
            const expanded = isExpanded(title);
            const selectedCount = selectedRows[title]?.size ?? 0;
            const showActionCell =
              selectedCount > 0 && totalRows > 0 && actionCell;

            return (
              <div className="column-table-accordion" key={title}>
                <StepsTitle
                  isViewPrivilegeMode={isViewPrivilegeMode}
                  onAccordionClick={onAccordionClick}
                  showActionCell={showActionCell}
                  handleMainCheckbox={handleMainCheckbox}
                  isAllSelected={isAllSelected}
                  isPartialSelected={isPartialSelected}
                  title={title}
                  totalRows={totalRows}
                  expanded={expanded}
                  metaData={metaData}
                  actionCell={actionCell}
                  row={row}
                  tableMeta={tableMeta}
                  isHeaderRequired={isHeaderRequired}
                  isBulkEnable={isBulkEnable}
                  isClientSide={isClientSide}
                />
                {expanded && getAccordionTableContent(row)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

export default StepLandingTable;

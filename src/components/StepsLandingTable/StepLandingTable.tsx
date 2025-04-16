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
  updateCheckboxStatus,
} from './Components/handleStepCheckBox';
import StepsTitle from './Components/StepsTitle';

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
    },
    ref
  ) => {
    const [ViewComponent, setViewComponent] = useState<any | null>(null);
    const [viewModeId, setViewModeId] = useState<string | null>(null);
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>(
      {}
    );

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
      setExpandedRows((prev) =>
        getUpdatedExpandedRows(tableData, prev, defaultExpanded)
      );
      let { updateSelectRow, updateStepPartialSelect } = gettingBlockMap(
        tableData,
        selectedRows,
        stepPartialSelect
      );
      if (updateStepPartialSelect)
        setStepPartialSelect(updateStepPartialSelect as Set<string>);
      if (updateSelectRow) setSelectedRows(updateSelectRow);

      setSelectedRows((pre: any) => getUpdatedSelectedRows(tableData, pre));
      setStepPartialSelect((prevPartialSelect) =>
        getUpdatedPartialSelect(tableData, prevPartialSelect)
      );
    }, [tableData]);

    useEffect(() => {
      const hasSelectedIds = (rows: { [key: string]: Set<string> }) => {
        return Object.values(rows).some((set) => set.size > 0);
      };
      if (hasSelectedIds(selectedRows)) {
        onSelectClick?.(selectedRows);
      } else {
        onSelectClick?.(null);
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

    const isAllSelected = (sectionTitle: string, totalRows: number): boolean =>
      totalRows > 0 && selectedRows[sectionTitle]?.size === totalRows;

    const isPartialSelected = (
      sectionTitle: string,
      totalRows: number
    ): boolean => {
      const selectedCount = selectedRows[sectionTitle]?.size || 0;
      return selectedCount > 0 && selectedCount < totalRows;
    };

    const [expandStepGroup, setExpandStepGroup] = useState(
      new Map<string, boolean>()
    );
    const isStepGroupExpanded = (stepId: string) => expandStepGroup.has(stepId);
    const handleStepGroupExpand = (rowData: any) => {
      if (!isStepGroupExpanded(rowData?.stepId)) {
        let hasData = rowData?.stepResults || rowData?.data;
        if (!hasData?.length) handleAccordion?.(rowData);
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
            noDataContent={undefined}
            tableType={rows.title}
            onSelect={handleRowCheckbox}
            selectedRows={selectedRows}
            viewModeId={viewModeId}
            ViewComponent={ViewComponent}
            handleClick={handleClick}
            handleStepGroupExpand={handleStepGroupExpand}
            isStepGroupExpanded={isStepGroupExpanded}
            isViewPrivilegeMode={isViewPrivilegeMode}
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
    }));

    return (
      <div
        className={classNames('ff-accordion-table-container-steps', {
          'ff-accordion-fixed-header-table': withFixedHeader,
        })}
      >
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
        <div className="ff-accordion-table-body" style={{ height }}>
          {tableData.map((row) => {
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

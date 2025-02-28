import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import './StepLandingTable.scss';
import Icon from '../Icon';
import '../../../index.scss';
import Typography from '../Typography';
import { TableProps } from './types';
import StepInnerTable from './Components';
import Checkbox from '../Checkbox';

const StepLandingTable = ({
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
}: TableProps) => {
  const [ViewComponent, setViewComponent] = useState<any | null>(null);
  const [viewModeId, setViewModeId] = useState<string | null>(null);

  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  useEffect(() => {
    setExpandedRows((prev) => {
      const newExpandedRows: Record<string, boolean> = {};

      tableData.forEach((section) => {
        newExpandedRows[section.title] =
          section.title in prev
            ? prev[section.title] ?? false
            : section.title === 'Steps';
      });

      return newExpandedRows;
    });
  }, [tableData]);

  const onAccordionClick = (title: string) => {
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

  const handleChildCheckbox = (
    sectionTitle: string,
    rowData: any,
    checked: boolean
  ) => {
    setSelectedRows((prev) => {
      const updatedSection = new Set(prev[sectionTitle]);
      if (checked) {
        updatedSection.add(rowData.stepId);
      } else {
        updatedSection.delete(rowData.stepId);
      }

      return {
        ...prev,
        [sectionTitle]: updatedSection,
      };
    });
  };

  const handleMainCheckbox = (sectionTitle: string, checked: boolean) => {
    const allRowIds = tableData
      .find((section) => section.title === sectionTitle)
      ?.data.map((row: any) => row.stepId);

    if (allRowIds) {
      setSelectedRows((prev) => ({
        ...prev,
        [sectionTitle]: checked ? new Set(allRowIds) : new Set(),
      }));
    }
  };

  const isAllSelected = (sectionTitle: string, totalRows: number): boolean => {
    return totalRows > 0 && selectedRows[sectionTitle]?.size === totalRows;
  };
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

  // Check if a row is expanded

  const getAccordionTableContent = (rows: any) => {
    if (rows.title === 'Steps') {
      return (
        <StepInnerTable
          draggable={!isViewPrivilegeMode}
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
          onSelect={handleChildCheckbox}
          selectedRows={selectedRows}
          viewModeId={viewModeId}
          ViewComponent={ViewComponent}
          handleClick={handleClick}
          handleStepGroupExpand={handleStepGroupExpand}
          isStepGroupExpanded={isStepGroupExpanded}
        />
      );
    } else {
      return (
        <StepInnerTable
          editMode={editMode}
          withCheckbox
          editComponent={editComponent}
          columns={tableMeta}
          data={rows.data}
          headerType={headerType}
          noDataContent={undefined}
          tableType={rows.title}
          onSelect={handleChildCheckbox}
          selectedRows={selectedRows}
          viewModeId={viewModeId}
          ViewComponent={ViewComponent}
          handleClick={handleClick}
          handleStepGroupExpand={handleStepGroupExpand}
          isStepGroupExpanded={isStepGroupExpanded}
        />
      );
    }
  };
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
            {tableMeta.map((column, index) => {
              return (
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
              );
            })}
          </tr>
        </thead>
      </table>
      <div className="ff-accordion-table-body" style={{ height }}>
        {tableData.map((row) => {
          const { title, data, actionCell } = row;
          const totalRows = data.length;
          const expanded = isExpanded(title);
          const selectedCount = selectedRows[title]?.size ?? 0;
          const showActionCell =
            selectedCount > 0 && totalRows > 0 && actionCell;

          return (
            <div className="column-table-accordion" key={title}>
              <div className="ff-display-flex">
                <div className="accordion-header">
                  <div>
                    <Checkbox
                      onChange={(e) =>
                        handleMainCheckbox(title, e.target.checked)
                      }
                      checked={isAllSelected(title, totalRows)}
                      partial={isPartialSelected(title, totalRows)}
                      disabled={totalRows === 0}
                    />
                  </div>
                  <div className="header-title">
                    <Typography
                      as="div"
                      fontWeight="semi-bold"
                      color="var(--nlp-option-color)"
                      cursor="default"
                      lineHeight="18px"
                    >
                      {title}
                    </Typography>
                  </div>
                  <div
                    className={`accordion-arrow ${expanded ? 'expanded' : ''}`}
                    onClick={() => onAccordionClick(title)}
                  >
                    <Icon
                      name="arrow_right"
                      color={
                        expanded ? 'var(--brand-color)' : 'var(--default-color)'
                      }
                      width={16}
                      height={16}
                      className="steps-arrow-svg"
                    />
                  </div>
                  {showActionCell && <div>{actionCell(row)}</div>}
                </div>
              </div>
              {expanded && getAccordionTableContent(row)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepLandingTable;

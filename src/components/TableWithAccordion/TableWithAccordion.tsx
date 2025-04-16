import { useState } from 'react';
import classNames from 'classnames';
import Accordion from '../Accordion';
import './TableWithAccordion.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import '../../../index.scss';
import Typography from '../Typography';
import { ColumnProps, TableProps } from './types';
import HighlightText from '../HighlightText';

const TableWithAccordion = ({
  highlightText = '',
  tableMeta = [],
  tableData = [],
  accordionType = 'row',
  noDataContent,
  height = '100%',
  withFixedHeader = false,
  headerType,
  TableAccordionStateIconWidth = 4,
  TableAccordionStateIconHeight = 8,
}: TableProps) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(-1);
  const onAccordionClick = (index: number) => {
    setExpandedRowIndex(index === expandedRowIndex ? -1 : index);
  };
  const getAccordionTableCellContent = (
    dataObj: any,
    columnObj: ColumnProps
  ) => {
    let cellData = dataObj[columnObj.accessor];
    if (columnObj.cell) {
      return columnObj.cell({
        value: cellData,
        row: dataObj,
        column: columnObj.accessor,
      });
    } else if (columnObj.accessor) {
      return cellData;
    } else if (cellData && typeof cellData !== 'object') {
      return cellData;
    } else {
      return '--';
    }
  };
  const getAccordionTableContent = (dataArray: any) => {
    const accordionSubTable = dataArray.map((rowData: any, index: number) => {
      return (
        <table
          key={`accordion-table-${index}`}
          className="ff-accordion-table"
          cellSpacing={0}
        >
          <tbody className="ff-table-body">
            <tr className="ff-table-row" key={rowData.id || index}>
              {tableMeta.map((column, i) => {
                return (
                  <td
                    className="ff-table-cell"
                    key={column.accessor + i}
                    style={{ width: column.width }}
                  >
                    {accordionType === 'column' && i === 0 ? (
                      ''
                    ) : (
                      <Typography>
                        {getAccordionTableCellContent(rowData, column)}
                      </Typography>
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      );
    });
    return accordionSubTable;
  };
  return (
    <div
      style={{ height: height }}
      className={classNames('ff-accordion-table-container', {
        'ff-accordion-fixed-header-table': withFixedHeader,
      })}
    >
      <table
        cellSpacing={0}
        className={classNames('ff-accordion-table', {
          'ff-accordion-fixed-header': withFixedHeader,
        })}
      >
        <thead>
          <tr className="ff-table-row">
            {tableMeta.map((column) => (
              <th
                key={`header-${column.header}`}
                style={{ width: column.width }}
                className={classNames(
                  'ff-table-header',
                  headerType && `ff-accordion-table--${headerType}-bg`
                )}
              >
                <div>
                  <Typography fontWeight="semi-bold" fontSize={12}>
                    {column.header}
                  </Typography>
                </div>
              </th>
            ))}
          </tr>
        </thead>
      </table>
      {accordionType === 'row' &&
        tableData.map((row: any, rowIndex: number) => (
          <Accordion
            highlightText={highlightText}
            key={`accordion-row-${rowIndex}`}
            headerTitle={row.title}
            color="var(--text-color)"
            accordionContent={getAccordionTableContent(row.data)}
            disable={row.disable}
            disableInfoMessage={row.disableInfoMessage}
            accordionStateIconName="arrows_down_icon"
            AccordionStateIconWidth={TableAccordionStateIconWidth}
            AccordionStateIconHeight={TableAccordionStateIconHeight}
          />
        ))}
      {accordionType === 'column' &&
        tableData.map((row: any, index: number) => (
          <div
            key={`column-accordion-${index}`}
            className="column-table-accordion"
          >
            <div className="ff-display-flex">
              <Tooltip title={row?.disableInfoMessage}>
                <div
                  className={`accordion-header ${row.disable && 'ff-disabled'}`}
                >
                  <div className="header-title">
                    <span>
                      <Typography>
                        <HighlightText
                          text={row.title}
                          highlight={highlightText}
                        />
                      </Typography>
                    </span>
                  </div>

                  <div
                    className="accordion-arrow"
                    onClick={() => {
                      !row.disable && onAccordionClick(index);
                    }}
                  >
                    <Icon
                      name={
                        expandedRowIndex === index
                          ? 'arrows_down_icon'
                          : 'arrows_right_icon'
                      }
                      color="var(--table-with-accordion-icon-color)"
                      width={TableAccordionStateIconWidth}
                      height={TableAccordionStateIconHeight}
                      hoverEffect={false}
                    />
                  </div>
                </div>
              </Tooltip>
            </div>
            {expandedRowIndex === index && (
              <div>{getAccordionTableContent(row.data)}</div>
            )}
          </div>
        ))}
      {tableData.length <= 0 && (
        <div
          className="no-data-content"
          style={{ height: `calc(${height} - 50px)` }}
        >
          {noDataContent}
        </div>
      )}
    </div>
  );
};

export default TableWithAccordion;

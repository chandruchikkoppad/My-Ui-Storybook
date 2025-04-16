import { useEffect, useRef } from 'react';
import * as Types from './types';
import { range } from './util';

const Table: Types.TableComponent = ({
  children,
  columns,
  hideColumnIndicators,
  useTableRef,
}) => {
  const tableRef = useRef(null);
  const columnCount = columns + (hideColumnIndicators ? 0 : 1);
  const columnNodes = range(columnCount).map((i) => <col key={i} />);
  useEffect(() => {
    if (useTableRef && tableRef.current) {
      useTableRef(tableRef);
    }
  }, [useTableRef]);
  return (
    <table className="ff-spreadsheet-table" ref={tableRef}>
      <colgroup>{columnNodes}</colgroup>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;

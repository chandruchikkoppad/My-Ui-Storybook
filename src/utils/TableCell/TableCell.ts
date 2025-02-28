export const prepareData = (dataObj: any, columnObj: any, index?: number, tableType?: string) => {
  let cellData = dataObj[columnObj.accessor];
  if (columnObj.cell) {
    const refId = dataObj._id || dataObj.id;

    return columnObj.cell({
      value: cellData,
      row: dataObj,
      column: columnObj.accessor,
      index: index,
      tableType: tableType,
      ...(refId && { refId }),
    });
  } else if (columnObj.accessor) {
    return cellData;
  } else if (cellData && typeof cellData !== 'object') {
    return cellData;
  } else {
    return '--';
  }
};

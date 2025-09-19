import * as React from 'react';
import classNames from 'classnames';
import * as Types from './types';
import { hasLineBreaker } from './util';
import Icon from '../../../Icon';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
import TruncatedTooltip from '../../../TruncatedTooltip';

export const TRUE_TEXT = 'TRUE';
export const FALSE_TEXT = 'FALSE';

/** The default Spreadsheet DataViewer component */
const DataViewer = <Cell extends Types.CellBase<Value>, Value>({
  cell,
  evaluatedCell,
  active,
}: Types.DataViewerProps<Cell>): React.ReactElement => {
  const value = getValue(cell, evaluatedCell);

 const getFileList = (value: string) => {
    if (checkEmpty(value)) {
      return <></>;
    }
    const fileList = JSON.parse(value);
    return fileList.map((file: { name: string }) => {
      return (
        <div key={file.name} className="ff-spreadsheet-data-viewer--fileType">
          <TruncatedTooltip
            width={(cell?.style?.width as number) ?? 100}
            title={file?.name?.split('*')?.[0] ?? ''}
          />
        </div>
      );
    });
  };

  return typeof value === 'boolean' ? (
    <span className="ff-spreadsheet-data-viewer ff-spreadsheet-data-viewer--boolean">
      {convertBooleanToText(value)}
    </span>
  ) : (
    <span
      className={classNames('ff-spreadsheet-data-viewer', {
        'ff-spreadsheet-data-viewer--preserve-breaks': hasLineBreaker(value),
      })}
    >
      {!active && cell?.inputType?.type === 'dropDown' ? (
        <div className="ff-spreadsheet-data-viewer--dropdownType">
          {value}
          <Icon name="arrow_down" height={8} className="dropdownType-icon" />
        </div>
      ) : !active && cell?.inputType?.type === 'file' ? (
        <>
          {checkEmpty(cell?.value) ? (
            <div className="ff-spreadsheet-data-viewer--without-fileType">
              <Icon name="attachment_icon" /> Attachment
            </div>
          ) : (
            getFileList(value as string)
          )}
        </>
      ) : (
        !active && value
      )}
    </span>
  );
};

export default DataViewer;

function getValue(
  cell: Types.CellBase | undefined,
  evaluatedCell: Types.CellBase | undefined
) {
  const baseValue = evaluatedCell?.value ?? cell?.value;
  if (baseValue && typeof baseValue === 'object') {
    return baseValue.toString();
  }
  return baseValue;
}

export function convertBooleanToText(value: boolean): string {
  return value ? TRUE_TEXT : FALSE_TEXT;
}

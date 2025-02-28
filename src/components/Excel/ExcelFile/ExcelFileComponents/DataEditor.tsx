import * as React from 'react';
import * as Types from './types';
import { moveCursorToEnd } from './util';

/** The default Spreadsheet DataEditor component */
const DataEditor: React.FC<Types.DataEditorProps> = ({ onChange, cell }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...cell,
        value: event.target.value,
        style: cell?.style,
        inputType: cell?.inputType ?? { type: 'text' },
      });
    },
    [onChange, cell]
  );

  React.useEffect(() => {
    if (inputRef.current) {
      moveCursorToEnd(inputRef.current);
    }
  }, [inputRef]);

  const value = cell?.value ?? '';

  return (
    <div className="ff-spreadsheet-data-editor">
      <input
        className="ff-spreadsheet-cell-input"
        style={{ ...cell?.style }}
        ref={inputRef}
        type="text"
        onChange={handleChange}
        value={value}
        autoFocus
        disabled={cell?.readOnly}
      />
    </div>
  );
};

export default DataEditor;

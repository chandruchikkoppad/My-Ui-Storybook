import * as React from 'react';
import * as Types from './types';
import { moveCursorToEnd } from './util';

/** The default Spreadsheet DataEditor component */
const DataEditor: React.FC<Types.DataEditorProps> = ({ onChange, cell }) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        className="ff-spreadsheet-cell-textarea"
        style={{ ...cell?.style }}
        ref={inputRef}
        onChange={handleChange}
        value={value}
        autoFocus
        disabled={cell?.readOnly}
      />
    </div>
  );
};

export default DataEditor;

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

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Delete' || event.key === 'Backspace') {
        event.stopPropagation();

        requestAnimationFrame(() => {
          if (inputRef.current) {
            const textarea = inputRef.current;
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
          }
        });
      }

      if (event.key === 'Enter' && event.altKey) {
        event.preventDefault();
        event.stopPropagation();

        const textarea = event.currentTarget;
        const { selectionStart, selectionEnd, value } = textarea;

        const newValue =
          value.substring(0, selectionStart) +
          '\n' +
          value.substring(selectionEnd);

        onChange({
          ...cell,
          value: newValue,
          style: cell?.style,
          inputType: cell?.inputType ?? { type: 'text' },
        });

        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
          textarea.style.height = 'auto';
          textarea.style.height = `${textarea.scrollHeight}px`;
        });
      }
    },
    [onChange, cell]
  );

  React.useEffect(() => {
    if (inputRef.current) {
      moveCursorToEnd(inputRef.current);
    }
  }, []);

  const value = cell?.value ?? '';

  return (
    <div className="ff-spreadsheet-data-editor">
      <textarea
        className="ff-spreadsheet-cell-textarea"
        style={{
          ...cell?.style,
          borderTop: '',
          borderBottom: '',
          borderLeft: '',
          borderRight: '',
        }}
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        autoFocus
        disabled={cell?.readOnly}
      />
    </div>
  );
};

export default DataEditor;

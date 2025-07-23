import classNames from 'classnames';
import './Textarea.scss';
import { TextareaProps } from './Types';
import Typography from '../Typography';
import { STRIP_NEW_LINES_REGEX } from '../../validations/regex';

const getCharacterCount = (value: string) => {
  return value.replace(STRIP_NEW_LINES_REGEX, '').length;
};

const Textarea = ({
  capacity = 200,
  name,
  label,
  value = '',
  variant = 'primary',
  error,
  helperText = '',
  disabled = false,
  required = false,
  placeholder = 'Enter text',
  className = '',
  onChange,
  onBlur,
  onFocus,
  onPaste,
  rows = 4,
  cols = 40,
  resize = false,
  errorText,
  readOnly = false,
  displayCapacity = true,
  isLabelRequired = true,
  ...props
}: TextareaProps) => {
  const labelClasses = classNames(
    'ff-textarea-label ff-textarea-label--' + variant,
    {
      'ff-textarea-label--danger': error,
      'ff-textarea-label--disabled': disabled && !value,
    }
  );

  const textareaClasses = classNames(
    `ff-textarea ff-textarea--${variant}`,
    className,
    {
      'ff-textarea--danger': error,
      'ff-textarea--resize': !resize,
      'ff-textarea--placeholder': !isLabelRequired,
    }
  );

  const containerClasses = classNames('ff-textarea-container', {
    'ff-textarea-container--disabled': disabled,
    'ff-textarea-container--float': Boolean(value),
  });

  const isError = error || !value;
  const errorMessage = isError ? (
    <span className="ff-textarea-error-text">
      <Typography fontSize={10}>{errorText}</Typography>
    </span>
  ) : null;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const characterCount = getCharacterCount(newValue);

    if (characterCount <= capacity) {
      onChange?.(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const textarea = e.currentTarget;
      const cursorPos = textarea.selectionStart;
      const value = textarea.value;
      const textBeforeCursor = value.substring(0, cursorPos);
      const currentLine = textBeforeCursor.split('\n').pop() || '';

      if (currentLine.trim() === '') {
        e.preventDefault();
      }
    }
    props.onKeyDown?.(e);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text/plain');

    const processedText = pastedText
      .split('\n')
      .filter((line) => line.trim() !== '')
      .join('\n');

    const textarea = e.currentTarget;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const textBefore = textarea.value.slice(0, start);
    const textAfter = textarea.value.slice(end);
    const currentCount = getCharacterCount(textBefore + textAfter);

    let allowedCount = capacity - currentCount;

    let limitedPastedText = '';
    for (const char of processedText) {
      if (char === '\n') {
        limitedPastedText += char;
      } else if (allowedCount > 0) {
        limitedPastedText += char;
        allowedCount--;
      }
    }

    const newValue = textBefore + limitedPastedText + textAfter;

    const event = {
      ...e,
      target: {
        ...textarea,
        value: newValue,
      },
    };

    onChange?.(event as React.ChangeEvent<HTMLTextAreaElement>);
    onPaste?.(e);
  };

  return (
    <div className={containerClasses}>
      {isLabelRequired && (
        <label
          htmlFor={name}
          className={classNames('ff-textarea-label-container', {
            'ff-textarea-label-container--danger': error,
          })}
        >
          <span className={labelClasses}>
            {required && <span className="required-asterisk">*</span>}
            {label}
          </span>
        </label>
      )}

      <textarea
        name={name}
        value={value}
        id={name}
        className={textareaClasses}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        required={required}
        rows={rows}
        cols={cols}
        readOnly={readOnly}
        {...props}
      />

      <div
        className={
          isError ? 'ff-textarea-error-alignment' : 'msg-character-count'
        }
      >
        {errorMessage}
        {capacity > 0 && !readOnly && displayCapacity && (
          <div className={'ff-textarea-character-count'}>
            <Typography fontSize={8}>{getCharacterCount(value)}/</Typography>
            <Typography fontSize={8}>{capacity}</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Textarea;

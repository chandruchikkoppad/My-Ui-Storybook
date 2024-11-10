import classNames from 'classnames';
import './Textarea.scss';
import { TextareaProps } from './Types';
import { truncateText } from '../../utils/truncateText/truncateText';
const Textarea = ({
  capacity = 200,
  name,
  label,
  value,
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
  rows = 4,
  cols = 40,
  resize = false,
  ...props
}: TextareaProps) => {
  return (
    <div
      className={classNames('ff-textarea-container', {
        'ff-textarea-container--disabled': disabled,
        'ff-textarea-container--float': !!value,
      })}
    >
      <label
        htmlFor={name}
        className={classNames('ff-textarea-label-container', {
          'ff-textarea-label-container--danger': error,
        })}
      >
        <span
          className={classNames(
            `ff-textarea-label ff-textarea-label--${variant}`,
            {
              'ff-textarea-label--danger': error,
            }
          )}
        >
          {required && <span className="required-asterisk">*</span>}
          {label}
        </span>
      </label>
      <textarea
        maxLength={capacity}
        name={name}
        value={value}
        id={name}
        className={classNames(
          `ff-textarea ff-textarea--${variant}`,
          className,
          {
            'ff-textarea--danger': error,
            'ff-textarea--resize': !resize,
          }
        )}
        placeholder={truncateText(placeholder, 25)}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        rows={rows}
        cols={cols}
        {...props}
      />
      <div className="msg-character-count">
        {!!capacity && (
          <span>
            <span>{value?.length}</span>/{capacity}
          </span>
        )}
      </div>
    </div>
  );
};

export default Textarea;

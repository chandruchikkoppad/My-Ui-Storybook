import { useEffect, useState, useRef } from 'react';
import Icon from '../Icon';
import Select from '../Select';
import './EditLabel.scss';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import classNames from 'classnames';
import type { EditLabelProps, Option } from './types';
import Tooltip from '../Tooltip';
import Toaster from '../Toast';
import HighlightText from '../HighlightText';

const EditLabel = ({
  id = '',
  onConfirm,
  onCancel,
  handleCustomError,
  value = '',
  label = 'Add Script',
  optionsList = [],
  selectedOption = { label: '', value: '' },
  withDropdown,
  inputFieldWidth = 350,
  selectFieldWidth = 94,
  textColor = 'var(--nlp-color)',
  tooltip,
  required = false,
  isDisable = { confirm: false, cancel: false, textField: false },
  onClick,
  highlightText = '',
  isEditable,
  setIsEditable,
  cursor = 'pointer',
  isOnBlurTrue = false,
  handleOnChange,
}: EditLabelProps) => {
  const [isEditing, setIsEditing] = useState(!value);
  const [text, setText] = useState(value ?? '');
  const [clickTimeout, setClickTimeout] = useState<number | null>(null);
  const [showError, setShowError] = useState('');
  const [toasts, setToasts] = useState({ error: false });

  const [currentSelectedOption, setCurrentSelectedOption] =
    useState<Option>(selectedOption);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cancelRef = useRef<HTMLDivElement | null>(null);
  const confirmRef = useRef<HTMLDivElement | null>(null);

  const isValueFilled = !checkEmpty(text);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setText(newValue);

    if (typeof handleOnChange === 'function') {
      handleOnChange(e);
    }
  };

  const onDropdownChangeHandler = (option: Option) => {
    setCurrentSelectedOption(option);
  };

  const handleDoubleClick = () => {
    if (isDisable.textField) return;
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    }
    setIsEditing(true);
    setIsEditable && setIsEditable(id);
  };

  const handleSingleClick = () => {
    if (onClick) onClick();
  };

  const handleClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    }
    const timeout = window.setTimeout(() => {
      handleSingleClick();
      setClickTimeout(null);
    }, 1000);
    setClickTimeout(timeout);
  };

  const handleConfirm = () => {
    if (isDisable.confirm) return;
    const errorMessage = handleCustomError ? handleCustomError(text) : '';

    if (errorMessage) {
      handleToastToggle('error');
      setShowError(errorMessage);
    } else {
      setIsEditing(false);
      setShowError('');
      if (onConfirm) onConfirm(text, currentSelectedOption);
      setIsEditable && setIsEditable(null);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (
      withDropdown ||
      !isOnBlurTrue ||
      containerRef.current?.contains(event.relatedTarget) ||
      event.relatedTarget === confirmRef.current ||
      event.relatedTarget === cancelRef.current
    ) {
      return;
    }
    setIsEditing(false);
    setText(value);
    setShowError('');
    if (onCancel) onCancel();
    setIsEditable && setIsEditable(null);
  };

  const handleCancel = () => {
    if (isDisable.cancel) return;
    if (required && !value) {
      handleToastToggle('error');
      setShowError('Text is required.');
      return;
    }
    if (onCancel) {
      onCancel();
    }
    setText(value);
    setCurrentSelectedOption(selectedOption);
    setIsEditing(false);
    setShowError('');
    setIsEditable && setIsEditable(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleConfirm();
    } else if (event.key === 'Escape') {
      handleCancel();
    }
  };

  const handleToastToggle = (key: keyof typeof toasts) => {
    setToasts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  useEffect(() => {
    if (setIsEditable) {
      if (isEditable) {
        setIsEditing(true);
      } else {
        setIsEditing(false);
      }
    }
  }, [isEditable]);

  return (
    <div
      className={'ff-add-module-container'}
      style={
        {
          '--add-module-text-color': textColor,
          cursor: (isDisable && cursor) || 'pointer',
        } as React.CSSProperties
      }
      ref={containerRef}
    >
      {isEditing && (setIsEditable ? isEditable : true) ? (
        <div className="ff-add-module-edit-container">
          <fieldset className="ff-add-module-input-with-dropdown">
            <div
              className={classNames('ff-add-module-input-container', {
                'ff-add-module-input-container--float': isValueFilled,
              })}
              style={{ width: inputFieldWidth }}
            >
              <label
                className="ff-add-module-label-container"
                htmlFor="add-module-input"
              >
                {required && <span className="required-asterisk">*</span>}
                <span
                  className={classNames('ff-add-module-label', {
                    'ff-input-label--no-hover': !!text,
                  })}
                >
                  {label}
                </span>
              </label>
              <input
                name="add-module-input"
                type="text"
                className={classNames('ff-add-module-input', {
                  'ff-add-module-input--border-right': !!withDropdown,
                })}
                onChange={handleTextFieldChange}
                value={text}
                required={required}
                onBlur={handleBlur}
                disabled={isDisable.textField}
                onKeyDown={handleKeyDown}
                autoFocus
                autoComplete="off"
              />
            </div>
            {withDropdown && (
              <Select
                optionsList={optionsList}
                selectedOption={currentSelectedOption}
                showLabel={false}
                showBorder={false}
                onChange={onDropdownChangeHandler}
                optionZIndex={999999}
                width={selectFieldWidth}
                height={24}
                className="ff-add-module-dropdown"
                selectedOptionColor="var(--nlp-color)"
              />
            )}
          </fieldset>
          <div className="ff-module-icon-container">
            <Tooltip title="Confirm" placement={'bottom'}>
              <Icon
                className="icons"
                name="update_icon"
                onClick={() => !isDisable.confirm && handleConfirm()}
                color={
                  isDisable.confirm
                    ? 'var(--default-color)'
                    : 'var(--label-edit-confirm-icon)'
                }
                height={16}
                width={16}
                ref={confirmRef}
                tabIndex={-1}
                disabled={isDisable?.confirm}
              />
            </Tooltip>
            <Tooltip title="Cancel" placement={'bottom'}>
              <Icon
                className="icons"
                name="close"
                onClick={()=>!isDisable.cancel && handleCancel()}
                color={
                  isDisable.cancel
                    ? 'var(--default-color)'
                    : 'var(--label-edit-cancel-icon)'
                }
                height={16}
                width={16}
                ref={cancelRef}
                tabIndex={-1}
                disabled={isDisable?.cancel}
              />
            </Tooltip>
          </div>
        </div>
      ) : (
        <Tooltip
          title={tooltip?.tooltipTitle ?? ''}
          placement={tooltip?.tooltipPlacement ?? 'bottom'}
        >
          <span
            className={'ff-add-module-display-text'}
            style={{ cursor: (isDisable?.textField && cursor) || 'pointer' }}
            onDoubleClick={handleDoubleClick}
            role="button"
            onClick={handleClick}
          >
            {checkEmpty(highlightText) ? (
              text
            ) : (
              <HighlightText text={text} highlight={highlightText} />
            )}
          </span>
        </Tooltip>
      )}
      <Toaster
        isOpen={toasts.error}
        variant="danger"
        toastTitle="Error!"
        toastMessage={showError}
        onCancelClick={() => handleToastToggle('error')}
      />
    </div>
  );
};

export default EditLabel;

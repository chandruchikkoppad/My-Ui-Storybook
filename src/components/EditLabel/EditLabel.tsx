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
import {
  isTextTruncated,
  truncateText,
} from '../../utils/truncateText/truncateText';
import Typography from '../Typography';
import useClickOutside from '../../hooks/useClickOutside';

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
  handleTriggerDoubleClick,
  truncatedTextCount = 25,
  truncatedType = 'count',
  confirmIconTooltip = 'Create',
  cancelIconTooltip = 'Cancel',
  inlineValidationError = false,
  onChangeValidationError = false,
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
  const isThrowingError = showError && isEditing ? true : false;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const isValueFilled = !checkEmpty(text);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setText(newValue);

    if (typeof handleOnChange === 'function') {
      handleOnChange(e);
    }
    if ((inlineValidationError && onChangeValidationError) || isThrowingError) {
      const errorMessage = handleCustomError ? handleCustomError(newValue) : '';
      if (errorMessage) {
        setShowError(errorMessage);
      } else {
        setShowError('');
      }
    }
  };

  const onDropdownChangeHandler = (option: Option) => {
    setCurrentSelectedOption(option);
    inputRef.current?.focus();
  };

  const handleDoubleClick = () => {
    if (isDisable.textField) return;
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    }
    setIsEditing(true);
    setIsEditable && setIsEditable(id);

    if (handleTriggerDoubleClick) {
      handleTriggerDoubleClick();
    }
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

  const handleOutsideClick = () => {
    if (!isEditing || !containerRef.current) return;
    handleCancel();
  };

  useClickOutside(containerRef, handleOutsideClick, [
    confirmRef,
    cancelRef,
    dropdownRef,
  ]);

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

  const getTooltipTitle = () => {
    if (tooltip?.tooltipTitle) {
      return tooltip.tooltipTitle;
    } else if (isTextTruncated(text, truncatedTextCount, truncatedType)) {
      return text;
    } else {
      return '';
    }
  };

  const getScrollableParent = (
    element: HTMLElement | null
  ): HTMLElement | Window => {
    if (!element) return window;
    let parent: HTMLElement | null = element.parentElement;
    while (parent) {
      const overflowY = window.getComputedStyle(parent).overflowY;
      if (overflowY === 'auto' || overflowY === 'scroll') {
        return parent;
      }
      parent = parent.parentElement;
    }
    return window;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollableParent = getScrollableParent(containerRef.current);

    const handleScroll = () => {
      handleCancel();
    };

    scrollableParent.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      scrollableParent.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        setText(value);
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
          <fieldset
            className={classNames('ff-add-module-input-with-dropdown', {
              'ff-add-module-input-with-dropdown--danger':
                isThrowingError && inlineValidationError,
            })}
          >
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
                ref={inputRef}
                id="add-module-input"
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
                dropDownRef={dropdownRef}
                optionsList={optionsList}
                selectedOption={currentSelectedOption}
                showLabel={false}
                showBorder={false}
                onChange={onDropdownChangeHandler}
                optionZIndex={9999}
                width={selectFieldWidth}
                height={24}
                className="ff-add-module-dropdown"
                selectedOptionColor="var(--nlp-color)"
                tooltip={true}
                showToolTip={true}
              />
            )}
          </fieldset>
          <div className="ff-module-icon-container">
            <Tooltip title={confirmIconTooltip} placement={'bottom'}>
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
            <Tooltip title={cancelIconTooltip} placement={'bottom'}>
              <Icon
                className="icons"
                name="edit_label_close"
                onClick={() => !isDisable.cancel && handleCancel()}
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
          title={getTooltipTitle()}
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
              truncateText(text, truncatedTextCount, truncatedType)
            ) : (
              <HighlightText
                text={truncateText(text, truncatedTextCount, truncatedType)}
                highlight={truncateText(
                  highlightText,
                  truncatedTextCount,
                  truncatedType
                )}
              />
            )}
          </span>
        </Tooltip>
      )}
      {inlineValidationError && showError && isEditing && (
        <Typography as="p" fontSize={8} className="error-text">
          {showError}
        </Typography>
      )}
      {!inlineValidationError && (
        <Toaster
          isOpen={toasts.error}
          variant="info"
          toastTitle="Info!"
          toastMessage={showError}
          onCancelClick={() => handleToastToggle('error')}
          zIndex={2000000}
        />
      )}
    </div>
  );
};

export default EditLabel;

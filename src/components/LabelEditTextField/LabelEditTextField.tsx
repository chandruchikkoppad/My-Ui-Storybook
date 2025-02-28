import React, { useState, useRef, useEffect, FC } from 'react';
import './LabelEditTextField.scss';
import { LabelEditTextFieldTypes } from './types';
import Typography from '../Typography';
import HighlightText from '../HighlightText';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import Input from '../Input/Input';
import Select from '../Select/Select';
import useEscapeKey from '../../hooks/keyboardevents/useEscKeyEvent.js';
import { useKeyboardActions } from '../../utils/keyBoardActionUtil/UseKeyboardActions';

const getErrorMessage = (
  inputValue: string,
  text: string,
  customError?: string,
  customErrorCondition?: boolean
): string => {
  if (inputValue === text) {
    return 'No changes were made.';
  } else if (!inputValue) {
    return 'Text is required';
  } else if (inputValue.length < 3) {
    return 'Please enter at least 3 characters.';
  } else if (customErrorCondition) {
    return customError ?? 'Custom error occurred';
  }
  return '';
};
const LabelEditTextField: FC<LabelEditTextFieldTypes> = ({
  label,
  placeholder,
  text,
  showText = true,
  highlightText,
  customError,
  confirmIcon,
  customErrorCondition,
  cancelIcon,
  variant = 'textField',
  onInputChange,
  dropdownData = [],
  // width,
  className,
  height,
  isOpen = false,
  confirmAction,
  onClick,
  tooltip,
  onDoubleClick,
  disableEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(isOpen ?? false);
  const [inputValue, setInputValue] = useState(text ?? '');
  const [dropdownValue, setDropdownValue] = useState(
    dropdownData[0]?.value ?? ''
  );
  const [showError, setShowError] = useState('');
  const [disabled, isDisabled] = useState(true);
  const [isTextFieldModified, setIsTextFieldModified] = useState(false);
  const isThrowingError = showError && isEditing ? true : false;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cancelRef = useRef<HTMLDivElement | null>(null);
  const [clickTimeout, setClickTimeout] = useState<number | null>(null);
  const handleEsc = useEscapeKey('Escape');
  useEffect(() => {
    return () => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    };
  }, [clickTimeout]);
  const handleDoubleClick = () => {
    if (disableEditing) return;
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    }
    onDoubleClick && onDoubleClick();
    setIsEditing(true);
    setShowError('');
  };
  const handleSingleClick = () => {
    if (onClick) onClick();
  };
  const handleClick = () => {
    if (disableEditing) return;
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
    let errorMessage = '';
    if (inputValue.length === 0 || inputValue.trim().length === 0) {
      errorMessage = 'Please type any text.';
    } else if (inputValue.length < 3) {
      errorMessage = 'Please enter at least 3 characters.';
    } else if (customErrorCondition) {
      errorMessage = customError ?? 'Invalid input.';
    }

    if (errorMessage) {
      setShowError(errorMessage);
    } else {
      setIsEditing(false);
      setShowError('');
      if (confirmAction) confirmAction(inputValue, dropdownValue);
    }
  };

  const handleCancel = () => {
    setInputValue(text ?? '');
    setDropdownValue(dropdownData[0]?.value ?? '');
    setIsEditing(false);
    setShowError('');
    setIsTextFieldModified(false);
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    isDisabled(false);
    if (newValue.length === 0 || newValue.trim().length === 0) {
      setShowError('Please type any text.');
    } else if (newValue.length < 3) {
      setShowError('Please enter at least 3 characters.');
    } else if (customErrorCondition) {
      setShowError(customError ?? 'Invalid input.');
    } else {
      setShowError('');
    }

    setIsTextFieldModified(newValue !== text);

    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  const handleBlur = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node) &&
      cancelRef.current !== e.target
    ) {
      const errorMessage = getErrorMessage(inputValue, text ?? '', customError);

      if (errorMessage && isEditing) {
        setShowError(errorMessage);
      } else {
        setIsEditing(false);
        setShowError('');
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBlur);
    return () => {
      document.removeEventListener('click', handleBlur);
    };
  }, [inputValue]);

  handleEsc(handleCancel);

  function handleKeyBoard(key: string) {
    if (key === 'Enter') {
      handleConfirm();
    }
  }

  useKeyboardActions([{ key: 'Enter', action: () => handleKeyBoard('Enter') }]);

  return (
    <div className="ff-label-edit-text-field" ref={containerRef}>
      {isEditing ? (
        <div className="ff-label-text-field">
          {variant === 'textFieldWithDropdown' ? (
            <div
              className={`ff-label-text-field-with-dropdown ${
                isEditing ? 'open' : ''
              }`}
              style={{ height }}
            >
              <Input
                name="input"
                type="text"
                label={label ? label : ''}
                disabled={false}
                error={isThrowingError}
                placeholder={placeholder ? placeholder : ''}
                value={inputValue}
                onChange={handleTextFieldChange}
                className={`${className} 
                
               ${isTextFieldModified ? 'modified' : ''}`}
              />
              <Select
                label={''}
                optionsList={dropdownData}
                selectedOption={{ value: dropdownValue, label: dropdownValue }}
                onChange={(option) => setDropdownValue(option.value)}
              />
            </div>
          ) : (
            <div className="ff-label-text-field-without-dropdown">
              <Input
                name="input"
                type="text"
                label={label ? label : ''}
                disabled={false}
                error={isThrowingError}
                placeholder={placeholder ? placeholder : ''}
                value={inputValue}
                onChange={handleTextFieldChange}
                className={`${className} 
               
               ${isTextFieldModified ? 'modified' : ''}`}
              />
            </div>
          )}
          <div className="ff-icon-container">
            {confirmIcon && (
              <Tooltip title="Confirm" placement={'bottom'}>
                <Icon
                  color="var(--label-edit-confirm-icon)"
                  height={20}
                  width={20}
                  name={confirmIcon.name}
                  disabled={disabled}
                  className={`${
                    disabled ? 'disabled-confirm-icon' : 'confirm-icon'
                  }`}
                  onClick={handleConfirm}
                />
              </Tooltip>
            )}
            {cancelIcon && (
              <Tooltip title="Cancel" placement={'bottom'}>
                <Icon
                  color="var(--label-edit-cancel-icon)"
                  height={12}
                  width={20}
                  name={cancelIcon.name}
                  className="cancel-icon"
                  onClick={handleCancel}
                  ref={cancelRef}
                />
              </Tooltip>
            )}
          </div>
        </div>
      ) : (
        <Tooltip
          title={tooltip?.tooltipTitle ? tooltip?.tooltipTitle : ''}
          placement={'bottom'}
        >
          {showText && (
            <span
              className="display-text"
              onDoubleClick={handleDoubleClick}
              role="button"
              onClick={handleClick}
            >
              <HighlightText text={inputValue} highlight={highlightText} />
            </span>
          )}
        </Tooltip>
      )}
      {showError && isEditing && (
        <Typography as="p" fontSize={8} className="error-text">
          {showError}
        </Typography>
      )}
    </div>
  );
};

export default LabelEditTextField;

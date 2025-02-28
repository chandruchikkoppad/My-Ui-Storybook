import React, { useState, useRef, FC } from 'react';
import './EditTextField.scss';
import { LabelEditTextFieldTypes } from './types';
import Typography from '../Typography';
import HighlightText from '../HighlightText';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { capitalize } from '../../utils/capitalize/capitalize';
import Input from '../Input/Input';
import { useKeyboardActions } from '../../utils/keyBoardActionUtil/UseKeyboardActions';

const getErrorMessage = (
  inputValue: string,
  text: string,
  customError?: string,
  customErrorCondition?: boolean
): string => {
  if (inputValue === text) {
    return 'No changes were made.';
  }
  if (!inputValue) {
    return 'Text is required';
  }
  if (inputValue.length < 3) {
    return 'Please enter at least 3 characters.';
  }
  if (customErrorCondition) {
    return customError ?? '';
  }
  return '';
};

const EditTextField: FC<LabelEditTextFieldTypes> = ({
  label,
  text,
  highlightText,
  customError,
  customErrorCondition = false,
  confirmIcon,
  cancelIcon,
  editIcon,
  dropdownData = [],
  // width = '',
  // height = '',
  isOpen = false,
  confirmAction,
  onClick,
  nameTooltipTitle,
}) => {
  const [isEditing, setIsEditing] = useState(isOpen ?? false);
  const [inputValue, setInputValue] = useState(text);
  const [disabled, isDisabled] = useState(true);
  const [dropdownValue, setDropdownValue] = useState(
    dropdownData[0]?.value ?? ''
  );
  const [showError, setShowError] = useState('');
  const [isTextFieldModified, setIsTextFieldModified] = useState(false);
  const isThrowingError = showError && isEditing ? true : false;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cancelRef = useRef<HTMLDivElement | null>(null);

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setShowError('');
  };

  const handleConfirm = () => {
    const errorMessage = getErrorMessage(
      inputValue,
      text,
      customError,
      customErrorCondition
    );

    if (errorMessage && isEditing) {
      setShowError(errorMessage);
    } else {
      setIsEditing(false);
      setShowError('');
      if (confirmAction) confirmAction(inputValue, dropdownValue);
    }
  };

  const handleCancel = () => {
    setInputValue(text);
    setDropdownValue(dropdownData[0]?.value ?? '');
    setIsEditing(false);
    setShowError('');
    setIsTextFieldModified(false);
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsTextFieldModified(true);
    setShowError('');
    isDisabled(false);
  };

  function handleKeyBoard(key: string) {
    if (key === 'Enter') {
      handleConfirm();
    }
    if (key === 'Escape') {
      handleCancel();
    }
  }

  useKeyboardActions([
    { key: 'Enter', action: () => handleKeyBoard('Enter') },
    { key: 'Escape', action: () => handleKeyBoard('Escape') },
  ]);

  return (
    <div className="ff-label-edit-text-field" ref={containerRef}>
      {isEditing ? (
        <div className="ff-label-text-field">
          <div className="ff-label-text-field-without-dropdown">
            <Input
              name="input"
              label={label ? label : ''}
              disabled={false}
              error={isThrowingError}
              placeholder="Enter your name"
              value={inputValue}
              onChange={handleTextFieldChange}
              className={`
                
               ${isTextFieldModified ? 'modified' : ''}`}
              type="text"
            />
          </div>
          <div className="ff-icon-container">
            {confirmIcon && (
              <Tooltip title="confirm" placement={'bottom'}>
                <Icon
                  color={
                    confirmIcon?.color ?? 'var(--default-confirm-icon-color)'
                  }
                  height={confirmIcon?.height ?? 20}
                  disabled={disabled}
                  width={confirmIcon?.width ?? 20}
                  name={confirmIcon?.name ?? 'default-confirm-icon'}
                  className={`${
                    confirmIcon?.className ?? 'default-confirm-class'
                  } ${disabled ? 'disabled-confirm-icon' : 'confirm-icon'}`}
                  onClick={handleConfirm}
                />
              </Tooltip>
            )}
            {cancelIcon && (
              <Tooltip title="cancel" placement={'bottom'}>
                <Icon
                  color={cancelIcon?.color ?? 'var(--label-edit-cancel-icon)'}
                  height={cancelIcon?.height ?? 12}
                  width={cancelIcon?.width ?? 20}
                  name={cancelIcon?.name ?? 'default-cancel-icon'}
                  className={cancelIcon?.className ?? 'cancel-icon'}
                  onClick={handleCancel}
                  ref={cancelRef}
                />
              </Tooltip>
            )}
          </div>
        </div>
      ) : (
        <div className="display-text-container">
          {nameTooltipTitle ? (
            <Tooltip title={nameTooltipTitle}>
              <span className="display-text" onClick={onClick}>
                <HighlightText text={inputValue} highlight={highlightText} />
              </span>
            </Tooltip>
          ) : (
            <span className="display-text" onClick={onClick}>
              <HighlightText text={inputValue} highlight={highlightText} />
            </span>
          )}
          <Tooltip title={capitalize(editIcon?.name ?? 'Edit')}>
            <Icon
              color={editIcon?.color ?? 'var(--label-edit-cancel-icon)'}
              height={editIcon?.height ?? 20}
              width={editIcon?.width ?? 20}
              name={editIcon?.name ?? 'edit'}
              className={editIcon?.className ?? 'edit-icon'}
              onClick={handleEditButtonClick}
            />
          </Tooltip>
        </div>
      )}
      {showError && isEditing && (
        <Typography as="p" fontSize={8} className="error-text">
          {showError}
        </Typography>
      )}
    </div>
  );
};

export default EditTextField;

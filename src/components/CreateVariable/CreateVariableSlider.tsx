import { ChangeEvent, useEffect, useState, type FC, type JSX } from 'react';
import Drawer from '../Drawer';
import { CreateVariableProps } from './types';
import Input from '../Input';
import Select from '../Select';
import './CreateVariableSlider.scss';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import Button from '../Button';
import Tooltip from '../Tooltip';
import {
  ALPHANUMERIC_WITH_ROUND_BRACES_REGEX,
  START_END_WHITESPACE_REGEX,
} from '../../validations/regex';
import ConditionalDropdown from '../ConditionalDropdown';
import Typography from '../Typography';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const CreateVariableSlider: FC<CreateVariableProps> = ({
  isOpen,
  variableTypesList = [],
  onClose,
  onNameChange,
  onValueChange,
  variableName,
  variableValue,
  onVariableTypeChange,
  selectedVariableType,
  hideValue = false,
  onHideChange,
  handleSubmit,
  mode = 'create',
  disabled,
  isHash = false,
  showHidePasswordIcon = true,
  dataFiles = [],
}): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>('');

  const getVariableNameError = (value: string): string => {
    let errorMessage = '';
    if (!value || value.length === 0) {
      errorMessage = 'variableName is required';
    } else if (!ALPHANUMERIC_WITH_ROUND_BRACES_REGEX.test(value)) {
      errorMessage = 'Name should be alphanumeric';
    } else if (value.length < 3) {
      errorMessage = 'Name should contain at least 3 characters';
    } else if (value.length > 25) {
      errorMessage = 'Name can contain at most 25 characters';
    } else if (!START_END_WHITESPACE_REGEX.test(value)) {
      errorMessage = 'Space is not allowed at starting and at the end';
    }
    return errorMessage;
  };

  const onBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const errorMessage = getVariableNameError(value);
    setError(!!errorMessage);
    setHelperText(errorMessage);
  };

  useEffect(() => {
    const errorMessage = getVariableNameError(variableName);
    setError(!!errorMessage);
    setHelperText(errorMessage);
  }, [variableName]);

  function isVariableNameValid(value: string): boolean {
    const isNonEmpty = !!value;
    const matchesPattern = ALPHANUMERIC_WITH_ROUND_BRACES_REGEX.test(value);
    const noWhitespaceEdges = START_END_WHITESPACE_REGEX.test(value);
    const lengthValid = value.length >= 3 && value.length <= 25;

    const isValid =
      isNonEmpty && matchesPattern && noWhitespaceEdges && lengthValid;
    return isValid;
  }

  const FooterContent: FC = (): JSX.Element => {
    return (
      <div className="ff-create-slider-footer">
        <Button onClick={onClose} label="Cancel" variant="tertiary" />
        <Button
          variant="primary"
          label={mode === 'create' ? 'Create' : 'Edit'}
          type="submit"
          onClick={handleSubmit}
          disabled={!isVariableNameValid(variableName)}
        />
      </div>
    );
  };
  return (
    <Drawer
      onClose={onClose}
      isOpen={isOpen}
      title={mode === 'create' ? 'Create Variable' : 'Edit Variable'}
      width="284px"
      height="342px"
      top="30%"
      right={8}
      isFooterRequired={true}
      overlay
      footerContent={<FooterContent />}
    >
      <div className="ff-create-variable-slider">
        <div className="ff-create-variable-slider-input">
          <Input
            label="Variable Name"
            required
            type="text"
            name="variableName"
            value={variableName || ''}
            onChange={(event) => onNameChange(event.target.value)}
            error={error}
            helperText={helperText}
            onBlur={onBlurHandler}
          />
        </div>
        <Select
          label="Variable Type"
          required
          onChange={(option: any) => onVariableTypeChange(option)}
          selectedOption={selectedVariableType}
          optionsList={variableTypesList}
          optionZIndex={99999}
          valueAccessor="label"
        />
        <ConditionalDropdown
          label="Variable Value"
          type={hideValue ? 'password' : 'text'}
          name="variableValue"
          isHash={isHash}
          showHidePasswordIcon={showHidePasswordIcon}
          showAddVariableIcon={false}
          dataFiles={dataFiles}
          dropdownWidth="auto"
          onChange={(event, item) => {
            const value = event.target.value;
            onValueChange(value, item);
          }}
          value={variableValue || ''}
        />
        {checkEmpty(dataFiles) && variableValue.length >= 1 && (
          <div className="ff-variable-option">
            <Typography as="div" fontSize={14}>
              No Option
            </Typography>
          </div>
        )}
        <div className="ff-hide-value-content">
          <Checkbox
            onChange={(event) => onHideChange(event.target.checked)}
            name="hideValue"
            label="Hide Value"
            checked={hideValue}
            disabled={disabled}
          />
          <Tooltip title="Once the value is hidden, it cannot be undone">
            <Icon name="info" width={12} height={12} />
          </Tooltip>
        </div>
      </div>
    </Drawer>
  );
};

export default CreateVariableSlider;

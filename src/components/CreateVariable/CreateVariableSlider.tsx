import {
  ChangeEvent,
  useEffect,
  useState,
  type FC,
  type JSX,
  useMemo,
} from 'react';
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
import VariableSuggestionInputDropDown from '../variableSuggestionInputDropDown';

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
  dataFiles = [],
}): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>('');
  const [hashInputValue, setHashInputValue] = useState<any>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: '',
    value: '',
  });
  useEffect(() => {
    if (isOpen && mode === 'edit') {
      setInitialValues({
        name: variableName,
        value: variableValue,
      });
    }
  }, []);

  const getVariableNameError = (value: string): string => {
    if (!value || value.length === 0) {
      return 'Variable Name is required';
    }
    if (value[0] === ' ' || value[value.length - 1] === ' ') {
      return 'Space is not allowed at starting and at the end';
    }
    if (!ALPHANUMERIC_WITH_ROUND_BRACES_REGEX.test(value)) {
      return 'Name should be alphanumeric';
    }
    if (value.length < 3) {
      return 'Name should contain at least 3 characters';
    }
    if (value.length > 25) {
      return 'Name can contain at most 25 characters';
    }
    return '';
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

  const hasChanges = useMemo(() => {
    if (mode !== 'edit') return true;

    return (
      variableName !== initialValues.name ||
      variableValue !== initialValues.value
    );
  }, [mode, variableName, variableValue, initialValues]);

  const FooterContent: FC = (): JSX.Element => {
    return (
      <div className="ff-create-slider-footer">
        <Button onClick={onClose} label="Cancel" variant="tertiary" />
        <Button
          variant="primary"
          label={mode === 'create' ? 'Create' : 'Update'}
          type="submit"
          onClick={() => {
            if (!isSubmitting && isVariableNameValid(variableName)) {
              setIsSubmitting(true);
              handleSubmit();
            }
          }}
          disabled={
            !isVariableNameValid(variableName) ||
            isSubmitting ||
            (mode === 'edit' && !hasChanges)
          }
        />
      </div>
    );
  };
  return (
    <Drawer
      zIndex={1350}
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
            onChange={(event) => {
              setIsSubmitting(false);
              onNameChange(event.target.value);
            }}
            error={error}
            helperText={helperText}
            onBlur={onBlurHandler}
          />
        </div>
        <Select
          label="Variable Type"
          required
          onChange={(option: any) => {
            onVariableTypeChange(option);
            setIsSubmitting(false);
          }}
          selectedOption={selectedVariableType}
          optionsList={variableTypesList}
          optionZIndex={99999}
          valueAccessor="label"
          disabled={mode === 'edit'}
        />
        <VariableSuggestionInputDropDown
          label="Variable Value"
          placeholder="Enter Variable value or select path using #"
          isHash
          isOnlyHash
          zIndex={99999}
          truncateTextValue={34}
          dataFiles={dataFiles}
          dropdownWidth="100%"
          setHashInputValue={setHashInputValue}
          hashInputValue={hashInputValue || {}}
          value={variableValue || ''}
          type={hideValue ? 'password' : 'text'}
          onChange={(event, item) => {
            const value = event.target.value;
            onValueChange(value, item);
          }}
          showAddVariableIcon={false}
        />
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

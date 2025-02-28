import { type FC, type JSX } from 'react';
import Drawer from '../Drawer';
import { CreateVariableProps } from './types';
import Input from '../Input';
import Select from '../Select';
import './CreateVariableSlider.scss';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const CreateVariableSlider: FC<CreateVariableProps> = ({
  isOpen,
  variableTypesList = [],
  onClose,
  onNameChange,
  onValueChange,
  variableName,
  value,
  onVariableTypeChange,
  selectedVariableType,
  hideValue = false,
  onHideChange,
  handleSubmit,
  mode = 'create',
  disabled,
}): JSX.Element => {
  const FooterContent: FC = (): JSX.Element => {
    return (
      <div className="ff-create-slider-footer">
        <Button onClick={onClose} label="Cancel" variant="tertiary" />
        <Button
          variant="primary"
          label={mode === 'create' ? 'Create' : 'Edit'}
          type="submit"
          onClick={handleSubmit}
          disabled={checkEmpty(variableName)}
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
      height="272px"
      top="30%"
      right={8}
      isFooterRequired={true}
      overlay
      footerContent={<FooterContent />}
    >
      <div className="ff-create-variable-slider">
        <Input
          label="Variable Name"
          required
          type="text"
          name="variable name"
          value={variableName || ''}
          onChange={(event) => onNameChange(event.target.value)}
        />
        <Select
          label="Variable Type"
          required
          onChange={(option: any) => onVariableTypeChange(option)}
          selectedOption={selectedVariableType}
          optionsList={variableTypesList}
          optionZIndex={99999}
          valueAccessor='label'
        />
        <Input
          label="Variable Value"
          type={hideValue ? 'password' : 'text'}
          name="value"
          value={mode === 'create' ? variableName : value || ''}
          onChange={(event) => onValueChange(event.target.value)}
        />
        <div className="ff-hide-value-content">
          <Checkbox
            onChange={(event) => onHideChange(event.target.checked)}
            name="hide value"
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

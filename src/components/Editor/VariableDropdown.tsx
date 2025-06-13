import type { FC, ReactNode } from 'react';
import { VariableDropdownProps, DyanamicObj, VariableOption } from './types';
import Icon from '../Icon';
import './VariableDropdown.scss';
import Typography from '../Typography';
import cx from 'classnames';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { truncateText } from '../../utils/truncateText/truncateText';

const VariableDropdown: FC<VariableDropdownProps> = ({
  optionsList = [],
  onSelectVariable,
  dropdownPosition,
  position = 'relative',
  width = '300px',
  height = '100px',
  zIndex = 9999,
  truncateTextValue = 34,
}): ReactNode => {
  const VARIABLE_ICON_MAP: Record<string, string> = {
    LOCAL: 'local_variable_icon',
    GLOBAL: 'global_variable_icon',
    PROJECT_ENVIRONMENT: 'project_env_variable_icon',
  };

  const getVariableIcon = (option?: VariableOption): string => {
    if (!option) return '';

    const variableId = option._id || option.id;

    if (variableId?.startsWith('PARAMETER')) return 'step_group_parameter';
    if (option.type === 'LOCAL' && option?.parentVariableType === 'STEPGROUP')
      return 'step_group_variable';

    if (option.type === '_startforloop') return 'for_loop_variable';
    if (option.type === 'DATAPROVIDER') return 'data_provider_variable';
    return VARIABLE_ICON_MAP[option.type || ''] || '';
  };

  return (
    <div
      className={cx('ff-variable-dropdown', position)}
      style={
        dropdownPosition
          ? {
              top: dropdownPosition.top + 30,
              left: dropdownPosition.left - 30,
              width,
              height,
              zIndex,
            }
          : { width, height, zIndex }
      }
    >
      {!checkEmpty(optionsList) ? (
        optionsList?.map((option: DyanamicObj): ReactNode => {
          return (
            <div
              className="ff-variable-option"
              onMouseDown={() => onSelectVariable(option)}
              key={option?.id}
            >
              <Typography as="span" fontSize={14}>
                {truncateText(
                  option?.type === '_startforloop'
                    ? `FLV_for:${option?.name}`
                    : option?.type === 'DATAPROVIDER'
                    ? option?.dpName + ':' + option?.varname
                    : option?.name,
                  truncateTextValue
                )}
              </Typography>
              <Icon
                name={getVariableIcon(option)}
                height={16}
                width={16}
                hoverEffect
              />
            </div>
          );
        })
      ) : (
        <div className="ff-variable-option">
          <Typography as="span" fontSize={14}>
            No Option
          </Typography>
        </div>
      )}
    </div>
  );
};

export default VariableDropdown;

import type { FC, ReactNode } from 'react';
import { VariableDropdownProps, VariableOption } from './types';
import Icon from '../Icon';
import './VariableDropdown.scss';
import Typography from '../Typography';
import cx from 'classnames';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { isTextTruncated } from '../../utils/truncateText/truncateText';
import { dynamicObject } from '../variableSuggestionInputDropDown/types';
import Tooltip from '../Tooltip';
import { DynamicWidthTooltip } from './DynamicWidthToolTip';
import { Virtuoso } from 'react-virtuoso';

const VariableDropdown: FC<VariableDropdownProps> = ({
  optionsList = [],
  onSelectVariable,
  dropdownPosition,
  position = 'relative',
  width,
  height = '160px',
  zIndex = 9999,
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
    if (
      option?.parentVariableType === 'STEPGROUP' &&
      (option.type === 'LOCAL' || option?.type === 'STEPGROUP')
    )
      return 'step_group_variable';

    if (option.type === '_startforloop') return 'for_loop_variable';
    if (option.type === 'DATAPROVIDER') return 'data_provider_variable';
    return VARIABLE_ICON_MAP[option.type || ''] || '';
  };

  const getDisplayText = (option: dynamicObject) => {
    if (option?.type === '_startforloop') return `FLV_for:${option?.name}`;
    if (option?.type === 'DATAPROVIDER')
      return `${option?.dpName}:${option?.varname}`;
    return option?.name;
  };

  function getNumericValue(value: string): number {
    if (value.endsWith('px')) {
      const num = parseInt(value.slice(0, -2), 10);
      return isNaN(num) ? 212 : num - 66;
    }
    return 212;
  }

  // Calculate item height based on width type
  const itemHeight = 32;

  const renderItem = (index: number) => {
    const option = optionsList[index];
    if (!option) return null;

    return (
      <div
        className={'ff-variable-data'}
        onMouseDown={() => onSelectVariable(option)}
        key={`${option.id}-${index}`}
      >
        {width.endsWith('px') ? (
          <>
            <Tooltip
              title={
                isTextTruncated(
                  getDisplayText(option),
                  getNumericValue(width),
                  'pixel'
                )
                  ? getDisplayText(option)
                  : ''
              }
              style={{
                width: `${getNumericValue(width)}px`,
              }}
            >
              <Typography as="span" fontSize={12} className="ff-truncated_text">
                {getDisplayText(option)}
              </Typography>
            </Tooltip>
            <Icon
              name={getVariableIcon(option)}
              height={24}
              width={24}
              hoverEffect
            />
          </>
        ) : (
          <DynamicWidthTooltip option={option} />
        )}
      </div>
    );
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
        <Virtuoso
          totalCount={optionsList.length}
          itemContent={renderItem}
          style={{ height, fontSize: '12px' }}
          overscan={10}
          fixedItemHeight={itemHeight}
        />
      ) : (
        <div className="ff-variable-option ff-variable-option-no-data">
          <Typography as="span" fontSize={12}>
            No Option
          </Typography>
        </div>
      )}
    </div>
  );
};

export default VariableDropdown;

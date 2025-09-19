import { useRef, useEffect, useState } from 'react';
import Icon from '../Icon';
import { VariableOption } from './types';
import { dynamicObject } from '../ConditionalDropdown/types';
import Tooltip from '../Tooltip';

interface DynamicWidthTooltipProps {
  option: dynamicObject;
}

export const DynamicWidthTooltip = ({ option }: DynamicWidthTooltipProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const checkTruncation = () => {
      setIsTruncated(el.scrollWidth > el.clientWidth);
    };

    const raf = requestAnimationFrame(checkTruncation);
    window.addEventListener('resize', checkTruncation);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', checkTruncation);
    };
  }, [option]);
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
  const getDisplayText = (option: dynamicObject) => {
    if (option?.type === '_startforloop') return `FLV_for:${option?.name}`;
    if (option?.type === 'DATAPROVIDER')
      return `${option?.dpName}:${option?.varname}`;
    return option?.name;
  };

  return (
    <div
      style={{
        width: '-webkit-fill-available',
      }}
      className="ff-variable-option ff-variable-data"
    >
      <Tooltip
        title={isTruncated ? getDisplayText(option) : ''}
        style={{
          width: 'calc(100% - 32px)',
        }}
      >
        <span ref={textRef} className="ff-truncated_text">
          {getDisplayText(option)}
        </span>
      </Tooltip>
      <Icon name={getVariableIcon(option)} height={16} width={16} hoverEffect />
    </div>
  );
};

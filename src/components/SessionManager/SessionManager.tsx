import { forwardRef, useState } from 'react';
import './SessionManager.scss';
import Icon from '../Icon';
import { SessionManagerProps } from './types';
import Tooltip from '../Tooltip';

const SessionManager = forwardRef<HTMLDivElement, SessionManagerProps>(
  (
    {
      isRotate = false,
      modal = [],
      onClick = () => {},
      tooltip = {},
      icons = [
        'app_actions_icon',
        'screenshot_icon',
        'video_record_icon',
        'test_gallary_icon',
        'session_setting_icon',
      ],
      className = '',
    },
    ref
  ) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const handleIconClick = (index: number, iconName: string) => {
      onClick(index);
      if (modal.includes(iconName)) {
        setActiveModal(activeModal === iconName ? null : iconName);
      }
    };

    const handleMouseEnter = (index: number, iconName: string) => {
      setHoveredIndex(index);
      if (modal.includes(iconName)) {
        setActiveModal(iconName);
      }
    };

    const handleMouseLeave = () => {
      setHoveredIndex(null);
      setActiveModal(null);
    };

    const containerClass = `ff-body-container ${
      isRotate ? 'vertical' : 'horizontal'
    } ${className}`;

    return (
      <div ref={ref} className={containerClass}>
        {icons.map((iconName, index) => (
          <Tooltip
            key={iconName}
            title={tooltip?.[iconName] || ''}
            placement={isRotate ? 'right' : 'bottom'}
          >
            <div
              className="ff-body-container__icon-wrapper"
              onMouseEnter={() => handleMouseEnter(index, iconName)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleIconClick(index, iconName)}
            >
              <Icon
                className="ff-body-container__icon"
                name={iconName}
                width={24}
                height={24}
                color={
                  hoveredIndex === index
                    ? 'var(--session-control-bg)'
                    : 'var(--base-bg-color)'
                }
              />
              {modal.includes(iconName) && activeModal === iconName && (
                <div className="ff-body-container__modal">
                  {/* Empty modal with no content */}
                </div>
              )}
            </div>
          </Tooltip>
        ))}
      </div>
    );
  }
);

SessionManager.displayName = 'SessionManager';

export default SessionManager;

import React from 'react';
import './PromptContainer.scss';
import { PromptContainerProps, Action } from './types';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import Typography from '../Typography';

const PromptContainer: React.FC<PromptContainerProps> = ({
  id = 0,
  serialNumber,
  activeId,
  setActiveId,
  children,
  onIconClick,
  numberChildren,
  onClick,
  onNextClick,
  onPreviousClick,
}) => {
  const actions: Action[] = [
    {
      action: 'delete',
      title: 'Delete',
      color: 'var(--ff-delete-button-attachment)',
    },
    {
      action: 'edit',
      title: 'Edit',
      color: 'var(--label-edit-text-label-color)',
    },
    {
      action: 'regenerate',
      title: 'Regenerate',
      color: 'var(--label-edit-text-label-color)',
    },
  ];

  const handleContainerClick = () => {
    setActiveId(id);
    onClick();
  };
  const handleNavigationClick = (e: React.MouseEvent, callback: () => void) => {
    e.stopPropagation();
    callback();
  };
  const handleIconClick = (e: React.MouseEvent, action: string) => {
    e.stopPropagation();
    onIconClick(action);
  };

  return (
    <div
      className={`ff-prompt-container-Block ${
        activeId === id ? 'active' : 'inactive'
      }`}
      onClick={handleContainerClick}
    >
      <div className="ff--prompt-header">
        <Typography
          as="div"
          className="ff-prompt-number-bg-color"
          color="var(--table-column-text-color)"
        >
          {serialNumber}
        </Typography>
      </div>
      <div className="ff-prompt-content">{children}</div>
      <div className="ff-prompt-icons">
        <div className="ff-prompt-icons-leftside">
          {actions.map((act) => {
            return (
              <Tooltip title={act.title} placement="bottom">
                <Icon
                  name={act.action}
                  color={act.color}
                  hoverEffect={true}
                  onClick={(e) => handleIconClick(e, act.action)}
                />
              </Tooltip>
            );
          })}
        </div>
        <div className="ff-prompt-icons-rightside">
          <Icon
            className="ff-prompt-icons-style"
            name="arrow_left_accordian"
            color="var(--table-column-text-color)"
            width={12}
            height={12}
            onClick={(e) => handleNavigationClick(e, onPreviousClick)}
          />

          {numberChildren}
          <Icon
            className="ff-prompt-icons-style"
            name="arrow_right_icon"
            color="var(--table-column-text-color)"
            width={12}
            height={12}
            onClick={(e) => handleNavigationClick(e, onNextClick)}
          />
        </div>
      </div>
    </div>
  );
};

export default PromptContainer;

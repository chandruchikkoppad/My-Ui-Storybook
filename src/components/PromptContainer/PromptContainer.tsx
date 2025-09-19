import React, { useEffect, useRef, useState } from 'react';
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
  onContainerClick,
  onNextClick,
  onPreviousClick,
  disabled,
  isEditAccess,
  versionsLength,
  count,
  hiddenActions = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const hiddenListIcons = Array.isArray(hiddenActions)
    ? hiddenActions
    : hiddenActions
    ? [hiddenActions]
    : [];

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
    onContainerClick();
  };
  const handleNavigationClick = (e: React.MouseEvent, callback: () => void) => {
    e.stopPropagation();
    callback();
  };
  const handleIconClick = (e: React.MouseEvent, action: string) => {
    e.stopPropagation();
    onIconClick(action);
  };
  const handleReadMoreClick = () => {
    if (contentRef.current) {
      const computedStyle = getComputedStyle(contentRef.current);
      let lineHeight = parseFloat(computedStyle.fontSize) * 1.2;
      const maxHeight = lineHeight * 6;
      if (contentRef.current.scrollHeight > maxHeight) {
        setShowReadMore(true);
      }
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      handleReadMoreClick();
    }
  }, []);

  const toggleExpand = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`ff-prompt-container-Block ${
        activeId === id ? 'active' : 'inactive'
      } `}
      onClick={handleContainerClick}
    >
      <Typography fontSize={8} className="ff-prompt-number-bg-color" as="span">
        {`Test cases ${serialNumber}`}
      </Typography>
      <>
        <div
          className={`ff-prompt-content ${isExpanded ? 'expanded' : ''}`}
          ref={contentRef}
        >
          {children}
          {isExpanded && (
            <>
              <span
                role="button"
                aria-label="toggleExpand"
                onClick={toggleExpand}
                className="read-less-btn"
              >
                <Typography
                  color="var(--brand-color)"
                  fontWeight="semi-bold"
                  className="read-more-btn-text"
                >
                  Read Less
                </Typography>
              </span>{' '}
            </>
          )}
        </div>
        {showReadMore && !isExpanded && (
          <div
            role="button"
            aria-label="toggleExpand"
            onClick={toggleExpand}
            className="read-more-btn"
          >
            <Typography
              color="var(--brand-color)"
              fontWeight="semi-bold"
              className="read-more-btn-text"
            >
              Read More
            </Typography>
          </div>
        )}
      </>
      <div className="ff-prompt-icons">
        <div className="ff-prompt-icons-leftside">
          {actions
            .filter((act) => !hiddenListIcons.includes(act.action))
            .map((act, index) => {
              const isDelete = act?.action === 'delete';
              const isRegenerate = act?.action === 'regenerate';
              const shouldDisableIcon =
                (isEditAccess && isDelete) ||
                (isRegenerate && (versionsLength ?? 0) >= 3) ||
                disabled;
              return (
                <Tooltip
                  title={act.title}
                  placement="bottom"
                  key={`${act?.title}-${index}`}
                >
                  <Icon
                    disabled={shouldDisableIcon}
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
            disabled={count === 1}
            className="ff-prompt-icons-style"
            name="arrow_left_accordian"
            color="var(--table-column-text-color)"
            width={18}
            height={18}
            onClick={(e) => handleNavigationClick(e, onPreviousClick)}
          />

          {numberChildren}
          <Icon
            disabled={count === versionsLength}
            className="ff-prompt-icons-style"
            name="arrow_right_icon"
            color="var(--table-column-text-color)"
            width={18}
            height={18}
            onClick={(e) => handleNavigationClick(e, onNextClick)}
          />
        </div>
      </div>
    </div>
  );
};

export default PromptContainer;

import { useState } from 'react';
import './Accordion.scss';
import Icon from '../Icon';
import '../../../index.scss';
import { AccordionProps } from './types';
import Tooltip from '../Tooltip';
import Typography from '../Typography';
import classNames from 'classnames';

/**
 * Accordion UI component
 */
const Accordion = ({
  headerTitle = '',
  color,
  minHeight = '32px', // Default min-height for accordion content
  accordionContent = <>This is accordion content</>,
  disable = false,
  disableInfoMessage = '',
  accordionStateIconName = 'arrow_down',
  AccordionStateIconWidth = 12,
  AccordionStateIconHeight = 8,
  isExpand,
  onClick,
  className = '',
  iconColor = 'var(--brand-color)',
}: AccordionProps) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(
    isExpand ?? true
  );

  const onAccordionClick = () => {
    if (onClick) {
      onClick();
    }
    if (!disable) {
      setIsAccordionExpanded(!isAccordionExpanded);
    }
  };

  return (
    <div className={`ff-accordion ${className}`}>
      <div
        className={`accordion-header ${disable && 'ff-disabled'} ${
          isAccordionExpanded && 'expanded'
        } `}
        style={{ color: color || '--tooltip-bg-color' }}
        onClick={onAccordionClick}
      >
        <Tooltip title={disableInfoMessage}>
          <Typography
            as="div"
            className="header-title"
            fontWeight="semi-bold"
            lineHeight="18px"
          >
            {headerTitle}
          </Typography>
        </Tooltip>

        <Icon
          name={accordionStateIconName}
          hoverEffect={false}
          className={classNames('accordion-arrow', {
            expanded: isAccordionExpanded,
          })}
          width={AccordionStateIconWidth}
          height={AccordionStateIconHeight}
          color={iconColor}
        />
      </div>
      {!disable && isAccordionExpanded && (
        <div style={{ minHeight }} className="accordion-content">
          {accordionContent}
        </div>
      )}
    </div>
  );
};

export default Accordion;

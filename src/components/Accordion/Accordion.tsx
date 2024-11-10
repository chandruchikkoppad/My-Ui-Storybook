import { useState } from 'react';
import './Accordion.scss';
import Icon from '../Icon';
import '../../../index.scss';
import { AccordionProps } from './types';
import Tooltip from '../Tooltip';
import Typography from '../Typography';

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
}: AccordionProps) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(true);

  const onAccordionClick = () => {
    setIsAccordionExpanded(!isAccordionExpanded);
  };
  return (
    <div className="ff-accordion">
      <Tooltip title={disableInfoMessage}>
        <div
          className={`accordion-header ${disable && 'ff-disabled'} ${
            isAccordionExpanded && 'expanded'
          }`}
          style={{ color: color || '--tooltip-bg-color' }}
        >
          <Typography
            as="div"
            className="header-title"
            fontWeight="semi-bold"
            lineHeight="18px"
          >
            {headerTitle}
          </Typography>

          <Icon
            name={'arrow_up'}
            hoverEffect={false}
            className={`accordion-arrow  ${isAccordionExpanded && 'expanded'}`}
            onClick={() => {
              !disable && onAccordionClick();
            }}
          />
        </div>
      </Tooltip>
      {!disable && isAccordionExpanded && (
        <div style={{ minHeight }} className="accordion-content">
          {accordionContent}
        </div>
      )}
    </div>
  );
};

export default Accordion;

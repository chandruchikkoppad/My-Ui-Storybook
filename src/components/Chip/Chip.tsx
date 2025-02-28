import { useState } from 'react';
import './Chip.scss';
import classNames from 'classnames';
import { ChipsProps } from './types';
import Typography from '../Typography';

const Chip = ({
  label = '',
  fullText = '',
  variant = 'primary',
  labelWidth = 36,
  fullTextWidth = 86,
  onClick = () => {},
}: ChipsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const labelText = isHovered && fullText ? fullText : label;
  const handleOnMouseEnter = () => setIsHovered(true);
  const handleOnMouseLeave = () => setIsHovered(false);
  const dynamicStyle = isHovered
    ? {
        maxWidth: `${fullTextWidth}px`,
        transition: 'transform 0.3s ease-in-out,max-width 0.5s ease-in-out',
        overflow: 'hidden',
      }
    : {
        maxWidth: `${labelWidth}px`,
        transition: 'transform 0.3s ease-in-out,max-width 0.5s ease-in-out',
        overflow: 'hidden',
      };
  return (
    <div className="ff-chip-wrapper">
      <button
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onClick={onClick}
        className={classNames(
          `ff-default-chip-style ff-default-chip-style--${variant}`,
          { ['ff-default-chip-style--fullText']: !!fullText }
        )}
        style={dynamicStyle}
      >
        {labelText && (
          <Typography
            as="p"
            fontSize={10}
            fontWeight="semi-bold"
            color="var(----text-color)"
            className="ff-chip-paragraph"
          >
            {labelText}
          </Typography>
        )}
      </button>
    </div>
  );
};

export default Chip;

import { useState } from 'react';
import './Chip.scss';
import classNames from 'classnames';
import { ChipsProps } from './types';
import Typography from '../Typography';

const Chip = ({
  label = '',
  fullText = '',
  variant = 'primary',
  onClick = () => {},
}: ChipsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const labelText = isHovered && fullText ? fullText : label;
  const handleOnMouseEnter = () => setIsHovered(true);
  const handleOnMouseLeave = () => setIsHovered(false);

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
      >
        {labelText && <Typography as="p">{labelText}</Typography>}
      </button>
    </div>
  );
};

export default Chip;

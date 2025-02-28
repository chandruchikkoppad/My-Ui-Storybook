import { FC } from 'react';
import './FieldSet.scss';
import { fieldSetProps } from './types';
import Typography from '../Typography';
const FieldSet: FC<fieldSetProps> = ({
  legendName,
  height,
  width,
  children,
}) => {
  return (
    <div className="ff_fieldSet_container">
      <fieldset className="ff_fieldSet" style={{ height, width }}>
        <legend className="ff_legend_container">
          <Typography
            color="var(--license_header_text_color)"
            fontSize={8}
            lineHeight="12px"
          >
            {legendName}
          </Typography>
        </legend>
        <div className="ff_children_container">{children}</div>
      </fieldset>
    </div>
  );
};

export default FieldSet;

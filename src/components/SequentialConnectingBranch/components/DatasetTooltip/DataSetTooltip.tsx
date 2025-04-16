import { FC } from 'react';
import Typography from '../../../Typography';
import { DataSetTooltipProps } from './types';
import './DataSetTooltip.scss';

const DataSetTooltip: FC<DataSetTooltipProps> = ({
  datSetToolTip: {
    globalVariableSetName = '',
    peVariableSetName = '',
    testDataSetName = '',
  },
}) => {
  const toolTipTitleValue = {
    'Project Environment Set': peVariableSetName,
    'Global Variable Set': globalVariableSetName,
    'Test Data Set': testDataSetName,
  };

  return (
    <>
      {Object.entries(toolTipTitleValue).map(([key, value], index) => (
        <div key={index} className="ff-dataSetList-container">
          <div>
            <Typography
              as="div"
              fontSize={10}
              lineHeight="15px"
              color="var(--details-page-value-color)"
              className="ff-dataSetList-items"
            >
              {key}
            </Typography>
            <Typography as="div" lineHeight="18px" color="var(--base-bg-color)">
              {value}
            </Typography>
          </div>
        </div>
      ))}
    </>
  );
};

export default DataSetTooltip;

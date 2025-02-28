import { FC } from 'react';
import Tooltip from '../Tooltip';
import Typography from '../Typography';
import './ChipWithCount.scss';
import { ChipsWithCountProps } from './types';
import { truncateText } from '../../utils/truncateText/truncateText';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const ChipWithCount: FC<ChipsWithCountProps> = ({
  labelsList = [],
}: ChipsWithCountProps) => {
  const getRemainingLabels: JSX.Element = (
    <div className="ff-chip-tooltip">
      {labelsList.map((labels, index) =>
        index > 0 ? (
          <Typography
            as="div"
            children={labels}
            key={index}
            className="ff-chip-tooltip-label"
          />
        ) : null
      )}
    </div>
  );

  return (
    <>
      {!checkEmpty(labelsList) && (
        <div className="ff-chip-with-count-container">
          <Tooltip title={labelsList[0]}>
            <Typography
              as="div"
              children={truncateText(labelsList[0] || '', 10)}
              className="ff-chip-label"
              fontWeight="medium"
            />
          </Tooltip>
          {labelsList.length > 1 && (
            <Tooltip
              title={<Typography as="div" children={getRemainingLabels} />}
            >
              <Typography
                as="div"
                children={`+${labelsList.length - 1}`}
                className={'ff-chip-count'}
                fontWeight="medium"
              />
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
};

export default ChipWithCount;

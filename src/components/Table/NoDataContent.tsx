import { type FC } from 'react';
import './Table.scss';
import Icon from '../Icon';
import Typography from '../Typography';

const NoDataContent: FC = () => {
  return (
    <div className="no_data_message">
      <Icon name="no_license_found" width={120} height={115} />
      <Typography fontSize="24px" lineHeight="36px" fontWeight="bold">
        No Results Found
      </Typography>
    </div>
  );
};

export default NoDataContent;
//ToDo check new component can be used here

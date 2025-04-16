import React from 'react';
import { DynamicObj } from '../../CreateVariable/types';
import Typography from '../../Typography';

const StepResultStats: React.FC<any> = ({ metaData }) => {
  const statusDetails = metaData;

  const groupStatus = [
    {
      name: 'Passed',
      count: statusDetails?.totalPassed,
      color: 'var(--status-approved-text-color)',
    },
    {
      name: 'Failed',
      count: statusDetails?.totalFailed,
      color: 'var(--status-rejected-text-color)',
    },
    {
      name: 'Warning',
      count: statusDetails?.totalWarning,
      color: 'var(--status-warning-text-color)',
    },
    {
      name: 'Skipped',
      count: statusDetails?.totalSkipped,
      color: 'var(--status-skipped-text-color)',
    },
    {
      name: 'Terminated',
      count: statusDetails?.totalTerminated,
      color: 'var(--status-skipped-text-color)',
    },
    {
      name: 'Aborted',
      count: statusDetails?.totalAborted,
      color: 'var(--status-skipped-text-color)',
    },
  ];

  const getLabel = (metaData: DynamicObj, count: number) => {
    if (['_startforloop', 'Iteration'].includes(metaData?.type)) {
      return count > 1 ? 'Iterations' : 'Iteration';
    }
    if (metaData?.type === '_iteration') {
      return count > 1 ? 'Steps' : 'Step';
    }
    return '';
  };

  return (
    <div className="step-result-stats">
      {groupStatus.map((obj) =>
        obj?.count && obj?.count > 0 ? (
          <Typography
            key={obj?.name}
            color={obj?.color}
            fontWeight="semi-bold"
            as="div"
          >
            {`${obj?.count}/${statusDetails?.total} ${getLabel(
              metaData,
              obj?.count
            )}  ${obj?.name}`}
          </Typography>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default StepResultStats;

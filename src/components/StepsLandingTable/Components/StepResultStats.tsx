import Typography from '../../Typography';
import Tooltip from '../../Tooltip';
import { truncateText } from '../../../utils/truncateText/truncateText';
import './StepInnerTable.scss';
import { StepResultStatsProps, StatusItem } from './Types';

const StepResultStats: React.FC<StepResultStatsProps> = ({
  metaData,
  width = 0,
}) => {
  const total = metaData?.total || 0;

  const statusList: StatusItem[] = [
    {
      name: 'Passed',
      count: metaData?.totalPassed,
      color: 'var(--status-approved-text-color)',
    },
    {
      name: 'Failed',
      count: metaData?.totalFailed,
      color: 'var(--status-rejected-text-color)',
    },
    {
      name: 'Warning',
      count: metaData?.totalWarning,
      color: 'var(--status-warning-text-color)',
    },
    {
      name: 'Skipped',
      count: metaData?.totalSkipped,
      color: 'var(--status-skipped-text-color)',
    },
    {
      name: 'Terminated',
      count: metaData?.totalTerminated,
      color: 'var(--status-skipped-text-color)',
    },
    {
      name: 'Aborted',
      count: metaData?.totalAborted,
      color: 'var(--status-skipped-text-color)',
    },
  ];

  // Filter only statuses with a count > 0
  const visibleStatuses = statusList.filter((item) => item.count > 0);

  // Full raw text (used in tooltip)
  const fullText = visibleStatuses
    .map(({ count, name }) => `${count}/${total} ${name}`)
    .join(' ');

  // Truncate entire line text based on provided width
  const truncatedText = width
    ? truncateText(fullText, width, 'pixel')
    : fullText;

  // Break truncated text into colored segments
  const coloredSegments: { text: string; color: string }[] = [];
  let cursor = 0;

  for (const { count, name, color } of visibleStatuses) {
    const segmentText = `${count}/${total} ${name}`;
    if (cursor + segmentText.length <= truncatedText.length) {
      coloredSegments.push({ text: segmentText, color });
      cursor += segmentText.length + 1;
    } else {
      const remainingText = truncatedText.slice(cursor).trim();
      if (remainingText) {
        coloredSegments.push({ text: remainingText, color });
      }
      break;
    }
  }

  return (
    <div className="ff-stepResultStats">
      <Tooltip title={fullText}>
        <Typography
          as="div"
          className="status-inline-text"
          fontWeight="semi-bold"
        >
          {coloredSegments.map(({ text, color }, index) => (
            <Typography
              key={index}
              as="span"
              fontWeight="semi-bold"
              style={{ color, whiteSpace: 'nowrap' }}
            >
              {text + ' '}
            </Typography>
          ))}
        </Typography>
      </Tooltip>
    </div>
  );
};

export default StepResultStats;

import {
  getStatusColor,
  getStatusLabel,
  getStatus,
} from '../../../utils/getStatusColor/getStatusColor';
import Checkbox from '../../Checkbox';
import Icon from '../../Icon';
import StatusButton from '../../StatusButton';
import Tooltip from '../../Tooltip';
import Typography from '../../Typography';
import StepResultStats from './StepResultStats';
import '../StepLandingTable.scss';

const StepsTitle = ({
  isViewPrivilegeMode,
  onAccordionClick,
  showActionCell,
  handleMainCheckbox,
  isAllSelected,
  isPartialSelected,
  title,
  totalRows,
  expanded,
  actionCell,
  row,
  metaData,
  tableMeta,
}: any) => {
  let columnWidths = tableMeta.map((column: any) => column.width);

  return (
    <article className="step-title-article">
      <div style={{ width: columnWidths[0] + 140 }}>
        <div
          className="accordion-header"
          style={{
            paddingLeft: isViewPrivilegeMode ? '8px' : '24px',
          }}
        >
          {!isViewPrivilegeMode && (
            <div>
              <Checkbox
                onChange={(e) => handleMainCheckbox(title, e.target.checked)}
                checked={isAllSelected(title, totalRows)}
                partial={isPartialSelected(title, totalRows)}
                disabled={totalRows === 0}
              />
            </div>
          )}
          <div className="header-title">
            <Typography
              as="div"
              fontWeight="semi-bold"
              color="var(--nlp-option-color)"
              cursor="default"
              lineHeight="18px"
            >
              {title}
            </Typography>
          </div>
          <div
            className={`accordion-arrow ${expanded ? 'expanded' : ''}`}
            onClick={() => onAccordionClick(title)}
          >
            <Icon
              name="arrow_right"
              color={expanded ? 'var(--brand-color)' : 'var(--default-color)'}
              width={16}
              height={16}
              className="steps-arrow-svg"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {metaData && <StepResultStats metaData={metaData} />}
            {showActionCell && <>{actionCell(row)}</>}
          </div>
        </div>
      </div>
      {metaData?.result && (
        <div
          className="step-result"
          style={{
            width: columnWidths[1] + 70,
          }}
        >
          <Tooltip title={metaData?.result} placement="bottom-start">
            <Typography
              lineHeight="18px"
              as="div"
              className="step-result-text"
              color={getStatusColor(metaData?.status)}
            >
              {metaData?.result}
            </Typography>
          </Tooltip>
        </div>
      )}
      {metaData?.status && (
        <div className="step-result" style={{ width: columnWidths[2] + 10 }}>
          <StatusButton
            label={getStatusLabel(metaData?.status)}
            status={getStatus(metaData?.status)}
          >
            {metaData?.status}
          </StatusButton>
        </div>
      )}
    </article>
  );
};

export default StepsTitle;

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
  isHeaderRequired,
  isViewPrivilegeMode,
  onAccordionClick,
  isBulkEnable,
  showActionCell,
  handleMainCheckbox,
  isAllSelected,
  isPartialSelected,
  tableMeta = [],
  title,
  totalRows,
  expanded,
  actionCell,
  row,
  metaData,
  isClientSide,
}: any) => {
  const columnWidths = tableMeta?.map((col: any) => col.width);

  const getWidth = (index: number) => {
    const width = columnWidths[index] ?? 0;

    switch (index) {
      case 0:
        return width + 110;
      case 1:
        return width + (width > 300 ? 60 : 70);
      case 2:
        return width + 20;
      default:
        return 0;
    }
  };

  return (
    <article
      className="step-title-article"
      style={{
        ...(!isHeaderRequired &&
          !isClientSide && { backgroundColor: 'var(--hover-color)' }),
      }}
    >
      <div style={{ width: `${getWidth(0)}px` }}>
        <div
          className="accordion-header"
          style={{
            paddingLeft: isViewPrivilegeMode || isClientSide ? '8px' : '24px',
          }}
        >
          {!isViewPrivilegeMode && !isClientSide && (
            <Checkbox
              onChange={(e) => handleMainCheckbox(title, e.target.checked)}
              checked={isAllSelected(title, totalRows)}
              partial={isPartialSelected(title, totalRows)}
              disabled={totalRows === 0}
            />
          )}

          <div className="header-title">
            <Typography
              as="div"
              fontWeight="semi-bold"
              color={
                isClientSide ? 'var(--brand-color)' : 'var(--nlp-option-color)'
              }
              cursor="default"
              lineHeight="18px"
            >
              {title}
            </Typography>
          </div>
          {isClientSide ? (
            //TODO: added temporary div will replace with add Icon
            <div style={{ padding: '12px' }}></div>
          ) : (
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
          )}
          <div className="ff_action_container">
            {metaData && <StepResultStats metaData={metaData} />}
            {showActionCell && !isBulkEnable && <>{actionCell(row)}</>}
          </div>
        </div>
      </div>
      {metaData?.message && (
        <div
          className="step-result"
          style={{
            width: `${getWidth(1)}px`,
          }}
        >
          <Tooltip title={metaData?.message} placement="bottom-start">
            <Typography
              lineHeight="18px"
              as="div"
              className="step-result-text"
              color={getStatusColor(metaData?.status)}
            >
              {metaData?.message}
            </Typography>
          </Tooltip>
        </div>
      )}
      {metaData?.status && (
        <div className="step-result" style={{ width: `${getWidth(2)}px` }}>
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

import { Fragment, type FC } from 'react';
import Icon from '../../Icon';
import { StepGroupAccordionsProp } from './Types';
import Typography from '../../Typography';
import { truncateText } from '../../../utils/truncateText/truncateText';
import Tooltip from '../../Tooltip';

const StepGroupAccordions: FC<StepGroupAccordionsProp> = ({
  data,
  level = 0,
  columnCount = 1,
  viewModeId,
  ViewComponent,
  handleClick,
  tableType,
  handleStepGroupExpand,
  isStepGroupExpanded,
  isViewPrivilegeMode,
}) => {
  const getPadding = (item: any) => {
    return ['Group', 'PRE', 'POST', 'Script'].includes(item.type)
      ? '6px 8px'
      : '7px 8px';
  };
  return (
    <>
      {data?.map((item) => {
        return (
          <Fragment key={item.stepId}>
            {viewModeId === item.stepId ? (
              <tr className="steps-edit-row">
                <td colSpan={columnCount}>
                  <div
                    style={{
                      marginLeft: `${8 + level}px`,
                    }}
                  >
                    {ViewComponent && <ViewComponent />}
                  </div>
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={columnCount} className="StepGroup-row">
                  <div className="StepGroup-row-container">
                    {!isViewPrivilegeMode && (
                      <div className="StepGroup-row-container-space"></div>
                    )}
                    <div
                      style={{
                        marginLeft: `${8 + level}px`,
                        display: 'flex',
                        alignItems: 'center',
                        padding: `${getPadding(item)}`,
                      }}
                    >
                      <Tooltip title={item?.name}>
                        <Typography
                          as="div"
                          color="var(--brand-color)"
                          lineHeight="18px"
                          onClick={() => handleClick?.({ ...item, tableType })}
                          fontWeight={item?.isSpecialNlp ? 'bold' : 'regular'}
                        >
                          {item.displayOrder && `${item.displayOrder}.`}
                          {truncateText(item.name, 40)}
                        </Typography>
                      </Tooltip>
                      {['Group', 'PRE', 'POST', 'Script'].includes(
                        item.type
                      ) && (
                        <div
                          className={`ff-accordion-arrow ${
                            isStepGroupExpanded?.(item.stepId) ? 'expanded' : ''
                          }`}
                        >
                          <Icon
                            name={'arrow_right'}
                            color={
                              isStepGroupExpanded?.(item.stepId)
                                ? 'var(--brand-color)'
                                : 'var(--default-color)'
                            }
                            className="steps-arrow-svg"
                            width={12}
                            height={12}
                            onClick={() =>
                              handleStepGroupExpand &&
                              handleStepGroupExpand({ ...item, tableType })
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            )}
            {isStepGroupExpanded?.(item.stepId) && (
              <StepGroupAccordions
                data={item.data}
                level={level + 8}
                columnCount={columnCount}
                viewModeId={viewModeId}
                handleClick={handleClick}
                ViewComponent={ViewComponent}
                tableType={tableType}
                handleStepGroupExpand={handleStepGroupExpand}
                isStepGroupExpanded={isStepGroupExpanded}
                isViewPrivilegeMode={isViewPrivilegeMode}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
};
export default StepGroupAccordions;

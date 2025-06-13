import React, { type FC, memo } from 'react';
import Icon from '../../Icon';
import Typography from '../../Typography';
import { StepGroupAccordionsProp } from './Types';
import { prepareData } from '../../../utils/TableCell/TableCell';
import './StepInnerTable.scss';

const StepGroupAccordions: FC<StepGroupAccordionsProp> = memo(
  ({
    data = [],
    level = 0,
    columnCount = 1,
    viewModeId,
    ViewComponent,
    handleClick,
    tableType,
    handleStepGroupExpand,
    isStepGroupExpanded,
    isViewPrivilegeMode,
    columns = [],
  }) => {
    const typeSet = new Set(['Group', 'PRE', 'POST', 'Script']);
    const getPadding = (type: string) =>
      typeSet.has(type) ? '6px 8px' : '7px 8px';

    const indent = level + 8;

    return (
      <>
        {data?.map((item) => (
          <React.Fragment key={item.stepId}>
            {viewModeId === item?.stepId ? (
              <tr className="steps-edit-row" id="getInFocus">
                <td colSpan={columnCount}>
                  <div style={{ marginLeft: `${indent}px` }}>
                    {ViewComponent && <ViewComponent />}
                  </div>
                </td>
              </tr>
            ) : (
              <tr>
                {columns.map((col, idx) => (
                  <td
                    key={`${item.stepId}-${idx}`}
                    style={{
                      maxWidth: col.width,
                      padding: getPadding(item.type),
                    }}
                  >
                    <Typography as="div" className="ff-data-checkbox-container">
                      <div
                        className="ff-data-checkbox-container-content"
                        style={{
                          marginLeft: idx === 0 ? `${indent}px` : 0,
                        }}
                        onClick={() => {
                          const isClickable =
                            idx === 0 &&
                            !item?.displayName?.includes('End') &&
                            !item?.isDisabled;
                          if (isClickable)
                            handleClick?.({ ...item, tableType });
                        }}
                      >
                        {!isViewPrivilegeMode && idx === 0 && (
                          <div style={{ padding: '4px 18px' }} />
                        )}
                        {prepareData({ ...item, marginLeft: indent }, col)}
                      </div>
                      {idx === 0 &&
                        ['Group', 'PRE', 'POST', 'Script'].includes(
                          item.type
                        ) && (
                          <div
                            className={`ff-accordion-arrow ${
                              isStepGroupExpanded?.(item.stepId)
                                ? 'expanded'
                                : ''
                            }`}
                          >
                            <Icon
                              name="arrow_right"
                              color={
                                isStepGroupExpanded?.(item.stepId)
                                  ? 'var(--brand-color)'
                                  : 'var(--default-color)'
                              }
                              className="steps-arrow-svg"
                              width={12}
                              height={12}
                              onClick={() =>
                                handleStepGroupExpand?.({ ...item, tableType })
                              }
                            />
                          </div>
                        )}
                    </Typography>
                  </td>
                ))}
              </tr>
            )}

            {isStepGroupExpanded?.(item.stepId) && (
              <StepGroupAccordions
                data={item.data}
                level={indent}
                columnCount={columnCount}
                viewModeId={viewModeId}
                ViewComponent={ViewComponent}
                handleClick={handleClick}
                tableType={tableType}
                handleStepGroupExpand={handleStepGroupExpand}
                isStepGroupExpanded={isStepGroupExpanded}
                isViewPrivilegeMode={isViewPrivilegeMode}
                columns={columns}
              />
            )}
          </React.Fragment>
        ))}
      </>
    );
  }
);

StepGroupAccordions.displayName = 'StepGroupAccordions';

export default StepGroupAccordions;

import { Fragment, useCallback, type FC } from 'react';
import Icon from '../../Icon';
import Typography from '../../Typography';
import { truncateText } from '../../../utils/truncateText/truncateText';
import Tooltip from '../../Tooltip';
import { PrePostStepAccordionsProps } from '../Types';

const PrePostStepAccordions: FC<PrePostStepAccordionsProps> = ({
  data,
  level = 3,
  columnCount = 1,
  viewModeId,
  ViewComponent,
  handleClick,
  handleStepGroupExpand,
  isStepGroupExpanded,
}) => {
  const marginLeft = `${8 * level}px`;

  const getPadding = useCallback(
    (type: string) => (['PRE', 'POST'].includes(type) ? '4px 8px' : '7px 8px'),
    []
  );

  return (
    <>
      {data?.map((item: any) => {
        const isInEditMode = viewModeId === item.stepId;
        const isExpanded = isStepGroupExpanded?.(item.stepId);
        const padding = getPadding(item.type);

        return (
          <Fragment key={item.stepId}>
            {isInEditMode ? (
              <tr className="pre-edit-row">
                <td colSpan={columnCount}>
                  <div style={{ marginLeft }}>{ViewComponent && <ViewComponent />}</div>
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={columnCount} style={{ padding }}>
                  <div style={{ marginLeft, display: 'flex', alignItems: 'center' }}>
                    <Tooltip title={item?.name}>
                      <Typography
                        as="div"
                        color="var(--brand-color)"
                        lineHeight="18px"
                        onClick={() => handleClick?.(item)}
                      >
                        {item.displayOrder}.{truncateText(item.name, 40)}
                      </Typography>
                    </Tooltip>
                    {['PRE', 'POST'].includes(item.type) && (
                      <div className={`pre-accordion-arrow ${isExpanded ? 'expanded' : ''}`}>
                        <Icon
                          name="arrow_right"
                          className="pre-arrow-svg"
                          color={isExpanded ? 'var(--brand-color)' : 'var(--default-color)'}
                          width={16}
                          height={16}
                          onClick={() => handleStepGroupExpand?.(item)}
                        />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            )}
            {isExpanded && (
              <PrePostStepAccordions
                data={item.data}
                level={level + 1}
                columnCount={columnCount}
                viewModeId={viewModeId}
                handleClick={handleClick}
                ViewComponent={ViewComponent}
                handleStepGroupExpand={handleStepGroupExpand}
                isStepGroupExpanded={isStepGroupExpanded}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default PrePostStepAccordions;
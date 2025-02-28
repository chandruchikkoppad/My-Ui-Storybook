import React from 'react';
import { DynamicObj } from '../../CreateVariable/types';
import Typography from '../../Typography';
import Icon from '../../Icon';
import { checkEmpty } from '../../../utils/checkEmpty/checkEmpty';
import './StepGroupDetailView.scss'; 

interface StepGroupDetailViewProps {
  rowData: DynamicObj;
  toggleViewRow: (_val: null) => void;
}

const StepGroupDetailView: React.FC<StepGroupDetailViewProps> = ({
  rowData,
  toggleViewRow,
}) => {
  const convertToSentenceCase = (str: string): string =>
    str
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/^./, (c) => c.toUpperCase());

  return (
    <section className="ff-view-step-group">
      <header className="ff-view-step-group__header">
        <div className="ff-view-step-group__header_info">
          <Typography as="span" lineHeight="18px" color="var(--nlp-color)">
            {rowData.displayOrder}.{rowData.name}
          </Typography>
          <Typography as="div">
            <Icon name="help_icon" height={16} width={16} />
          </Typography>
        </div>
        <div className="ff-view-step-group__header_link">
          <Typography
            color="var(--nlp-color)"
            lineHeight="18px"
            fontWeight="semi-bold"
            style={{ textDecoration: 'underline' }}
          >
            Open step group
          </Typography>
          <Icon
            name="vertical_separator"
            color="var(--vertical-separate-color)"
            width={11}
            height={16}
            className="ff-view-step-group__header-right__line"
          />
          <Icon name="close" hoverEffect onClick={() => toggleViewRow(null)} />
        </div>
      </header>
      <article className="ff-view-step-group__content">
        {!checkEmpty(rowData.stepInputs) &&
          rowData.stepInputs.map((item: DynamicObj, index: number) => (
            <div key={index} className="ff-view-step-group__content__item">
              <Typography
                as="div"
                fontWeight="medium"
                color="var(--text-color)"
                lineHeight="18px"
                children={item?.name}
              />
              <Typography
                as="div"
                color="var(--dataset-tooltip-title)"
                lineHeight="18px"
                children={
                  item?.value.includes('_')
                    ? convertToSentenceCase(item.value)
                    : item.value
                }
              />
            </div>
          ))}
      </article>
    </section>
  );
};

export default StepGroupDetailView;

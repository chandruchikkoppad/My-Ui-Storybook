import { useEffect, useState, forwardRef, useRef } from 'react';
import './ChipsAccordion.scss';
import Icon from '../../../Icon';
import { NlpChipsAccordionProps, NlpChip } from '../../types';
import Typography from '../../../Typography';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
const ChipsAccordion = forwardRef<HTMLDivElement, NlpChipsAccordionProps>(
  ({ chipOptionList, selectedChips, optionZIndex = 0 }, ref) => {
    const [filterData, setFilterData] = useState<NlpChip[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [IsArrowEnable, setIsArrowEnable] = useState(false);
    useEffect(() => {
      if (checkEmpty(chipOptionList)) return;
      setFilterData(chipOptionList);
    }, [chipOptionList]);
    const chipsRowRef = useRef<HTMLDivElement>(null);
    const checkOverflow = () => {
      const rowEl = chipsRowRef.current;
      if (!rowEl) return;
      const overflowing = rowEl.scrollHeight > rowEl.clientHeight;
      setIsArrowEnable(overflowing);
    };
    useEffect(() => {
      checkOverflow();
    }, [filterData]);
    const toggleExpand = () => {
      setIsExpanded((prev) => !prev);
      if (isExpanded) {
        document.querySelector('.ff-chips-row')?.scrollTo({ top: 0 });
      }
    };
    const toggleAction = (index: number) => {
      const updatedActions = filterData.map((chip, i) =>
        i === index ? { ...chip, isSelected: !chip.isSelected } : chip
      );
      setFilterData(updatedActions);
      if (selectedChips) {
        const selected = updatedActions.filter((chip) => chip.isSelected);
        selectedChips(selected);
      }
    };
    useEffect(() => {
      const handleResize = () => {
        checkOverflow();
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
      <div
        className="ff-chips-accordion"
        style={{ zIndex: optionZIndex + 100 }}
        ref={ref}
      >
        <div
          ref={chipsRowRef}
          className={`ff-chips-row ${isExpanded ? 'expanded' : ''}`}
        >
          <div className="chips-container">
            {filterData?.map(({ name, isSelected }, index) => (
              <div
                key={index}
                className={`chip ${isSelected ? 'selected-chip' : ''}`}
                onClick={() => toggleAction(index)}
              >
                <Typography
                  as="div"
                  className="chip-text"
                  children={name}
                  fontSize={10}
                  lineHeight="15px"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            className={`ff-icon-wrapper ${isExpanded ? 'expanded' : ''}`}
            role="button"
            aria-expanded={isExpanded}
          >
            <Icon
              name="arrows_down_icon"
              height={8}
              width={8}
              onClick={toggleExpand}
              disabled={!IsArrowEnable}
            />
          </div>
        </div>
      </div>
    );
  }
);
export default ChipsAccordion;

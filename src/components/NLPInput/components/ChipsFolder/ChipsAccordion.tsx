import {
  useEffect,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
} from 'react';
import './ChipsAccordion.scss';
import Icon from '../../../Icon';
import { NlpChipsAccordionProps, NlpChip } from '../../types';
import Typography from '../../../Typography';
import { checkEmpty } from '../../../../utils/checkEmpty/checkEmpty';
import usePortalPosition from '../../../../hooks/usePortalPosition';
import { createPortal } from 'react-dom';
const ChipsAccordion = forwardRef<HTMLDivElement, NlpChipsAccordionProps>(
  (
    {
      chipOptionList,
      selectedChips,
      optionZIndex = 0,
      inputRef,
      ChipsAccordionWidth,
    },
    ref
  ) => {
    const [filterData, setFilterData] = useState<NlpChip[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [positionChipContainer, setPositionChipContainer] = useState<{
      left: number;
      top: number;
    }>({ left: 0, top: 0 });
    const [expandDirection, setExpandDirection] = useState<'down' | 'up'>(
      'down'
    );
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current as HTMLDivElement);
    const portalPosition = usePortalPosition(localRef, isExpanded);

    useEffect(() => {
      if (checkEmpty(chipOptionList)) return;
      setFilterData(chipOptionList);
    }, [chipOptionList]);

    const chipsRowRef = useRef<HTMLDivElement>(null);
    const checkOverflow = () => {
      const rowEl = chipsRowRef.current;
      if (!rowEl) return;
    };

    useEffect(() => {
      checkOverflow();
    }, [filterData]);

    useLayoutEffect(() => {
      const handleUpdate = () => {
        if (!inputRef?.current) return;
        const { positionX, positionY, width, fromBottom } =
          portalPosition(inputRef);
        const estimatedHeight = 160;
        const expandUp = fromBottom < estimatedHeight;
        setExpandDirection(expandUp ? 'up' : 'down');
        setPositionChipContainer({
          left: positionX + width,
          top: positionY,
        });
      };
      handleUpdate();

      const observer = new ResizeObserver(() => handleUpdate());
      if (inputRef?.current) observer.observe(inputRef.current);

      window.addEventListener('scroll', handleUpdate, true);

      return () => {
        if (inputRef?.current) observer.unobserve(inputRef.current);
        observer.disconnect();
        window.removeEventListener('scroll', handleUpdate, true);
      };
    }, [portalPosition, inputRef]);

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

    return createPortal(
      <div
        className="ff-chips-accordion"
        style={{
          left: positionChipContainer.left,
          top: positionChipContainer.top,
          zIndex: optionZIndex + 100,
          transform:
            expandDirection === 'up'
              ? 'translateY(calc(-100% + 33px))'
              : 'none',
          width: ChipsAccordionWidth,
          position: 'absolute',
        }}
        ref={localRef}
      >
        <div
          ref={chipsRowRef}
          className={`ff-chips-row ${isExpanded ? 'expanded' : ''}`}
          style={{ maxHeight: isExpanded ? '280px' : '20px' }}
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
        <div className="ff-arrow-icon-container">
          <div
            className={`ff-icon-wrapper ${isExpanded ? 'expanded' : ''}`}
            role="button"
            aria-expanded={isExpanded}
          >
            <Icon
              name={
                expandDirection === 'down'
                  ? 'arrows_down_icon'
                  : 'arrows_top_icon'
              }
              height={8}
              width={8}
              onClick={toggleExpand}
            />
          </div>
        </div>
      </div>,
      document.body
    );
  }
);
export default ChipsAccordion;

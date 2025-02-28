import { useReducer, useRef, useEffect, useState } from 'react';
import {
  NlpRenderOption,
  SelectAction,
  SelectProps,
  SelectState,
} from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Dropdown from './components/NlpDropDown/NlpDropdown';
import Icon from '../Icon';
import './NLPInput.scss';
import usePortalPosition from '../../hooks/usePortalPosition';
import Typography from '../Typography';
import ChipsAccordion from './components/ChipsFolder/ChipsAccordion';

const nlpInputReducer = (
  state: SelectState,
  action: SelectAction
): SelectState => {
  switch (action.type) {
    case 'FOCUS_INPUT':
      return {
        ...state,
        isInputFocused: true,
        isIconClick: true,
        showOptions: true,
      };
    case 'BLUR_INPUT':
      return {
        ...state,
        isInputFocused: false,
        option: action.payload.option,
        isIconClick: false,
        showOptions: false,
        dropdownPosition: {
          positionX: 0,
          positionY: 0,
          width: 0,
          fromBottom: 0,
        },
      };
    case 'UPDATE_DROPDOWN_POSITION':
      const { positionX, positionY, width, fromBottom } = action.payload || {};
      return {
        ...state,
        dropdownPosition: {
          positionX,
          positionY,
          width,
          fromBottom,
        },
      };

    case 'UPDATE_OPTION':
      return {
        ...state,
        option: action.payload,
      };

    case 'SHOW_ERROR':
      return {
        ...state,
        isInputFocused: true,
        isIconClick: false,
        showOptions: false,
        option: action.payload.option,

        dropdownPosition: {
          positionX: 0,
          positionY: 0,
          width: 0,
          fromBottom: 0,
        },
      };

    default:
      return state;
  }
};

const NlpInput = ({
  label = '',
  leftIcon,
  rightIcon,
  rightIconColor,
  showLabel = true,
  onHelpIconClick = () => {},
  aiIconClick = () => {},
  webServiceClick = () => {},
  containerWidth = '',
  optionsList = [],
  selectedOption = {
    displayName: '',
    projectId: '',
    nlpType: '',
    platform: '',
  },
  onChange = () => {},
  errorMsg = '',
  className = '',
  optionZIndex = 100,
  disabled = false,
  borderRadius = true,
  showBorder = true,
  required = false,
  value = '',
  onSelect = () => {},
  chipOptionList,
  selectedChips,
  loadMoreOptions = () => {},
  isWebservice = true,
}: SelectProps) => {
  const initialState: SelectState = {
    isInputFocused: false,
    isIconClick: false,
    showOptions: false,
    option:
      checkEmpty(selectedOption) &&
      typeof selectedOption?.displayName === 'string'
        ? selectedOption.displayName
        : '',
    dropdownPosition: { positionX: 0, positionY: 0, width: 0, fromBottom: 0 },
  };

  const [selectControlState, dispatch] = useReducer(
    nlpInputReducer,
    initialState
  );

  const [inputVal, setInputVal] = useState<NlpRenderOption>(selectedOption);

  useEffect(() => {
    const updatedDisplayName =
      typeof selectedOption.displayName === 'string'
        ? selectedOption.displayName
        : String(selectedOption.displayName ?? '');

    if (updatedDisplayName !== inputVal.displayName) {
      setInputVal({ ...selectedOption, displayName: updatedDisplayName });
    }
  }, [selectedOption]);

  useEffect(() => {
    if (value) {
      handleSelectAction('FOCUS_INPUT');
    }
  }, [value]);
  const DropDownRef = useRef<HTMLDivElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);
  const ChipRef = useRef<HTMLDivElement>(null);

  const { isInputFocused, isIconClick, showOptions, dropdownPosition, option } =
    selectControlState;

  const calculatePosition = usePortalPosition(DropDownRef, showOptions);

  const handleSelectAction = (
    actionType: 'FOCUS_INPUT' | 'SHOW_ERROR' | 'BLUR_INPUT'
  ) => {
    if (!disabled) {
      if (actionType === 'SHOW_ERROR' || actionType === 'BLUR_INPUT') {
        dispatch({
          type: actionType,
          payload: {
            option:
              typeof selectedOption.displayName === 'string'
                ? selectedOption.displayName
                : String(selectedOption.displayName ?? ''),
          },
        });
      } else {
        dispatch({ type: actionType });
      }
    }
  };

  const onSelectInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    if (disabled) return;
    onChange(e);
  };

  const onSelectBlur = () => {
    if (disabled) return;

    if (errorMsg) {
      handleSelectAction('SHOW_ERROR');
    } else {
      handleSelectAction('BLUR_INPUT');
    }
  };

  const onSelectOptionSelector = (option: NlpRenderOption) => {
    onSelect(option);
  };

  const onSelectUpdatePosition = () => {
    if (!showOptions || !DropDownRef?.current || disabled) return;
    const { positionX, positionY, width, fromBottom } =
      calculatePosition(DropDownRef);
    dispatch({
      type: 'UPDATE_DROPDOWN_POSITION',
      payload: { positionX, positionY, width, fromBottom },
    });
  };

  const onSelectToggleScroll = (isEnabled: boolean) => {
    const bodyScrollWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = isEnabled ? '' : `${bodyScrollWidth}px`;
    document.body.style.overflow = isEnabled ? '' : 'hidden';
  };

  useEffect(() => {
    if (disabled) return;
    if (showOptions) {
      onSelectToggleScroll(!showOptions);
    }
    onSelectUpdatePosition();

    const handleResizeOrScroll = () => onSelectUpdatePosition();

    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll);
    return () => {
      onSelectToggleScroll(true);
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll);
    };
  }, [showOptions]);

  useEffect(() => {
    if (errorMsg) {
      handleSelectAction('SHOW_ERROR');
    }
  }, []);

  useEffect(() => {
    handleSelectAction('FOCUS_INPUT');
  }, []);

  const applyActiveOptionClasses = !isInputFocused && Boolean(option);

  return (
    <section className="main-section">
      <div className={classNames(`ff-nlp-input-wrapper ${className}`)}>
        <div className="ff-nlp-input">
          <input
            type="text"
            className={classNames('ff-nlp-input-container', {
              'ff-nlp-input-container--default': !isInputFocused,
              'ff-nlp-input-container--active': applyActiveOptionClasses,
              'ff-nlp-input-container--no-label': !showLabel,
              'ff-nlp-input-container--error':
                errorMsg && !isInputFocused && !Boolean(option),
              'ff-nlp-input-container--border-radius': !borderRadius,
              'ff-nlp-input-container--disable': disabled,
              'ff-nlp-input-container--no-border': !showBorder,
            })}
            style={{
              zIndex: optionZIndex,
              paddingLeft: '10px',
            }}
            onFocus={() => handleSelectAction('FOCUS_INPUT')}
            onChange={onSelectInputChange}
            value={value}
            disabled={disabled}
            autoComplete="off"
            spellCheck="false"
            ref={InputRef}
          />

          <div className="ff-nlp-icon-container">
            <Icon
              name={leftIcon || 'ai_search'}
              className="ff-nlp-help_icon"
              width={16}
              height={16}
              onClick={aiIconClick}
            />
            <Typography className="icon-label" fontSize={10}>
              Search With Ai
            </Typography>
          </div>
          {showLabel && (
            <div
              className={classNames(
                'ff-nlp-input-label',
                'ff-nlp-input-label--default',
                {
                  'ff-nlp-input-label--active': value || Boolean(option),
                  'ff-nlp-input-label--error': errorMsg,
                }
              )}
            >
              {required && (
                <Typography
                  color="var(--$error-light)"
                  className="ff-nlp-input-label--required"
                >
                  *
                </Typography>
              )}
              {label}
            </div>
          )}

          <div className="help-icon-container">
            <Icon
              name={rightIcon || ''}
              height={16}
              width={16}
              onClick={onHelpIconClick}
              className={classNames('ff-nlp-input-arrow', {
                'ff-nlp-input-arrow--down': !isIconClick,
                'ff-nlp-input-arrow--no-label': !showLabel,
              })}
              color={rightIconColor}
            />
            <Typography className="help-icon-label" fontSize={10}>
              Help
            </Typography>
          </div>
          <fieldset
            className={classNames('ff-nlp-input-fieldset', {
              'ff-nlp-input-fieldset--no-label': !showLabel,
              'ff-nlp-input-fieldset--default': !isInputFocused,
              'ff-nlp-input-fieldset--active': isInputFocused,
              'ff-nlp-input-fieldset--option': applyActiveOptionClasses,
              'ff-nlp-input-fieldset--error': errorMsg,
              'ff-nlp-input-fieldset--border-radius': !borderRadius,
              'ff-nlp-input-fieldset--no-border': !showBorder,
            })}
          >
            {showLabel && (
              <legend
                className={classNames('ff-nlp-input-legend', {
                  'ff-nlp-input-legend--default': !isInputFocused,
                  'ff-nlp-input-legend--active': isInputFocused,
                  'ff-nlp-input-legend--option': applyActiveOptionClasses,
                  'ff-nlp-input-legend--error': errorMsg,
                })}
              >
                <span>&nbsp;</span>
              </legend>
            )}
          </fieldset>
        </div>

        {errorMsg && (
          <Typography
            className="ff-nlp-input-wrapper-error-text"
            fontSize={8}
            color={'var(--error-light)'}
          >
            {errorMsg}
          </Typography>
        )}

        <div ref={DropDownRef}>
          {showOptions &&
            createPortal(
              <Dropdown
                onSelectBlur={onSelectBlur}
                onSelectOptionSelector={onSelectOptionSelector}
                dropdownPosition={dropdownPosition}
                options={optionsList}
                optionZIndex={optionZIndex}
                inputRef={InputRef}
                webServiceClick={webServiceClick}
                containerWidth={containerWidth}
                loadMoreOptions={loadMoreOptions}
                chipRef={ChipRef}
                isWebservice={isWebservice}
              />,
              document.body
            )}
        </div>
      </div>
      <div className="chips-accordion-content">
        {chipOptionList && chipOptionList.length > 0 && (
          <ChipsAccordion
            chipOptionList={chipOptionList}
            selectedChips={selectedChips}
            optionZIndex={optionZIndex}
            ref={ChipRef}
          />
        )}
      </div>
    </section>
  );
};

export default NlpInput;

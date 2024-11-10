import { useReducer, useRef, useEffect, useMemo } from 'react';
import { Option, SelectAction, SelectProps, SelectState } from './type';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Dropdown from './components/NlpDropDown/NlpDropdown';
import Icon from '../Icon';
import './NlpInput.scss';
import usePortalPosition from '../../hooks/usePortalPosition';
import Typography from '../Typography';

const nlpInputReducer = (
  state: SelectState,
  action: SelectAction
): SelectState => {
  switch (action.type) {
    case 'FOCUS_INPUT':
      return {
        ...state,
        isInputFocused: true,
        iconColor: 'var(--ff-nlp-input-brand-color)',
        isIconClick: true,
        showOptions: true,
      };
    case 'BLUR_INPUT':
      return {
        ...state,
        isInputFocused: false,
        options: action.payload.optionsList,
        option: action.payload.option,

        // todo color need to be add in style guide
        iconColor: 'var(--ff-nlp-input-default-color)',
        isIconClick: false,
        showOptions: false,
        dropdownPosition: {
          positionX: 0,
          positionY: 0,
          width: 0,
          fromBottom: 0,
        },
      };
    case 'MOUSE_ENTER':
      return state.isInputFocused
        ? state
        : { ...state, iconColor: 'var(--ff-nlp-input-text-hover-color)' };
    case 'MOUSE_LEAVE':
      return state.isInputFocused
        ? state
        : // todo color need to be add in style guide
          {
            ...state,
            iconColor: 'var(--ff-nlp-input-default-color)',
            isIconClick: false,
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

    case 'UPDATE_OPTION_LIST':
      return {
        ...state,
        options: action.payload,
      };
    case 'SHOW_ERROR':
      return {
        ...state,
        isInputFocused: true,
        isIconClick: false,
        showOptions: false,
        options: action.payload.optionsList,
        option: action.payload.option,

        iconColor: 'var(--ff-nlp-input-default-color)',
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
  showLabel = true,
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
}: SelectProps) => {
  const initialState: SelectState = useMemo(
    () => ({
      isInputFocused: false,

      // todo color need to be added in style guide
      iconColor: 'var(--ff-nlp-input-default-color)',
      isIconClick: false,
      showOptions: false,
      options: optionsList,
      option: checkEmpty(selectedOption) ? '' : selectedOption?.projectId,
      dropdownPosition: { positionX: 0, positionY: 0, width: 0, fromBottom: 0 },
    }),
    [optionsList, selectedOption]
  );

  const [selectControlState, dispatch] = useReducer(
    nlpInputReducer,
    initialState
  );

  const DropDownRef = useRef<HTMLDivElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);

  const {
    isInputFocused,
    iconColor,
    isIconClick,
    showOptions,
    dropdownPosition,
    options,
    option,
  } = selectControlState;

  const calculatePosition = usePortalPosition(DropDownRef, showOptions);

  const handleSelectAction = (
    actionType:
      | 'FOCUS_INPUT'
      | 'MOUSE_ENTER'
      | 'MOUSE_LEAVE'
      | 'SHOW_ERROR'
      | 'BLUR_INPUT'
  ) => {
    if (!disabled) {
      if (actionType === 'SHOW_ERROR' || actionType === 'BLUR_INPUT') {
        dispatch({
          type: actionType,
          payload: { optionsList, option: selectedOption.projectId },
        });
      } else {
        dispatch({ type: actionType });
      }
    }
  };

  const onSelectInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const { value } = e.target;

    const filteredOptions = optionsList.filter((option) => {
      return option.displayName
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });

    dispatch({ type: 'UPDATE_OPTION_LIST', payload: filteredOptions });
    dispatch({ type: 'UPDATE_OPTION', payload: value });
  };

  const onSelectBlur = () => {
    if (disabled) return;

    if (errorMsg) {
      handleSelectAction('SHOW_ERROR');
    } else {
      handleSelectAction('BLUR_INPUT');
    }
  };

  const onSelectOptionSelector = (option: Option) => {
    if (!disabled) {
      onSelectBlur();
      dispatch({ type: 'UPDATE_OPTION', payload: option.projectId });
      if (onChange) {
        onChange(option);
      }
    }
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

  const applyActiveOptionClasses = !isInputFocused && Boolean(option);

  return (
    <div className={classNames(`ff-nlp-input-wrapper ${className}`)}>
      <div className="ff-nlp-input">
        <input
          type="text"
          className={classNames('ff-nlp-input-input', {
            'ff-nlp-input-input--default': !isInputFocused,
            'ff-nlp-input-input--active': applyActiveOptionClasses,
            'ff-nlp-input-input--no-label': !showLabel,
            'ff-nlp-input-input--error':
              errorMsg && !isInputFocused && !Boolean(option),
            'ff-nlp-input-input--border-radius': !borderRadius,
            'ff-nlp-input-input--disable': disabled,
            'ff-nlp-input-input--no-border': !showBorder,
          })}
          // inline css required due to multiple overlay scenarios are present
          style={{ zIndex: optionZIndex }}
          onFocus={() => handleSelectAction('FOCUS_INPUT')}
          onMouseEnter={() => handleSelectAction('MOUSE_ENTER')}
          onMouseLeave={() => handleSelectAction('MOUSE_LEAVE')}
          onChange={onSelectInputChange}
          value={option}
          disabled={disabled}
          autoComplete="off"
          spellCheck="false"
          ref={InputRef}
        />

        {showLabel && (
          <div
            className={classNames('ff-nlp-input-label', {
              'ff-nlp-input-label--default': !isInputFocused,
              'ff-nlp-input-label--active': isInputFocused || Boolean(option),
              'ff-nlp-input-label--error': errorMsg,
            })}
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

        <Icon
          name="arrow_up"
          height={7}
          width={12}
          className={classNames('ff-nlp-input-arrow', {
            'ff-nlp-input-arrow--down': isIconClick,
            'ff-nlp-input-arrow--no-label': !showLabel,
          })}
          color={iconColor}
        />
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
          {/* {showLabel && (
            <legend
              className={classNames('ff-nlp-input-legend', {
                'ff-nlp-input-legend--default': !isInputFocused,
                'ff-nlp-input-legend--active': isInputFocused,
                'ff-nlp-input-legend--option': applyActiveOptionClasses,
                'ff-nlp-input-legend--error': errorMsg,
              })}
            >
              {required && (
                <Typography
                  fontSize={8}
                  color={'var(--$error-light)'}
                  className="ff-nlp-input-legend--required"
                >
                  *
                </Typography>
              )}
              {label}
            </legend>
          )} */}
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
              options={options}
              optionZIndex={optionZIndex}
              inputRef={InputRef}
            />,
            document.body
          )}
      </div>
    </div>
  );
};

export default NlpInput;

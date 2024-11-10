import { useReducer, useRef, useEffect, useMemo } from 'react';
import { Option, SelectAction, SelectProps, SelectState } from './types';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Dropdown from './components/Dropdown/Dropdown';
import Icon from '../Icon';
import './Select.scss';
import usePortalPosition from '../../hooks/usePortalPosition';
import Typography from '../Typography';

const selectReducer = (
  state: SelectState,
  action: SelectAction
): SelectState => {
  switch (action.type) {
    case 'FOCUS_INPUT':
      return {
        ...state,
        isInputFocused: true,
        iconColor: 'var(--ff-select-brand-color)',
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
        iconColor: 'var(--ff-select-default-color)',
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
        : { ...state, iconColor: 'var(--ff-select-text-hover-color)' };
    case 'MOUSE_LEAVE':
      return state.isInputFocused
        ? state
        : // todo color need to be add in style guide
          {
            ...state,
            iconColor: 'var(--ff-select-default-color)',
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

        // todo color need to be add in style guide
        iconColor: 'var(--ff-select-default-color)',
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

const Select = ({
  label = '',
  showLabel = true,
  optionsList = [],
  selectedOption = { label: '', value: '' },
  onChange = () => {},
  errorMsg = '',
  className = '',
  optionZIndex = 100,
  disabled = false,
  borderRadius = true,
  showBorder = true,
  required = false,
  optionsRequired = true,
}: SelectProps) => {
  const initialState: SelectState = useMemo(
    () => ({
      isInputFocused: false,

      // todo color need to be added in style guide
      iconColor: 'var(--ff-select-default-color)',
      isIconClick: false,
      showOptions: false,
      options: optionsList,
      option: checkEmpty(selectedOption) ? '' : selectedOption?.value,
      dropdownPosition: { positionX: 0, positionY: 0, width: 0, fromBottom: 0 },
    }),
    [optionsList, selectedOption]
  );

  const [selectControlState, dispatch] = useReducer(
    selectReducer,
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
          payload: { optionsList, option: selectedOption.value },
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
      return typeof option.value === 'string'
        ? option.value.toLowerCase().includes(value.toLowerCase().trim())
        : option.value === Number(value);
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
      dispatch({ type: 'UPDATE_OPTION', payload: option.value });
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
    <div className={classNames(`ff-select-wrapper ${className}`)}>
      <div className="ff-select">
        <input  
          type="text"
          className={classNames('ff-select-input', {
            'ff-select-input--default': !isInputFocused,
            'ff-select-input--active': applyActiveOptionClasses,
            'ff-select-input--no-label': !showLabel,
            'ff-select-input--error':
              errorMsg && !isInputFocused && !Boolean(option),
            'ff-select-input--border-radius': !borderRadius,
            'ff-select-input--disable': disabled,
            'ff-select-input--no-border': !showBorder,
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
            className={classNames('ff-select-label', {
              'ff-select-label--default': !isInputFocused,
              'ff-select-label--active': isInputFocused || Boolean(option),
              'ff-select-label--error': errorMsg,
            })}
          >
            {required && (
              <Typography
                color="var(--$error-light)"
                className="ff-select-label--required"
              >
                *
              </Typography>
            )}
            {label}
          </div>
        )}
        {optionsRequired && (
          <Icon
            name="arrow_up"
            height={7}
            width={12}
            className={classNames('ff-select-arrow', {
              'ff-select-arrow--down': isIconClick,
              'ff-select-arrow--no-label': !showLabel,
            })}
            color={iconColor}
          />
        )}
        <fieldset
          className={classNames('ff-select-fieldset', {
            'ff-select-fieldset--no-label': !showLabel,
            'ff-select-fieldset--default': !isInputFocused,
            'ff-select-fieldset--active': isInputFocused,
            'ff-select-fieldset--option': applyActiveOptionClasses,
            'ff-select-fieldset--error': errorMsg,
            'ff-select-fieldset--border-radius': !borderRadius,
            'ff-select-fieldset--no-border': !showBorder,
          })}
        >
          {showLabel && (
            <legend
              className={classNames('ff-select-legend', {
                'ff-select-legend--default': !isInputFocused,
                'ff-select-legend--active': isInputFocused,
                'ff-select-legend--option': applyActiveOptionClasses,
                'ff-select-legend--error': errorMsg,
              })}
            >
              {required && (
                <Typography
                  fontSize={8}
                  color={'var(--$error-light)'}
                  className="ff-select-legend--required"
                >
                  *
                </Typography>
              )}
              {label}
            </legend>
          )}
        </fieldset>
      </div>

      {errorMsg && (
        <Typography
          className="ff-select-wrapper-error-text"
          fontSize={8}
          color={'var(--error-light)'}
        >
          {errorMsg}
        </Typography>
      )}

      {optionsRequired && (
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
      )}
    </div>
  );
};

export default Select;

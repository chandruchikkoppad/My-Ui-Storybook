import { ReactNode, RefObject } from 'react';
export interface SelectProps {
  /*
   * Label for the select dropdown
   */
  label?: string;

  /*
   * If true, the select dropdown will have a label
   */
  showLabel?: boolean;
  /**
   * Provide the boolean value if arrow icon is reuired or not
   */
  showArrowIcon?: boolean;

  /*
   * Options for the select dropdown
   */
  optionsList: Option[];

  /*
   * Selected option for the select dropdown
   */
  selectedOption: Option;

  /*
   * onChange callback function for handling selected option changes
   */
  onChange: (option: Option) => void;

  /*
   * If error is true, this message will be displayed
   */
  errorMsg?: string;

  /*
   * provide the className for the select dropdown
   */
  className?: string;

  /*
   *  Providing the z-index for dropdown and select
   */
  optionZIndex?: number;

  /*
   * Provide disable prop for the disabling the select component
   */
  disabled?: boolean;

  /*
   * Provide disable prop for the providing border radius at right side
   */
  borderRadius?: string;

  /*
   * Provide boolean value to show border or not
   */
  showBorder?: boolean;

  /*
   * Provide the boolean value if the select component is required or not
   */
  required?: boolean;
  /**
   * optionsRequired:false prop removes options from dropdown & shows static label only
   */
  optionsRequired?: boolean;

  /*
   * selectedOptionColor prop provides the custom color for the selected option
   */
  selectedOptionColor?: string;

  /*
   * Label accessor
   */

  labelAccessor?: string;

  /*
   * Value accessor
   */
  valueAccessor?: string;

  /*
   * Provide the custom height for the select container
   */
  height?: number ;

  /*
   * Provide the custom width for the select container
   */
  width?: number | string;

  /*
   *  Provide the onBlur functionality for the select
   */
  onBlur?: () => void;

  /*
   * Disable the select component input
   */
  disableInput?: boolean;

  /*
   *  Provide the icon for the select
   */
  showIcon?: boolean;

  /*
   *  Provide the icon name for the select
   */
  iconName?: string;

  /**
   * Provide the placehoder for the select
   */
  placeHolder?: string;

  /**
   * Provide the boolean value if tooltip is reuired or not
   */
  showToolTip?: boolean;

  /**
   * Provide the background color for the select label on the hover state
   */
  labelBackgroundColor?: string;

  /**
   * To close the modal in the select dropdown
   */
  onCancelModal?: () => void;

  /**
   * To close the modal in the select dropdown
   */
  onSaveModal?: () => void;

  /**
   * Pass the custom Jsx for the Modal
   */
  modalJSXProps?: ReactNode;

  /**
   * Pass the recurrence boolean for the exeception cases
   */
  recurrence?: boolean;

  /**
   * Toggles the visibility of dropdown options, when called, toggles the dropdown visibility
   */
  showOptions?: { open: boolean; toggle: boolean };
  /**
   * Tooltip for input data
   */
  tooltip?: boolean;

  /**
   * Provide the boolean value if close icon is reuired or not
   */
  showClearIcon?: boolean;

  /**
   * Handel function for clearing the selected data
   */
  handelClear?: () => void;

  /**
   * Handle background color
   */
  background?: string;
 /**
   * No Result message
   */
  noResultsMessage?: string;
  /**
   * Ref for select option dropdown
   */
  dropDownRef?: RefObject<HTMLDivElement>;
}
export interface DropdownPosition {
  positionX: number;
  positionY: number;
  width: number;
  fromBottom: number;
}

export interface SelectState {
  isInputFocused: boolean;
  iconColor: string;
  isIconClick: boolean;
  showOptions: boolean;
  options: Option[];
  option: string;
  dropdownPosition: DropdownPosition;
}

type OptionValue = any;

export interface Option {
  [key: string]: OptionValue;
}

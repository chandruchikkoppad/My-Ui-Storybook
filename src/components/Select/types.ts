import { ReactNode } from 'react';

export interface SelectProps {
  /*
   * Label for the select dropdown
   */
  label?: string;

  /*
   * If true, the select dropdown will have a label
   */
  showLabel?: boolean;

  /*
   * Options for the select dropdown
   */
  optionsList: Option[];

  /*
   * Selected option for the select dropdown
   */
  selectedOption?: Option;

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
  borderRadius?: boolean;

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
}

export interface DrowdownPosition {
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
  dropdownPosition: DrowdownPosition;
}

export type SelectAction =
  | { type: 'FOCUS_INPUT' }
  | {
      type: 'BLUR_INPUT';
      payload: {
        optionsList: Option[];
        option: Option['value'];
      };
    }
  | { type: 'MOUSE_ENTER' }
  | { type: 'MOUSE_LEAVE' }
  | {
      type: 'UPDATE_DROPDOWN_POSITION';
      payload: {
        positionX: number;
        positionY: number;
        width: number;
        fromBottom: number;
      };
    }
  | {
      type: 'UPDATE_OPTION';
      payload: string;
    }
  | {
      type: 'UPDATE_OPTION_LIST';
      payload: Option[];
    }
  | {
      type: 'SHOW_ERROR';
      payload: {
        optionsList: Option[];
        option: Option['value'];
      };
    };

export interface Option {
  label: string | ReactNode;
  value: string;
  disabled?: boolean;
}

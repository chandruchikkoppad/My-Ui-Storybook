import { ReactNode } from 'react';

export interface SelectProps {
  /*
   * Label for the NLP NLP select dropdown
   */
  label?: string;

  /*
   * If true, the NLP select dropdown will have a label
   */
  showLabel?: boolean;

  /*
   * Options for the NLP select dropdown
   */
  optionsList: any[];

  /*
   * Selected option for the NLP select dropdown
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
   * provide the className for the NLP select dropdown
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
  options: any[];
  option: string;
  dropdownPosition: DrowdownPosition;
}

export type SelectAction =
  | { type: 'FOCUS_INPUT' }
  | {
      type: 'BLUR_INPUT';
      payload: {
        optionsList: Option[];
        option: Option['projectId'];
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
      payload: any[];
    }
  | {
      type: 'SHOW_ERROR';
      payload: {
        optionsList: any[];
        option: Option['projectId'];
      };
    };

export interface Option {
    displayName: string | ReactNode;
    projectId: string;
    nlpType: string;
    platform:string;
  disabled?: boolean;
}

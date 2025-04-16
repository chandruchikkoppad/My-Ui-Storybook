import { ReactNode } from 'react';

export interface NlpChip {
  name: string;
  isSelected: boolean;
}

export interface NlpChipsAccordionProps {
  chipOptionList: NlpChip[];

  selectedChips: (selected: NlpChip[]) => void;

  optionZIndex: number;
}

export interface SelectProps {
  /*
   * Label for the NLP NLP select dropdown
   */
  label?: string;

  rightIcon?: string;

  leftIcon?: string;

  /*
   * If true, the NLP select dropdown will have a label
   */
  showLabel?: boolean;
  onHelpIconClick?: () => void;
  webServiceClick?: () => void;
  aiIconClick?: () => void;
  rightIconColor: string;
  /*
   * Options for the NLP select dropdown
   */
  optionsList: any[];

  /*
   * Selected option for the NLP select dropdown
   */
  selectedOption?: NlpRenderOption;
  containerWidth?: string | number;

  /*
   * onChange callback function for handling selected option changes
   */
  onChange: (option: React.ChangeEvent<HTMLInputElement>) => void;

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

  value: string;

  onSelect: (e: any) => void;

  chipOptionList?: NlpChip[];

  selectedChips?: any;

  loadMoreOptions?: () => void;

  isWebservice?: boolean;
  closeInputOnOutsideClick?: () => void;
}

export interface DrowdownPosition {
  positionX: number;
  positionY: number;
  width: number;
  fromBottom: number;
}

export interface SelectState {
  isInputFocused: boolean;
  isIconClick: boolean;
  showOptions: boolean;
  option: string;
  dropdownPosition: DrowdownPosition;
}

export type SelectAction =
  | { type: 'FOCUS_INPUT' }
  | {
      type: 'BLUR_INPUT';
      payload: {
        option: NlpRenderOption['projectId'];
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
        option: NlpRenderOption['projectId'];
      };
    };

export interface NlpRenderOption {
  displayName: string | ReactNode;
  projectId: string;
  nlpType: string;
  platform: string;
  disabled?: boolean;
  videoSrc?: string;
  nlpName?: string;
  name?: string;
}
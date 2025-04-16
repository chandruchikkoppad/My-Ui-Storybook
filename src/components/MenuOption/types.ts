import { ReactNode } from 'react';

interface OptionClick {
  /**
   * The label displayed for the option.
   * @type {string}
   * @required
   */
  label: string | ReactNode;

  /**
   * The value(s) associated with the option, which can be a single string or an array of strings.
   * @type {Array<string> | string}
   * @required
   */
  value: any;
}

export interface OptionType extends OptionClick {
  /**
   * The name of the icon associated with the option.
   * @type {string}
   * @optional
   */
  icon?: string;

  iconColor?: string;

  name?: string | ReactNode;

  /**
   * Indicates whether the option is disabled.
   * @type {boolean}
   * @optional
   */
  disable?: boolean;
  /**
   * To hide the option.
   * @type {boolean}
   * @optional
   */
  hide?: boolean;
  tooltipForOption?: string;
  tooltipPlacementForOption?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | undefined;
}

interface OptionCardProps {
  /**
   * The list of options displayed in the card.
   * @type {Array<OptionType>}
   * @required
   */
  options: Array<OptionType>;

  /**
   * Callback function triggered when an option is clicked.
   * @param {OptionClick} data - The data associated with the clicked option.
   * @type {function}
   * @required
   */
  onClick: (data: OptionClick) => void;

  /**
   * Optional styles applied to the card.
   * @type {React.CSSProperties}
   * @optional
   */
  styles?: React.CSSProperties;

  /**
   * The z-index of the option card.
   * @type {number}
   * @optional
   */
  zIndex?: number;

  /**
   * The position of the menu relative to the triggering element.
   * @type {dropdownPosition}
   * @required
   */
  menuPosition: any;

  /**
   * Reference to the menu DOM element.
   * @type {React.RefObject<HTMLElement>}
   * @required
   */
  menuRef: React.RefObject<HTMLElement>;

  /**
   * Callback function to close the dropdown.
   * @type {() => void}
   * @required
   */
  closeDropdown: () => void;

  /**
   * Placement of the dropdown menu relative to the icon.
   * @type {dropdownPosition}
   * @optional
   */
  dropdownPlacement?: 'top' | 'down' | 'left' | 'right' | 'bottomLeft';
  /**
   * Variant for backgroung color of options card.
   * @type {string}
   * @optional
   */
  variant?: 'primary' | 'default';
  isAddResourceButton?: boolean;
}

interface MenuOptionProps {
  /**
   * The name of the label displayed next to the icon.
   * @type {string}
   * @optional
   */
  labelName?: string;

  /**
   * The name of the icon to be displayed.
   * @type {string}
   * @required
   */
  iconName: string;

  /**
   * The list of options available in the dropdown.
   * @type {Array<OptionType>}
   * @required
   */
  options: Array<OptionType>;

  /**
   * The title displayed in the tooltip when hovering over the icon.
   * @type {string}
   * @optional
   */
  tooltipTitle?: string;

  /**
   * The placement of the tooltip relative to the icon.
   * @type {'bottom' | 'left' | 'right' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'}
   * @optional
   */
  tooltipPlacement?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end';

  /**
   * The placement of the dropdown menu relative to the icon.
   * @type {dropdownPosition}
   * @optional
   */
  dropdownPlacement?: 'top' | 'down' | 'left' | 'right' | 'bottomLeft';

  /**
   * The variant of the menu option, either 'dark' or 'light'.
   * @type {'dark' | 'light'}
   * @default 'light'
   * @optional
   */
  variant?: 'dark' | 'light';

  /**
   * Callback function triggered when the icon is clicked.
   * @type {() => void}
   * @optional
   */
  onClick?: () => void;

  /**
   * Callback function triggered when an option is clicked.
   * @param {OptionClick} option - The option that was clicked.
   * @type {(option: OptionClick) => void}
   * @optional
   */
  onOptionClick?: (option: OptionClick) => void;

  /**
   * The size of the icon button.
   * @type {number}
   * @default 20
   */
  iconButtonSize?: number;

  /**
   * The size of the icon.
   * @type {number}
   * @default 16
   */
  iconSize?: number;

  /**
   * The border radius of the icon button.
   * @type {number}
   * @default 7
   */
  iconButtonBorderRadius?: number;

  /**
   * Providing z-index for the options card.
   * @type {number}
   * @optional
   */
  zIndex?: number;
  /**
   * Variant for backgroung color of options card.
   * @type {string}
   * @optional
   */
  optionCardVariant?: 'primary' | 'default';
  targetRef?: string | React.RefObject<HTMLElement> | null;
  treeRowRef?: React.RefObject<HTMLDivElement | null>;
  isAddResourceButton?: boolean;
  /**
   * to enable or disable the options card.
   * @type {boolean}
   * @optional
   */
  disabled?: boolean;
}

interface OptionProps {
  /**
   * The option to be displayed.
   * @type {OptionType}
   * @required
   */
  option: OptionType;

  /**
   * Callback function triggered when the option is clicked.
   * @param {OptionClick} option - The clicked option.
   * @type {(option: OptionClick) => void}
   * @required
   */
  onClick: (option: OptionClick) => void;
}

export { OptionProps, MenuOptionProps, OptionCardProps, OptionClick };

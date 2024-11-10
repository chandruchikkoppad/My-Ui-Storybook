interface OptionClick {
  /**
   * The label displayed for the option.
   * @type {string}
   * @required
   */
  label: string;

  /**
   * The value(s) associated with the option, which can be a single string or an array of strings.
   * @type {Array<string> | string}
   * @required
   */
  value: Array<string> | string;
}

interface OptionType extends OptionClick {
  /**
   * The name of the icon associated with the option.
   * @type {string}
   * @required
   */
  icon: string;

  /**
   * Indicates whether the option is disabled.
   * @type {boolean}
   * @optional
   */
  disable?: boolean;
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
   * @param {any} data - The data associated with the clicked option.
   * @type {function}
   * @required
   */
  onClick: (data?: any) => void;

  /**
   * Optional styles applied to the card.
   * @type {React.CSSProperties}
   * @optional
   */
  styles?: React.CSSProperties;
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
   * @type {'top' | 'left' | 'right' | 'bottom'}
   * @optional
   */
  dropdownPlacement?: string | 'top' | 'left' | 'right' | 'down';

  /**
   * Callback function triggered when the icon is clicked.
   * @type {function}
   * @optional
   */
  onClick?: () => void;

  /**
   * Callback function triggered when an option is clicked.
   * @param {OptionClick} option - The option that was clicked.
   * @type {function}
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
   * The border radius of the icon.
   * @type {number}
   * @default 7
   */
  iconButtonBorderRadius?: number;
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
   * @type {function}
   * @required
   */
  onClick: (option: OptionClick) => void;
}

export { OptionProps, MenuOptionProps, OptionCardProps, OptionClick };

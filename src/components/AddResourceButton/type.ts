import { ReactNode } from 'react';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

/**
 * Describes the directional arrow used in the Add Resource Button component.
 * The arrow specifies its direction (top, right, down) and associated menu options.
 *
 * @property {('top' | 'right' | 'down')} direction - Specifies the direction of the arrow.
 * @property {(Object | null)[]} menuOptions - The list of menu options displayed when the arrow button is active.
 * If null, no menu options will be shown.
 */
export interface DirectionalArrow {
  direction: string | 'top' | 'right' | 'down';
  menuOptions: {
    label: string;
    value: string | string[];
    icon?: string;
    disable?: boolean;
  }[];
}

/**
 * Props for the Add Resource Button component.
 *
 * @property {string} [id] - An optional unique identifier for the Add Resource Button.
 * @property {('primary' | 'secondary')} [variant] - Optional button style variant.
 * @property {DirectionalArrow[]} directionalArrow - An array of directional arrows, each specifying the direction and associated menu options. Default values will be provided if not passed.
 * @property {number} [zIndex] - An optional z-index value for positioning, defaults to 99.
 */
export interface AddResourceButtonProps {
  id?: string;
  variant?: 'primary' | 'secondary';
  directionalArrow: {
    /**
     * direction option: 'top' | 'right' | 'down'
     */
    direction: string;
    menuOptions: {
      label: string;
      value: string | string[];
      icon?: string;
      disable?: boolean;
    }[];
  }[];
  zIndex?: number;
  treeRowRef?: React.RefObject<HTMLDivElement | null>;
  menuOptionZIndex?: number;
  onMenuOptionClick?: (option: {
    label: string | ReactNode;
    value: any;
  }) => void;
}

/**
 * Props for individual directional arrow buttons.
 *
 * @property {('top' | 'right' | 'down')} direction - The direction of the arrow button (top, right, or down).
 * @property {(Object | any)} menuOptions - The list of menu options or a generic value for dynamic content.
 * @property {() => void} onArrowClick - Callback function triggered when the arrow button is clicked.
 * @property {boolean} isActive - Specifies if the button is in an active state (highlighted when selected).
 */
export interface DirectionalArrowButtonProps {
  direction: 'top' | 'right' | 'down';
  menuOptions: {
    label: string;
    value: string | string[];
    icon?: string;
    disable?: boolean;
  }[];
  onArrowClick: () => void;
  onMenuOptionClick?: (option: {
    label: string | ReactNode;
    value: any;
  }) => void;
  isActive: boolean;
  variant?: 'primary' | 'secondary';
  treeRowRef?: React.RefObject<HTMLDivElement | null>;
  menuOptionZIndex?: number;
}

/**
 * Utility function to validate an array of directional arrows.
 * Ensures there is at least one valid arrow in the array.
 * If the array is empty, it returns a default arrow object.
 */
export const validateArrows = (
  arrows: DirectionalArrow[]
): DirectionalArrow[] => {
  if (checkEmpty(arrows)) {
    return [
      {
        direction: null as any,
        menuOptions: [
          {
            label: 'Sub Module',
            value: 'sub_module',
            icon: '',
            disable: false,
          },
        ],
      },
    ];
  }
  return arrows;
};

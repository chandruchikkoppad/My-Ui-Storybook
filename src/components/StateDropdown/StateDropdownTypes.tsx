import { Option } from "../Select/types";

export interface StateDropdownProps {
  value: string;

  isReviewer: boolean;

  isApprovePage: boolean;

  handleDropdownOptionsClick: (option: Option) => void;
  /*
   * Pass true if userHasOnlyViewAccess
   */
  disabled: boolean;

  isOnlyReviewer: boolean;

  handleStateValueClick: () => void;

  showBorder?: boolean;

  zIndex?: number;
}

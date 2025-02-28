export interface CheckboxProps {
  /**
   * Unique ID for the checkbox input
   */
  id?: string;
  /**
   * Name attribute for the checkbox input
   */
  name?: string;
  /**
   * Optional side label
   */
  label?: string;
  /**
   * Optional disable attribute
   */
  disabled?: boolean;
  /**
   * Optional checked attribute to prefill
   */
  checked?: boolean;
  /**
   * Optional onChange function
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * For partially checked checkbox
   */
  partial?: boolean;
  /**
   * For variant color
   */
  variant?: 'passed' | 'failed' | 'warning' | 'skipped' | 'flaky';
 /**
   * For default hover
   */
  isDefaultHover?:boolean;
}

export interface DatePickerProps {
  /**
   * The minimum selectable date.
   */
  minDate?: DateValue;

  /**
   * The maximum selectable date.
   */
  maxDate?: DateValue;

  /**
   * Selected date value.
   */
  value?: DateValue;

  /**
   * Function to handle date selection.
   */
  onChange: (value: DateValue, formatted?: string) => void;

  /**
   * Placeholder text for the input field.
   */
  placeholder?: string;

  /**
   * Disables the date picker.
   */
  disabled?: boolean;

  /**
   * Format for displaying the selected date. Default is 'EEEE, dd MMM yyyy'.
   */
  dateFormat?: string;

  /**
   * Format for displaying the selected time. Default is 'hh:mm a'.
   */
  timeFormat?: string;

  /**
   * Timezone for the date picker.
   */
  timezone?: string;

  /**
   * Custom width for the calendar. This will override the default width of the calendar.
   */
  calendarWidth?: number;

  /**
   * When true, displays the input field error.
   */
  error?: boolean;

  /**
   * Helper text to display below the input field, used for error messages or instructions.
   */
  helperText?: string | undefined;

  /**
   * Select only date .
   */
  dateOnly?: boolean;

  className?: string;

  zIndex?: number;
  /**
   * Default: false, if true, displayed with border radius and color required for the filter date picker.
   */
  isFilterDatePicker?: boolean;
  /**
   * The selected date don't want to be deselected .
   */
  isSelectableDate?: boolean;
  /**
   * Function to handle onBlur for datepicker.
   */
  onBlur?: (date: DateValue) => void;

  /**
   * Default:False,if true, the date picker will not apply any date formatting.
   */
  withOutDateFormat?: boolean;
}

export type DateValue = Date | undefined;

export interface CustomCaptionProps {
  children?: React.ReactNode; // You can use ReactNode as a fallback for dynamic content
}

export interface CustomCalenderButtonProps {
  className?: string;
  disabled?: boolean | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface TimePickerProps {
  /**
   * The current time value, in string format (e.g., '14:30').
   */
  value: string;

  /**
   * Function to handle time selection changes, receiving the selected time as a string.
   */
  onChange: (time: string) => void;

  /**
   * The minimum selectable time, used to restrict the earliest selectable time.
   */
  minTime?: string;

  /**
   * The maximum selectable time, used to restrict the latest selectable time.
   */
  maxTime?: string;

  /**
   * Function to handle error state changes, receiving a boolean indicating the presence of an error.
   */
  onErrorChange: (error: boolean) => void;
}

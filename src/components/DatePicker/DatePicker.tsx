import React, { useEffect, useState, useRef, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { DayPicker } from 'react-day-picker';
import { startOfDay } from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';
import TimePicker from './Timepicker';
import Icon from '../Icon';
import './DatePicker.scss';
import {
  DatePickerProps,
  CustomCaptionProps,
  CustomCalenderButtonProps,
} from './types';
import Button from '../Button';
import Typography from '../Typography';
import classNames from 'classnames';
import { useMergeRefs } from '../../hooks/useMergeRefs';

const CustomDatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      minDate,
      maxDate,
      value,
      onChange,
      placeholder = 'Select a date',
      disabled = false,
      dateFormat = 'EEEE, dd MMM yyyy',
      calendarWidth,
      timezone = 'Asia/Kolkata',
      timeFormat = 'hh:mm a',
      error,
      helperText = '',
      dateOnly = false,
      className,
      zIndex = 10,
      isFilterDatePicker = false,
      isSelectableDate = false,
      onBlur,
      withOutDateFormat = false,
    },
    ref
  ) => {
    const [timeValue, setTimeValue] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
    const [timeError, setTimeError] = useState<boolean>(false);
    const [selectedMonth, setSelectedMonth] = useState<Date | undefined>(
      new Date()
    );
    const [view, setView] = useState<string>('days');
    const [positionStyles, setPositionStyles] = useState<{
      top: number | null;
      left: number | null;
    }>({ top: null, left: null });

    const selectedDateRef = useRef<Date | undefined>(undefined);
    const [startYear, setStartYear] = useState(() => {
      const currentYear =
        selectedMonth?.getFullYear() ?? new Date().getFullYear();
      return currentYear - (currentYear % 12); // Set to the first year in the 12-year range
    });

    const pickerRef = useRef<HTMLDivElement>(null); // Ref to track the picker
    const containerRef = useRef<HTMLDivElement>(null);

    const mergedRef = useMergeRefs(pickerRef, ref);

    const todayInTimeZone = startOfDay(toZonedTime(new Date(), timezone));
    const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    useEffect(() => {
      selectedDateRef.current = selectedDate;
    }, [selectedDate]);

    useEffect(() => {
      if (value) {
        setTimeValue(formatTimeStr(value));
      }
      setSelectedDate(value);
    }, [value, isPickerOpen]);

    const formatTimeStr = (date: Date): string => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    // Convert minDate and maxDate to "hh:mm" for the TimePicker if the dates match
    const minTime =
      selectedDate &&
      minDate &&
      selectedDate.toDateString() === minDate.toDateString()
        ? formatTimeStr(minDate)
        : undefined;

    const maxTime =
      selectedDate &&
      maxDate &&
      selectedDate.toDateString() === maxDate.toDateString()
        ? formatTimeStr(maxDate)
        : undefined;

    useEffect(() => {
      const adjustPosition = () => {
        if (containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const spacing = 8;

          let top = containerRect.bottom + spacing;
          let left = containerRect.left;

          if (pickerRef.current) {
            const pickerHeight = pickerRef.current.offsetHeight;
            const pickerWidth = pickerRef.current.offsetWidth;

            if (window.innerHeight - containerRect.bottom < pickerHeight) {
              top = containerRect.top - pickerHeight - spacing;
            }
            if (window.innerWidth - containerRect.left < pickerWidth) {
              left = containerRect.right - pickerWidth;
            }
          }

          setPositionStyles({ top, left });
        }
      };

      if (isPickerOpen) {
        adjustPosition();
        setTimeout(() => {}, 200);
        window.addEventListener('resize', () => {});
      }

      return () => {
        window.removeEventListener('resize', adjustPosition);
      };
    }, [isPickerOpen]);

    const calendarStyle = {
      '--rdp-day-width': calendarWidth
        ? `${calendarWidth / 7 - 4}px`
        : undefined,
    } as React.CSSProperties;

    const handleTimeChange = (time: string) => {
      setTimeValue(time);
      if (selectedDate) {
        const [hoursStr, minutesStr] = time.split(':');
        const newSelectedDate = new Date(selectedDate);
        newSelectedDate.setHours(parseInt(hoursStr ? hoursStr : '0', 10));
        newSelectedDate.setMinutes(
          parseInt(minutesStr ? minutesStr : '0', 10) || 0
        );
        setSelectedDate(newSelectedDate);
      }
    };

    const handleDaySelect = (date: Date | undefined) => {
      if (dateOnly) {
        if (!isSelectableDate || date) {
          setSelectedDate(date);
          if (withOutDateFormat && date) {
            const formatted = format(date, dateFormat, {
              timeZone: timezone,
            });
            onChange(date, formatted);
          } else {
            onChange(date);
          }
        }
        resetAndCloseDatePicker();
      } else {
        if (!timeValue || !date) {
          // if need to set time to current time in case no time selected
          const now = new Date();
          date?.setHours(now.getHours(), now.getMinutes(), now.getSeconds());

          setSelectedDate(date);
        } else {
          const [hoursStr, minutesStr] = timeValue.split(':');
          date.setHours(parseInt(hoursStr ? hoursStr : '0', 10) || 0);
          date.setMinutes(parseInt(minutesStr ? minutesStr : '0', 10) || 0);
          setSelectedDate(date);
        }
      }
    };

    const handleSave = () => {
      if (selectedDateRef.current) {
        if (withOutDateFormat) {
          const formatted = format(selectedDateRef.current, dateFormat, {
            timeZone: timezone,
          });
          onChange(selectedDateRef.current, formatted);
        } else {
          onChange(selectedDateRef.current);
        }
      }
      resetAndCloseDatePicker();
    };

    const handleDateInputClick = () => {
      setIsPickerOpen((prev) => !prev);
      setView('days');
      setSelectedMonth(value ?? new Date());
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        if (onBlur) {
          onBlur(value);
        }
        resetAndCloseDatePicker();
      }
    };

    const handleCancel = () => {
      resetAndCloseDatePicker();
    };

    const resetAndCloseDatePicker = () => {
      setIsPickerOpen(false); // Close the picker if the click was outside
      setView('days'); // Return to default day view on close of day picker
      setSelectedMonth(value ?? new Date());
    };

    useEffect(() => {
      if (isPickerOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside); // Clean up the event listener
      };
    }, [isPickerOpen]);

    const months = Array.from({ length: 12 }, (_, i) =>
      new Date(0, i).toLocaleString('default', { month: 'long' })
    );
    const years = Array.from({ length: 12 }, (_, i) => startYear + i);

    const handleMonthClick = () => setView('months');
    const handleYearClick = () => setView('years');

    const handleMonthSelect = (monthIndex: number) => {
      const newDate = new Date(selectedMonth || '');
      newDate.setMonth(monthIndex);
      setSelectedMonth(newDate);
      setView('days');
    };

    const handleYearSelect = (year: number) => {
      const newDate = new Date(selectedMonth || '');
      newDate.setFullYear(year);
      setSelectedMonth(newDate);
      setView('days');
    };

    const handleNextClick = () => {
      if (view === 'years') {
        setStartYear((prev) => prev + 12);
      }
    };

    const handlePrevClick = () => {
      if (view === 'years') {
        setStartYear((prev) => prev - 12);
      }
    };

    const isDisabledDate = (
      year: number | null,
      month: number | null,
      minDate?: Date,
      maxDate?: Date
    ): boolean => {
      const isMinDateValid =
        minDate instanceof Date && !isNaN(minDate.getTime());
      const isMaxDateValid =
        maxDate instanceof Date && !isNaN(maxDate.getTime());

      if (isMinDateValid) {
        if (year !== null && year < minDate.getFullYear()) return true;
        if (
          year !== null &&
          month !== null &&
          year === minDate.getFullYear() &&
          month < minDate.getMonth()
        )
          return true;
      }

      if (isMaxDateValid) {
        if (year !== null && year > maxDate.getFullYear()) return true;
        if (
          year !== null &&
          month !== null &&
          year === maxDate.getFullYear() &&
          month > maxDate.getMonth()
        )
          return true;
      }

      return false;
    };

    useEffect(() => {
      if (isPickerOpen && view === 'years') {
        const currentYear =
          selectedMonth?.getFullYear() ?? new Date().getFullYear();
        setStartYear(currentYear - (currentYear % 12)); // Reset to the first year in the range that contains the selected year
      }
    }, [isPickerOpen, selectedMonth, view]);

    // Custom Caption Component
    const CustomCaption: React.FC<CustomCaptionProps> = ({ children }) => {
      // If children is a React node (like an element), render it directly
      if (React.isValidElement(children)) {
        return <div>{children}</div>;
      }

      const [month = '', year = ''] = String(children).split(' ');

      return (
        <Typography
          as="div"
          fontWeight="medium"
          lineHeight="16.8px"
          className="ff-calendar-haeder"
        >
          <span onClick={handleMonthClick} className="ff-cursor-pointer">
            {month}
          </span>
          <span onClick={handleYearClick} className="ff-cursor-pointer">
            {year}
          </span>
        </Typography>
      );
    };

    // Custom MonthGrid Component
    const CustomMonthGrid: React.FC = () => {
      return (
        <div className="ff-custom-month_grid">
          {months.map((month: string, index: number) => {
            const isDisabled = isDisabledDate(
              selectedMonth?.getFullYear() || null,
              index,
              minDate,
              maxDate
            );

            return (
              <div
                key={index}
                onClick={() => !isDisabled && handleMonthSelect(index)}
                className={classNames('ff-custom-month', {
                  'ff-custom-month--selected':
                    index === selectedMonth?.getMonth(),
                  'ff-custom-month--disabled': isDisabled,
                })}
              >
                <Typography
                  color={
                    index === selectedMonth?.getMonth()
                      ? 'var(--primary-button-text-color)'
                      : undefined
                  }
                >
                  {month}
                </Typography>
              </div>
            );
          })}
        </div>
      );
    };

    const CustomPrevButton: React.FC<CustomCalenderButtonProps> = ({
      disabled,
      onClick,
    }) => {
      return (
        <button
          className="ff-calendar-nav-button"
          onClick={onClick}
          disabled={disabled}
        >
          <Icon name="left_arrow_icon" height={20} width={20} />
        </button>
      );
    };
    const CustomNextButton: React.FC<CustomCalenderButtonProps> = ({
      disabled,
      onClick,
    }) => {
      return (
        <button
          className="ff-calendar-nav-button"
          onClick={onClick}
          disabled={disabled}
        >
          <Icon name="right_arrow_icon" height={20} width={20} />
        </button>
      );
    };

    // Custom YearGrid Component
    const CustomYearGrid: React.FC = () => {
      return (
        <div className="ff-custom-year_grid">
          {years.map((year: number) => {
            const isDisabled = isDisabledDate(year, null, minDate, maxDate);

            return (
              <div
                key={year}
                onClick={() => !isDisabled && handleYearSelect(year)}
                className={classNames('ff-custom-year', {
                  'ff-custom-year--selected':
                    year === selectedMonth?.getFullYear(),
                  'ff-custom-year--disabled': isDisabled,
                })}
              >
                <Typography
                  color={
                    year === selectedMonth?.getFullYear()
                      ? 'var(--primary-button-text-color)'
                      : undefined
                  }
                >
                  {year}
                </Typography>
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <div className={`ff-date-picker ${className}`} ref={containerRef}>
        <div className="ff-datepicker-input-container">
          <div className="ff-input-with-icon ff-date-input-field">
            <Icon
              name={'calendar_icon'}
              hoverEffect={false}
              className="ff-calendar-icon"
            />
            <input
              type="text"
              value={
                value
                  ? format(value, dateFormat, {
                      timeZone: timezone,
                    })
                  : ''
              }
              readOnly
              placeholder={placeholder}
              className={
                isFilterDatePicker ? 'ff-filter-date-input' : 'ff-date-input'
              }
              disabled={disabled}
              onClick={handleDateInputClick}
            />
            {helperText && error && (
              <span
                className={classNames('ff-date-input-message', {
                  'ff-date-input-message--danger': !!error,
                })}
              >
                {helperText}
              </span>
            )}
          </div>

          {!dateOnly && (
            <div className="ff-input-with-icon ff-time-input-field">
              <Icon
                name={'clock_icon'}
                hoverEffect={false}
                className="ff-clock-icon"
              />
              <input
                type="text"
                placeholder="Select time"
                className={
                  isFilterDatePicker ? 'ff-filter-time-input' : 'ff-time-input'
                }
                value={
                  value
                    ? format(value, timeFormat, {
                        timeZone: timezone,
                      })
                    : ''
                }
                disabled={disabled}
                onClick={handleDateInputClick}
                readOnly
              />
            </div>
          )}
        </div>

        {isPickerOpen &&
          !!top &&
          ReactDOM.createPortal(
            <div
              className="ff-date-picker-container"
              ref={mergedRef}
              style={{
                zIndex,
                top: `${positionStyles.top}px`,
                left: `${positionStyles.left}px`,
              }}
            >
              <div className="ff-calendar-container">
                <DayPicker
                  style={calendarStyle}
                  className="ff-calendar"
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDaySelect}
                  month={selectedMonth}
                  onMonthChange={(month) => {
                    if (view === 'days') {
                      setSelectedMonth(month);
                    }
                  }}
                  onNextClick={handleNextClick}
                  onPrevClick={handlePrevClick}
                  modifiers={{
                    today: todayInTimeZone,
                  }}
                  disableNavigation={view === 'months'}
                  disabled={[
                    {
                      before: new Date(minDate ? minDate : ''),

                      after: new Date(maxDate ? maxDate : ''),
                    },
                  ]}
                  timeZone={systemTimeZone}
                  components={{
                    CaptionLabel: (props) => <CustomCaption {...props} />,
                    PreviousMonthButton: (props) => (
                      <CustomPrevButton {...props} />
                    ),
                    NextMonthButton: (props) => <CustomNextButton {...props} />,
                    ...(view === 'months'
                      ? {
                          MonthGrid: () => <CustomMonthGrid />,
                        }
                      : {}),
                    ...(view === 'years'
                      ? {
                          MonthGrid: () => <CustomYearGrid />,
                        }
                      : {}),
                  }}
                />
                {!dateOnly && (
                  <TimePicker
                    value={timeValue}
                    onChange={handleTimeChange}
                    minTime={minTime}
                    maxTime={maxTime}
                    onErrorChange={setTimeError}
                  />
                )}
              </div>
              {!dateOnly && (
                <div className="ff-date-picker-controls">
                  <Button
                    className="ff-date-picker-button"
                    variant="secondary"
                    onClick={handleCancel}
                    label="Cancel"
                  />
                  <Button
                    className="ff-date-picker-button"
                    variant="primary"
                    onClick={handleSave}
                    label="Save"
                    disabled={timeError}
                  />
                </div>
              )}
            </div>,
            document.body
          )}
      </div>
    );
  }
);

export default CustomDatePicker;

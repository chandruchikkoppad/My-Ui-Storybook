import React, { useEffect, useState, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import { formatInTimeZone } from 'date-fns-tz';
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

const CustomDatePicker: React.FC<DatePickerProps> = ({
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
}) => {
  const [timeValue, setTimeValue] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [timeError, setTimeError] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<Date | undefined>(
    new Date()
  );
  const [view, setView] = useState<string>('days');
  const [startYear, setStartYear] = useState(() => {
    const currentYear =
      selectedMonth?.getFullYear() ?? new Date().getFullYear();
    return currentYear - (currentYear % 12); // Set to the first year in the 12-year range
  });
  const [datePickerPosition, setDatePickerPosition] = useState<
    'top' | 'bottom'
  >('bottom');
  const pickerRef = useRef<HTMLDivElement>(null); // Ref to track the picker
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setTimeValue(formatTimeStr(value));
      setSelectedDate(value);
    }
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
      if (containerRef.current && pickerRef.current) {
        const relativeRect = containerRef.current.getBoundingClientRect();
        const absoluteRect = pickerRef.current.getBoundingClientRect();

        const spaceBelow = window.innerHeight - relativeRect.bottom;
        const spaceAbove = relativeRect.top;

        // Check if there is more space above than below
        if (
          spaceBelow < absoluteRect.height &&
          spaceAbove >= absoluteRect.height
        ) {
          setDatePickerPosition('top');
        } else {
          setDatePickerPosition('bottom');
        }
      }
    };

    // Initial check
    adjustPosition();

    // Adjust position on window resize
    window.addEventListener('resize', adjustPosition);
    return () => window.removeEventListener('resize', adjustPosition);
  }, []);

  const calendarStyle = {
    '--rdp-day-width': calendarWidth ? `${calendarWidth / 7 - 4}px` : undefined,
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
  };

  const handleSave = () => {
    onChange(selectedDate);
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
        {months.map((month: string, index: number) => (
          <div
            key={index}
            onClick={() => handleMonthSelect(index)}
            className={classNames('ff-custom-month', {
              'ff-custom-month--selected': index === selectedMonth?.getMonth(),
            })}
          >
            <Typography>{month}</Typography>
          </div>
        ))}
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
        <Icon name="left_arrow_icon" height={12} width={12} />
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
        <Icon name="right_arrow_icon" height={12} width={12} />
      </button>
    );
  };

  // Custom YearGrid Component
  const CustomYearGrid: React.FC = () => {
    return (
      <div className="ff-custom-year_grid">
        {years.map((year: number) => (
          <div
            key={year}
            onClick={() => handleYearSelect(year)}
            className={classNames('ff-custom-year', {
              'ff-custom-year--selected': year === selectedMonth?.getFullYear(),
            })}
          >
            <Typography>{year}</Typography>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="ff-date-picker" ref={containerRef}>
      <div className="ff-datepicker-input-container">
        <div className="ff-input-with-icon ff-date-input-field">
          <Icon
            name={'calendar_icon'}
            hoverEffect={false}
            className="ff-calendar-icon"
          />
          <input
            type="text"
            value={value ? formatInTimeZone(value, timezone, dateFormat) : ''}
            readOnly
            placeholder={placeholder}
            className="ff-date-input"
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

        <div className="ff-input-with-icon ff-time-input-field">
          <Icon
            name={'clock_icon'}
            hoverEffect={false}
            className="ff-clock-icon"
          />
          <input
            type="text"
            placeholder="Select time"
            className="ff-time-input"
            value={value ? formatInTimeZone(value, timezone, timeFormat) : ''}
            disabled={disabled}
            onClick={handleDateInputClick}
            readOnly
          />
        </div>
      </div>

      {isPickerOpen && (
        <div
          className="ff-date-picker-container"
          ref={pickerRef}
          style={{
            top: datePickerPosition === 'top' ? 'auto' : '110%',
            bottom: datePickerPosition === 'top' ? '110%' : 'auto',
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
              disableNavigation={view === 'months'}
              disabled={[
                {
                  before: new Date(minDate ? minDate : ''),
                  after: new Date(maxDate ? maxDate : ''),
                },
              ]}
              timeZone={timezone}
              components={{
                CaptionLabel: (props) => <CustomCaption {...props} />,
                PreviousMonthButton: (props) => <CustomPrevButton {...props} />,
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
            <TimePicker
              value={timeValue}
              onChange={handleTimeChange}
              minTime={minTime}
              maxTime={maxTime}
              onErrorChange={setTimeError}
            />
          </div>
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
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;

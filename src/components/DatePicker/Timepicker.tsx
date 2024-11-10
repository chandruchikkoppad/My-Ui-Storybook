import React, { useState, useRef, useEffect } from 'react';
import Typography from '../Typography';
import { TimePickerProps } from './types';
import Icon from '../Icon';
import classNames from 'classnames';
import { convertTo24Hour } from '../../assets/utils/functionUtils';
import { convertTo12Hour } from '../../assets/utils/functionUtils';
import { isValid12HourTime } from '../../assets/utils/functionUtils';

const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  minTime,
  maxTime,
  onErrorChange,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [period, setPeriod] = useState<string | undefined>('AM');
  const [timeFieldError, setTimeFieldError] = useState<boolean>(false);
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const time12h = convertTo12Hour(value);
      const [time, periodValue] = time12h.split(' ') as [string, 'AM' | 'PM'];
      setInputValue(time);
      setPeriod(periodValue);

      setTimeFieldError(!isTimeWithInBounds(time12h, minTime, maxTime));
    }
  }, [value, minTime, maxTime]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isPeriodDropdownOpen &&
        periodRef.current &&
        !periodRef.current.contains(e.target as Node)
      ) {
        setIsPeriodDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPeriodDropdownOpen]);

  useEffect(() => {
    onErrorChange(timeFieldError);
  }, [timeFieldError]);

  const generateTimeOptions = (): string[] => {
    const options: string[] = [];
    const start = 0;
    const end = 23 * 60 + 45;
    const interval = 15;

    for (let i = start; i <= end; i += interval) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHour = hours % 12 || 12;
      const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
      options.push(`${displayHour}:${displayMinutes} ${period}`);
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const isTimeWithInBounds = (
    time: string,
    minTime?: string,
    maxTime?: string
  ): boolean => {
    const [hours = 0, minutes = 0] = convertTo24Hour(time)
      .split(':')
      .map(Number);
    const timeValue = hours * 60 + minutes;

    if (minTime) {
      const [minHours = 0, minMinutes = 0] = minTime.split(':').map(Number);
      const minValue = minHours * 60 + minMinutes;
      if (timeValue < minValue) return false;
    }

    if (maxTime) {
      const [maxHours = 0, maxMinutes = 0] = maxTime.split(':').map(Number);
      const maxValue = maxHours * 60 + maxMinutes;
      if (timeValue > maxValue) return false;
    }

    return true;
  };

  const handleTimeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let [hourSection, minuteSection] = inputValue.split(':');
    let [newHour, newMinute] = event.target.value.split(':');
    const selectionStart = inputRef.current?.selectionStart ?? 0;

    // Handle hour part input
    if (selectionStart <= 2) {
      const currentHour = parseInt(hourSection ?? '0') || 0;

      if (newHour?.length === 1) {
        hourSection = currentHour
          ? hourSection?.slice(-1) + newHour
          : `0${newHour}`; // Single digit input
      } else {
        hourSection = newHour?.padStart(2, '0'); // Two digits for hour
      }

      // Ensure hour part is valid (between 1 and 12)
      let parsedHour = parseInt(hourSection ?? '0') || 0;
      if (parsedHour > 12) {
        parsedHour = parseInt(newHour ?? '0'); // Fix if hour exceeds 12
      }

      hourSection = parsedHour.toString().padStart(2, '0');

      // Move to minute part if hour is greater than 1, otherwise stay on hour
      if (parsedHour > 1) {
        setTimeout(() => {
          inputRef.current?.setSelectionRange(3, 5); // Move to minute part
        }, 0);
      } else {
        setTimeout(() => {
          inputRef.current?.setSelectionRange(0, 2); // Keep cursor on hour part
        }, 0);
      }
    }

    // Handle minute part input
    if (selectionStart >= 3) {
      const currentMinute = parseInt(minuteSection ?? '0') || 0;

      if (newMinute?.length === 1) {
        minuteSection = currentMinute
          ? minuteSection?.slice(-1) + newMinute
          : `0${newMinute}`; // Single digit input
      } else {
        minuteSection = newMinute?.padStart(2, '0'); // Two digits for minute
      }

      // Ensure minute part is valid (between 00 and 59)
      let parsedMinute = parseInt(minuteSection ?? '0') || 0;
      if (parsedMinute > 59) {
        parsedMinute = parseInt(newMinute ?? '0'); // Fix if minute exceeds 59
      }

      minuteSection = parsedMinute.toString().padStart(2, '0');

      if (parsedMinute < 6) {
        setTimeout(() => {
          inputRef.current?.setSelectionRange(3, 5); // Keep cursor on minute part
        }, 0);
      }
    }

    setInputValue(`${hourSection}:${minuteSection}`);
    if (isValid12HourTime(`${hourSection}:${minuteSection}`)) {
      const time24h = convertTo24Hour(
        `${hourSection}:${minuteSection} ${period}`
      );
      onChange(time24h);
      setTimeFieldError(false);
    } else {
      setTimeFieldError(true);
    }
  };

  const togglePeriodDropdown = () => {
    setIsPeriodDropdownOpen((prev) => !prev);
    if (periodRef.current) {
      const { top, left, height } = periodRef.current.getBoundingClientRect();
      setDropdownPosition({ top: top + height, left: left });
    }
  };

  const handlePeriodChange = (option: string) => {
    setPeriod(option);
    const time24h = convertTo24Hour(`${inputValue} ${option}`);
    onChange(time24h);
    setIsPeriodDropdownOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    const selectionStart = inputRef.current?.selectionStart ?? 0;
    const selectionEnd = inputRef.current?.selectionEnd ?? 0;
    let [hourSection, minuteSection] = inputValue.split(':');

    if (key === 'Backspace' && selectionStart <= 2) {
      event.preventDefault();
      hourSection = 'HH';
      setInputValue(`${hourSection}:${minuteSection}`);
      setTimeout(() => inputRef.current?.setSelectionRange(0, 2), 0);
      setTimeFieldError(true);
    }

    if (key === 'Backspace' && selectionStart >= 3) {
      event.preventDefault();
      minuteSection = 'MM';
      setInputValue(`${hourSection}:${minuteSection}`);
      setTimeout(() => inputRef.current?.setSelectionRange(3, 5), 0);
      setTimeFieldError(true);
    }

    if (key === 'ArrowRight') {
      if (selectionEnd === 2) {
        event.preventDefault();
        inputRef.current?.setSelectionRange(3, 5);
      } else if (selectionStart === 0) {
        event.preventDefault();
        inputRef.current?.setSelectionRange(0, 2);
      }
    }

    if (key === 'ArrowLeft') {
      if (selectionStart === 3) {
        event.preventDefault();
        inputRef.current?.setSelectionRange(0, 2);
      } else if (selectionStart === 5) {
        event.preventDefault();
        inputRef.current?.setSelectionRange(3, 5);
      }
    }
  };

  const handleFocus = () => {
    if (inputValue === '') {
      setInputValue('HH:MM');
    }
    setTimeout(() => {
      inputRef.current?.setSelectionRange(0, 2);
    }, 0);
  };

  const handleBlur = () => {
    if (inputValue === 'HH:MM') {
      setInputValue('');
    }
  };

  const handleClick = () => {
    const selectionStart = inputRef.current?.selectionStart ?? 0;
    if (selectionStart >= 3) {
      inputRef.current?.setSelectionRange(3, 5);
    } else {
      inputRef.current?.setSelectionRange(0, 2);
    }
  };

  const handleTimeOptionClick = (time: string) => {
    const [timeValue, periodValue] = time.split(' ') as [string, 'AM' | 'PM'];
    setInputValue(timeValue);
    setPeriod(periodValue);
    const time24h = convertTo24Hour(`${timeValue} ${periodValue}`);
    onChange(time24h);
    setTimeFieldError(false);
  };

  return (
    <div className="ff-time-picker-container">
      <div className="ff-time-picker-fields">
        <div
          className={classNames(
            'ff-time-input-container',
            { 'ff-time-input-container--float': !!inputValue },
            { 'ff-time-input-container--danger': !!timeFieldError }
          )}
        >
          <Typography
            as="label"
            htmlFor="time"
            className={classNames('ff-time-input-label', {
              'ff-time-input-label--danger': !!timeFieldError,
            })}
          >
            Time
          </Typography>
          <input
            name="time"
            ref={inputRef}
            type="text"
            id="time-input"
            value={inputValue}
            inputMode="numeric"
            placeholder="HH:MM"
            onChange={handleTimeInput}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onClick={handleClick}
            onBlur={handleBlur}
            maxLength={5}
            className={classNames('ff-time-input', {
              'ff-time-input--danger': !!timeFieldError,
            })}
          />
        </div>
        <div
          className={classNames('ff-time-period-container', {
            'ff-time-period-container--active': !!isPeriodDropdownOpen,
          })}
          ref={periodRef}
        >
          <div
            onClick={togglePeriodDropdown}
            className="ff-time-period-select"
            aria-haspopup="listbox"
            aria-expanded={isPeriodDropdownOpen}
          >
            <Typography>{period}</Typography>
            <Icon
              name={isPeriodDropdownOpen ? 'arrow_up' : 'arrow_down'}
              className="ff-time-period-icon"
              height={12}
              width={12}
            />
          </div>

          {isPeriodDropdownOpen && (
            <ul
              className="ff-time-period-options"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`,
              }}
              role="listbox"
            >
              <Typography
                as="li"
                className="ff-option-item"
                onClick={() => handlePeriodChange('AM')}
                aria-selected={period === 'AM'}
              >
                AM
              </Typography>
              <Typography
                as="li"
                className="ff-option-item"
                onClick={() => handlePeriodChange('PM')}
                aria-selected={period === 'PM'}
              >
                PM
              </Typography>
            </ul>
          )}
        </div>
      </div>
      <div className="ff-time-picker-options">
        {timeOptions
          .filter((time) => isTimeWithInBounds(time, minTime, maxTime))
          .map((time, index) => (
            <div
              key={index}
              className="ff-time-option"
              onClick={() => handleTimeOptionClick(time)}
            >
              <Typography lineHeight="18px" textAlign="center">
                {time}
              </Typography>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TimePicker;

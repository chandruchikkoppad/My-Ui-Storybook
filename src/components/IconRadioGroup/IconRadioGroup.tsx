import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './IconRadioGroup.scss';
import Icon from '../Icon/Icon';
import { IconRadioItem, IconRadioGroupProps } from './type';
import Tooltip from '../Tooltip';

const IconRadioGroup: React.FC<IconRadioGroupProps> = ({
  items,
  onButtonClick,
  selectedValue: initialSelectedValue = null,
  onChange,
  className = '',
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    initialSelectedValue
  );

  useEffect(() => {
    if (initialSelectedValue !== selectedValue) {
      setSelectedValue(initialSelectedValue);
    }
  }, [initialSelectedValue, selectedValue]);

  const handleButtonClick = (item: IconRadioItem) => {
    if (item.disabled) return;

    const newSelectedValue = item.iconName;
    setSelectedValue(newSelectedValue);

    if (onChange) {
      onChange(newSelectedValue);
    }

    onButtonClick(item);
  };

  return (
    <div className={classNames('ff-icon-radio-group', className)}>
      {items.map((item) => (
        <div
          key={item.iconName}
          className={classNames('ff-icon-radio-button', {
            selected: selectedValue === item.iconName,
            disabled: item.disabled,
          })}
          onClick={() => handleButtonClick(item)}
        >
          <Tooltip title={item.iconLabel}>
            <div
              className={classNames('icon-container', {
                selected: selectedValue === item.iconName,
              })}
            >
              <Icon
                name={item.iconName}
                hoverEffect={false}
                color={
                  selectedValue === item.iconName
                    ? 'var(--drawer-footer-bg)'
                    : 'var(--brand-color)'
                }
              />
            </div>
          </Tooltip>
        </div>
      ))}
      <div className="line-connector"></div>
    </div>
  );
};

export default IconRadioGroup;

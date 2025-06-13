import { TabsProps } from './types';
import './TabsWithSilder.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import '../../assets/styles/_colors.scss';
import Icon from '../Icon';
import { useState } from 'react';
import Tooltip from '../Tooltip';

const TabsWithSilder = ({
  variant = 'default',
  tabsData,
  activeTabId,
  onTabClick,
  noBorder = false,
  noPadding = false,
  titleSize = '12px',
}: TabsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const tabsPerSlide = 4; // as confirmed there should be 4 tabs per slide
  const handleNext = () => {
    if (currentSlide < Math.ceil(tabsData.length / tabsPerSlide) - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  return (
    <div className={`ff-tabs-slider-container`}>
      <div
        className={classNames(`ff-tab-row--${variant} ff-tab-row-section`, {
          'ff-tab-row--no-border': noBorder,
          'ff-tab-row--no-padding': noPadding,
          'ff-tab-row--position': tabsData.length > tabsPerSlide,
        })}
      >
        {tabsData.length > tabsPerSlide && (
          <Icon
            className="ff-tab-icon ff-tab-icon--previous"
            name={`${currentSlide ? 'arrow_left_accordian' : ''}`}
            onClick={handlePrev}
            hoverEffect
          />
        )}
        <div className="ff-tab-row-carousel">
          <div
            className={'carousel_inner'}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => !tab.disabled && onTabClick(tab.id)}
                disabled={tab.disabled}
                className={classNames(`ff-tab-button--${variant}`, {
                  disabled: tab.disabled,
                  active: activeTabId === tab.id,
                })}
                style={{
                  flex: `0 0 ${100 / tabsPerSlide}%`,
                }}
              >
                <div className="label-count-section">
                  <Tooltip title={tab.label.length > 9 ? tab.label : ''}>
                    <Typography
                      children={
                        tab.label.length > 9
                          ? tab.label.slice(0, 9) + '...'
                          : tab.label
                      }
                      fontSize={titleSize}
                      lineHeight="18px"
                      fontWeight={
                        activeTabId === tab.id ? 'semi-bold' : 'regular'
                      }
                      color={
                        activeTabId === tab.id
                          ? 'var(--tabs-label-active-color)'
                          : 'var(--tabs-label-default-color)'
                      }
                      className={classNames('ff-tab-label', {
                        'ff-tab-label--active': activeTabId === tab.id,
                      })}
                    />
                  </Tooltip>
                  {variant === 'default' && tab.count && (
                    <span
                      className={classNames('tab-count', {
                        'tab-count--active': activeTabId === tab.id,
                      })}
                    >
                      {tab.count}
                    </span>
                  )}
                </div>

                <div
                  className={classNames('ff-tab-bar', {
                    'ff-tab-bar--active': activeTabId === tab.id,
                  })}
                ></div>
                <span
                  className={`ff-defaultStatus ${
                    tab.status === 'success'
                      ? 'ff-successStatus'
                      : tab.status === 'error'
                      ? 'ff-dangerStatus'
                      : ''
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
        {tabsData.length > tabsPerSlide && (
          <Icon
            className="ff-tab-icon ff-tab-icon--next"
            name={`${
              currentSlide < Math.ceil(tabsData.length / tabsPerSlide) - 1
                ? 'arrow_right_icon'
                : ''
            }`}
            onClick={handleNext}
            hoverEffect
          />
        )}
      </div>
      <div className={`ff-tab-content`}>
        {tabsData.find((tab) => tab.id === activeTabId)?.component}
      </div>
    </div>
  );
};

export default TabsWithSilder;

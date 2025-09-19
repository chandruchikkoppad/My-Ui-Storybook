import { TabsProps } from './types';
import './Tabs.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import '../../assets/styles/_colors.scss';
import Icon from '../Icon';

const Tabs = ({
  variant = 'default',
  tabsData,
  activeTabId,
  onTabClick,
  noBorder = false,
  noPadding = false,
  titleSize = '12px',
  isBorderBottomLine = false,
  isHoverBackground = false,
  isBorderRadius = false,
  tabFlexSpacing = 'flex-start',
}: TabsProps) => {
  return (
    <div className={`ff-tabs-container`}>
      <div
        className={classNames(
          `ff-tab-row--${variant} ff-tab-row-spacing--${tabFlexSpacing}`,
          {
            'ff-tab-row--no-border': noBorder,
            'ff-tab-row--no-padding': noPadding,
            'ff-tab-row--borderBottomLine': isBorderBottomLine,
          }
        )}
      >
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && onTabClick(tab.id)}
            disabled={tab.disabled}
            className={classNames(`ff-tab-button--${variant}`, {
              disabled: tab.disabled,
              active: activeTabId === tab.id,
              'ff-tab-button-bg': isHoverBackground,
            })}
          >
            <div className="label-count-section">
              <Typography
                children={tab.label}
                fontSize={titleSize}
                lineHeight="18px"
                fontWeight={activeTabId === tab.id ? 'semi-bold' : 'regular'}
                color={
                  activeTabId === tab.id
                    ? 'var(--tabs-label-active-color)'
                    : 'var(--tabs-label-default-color)'
                }
                className={classNames('ff-tab-label', {
                  'ff-tab-label--active': activeTabId === tab.id,
                })}
              />
              {variant === 'default' && tab.count !== undefined && (
                <span
                  className={classNames('tab-count', {
                    'tab-count--active': activeTabId === tab.id,
                  })}
                >
                  {tab.count}
                </span>
              )}
              {tab.icon && (
                <Icon
                  name={tab.icon}
                  className={classNames('ff-tab-icon', {
                    'ff-tab-icon--active': activeTabId === tab.id,
                  })}
                />
              )}
            </div>
            <div
              className={classNames('ff-tab-bar', {
                'ff-tab-bar--active': activeTabId === tab.id,
                'ff-tab-bar--radius-4': isBorderRadius,
                'ff-tab-bar--radius-2': !isBorderRadius,
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
      <div className={`ff-tab-content`}>
        {tabsData.find((tab) => tab.id === activeTabId)?.component}
      </div>
    </div>
  );
};

export default Tabs;

import { TabsProps } from './types';
import './Tabs.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import '../../assets/styles/_colors.scss';

const Tabs = ({
  variant = 'default',
  tabsData,
  activeTabId,
  onTabClick,
  noBorder = false,
}: TabsProps) => {
  const tabs = tabsData.map((tab, index) => ({
    id: index.toString(),
    label: tab.label,
    component: tab.component,
    disabled: tab.disabled,
  }));

  return (
    <div className={`ff-tabs-container`}>
      <div
        className={classNames(`ff-tab-row--${variant}`, {
          'ff-tab-row--no-border': noBorder,
        })}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && onTabClick(tab.id)}
            disabled={tab.disabled}
            className={classNames(`ff-tab-button--${variant}`, {
              disabled: tab.disabled,
              active: activeTabId === tab.id,
            })}
          >
            <Typography
              children={tab.label}
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

            <Typography
              children=""
              color=""
              className={classNames('ff-tab-bar', {
                'ff-tab-bar--active': activeTabId === tab.id,
              })}
            />
          </button>
        ))}
      </div>
      <div className={`ff-tab-content`}>
        {tabs.find((tab) => tab.id === activeTabId)?.component}
      </div>
    </div>
  );
};

export default Tabs;

import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { BrowserTabsProps } from './types';
import Icon from '../Icon';
import Typography from '../Typography';
import Tooltip from '../Tooltip';
import './BrowserTabs.scss';
import '../../assets/styles/_colors.scss';

const BrowserTabs = ({
  tabsData,
  activeTabId,
  onTabClick,
  onTabClose,
  onTabAdd,
  maxTabWidth = 132,
  showCloseOnActive = true,
}: BrowserTabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tabWidth, setTabWidth] = useState<number>();

  useEffect(() => {
    const updateTabWidth = () => {
      if (containerRef.current) {
        const containerWidth =
          containerRef.current.getBoundingClientRect().width - maxTabWidth;
        const calculatedWidth = containerWidth / tabsData.length;
        setTabWidth(Math.min(maxTabWidth, calculatedWidth));
      }
    };

    updateTabWidth();
    window.addEventListener('resize', updateTabWidth);

    return () => window.removeEventListener('resize', updateTabWidth);
  }, [tabsData.length, maxTabWidth]);

  return (
    <div className="ff-browser-tabs-container" ref={containerRef}>
      <div className="ff-browser-tab-row">
        <div className="ff-tab-button-container">
          {tabsData.map((tab, index) => {
            const isActive = activeTabId === tab.id;
            const isTabTooSmall = tabWidth && tabWidth < 80;
            return (
              <div
                key={tab.id}
                className={classNames('ff-tab-wrapper', { active: isActive })}
              >
                <Tooltip title={isTabTooSmall ? tab.label : ''}>
                  <button
                    onClick={() => onTabClick(tab.id)}
                    className={classNames('ff-tab-button', {
                      shrink: tabWidth && tabWidth <= 80,
                    })}
                    style={{
                      width: tabWidth ? `${tabWidth}px` : 'auto',
                      padding:
                        tabWidth === undefined
                          ? '0px'
                          : tabWidth < 60
                          ? '0px'
                          : tabWidth < 80
                          ? '0px 2px'
                          : tabWidth < 132
                          ? '0px 8px'
                          : `0px ${tabWidth / 17}px`,
                    }}
                  >
                    <div className="ff-tab-content">
                      {tabWidth &&
                        tabWidth >= 20 &&
                        (!isActive || tabWidth >= 80) && (
                          <>
                            {tab.tabIconSrc ? (
                              <img
                                src={tab.tabIconSrc}
                                alt={tab.label}
                                className="ff-tab-icon"
                              />
                            ) : (
                              tab.tabIcon && (
                                <Icon
                                  name={tab.tabIcon}
                                  hoverEffect={false}
                                  color="inherit"
                                />
                              )
                            )}
                          </>
                        )}

                      {tabWidth && tabWidth > 40 && (
                        <div className="ff-tab-label-container">
                          <Typography
                            children={tab.label}
                            lineHeight="18px"
                            fontWeight={isActive ? 'semi-bold' : 'regular'}
                            color={
                              isActive
                                ? 'var(--tabs-label-active-color)'
                                : 'var(--tabs-label-default-color)'
                            }
                            className="ff-tab-label"
                          />
                        </div>
                      )}

                      {((tabWidth && tabWidth >= 80) || isActive) &&
                        showCloseOnActive && (
                          <Tooltip title="Close ">
                            <Icon
                              name="close"
                              className="ff-close-icon"
                              hoverEffect={false}
                              height={10}
                              width={10}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onTabClose) {
                                  onTabClose(tab.id);
                                }
                              }}
                            />
                          </Tooltip>
                        )}
                    </div>
                  </button>
                </Tooltip>
                {tabWidth &&
                  tabWidth < maxTabWidth &&
                  !(
                    isActive ||
                    index === tabsData.length - 1 ||
                    (activeTabId === tabsData[0]?.id && index === 0) ||
                    activeTabId === tabsData[index + 1]?.id
                  ) && (
                    <span
                      className={`ff-tab-separator ${
                        tabWidth > 80
                          ? 'wide-browser-tab'
                          : 'narrow-browser-tab'
                      }`}
                    />
                  )}
              </div>
            );
          })}
        </div>
        <Tooltip title="Add">
          <div className="ff-tab-plus-icon" onClick={onTabAdd}>
            <Icon name="add_file" color="#71347B" width={10} height={10} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default BrowserTabs;

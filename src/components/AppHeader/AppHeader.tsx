import { AppHeaderProps } from './types';
import Icon from '../Icon';
import './AppHeader.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import AllProjectsDropdown from '../AllProjectsDropdown';
import MenuOption from '../MenuOption';
import Tooltip from '../Tooltip';
import React, { useEffect, useRef, useState } from 'react';

const AppHeader: React.FC<AppHeaderProps> = ({
  logoIconName = 'fireflink_icon',
  width,
  borderRadius,
  leftContent,
  rightContent,
  projectsList,
  appHeaderMenuItems,
  appHeaderHiddenMenuItems,
  selectedMenu,
  selectedSubMenu,
  selectedQuickMenu,
  selectedProject = { label: '', value: '', iconName: '' },
  onMenuClick = () => {},
  onSubMenuClick = () => {},
  onQuickMenuClick = () => {},
  onProjectMenuClick = () => {},
  onProjectDropdownLabelClick = () => {},
  onMoreMenuOptionClick = () => {},
  disabled = false,
}) => {
  const hiddenMenuRef = useRef<HTMLDivElement>(null);
  const hiddenQuickMenuRef = useRef<HTMLDivElement>(null);
  const [projectArrayList, setProjectArrayList] = useState(projectsList);
  useEffect(() => {
    if (projectsList !== projectArrayList) {
      setProjectArrayList(projectsList);
    }
  }, [projectsList, projectArrayList]);

  const handleMenuClick = (menuItem: any) => {
    if (!disabled) onMenuClick(menuItem);
  };

  const handleSubMenuClick = (subMenuItem: any) => {
    if (!disabled) onSubMenuClick(subMenuItem);
  };

  const handleQuickMenuClick = (quickMenuItem: any) => {
    if (!disabled) onQuickMenuClick(quickMenuItem);
  };

  const handleProjectMenuClick = (quickMenuItem: any) => {
    if (!disabled) onProjectMenuClick(quickMenuItem);
  };

  const handleProjectDropdownLabelClick = () => {
    if (!disabled) onProjectDropdownLabelClick();
  };

  const handleMoreMenuOptionClick = (option: any) => {
    if (!disabled) onMoreMenuOptionClick(option);
  };

  return (
    <div
      className={classNames('ff-app-header-main', {
        'ff-app-header-disabled': disabled,
      })}
    >
      <div
        className="ff-app-header"
        style={{
          borderStartStartRadius: borderRadius,
          borderStartEndRadius: borderRadius,
        }}
      >
        <div className="ff-app-header-left-container">
          <div className="ff-app-header-logo-icon">
            <Icon color="" name={logoIconName} height={24} width={21} />
          </div>
          {leftContent && (
            <div className="ff-app-header-left-content">{leftContent}</div>
          )}
        </div>
        {!checkEmpty(appHeaderMenuItems) && (
          <div className="ff-app-header-nav-bar" style={{ width: width }}>
            {projectArrayList && !checkEmpty(projectArrayList) && (
              <div>
                {
                  <AllProjectsDropdown
                    onClick={handleProjectMenuClick}
                    options={projectArrayList}
                    selectedOption={selectedProject}
                    onMenuClick={handleProjectDropdownLabelClick}
                    selected={selectedMenu === 'All Projects'}
                    placeholder="Search Projects"
                    disabled={disabled}
                  />
                }
              </div>
            )}
            <div className="ff-app-header-nav-bar-items fontSm">
              {appHeaderMenuItems.map((menuItem) => {
                return (
                  !appHeaderHiddenMenuItems?.find(
                    (menu) => menu.label === menuItem.label
                  ) &&
                  !menuItem.hide &&
                  !(menuItem.access === 'No Access') &&
                  menuItem.label !== 'All Projects' && (
                    <div
                      className={classNames('ff-app-header-nav-bar-item', {
                        ['ff-app-header-nav-bar-item--selected']:
                          menuItem.label === selectedMenu,
                        'ff-app-header-nav-bar-item--disabled': disabled,
                      })}
                      key={menuItem.label}
                    >
                      <Typography
                        as="div"
                        className="ff-app-header-nav-bar-item-label"
                        lineHeight="18px"
                        onClick={() => handleMenuClick(menuItem)}
                      >
                        {menuItem.label}
                      </Typography>
                      {menuItem.label === selectedMenu &&
                        menuItem?.subMenuItems && (
                          <>
                            {menuItem.subMenuItems.map((subMenuItem) => {
                              return (
                                <>
                                  {!subMenuItem.hide && (
                                    <div
                                      key={subMenuItem.label}
                                      className="ff-app-header-submenu-container"
                                    >
                                      <Typography
                                        as="div"
                                        className={classNames(
                                          'ff-app-header-nav-bar-submenu-item',
                                          {
                                            ['ff-app-header-nav-bar-submenu-item--selected']:
                                              subMenuItem.label ===
                                              selectedSubMenu,
                                            'ff-app-header-nav-bar-submenu-item--disabled':
                                              disabled,
                                          }
                                        )}
                                        lineHeight="18px"
                                        onClick={() =>
                                          handleSubMenuClick(subMenuItem)
                                        }
                                      >
                                        {subMenuItem.label}
                                      </Typography>
                                    </div>
                                  )}
                                </>
                              );
                            })}
                            {menuItem.subMenuItems.map((subMenuItem) => {
                              return (
                                <>
                                  {!subMenuItem.hide && (
                                    <div
                                      key={subMenuItem.label}
                                      className="ff-app-header-submenu-container"
                                    >
                                      {subMenuItem.label === selectedSubMenu &&
                                        subMenuItem?.quickMenuItems &&
                                        subMenuItem?.quickMenuItems.length >
                                          0 &&
                                        (() => {
                                          const quickMenuItemsArray =
                                            subMenuItem.quickMenuItems.slice(
                                              0,
                                              8
                                            );
                                          const quickMenuHiddenItemsArray =
                                            subMenuItem.quickMenuItems.slice(8);
                                          const quickMenuHiddenItems =
                                            quickMenuHiddenItemsArray.map(
                                              (item) => ({
                                                ...item,
                                                value: item.path,
                                                icon: item.iconName,
                                              })
                                            );
                                          return (
                                            <div
                                              className={classNames(
                                                'ff-app-header-quickmenu-container',
                                                subMenuItem.quickMenuItems
                                                  ?.length
                                                  ? 'visible'
                                                  : ''
                                              )}
                                            >
                                              <div>
                                                <Icon name="vertical_separator" />
                                              </div>
                                              {quickMenuItemsArray.map(
                                                (quickMenuItem) => {
                                                  return (
                                                    <>
                                                      {!quickMenuItem.hide && (
                                                        <div
                                                          key={
                                                            quickMenuItem.iconName
                                                          }
                                                          onClick={() =>
                                                            handleQuickMenuClick(
                                                              quickMenuItem
                                                            )
                                                          }
                                                          className={classNames(
                                                            'ff-app-header-nav-bar-quickmenu-item',
                                                            {
                                                              ['ff-app-header-nav-bar-quickmenu-item--selected']:
                                                                quickMenuItem.path ===
                                                                selectedQuickMenu,
                                                            }
                                                          )}
                                                        >
                                                          <Tooltip
                                                            title={
                                                              quickMenuItem?.label
                                                            }
                                                          >
                                                            <Icon
                                                              name={
                                                                quickMenuItem.iconName
                                                              }
                                                              height={16}
                                                              width={16}
                                                              hoverEffect={true}
                                                            />
                                                          </Tooltip>
                                                        </div>
                                                      )}
                                                    </>
                                                  );
                                                }
                                              )}
                                              {quickMenuHiddenItemsArray &&
                                                !checkEmpty(
                                                  quickMenuHiddenItemsArray
                                                ) && (
                                                  <div ref={hiddenQuickMenuRef}>
                                                    <MenuOption
                                                      iconName="more"
                                                      options={
                                                        quickMenuHiddenItems
                                                      }
                                                      onOptionClick={
                                                        onQuickMenuClick
                                                      }
                                                      dropdownPlacement="down"
                                                      zIndex={1001}
                                                      tooltipTitle="More"
                                                      variant="light"
                                                      targetRef={
                                                        hiddenQuickMenuRef
                                                      }
                                                    />
                                                  </div>
                                                )}
                                            </div>
                                          );
                                        })()}
                                    </div>
                                  )}
                                </>
                              );
                            })}
                          </>
                        )}
                    </div>
                  )
                );
              })}
            </div>
            {appHeaderHiddenMenuItems &&
              !checkEmpty(appHeaderHiddenMenuItems) && (
                <div className="more-menu" ref={hiddenMenuRef}>
                  <MenuOption
                    iconName="more"
                    options={appHeaderHiddenMenuItems}
                    onOptionClick={handleMoreMenuOptionClick}
                    variant="dark"
                    dropdownPlacement="down"
                    zIndex={1001}
                    tooltipTitle="More"
                    optionCardVariant="default"
                    targetRef={hiddenMenuRef}
                    disabled={disabled}
                  />
                </div>
              )}
          </div>
        )}
        {rightContent && (
          <div className="ff-app-header-right-content">{rightContent}</div>
        )}
      </div>
    </div>
  );
};
export default AppHeader;

import { appHeaderMenuItemProps, AppHeaderProps } from './types';
import Icon from '../Icon';
import './AppHeader.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import AllProjectsDropdown from '../AllProjectsDropdown';
import MenuOption from '../MenuOption';
import Tooltip from '../Tooltip';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getStoreValue } from '../../utils/indexDBStore/indexDB';

const AppHeader: React.FC<AppHeaderProps> = ({
  logoIconName = 'fireflink_icon',
  width,
  borderRadius,
  leftContent,
  rightContent,
  projectsList,
  appHeaderMenuItems,
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
  const [appHeaderHiddenMenuItems, setAppHeaderHiddenMenuItems] = useState<
    { label: string; value: string | undefined }[]
  >([]);
  const projectDetails = getStoreValue('current-project') as { id: string };
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<string>(selectedMenu);
  useEffect(() => {
    if (projectsList !== projectArrayList) {
      setProjectArrayList(projectsList);
    }
  }, [projectsList, projectArrayList]);

  useEffect(() => {
    if (selectedMenu !== selectedMenuItem) {
      setSelectedMenuItem(selectedMenu);
    }
  }, [selectedMenu, selectedMenuItem]);

  const handleMenuClick = (menuItem: any) => {
    if (!disabled) {
      onMenuClick(menuItem);
      calculateVisibleItems();
    }
  };

  const handleSubMenuClick = (subMenuItem: any) => {
    if (!disabled) {
      onSubMenuClick(subMenuItem);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        calculateVisibleItems();
      }, 800);
    }
  };

  const handleQuickMenuClick = (quickMenuItem: any) => {
    if (!disabled) {
      onQuickMenuClick(quickMenuItem);
    }
  };

  const handleProjectMenuClick = (projectItem: any) => {
    if (!disabled) {
      onProjectMenuClick(projectItem);
      calculateVisibleItems();
    }
  };

  const handleProjectDropdownLabelClick = () => {
    if (!disabled) {
      onProjectDropdownLabelClick();
      calculateVisibleItems();
    }
  };

  const handleMoreMenuOptionClick = (option: any) => {
    if (!disabled) {
      onMoreMenuOptionClick(option, calculateVisibleItems);
    }
  };

  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const subMenuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const quickMenuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const menuItemsWidthRef = useRef<{ [key: string]: number }>({});

  const calculateVisibleItems = useCallback(() => {
    if (projectDetails?.id === 'All Projects' || !menuContainerRef.current) {
      setAppHeaderHiddenMenuItems([]);
      return;
    }

    const containerWidth = 900;
    let totalWidth = 0;
    const visibleItems: appHeaderMenuItemProps[] = [];
    const hiddenItems: appHeaderMenuItemProps[] = [];

    const sortedMenuItems = [...appHeaderMenuItems];

    sortedMenuItems.forEach((item, index) => {
      const itemWidth =
        menuItemsRef.current[index]?.offsetWidth ??
        menuItemsWidthRef.current[item.label] ??
        0;

      if (itemWidth > 0) {
        menuItemsWidthRef.current[item.label] = itemWidth;
      }
    });

    const currentSelectedMenuItem = sortedMenuItems.find(
      (item) => item.label === selectedMenuItem
    );
    const otherMenuItems = sortedMenuItems.filter(
      (item) => item.label !== selectedMenuItem
    );

    if (currentSelectedMenuItem) {
      visibleItems.push(currentSelectedMenuItem);
      totalWidth +=
        menuItemsWidthRef.current[currentSelectedMenuItem.label] ?? 0;
    }

    for (const item of otherMenuItems) {
      const itemWidth = menuItemsWidthRef.current[item.label] ?? 0;

      if (totalWidth + itemWidth > containerWidth) {
        hiddenItems.push(item);
      } else {
        visibleItems.push(item);
        totalWidth += itemWidth;
      }
    }
    setAppHeaderHiddenMenuItems(
      hiddenItems?.map((item) => ({
        label: item.label,
        value: item.path,
        icon: item?.iconName,
      }))
    );
  }, [
    appHeaderMenuItems,
    selectedMenuItem,
    selectedMenu,
    selectedSubMenu,
    selectedQuickMenu,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateVisibleItems();
    }, 800);

    return () => clearTimeout(timer);
  }, [projectDetails?.id, selectedMenuItem]);
  const checkIsHavingEntityPendingCounts = (data: appHeaderMenuItemProps) => {
    if (data.label === 'Approval Request' && data.entityPendingCounts) {
      return Object.values(data.entityPendingCounts).some((count) => count > 0);
    }
    return false;
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
          <div
            className="ff-app-header-nav-bar"
            style={{ width: width }}
            ref={menuContainerRef}
          >
            {projectArrayList && !checkEmpty(projectArrayList) && (
              <div>
                {
                  <AllProjectsDropdown
                    onClick={handleProjectMenuClick}
                    options={projectArrayList}
                    selectedOption={selectedProject}
                    onMenuClick={handleProjectDropdownLabelClick}
                    selected={selectedMenuItem === 'All Projects'}
                    placeholder="Search Projects"
                    disabled={disabled}
                  />
                }
              </div>
            )}
            <div className="ff-app-header-nav-bar-items fontSm">
              {appHeaderMenuItems?.map((menuItem, index) => {
                return (
                  !appHeaderHiddenMenuItems?.find(
                    (menu) => menu.label === menuItem.label
                  ) &&
                  !menuItem.hide &&
                  menuItem.access !== 'No Access' &&
                  (menuItem?.isReviewer !== false ||
                    checkIsHavingEntityPendingCounts(menuItem)) &&
                  menuItem.label !== 'All Projects' && (
                    <div
                      ref={(element) => (menuItemsRef.current[index] = element)}
                      className={classNames('ff-app-header-nav-bar-item', {
                        ['ff-app-header-nav-bar-item--selected']:
                          menuItem.label === selectedMenuItem,
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
                      {menuItem.label === selectedMenuItem &&
                        menuItem?.subMenuItems && (
                          <>
                            {menuItem?.subMenuItems?.map((subMenuItem, index) => {
                              return (
                                <>
                                  {!subMenuItem.hide && (
                                    <div
                                      key={subMenuItem.label}
                                      className="ff-app-header-submenu-container"
                                      ref={(element) =>
                                        (subMenuItemsRef.current[index] =
                                          element)
                                      }
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
                            {menuItem?.subMenuItems?.map((subMenuItem, index) => {
                              return (
                                <>
                                  {!subMenuItem.hide && (
                                    <div
                                      key={subMenuItem.label}
                                      className="ff-app-header-submenu-container"
                                      ref={(element) =>
                                        (quickMenuItemsRef.current[index] =
                                          element)
                                      }
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
                                            quickMenuHiddenItemsArray?.map(
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
                                              {quickMenuItemsArray?.map(
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
        {rightContent && (
          <div className="ff-app-header-right-content">{rightContent}</div>
        )}
      </div>
    </div>
  );
};
export default AppHeader;

import {
  appHeaderHiddenMenuItemProps,
  appHeaderMenuItemProps,
  AppHeaderProps,
} from './types';
import Icon from '../Icon';
import './AppHeader.scss';
import classNames from 'classnames';
import Typography from '../Typography';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
import AllProjectsDropdown from '../AllProjectsDropdown';
import MenuOption from '../MenuOption';
import Tooltip from '../Tooltip';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getStoreValue } from '../../utils/indexDBStore/indexDB';

const AppHeader: React.FC<AppHeaderProps> = ({
  logo,
  profileContent,
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
  isClient = false,
  hideNavbar = false,
  scriptId,
  centerInfoItems = [],
  rightButtons = [],
}) => {
  const hiddenMenuRef = useRef<HTMLDivElement>(null);
  const hiddenQuickMenuRef = useRef<HTMLDivElement>(null);
  const [projectArrayList, setProjectArrayList] = useState(projectsList);
  const [quickMenuItems, setQuickMenuItems] = useState<
    appHeaderHiddenMenuItemProps[]
  >([]);
  const [appHeaderHiddenMenuItems, setAppHeaderHiddenMenuItems] = useState<
    { label: string; value: string | undefined }[]
  >([]);
  const projectDetails = getStoreValue('current-project') as { id: string };
  const privilegeData = getStoreValue('privilege') as {
    headers: appHeaderMenuItemProps[];
  };
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
    if (
      projectItem?.value === projectDetails?.id &&
      projectItem?.value !== 'All Projects'
    ) {
      return;
    }
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
    if (
      (!isClient && projectDetails?.id === 'All Projects') ||
      !menuContainerRef.current
    ) {
      setAppHeaderHiddenMenuItems([]);
      return;
    }

    const containerWidth = isClient ? 700 : 950;
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
  }, [projectDetails?.id, selectedMenuItem, scriptId, quickMenuItems]);
  const checkIsHavingEntityPendingCounts = (data: appHeaderMenuItemProps) => {
    if (data.label === 'Approval Request' && data.entityPendingCounts) {
      return Object.values(data.entityPendingCounts).some((count) => count > 0);
    }
    return false;
  };
  useEffect(() => {
    if (privilegeData?.headers && selectedMenu && selectedSubMenu) {
      const quickMenuItemsData = getQuickMenuItems(
        privilegeData?.headers,
        selectedMenu,
        selectedSubMenu
      );
      if (
        JSON.stringify(quickMenuItemsData) !== JSON.stringify(quickMenuItems)
      ) {
        setQuickMenuItems(quickMenuItemsData || []);
      }
    }
  }, [privilegeData?.headers]);
  const getQuickMenuItems = (
    dataArray: appHeaderMenuItemProps[],
    menuLabel: string,
    subMenuLabel: string
  ) => {
    const mainItem = dataArray.find(
      (item: { label: string }) => item.label === menuLabel
    );
    if (!mainItem) {
      return [];
    }

    const subItem = mainItem?.subMenuItems?.find(
      (sub: { label: string }) => sub.label === subMenuLabel
    );
    if (!subItem) {
      return [];
    }
    if (subItem.quickMenuItems) {
      return subItem?.quickMenuItems?.filter(
        (quickItem: { hide?: boolean }) => !quickItem?.hide
      );
    } else {
      return [];
    }
  };

  return (
    <div className={classNames('ff-app-header-main')}>
      <div
        className="ff-app-header"
        style={{
          borderStartStartRadius: borderRadius,
          borderStartEndRadius: borderRadius,
        }}
      >
        <div className="ff-app-header-left-container">
          {logo && <div className="ff-app-header-logo-icon">{logo}</div>}
          {leftContent && (
            <div className="ff-app-header-left-content">{leftContent}</div>
          )}
        </div>
        <div
          className={classNames('ff-app-header-nav-bar', {
            'ff-app-header-nav-bar--with-center-info':
              !checkEmpty(centerInfoItems) && !checkEmpty(rightButtons),
          })}
          style={{
            width: width,
            visibility:
              (checkEmpty(appHeaderMenuItems) &&
                projectDetails?.id === 'All Projects') ||
              hideNavbar
                ? 'hidden'
                : 'visible',
            position: 'relative',
            zIndex: 1,
          }}
          ref={menuContainerRef}
        >
          <div
            className={classNames('ff-app-header-center-info', {
              'ff-app-header-center-info--no-right': checkEmpty(rightButtons),
            })}
          >
            {centerInfoItems.map((item, idx) => (
              <div key={idx} className="ff-app-header-center-info-item">
                <Icon name={item.iconName} />
                <Typography>{item.label}</Typography>
              </div>
            ))}
          </div>

          {!checkEmpty(rightButtons) && (
            <div className="ff-app-header-right-buttons">
              {rightButtons.map((btn, index) => (
                <button
                  key={index}
                  className="ff-app-header-right-button"
                  style={{
                    color: btn.color,
                    backgroundColor: btn.backgroundColor,
                  }}
                  onClick={btn.onClick}
                >
                  {btn.iconName && <Icon name={btn.iconName} />}
                  <Typography fontSize={10} fontWeight="semi-bold">
                    {btn.label}
                  </Typography>
                </button>
              ))}
            </div>
          )}

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
                      'ff-app-header-nav-bar-item--disabled':
                        disabled && menuItem.label !== selectedMenuItem,
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
                              <Fragment key={`subMenuItem.label-${index}`}>
                                {!subMenuItem.hide && (
                                  <div
                                    className="ff-app-header-submenu-container"
                                    ref={(element) =>
                                      (subMenuItemsRef.current[index] = element)
                                    }
                                  >
                                    <Tooltip
                                      title={
                                        subMenuItem.disable
                                          ? subMenuItem.disableText
                                          : ''
                                      }
                                      placement="bottom"
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
                                              disabled || subMenuItem.disable,
                                          }
                                        )}
                                        lineHeight="18px"
                                        onClick={() =>
                                          !subMenuItem.disable &&
                                          handleSubMenuClick(subMenuItem)
                                        }
                                      >
                                        {subMenuItem.label}
                                      </Typography>
                                    </Tooltip>
                                  </div>
                                )}
                              </Fragment>
                            );
                          })}
                          {menuItem?.subMenuItems?.map((subMenuItem, index) => {
                            return (
                              <Fragment key={subMenuItem.label}>
                                {!subMenuItem.hide && (
                                  <div
                                    className="ff-app-header-submenu-container"
                                    ref={(element) =>
                                      (quickMenuItemsRef.current[index] =
                                        element)
                                    }
                                  >
                                    {subMenuItem.label === selectedSubMenu &&
                                      subMenuItem?.quickMenuItems &&
                                      subMenuItem?.quickMenuItems.length > 0 &&
                                      (() => {
                                        const quickMenuItemsArray =
                                          quickMenuItems.slice(
                                            0,
                                            scriptId ? 10 : 8
                                          );
                                        const quickMenuHiddenItemsArray =
                                          quickMenuItems.slice(
                                            scriptId ? 10 : 8
                                          );
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
                                              subMenuItem.quickMenuItems?.length
                                                ? 'visible'
                                                : ''
                                            )}
                                          >
                                            {!checkEmpty(
                                              quickMenuItemsArray
                                            ) && (
                                              <div>
                                                <Icon name="vertical_separator" />
                                              </div>
                                            )}

                                            {quickMenuItemsArray?.map(
                                              (quickMenuItem) => {
                                                return (
                                                  <Fragment
                                                    key={quickMenuItem.label}
                                                  >
                                                    {!quickMenuItem.hide && (
                                                      <div
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
                                                              quickMenuItem?.iconName ??
                                                              ''
                                                            }
                                                            height={16}
                                                            width={16}
                                                            hoverEffect={true}
                                                          />
                                                        </Tooltip>
                                                      </div>
                                                    )}
                                                  </Fragment>
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
                              </Fragment>
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
        {profileContent && (
          <div className="ff-app-header-profile-content">{profileContent}</div>
        )}
      </div>
    </div>
  );
};
export default AppHeader;

import { AppHeaderProps } from './types';
import Icon from '../Icon';
import './AppHeader.scss';
import classNames from 'classnames';
import Typography from '../Typography';

const AppHeader: React.FC<AppHeaderProps> = ({
  logoIconName = 'fireflink_icon',
  rightContent,
  appHeaderMenuItems,
  selectedMenu,
  selectedSubMenu,
  selectedQuickMenu,
  onMenuClick = () => {},
  onSubMenuClick = () => {},
  onQuickMenuClick = () => {},
}) => {
  return (
    <>
      <div className="ff-app-header">
        <div className="ff-app-header-logo-icon">
          <Icon color="" name={logoIconName} height={24} width={21} />
        </div>
        <div className="ff-app-header-nav-bar">
          <div>All projects</div>
          <div className="ff-app-header-nav-bar-items fontSm">
            {appHeaderMenuItems.map((menuItem) => {
              return (
                <div
                  className={classNames('ff-app-header-nav-bar-item', {
                    ['ff-app-header-nav-bar-item--selected']:
                      menuItem.menuName === selectedMenu,
                  })}
                  key={menuItem.menuName}
                  onClick={() => onMenuClick(menuItem.menuName)}
                >
                  <Typography
                    as="div"
                    className="ff-app-header-nav-bar-item-label"
                    lineHeight="18px"
                  >
                    {menuItem.menuName}
                  </Typography>
                  {menuItem.menuName === selectedMenu &&
                    menuItem?.subMenuItems &&
                    menuItem.subMenuItems.map((subMenuItem) => {
                      return (
                        <div
                          key={subMenuItem.subMenuName}
                          onClick={() =>
                            onSubMenuClick(subMenuItem.subMenuName)
                          }
                          className="ff-app-header-submenu-container"
                        >
                          <Typography
                            as="div"
                            className={classNames(
                              'ff-app-header-nav-bar-submenu-item',
                              {
                                ['ff-app-header-nav-bar-submenu-item--selected']:
                                  subMenuItem.subMenuName === selectedSubMenu,
                              }
                            )}
                            lineHeight="18px"
                          >
                            {subMenuItem.subMenuName}
                          </Typography>
                          {subMenuItem.subMenuName === selectedSubMenu &&
                            subMenuItem?.quickMenuItems && (
                              <div className="ff-app-header-quickmenu-container">
                                <div>
                                  <Icon name="vertical_separator" />
                                </div>
                                {subMenuItem.quickMenuItems.map(
                                  (quickMenuItem) => {
                                    return (
                                      <>
                                        <div
                                          key={quickMenuItem.quickMenuIconName}
                                          onClick={() =>
                                            onQuickMenuClick(
                                              quickMenuItem.quickMenuName
                                            )
                                          }
                                          className={classNames(
                                            'ff-app-header-nav-bar-quickmenu-item',
                                            {
                                              ['ff-app-header-nav-bar-quickmenu-item--selected']:
                                                quickMenuItem.quickMenuName ===
                                                selectedQuickMenu,
                                            }
                                          )}
                                        >
                                          <Icon
                                            name={
                                              quickMenuItem.quickMenuIconName
                                            }
                                            height={24}
                                            width={24}
                                          />
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              </div>
                            )}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
          <div>
            <Icon name="more" className="ff-app-header-more-icon" />
          </div>
        </div>
        <div className="ff-app-header-right-content">{rightContent}</div>
      </div>
    </>
  );
};
export default AppHeader;

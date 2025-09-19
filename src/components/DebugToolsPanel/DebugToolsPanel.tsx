import { useEffect, useRef, useState, useMemo, FC } from 'react';
import './DebugToolsPanel.scss';
import { DebugToolsPanelProps } from './type';
import Button from '../Button';
import Icon from '../Icon';
import Typography from '../Typography';
import Tabs from '../Tabs';

const DebugToolsPanel: FC<DebugToolsPanelProps> = ({
  buttons = [],
  panelContentMap = {},
  headerIconsMap = {},
  headerLeadingIconMap = {},
  panelheight = '100%',
  panelwidth = '485px',
}) => {
  const buttonRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [notchTop, setNotchTop] = useState(0);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  useEffect(() => {
    if (activePanel && buttonRefs.current[activePanel]) {
      const wrapper = buttonRefs.current[activePanel];
      const wrapperRect = wrapper.getBoundingClientRect();
      const containerRect = wrapper.parentElement!.getBoundingClientRect();
      const offsetTop =
        wrapperRect.top - containerRect.top + wrapperRect.height / 2 - 10;
      setNotchTop(offsetTop);
    }
  }, [activePanel]);

  const handleClick = (label: string) => {
    setActivePanel((prev) => (prev === label ? null : label));
  };

  const activeTabData = useMemo(() => {
    if (!activePanel) return [];
    return [
      {
        id: activePanel,
        label: activePanel,
        icon: headerLeadingIconMap?.[activePanel] as string | undefined,
      },
    ];
  }, [activePanel, headerLeadingIconMap]);

  return (
    <div className="ff-debug-buttons-container">
      <div className="ff-debug_buttons">
        {buttons.map((label) => (
          <div key={label} ref={(el) => (buttonRefs.current[label] = el)}>
            <Button
              onClick={() => handleClick(label)}
              variant="custom"
              className={`ff-debug-button ${
                activePanel === label ? 'active' : ''
              }`}
            >
              {label}
            </Button>
          </div>
        ))}
      </div>

      {activePanel && (
        <div
          className="ff-debug-panel"
          style={{ height: panelheight, width: panelwidth }}
        >
          <div className="ff-dropdown-notch" style={{ top: `${notchTop}px` }} />
          <div className="ff-debug-panel__header">
            <div className="ff-debug-panel__title">
              <Tabs
                tabsData={activeTabData}
                activeTabId={activePanel}
                variant="default"
                noPadding
                onTabClick={() => {}}
              />
            </div>

            <div className="ff-debug-panel__header-icons">
              {headerIconsMap?.[activePanel] ?? (
                <Icon
                  name="close"
                  className="ff-debug-panel__close-icon"
                  onClick={() => setActivePanel(null)}
                />
              )}
            </div>
          </div>

          <div className="ff-debug-panel__content">
            <Typography>{panelContentMap?.[activePanel]}</Typography>
          </div>
        </div>
      )}
    </div>
  );
};

DebugToolsPanel.displayName = 'DebugToolsPanel';

export default DebugToolsPanel;

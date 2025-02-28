import React, { type JSX } from 'react';
import './ScriptSwitchButton.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';

interface ScriptSwitchButtonProps {
  handleClick: (selected: string) => void;
  selected: string;
  tabList: Array<'Automation' | 'Manual'>;
}

const ScriptSwitchButton: React.FC<ScriptSwitchButtonProps> = ({
  selected = 'text',
  handleClick,
  tabList, //  ['Automation' , 'Manual']
}): JSX.Element => {
  const isAutomation = tabList?.includes('Automation');
  const isManual = tabList?.includes('Manual');

  return (
    <div className="ff-script-switch-container">
      <Tooltip
        title={isAutomation ? 'Automation' : 'Add Automation'}
        zIndex={1000}
      >
        <div
          className={`ff-script-switch-button ${
            selected === 'Automation' ? 'active' : ''
          }`}
          onClick={() =>
            handleClick(isAutomation ? 'Automation' : 'Add Automation')
          }
        >
          <Icon
            name={isAutomation ? 'automation_testcase' : 'add_testcase'}
            color={
              selected === 'Automation'
                ? 'var(--primary-button-text-color)'
                : 'var(--description-text)'
            }
          />
        </div>
      </Tooltip>
      <Tooltip title={isManual ? 'Manual' : 'Add Manual'} zIndex={1000}>
        <div
          className={`ff-script-switch-button ${
            selected === 'Manual' ? 'active' : ''
          }`}
          onClick={() => handleClick(isManual ? 'Manual' : 'Add Manual')}
        >
          <Icon
            name={isManual ? 'manual_testcase' : 'add_testcase'}
            color={
              selected === 'Manual'
                ? 'var(--primary-button-text-color)'
                : 'var(--description-text)'
            }
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default ScriptSwitchButton;

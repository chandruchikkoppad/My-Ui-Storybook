import React, { type JSX } from 'react';
import './SwitchButton.scss';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import { SwitchButtonProps } from './types';

const SwitchButton: React.FC<SwitchButtonProps> = ({
  selected,
  handleClick,
  tabList,
}): JSX.Element => {
  return (
    <div className="ff-switch-container">
      {tabList.map((tab) => (
        <Tooltip key={tab.name} title={tab.tooltip} zIndex={1000}>
          <div
            className={`ff-switch-button ${
              selected === tab.name ? 'active' : ''
            }`}
            onClick={() => handleClick(tab.name)}
          >
            <Icon
              name={tab.icon}
              color={
                selected === tab.name
                  ? 'var(--primary-button-text-color)'
                  : 'var(--description-text)'
              }
            />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default SwitchButton;

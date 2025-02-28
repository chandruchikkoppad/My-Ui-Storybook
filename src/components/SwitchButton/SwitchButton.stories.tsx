import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import SwitchButton from './SwitchButton';

const meta: Meta<typeof SwitchButton> = {
  component: SwitchButton,
  title: 'Components/SwitchButton',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    selected: {
      options: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SwitchButton>;

export const Default: Story = {
  args: {
    selected: 'mobile',
    tabList: [
      {
        name: 'mobile',
        icon: 'mobile_icon',
        tooltip: 'Toggle to capture elements in mobile apps',
      },
      {
        name: 'web&mobile',
        icon: 'web&mobile_icon',
        tooltip: 'Toggle to capture elements in mobile Web',
      },
    ],
    handleClick: () => {},
  },
};

export const InteractiveSwitch: Story = {
  render: () => {
    const tabList = [
      {
        name: 'mobile',
        icon: 'mobile_icon',
        tooltip: 'Toggle to capture elements in mobile apps',
      },
      {
        name: 'web&mobile',
        icon: 'web&mobile_icon',
        tooltip: 'Toggle to capture elements in mobile Web',
      },
    ];
    const [selected, setSelected] = useState<string>(tabList[0].name);
    const handleChange = (selectedSwitch: string) => {
      setSelected(selectedSwitch);
    };

    return (
      <SwitchButton
        selected={selected}
        tabList={[
          {
            name: 'mobile',
            icon: 'mobile_icon',
            tooltip: 'Toggle to capture elements in mobile apps',
          },
          {
            name: 'web&mobile',
            icon: 'web&mobile_icon',
            tooltip: 'Toggle to capture elements in mobile Web',
          },
        ]}
        handleClick={handleChange}
      />
    );
  },
};

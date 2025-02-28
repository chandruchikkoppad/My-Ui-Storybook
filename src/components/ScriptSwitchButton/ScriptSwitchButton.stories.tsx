import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ScriptSwitchButton from './ScriptSwitchButton';

const meta: Meta<typeof ScriptSwitchButton> = {
  title: 'Components/ScriptSwitchButton',
  component: ScriptSwitchButton,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: { type: 'radio' },
      options: ['Automation', 'Manual'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScriptSwitchButton>;

export const Default: Story = {
  args: {
    selected: 'Automation',
    tabList: ['Automation', 'Manual'],
    handleClick: () => {},
  },
};

export const Switch: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('Automation');
    const handleChange = (selectedSwitch: string) => {
      if (selectedSwitch.includes('Automation')) {
        !selectedSwitch.includes('Add') && setSelected(selectedSwitch);
      } else {
        !selectedSwitch.includes('Add') && setSelected(selectedSwitch);
      }
    };

    return (
      <ScriptSwitchButton
        selected={selected}
        tabList={['Automation', 'Manual']}
        handleClick={handleChange}
      />
    );
  },
};

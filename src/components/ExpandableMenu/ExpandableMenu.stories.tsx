import type { Meta, StoryObj } from '@storybook/react';
import ExpandableMenu from './ExpandableMenu';
import { useState } from 'react';

const meta: Meta<typeof ExpandableMenu> = {
  title: 'Components/ExpandableMenu',
  component: ExpandableMenu,
  parameters: {
    layout: 'left',
  },
  argTypes: {
    disable: Boolean,
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ExpandableMenu>;

const defaultArgs = {
  label: 'Execution Settings',
  disable: false,
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    subMenus: [
      'Environment settings',
      'Run settings',
      'Report settings',
      'Additional settings',
      'Environment settings',
      'Run settings',
      'Report settings',
      'Additional settings',
      'Environment settings',
      'Run settings',
      'Report settings',
      'Additional settings',
    ],
  },
};

export const Controlled: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState<string>('');
    const onSubMenuClick = (chip: string) => {
      setSelectedMenu(chip);
    };

    return (
      <ExpandableMenu
        {...defaultArgs}
        subMenus={[
          'Environment settings',
          'Run settings',
          'Report settings',
          'Additional settings',
        ]}
        selectedMenu={selectedMenu}
        onSubMenuClick={onSubMenuClick}
      />
    );
  },
};

export default meta;

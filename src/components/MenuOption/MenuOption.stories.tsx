import type { Meta, StoryObj } from '@storybook/react';
import MenuOption from './MenuOption';
import './MenuOption.scss';
import React, { ReactNode, useRef } from 'react';
import Icon from '../Icon';

const meta: Meta<typeof MenuOption> = {
  title: 'Components/MenuOption',
  component: MenuOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'text',
      description: 'Name of the icon to display in the button.',
      defaultValue: 'more',
    },
    labelName: {
      control: 'text',
      description: 'Label text displayed beside the icon.',
      defaultValue: 'Menu',
    },
    tooltipTitle: {
      control: 'text',
      description: 'Tooltip text displayed on hover.',
      defaultValue: 'Select an option',
    },
    tooltipPlacement: {
      control: {
        type: 'select',
        options: ['top', 'down', 'left', 'right'],
      },
      description: 'Placement of the tooltip relative to the button.',
      defaultValue: 'top',
    },
    dropdownPlacement: {
      control: {
        type: 'select',
        options: ['top', 'down', 'left', 'right'],
      },
      description: 'Placement of the dropdown menu relative to the button.',
      defaultValue: 'down',
    },
  },
};

type Story = StoryObj<typeof MenuOption>;

const options = [
  {
    label: (
      <div>
        hello <Icon name="edit" />
      </div>
    ),
    value: 'opt1',
    icon: 'success',
  },
  { label: 'Option 2', value: 'opt2', icon: 'success' },
  {
    label: 'Delete',
    value: 'deleteOpt',
    icon: 'delete',
    iconColor: 'var(--delete-text-color)',
  },
];

const handleOptionClick = (option: { label: string | ReactNode }) => {
  alert(`Option clicked: ${option.label}`);
};

export const ControlledMenuOption: Story = {
  args: {
    iconName: 'more',
    labelName: 'Controlled Menu',
    tooltipTitle: 'Select an option',
    dropdownPlacement: 'top',
  },
  render: (args) => {
    const moreRef = useRef<HTMLDivElement>(null);
    return (
      <div ref={moreRef} style={{display:'flex', height:'100vh', alignItems:'center'}}>
        <MenuOption
          {...args}
          options={options}
          targetRef={moreRef} // Make sure targetRef is passed properly here
          onOptionClick={handleOptionClick}
          dropdownPlacement="down" // Dropdown placement for testing
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'A controlled `MenuOption` with customizable tooltip and dropdown placement.',
      },
    },
  },
};

export const MenuOptionTop: Story = {
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'top',
  },
  render: (args) => {
    const moreRef = useRef<HTMLDivElement>(null);
    return (
      <div ref={moreRef}>
        <MenuOption
          {...args}
          options={options}
          targetRef={moreRef}
          onOptionClick={handleOptionClick}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned above the button.',
      },
    },
  },
};

export const MenuOptionBottom: Story = {
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'down',
  },
  render: (args) => {
    return (
      <div id="more">
        <MenuOption
          {...args}
          options={options}
          targetRef={'more'}
          onOptionClick={handleOptionClick}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned below the button.',
      },
    },
  },
};

export const MenuOptionLeft: Story = {
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'left',
  },
  render: (args) => {
    const moreRef = useRef<HTMLDivElement>(null);
    return (
      <div ref={moreRef}>
        <MenuOption
          {...args}
          options={options}
          targetRef={moreRef}
          onOptionClick={handleOptionClick}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned to the left of the button.',
      },
    },
  },
};

export const MenuOptionRight: Story = {
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'right', // Proper dropdown placement
  },
  render: (args) => {
    const moreRef = useRef<HTMLDivElement>(null);
    return (
      <div ref={moreRef}>
        <MenuOption
          {...args}
          options={options}
          targetRef={moreRef} // Properly pass ref to targetRef
          onOptionClick={handleOptionClick}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned to the right of the button.',
      },
    },
  },
};

export default meta;

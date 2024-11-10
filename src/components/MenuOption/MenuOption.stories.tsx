import type { Meta, StoryObj } from '@storybook/react';
import MenuOption from './MenuOption';
import './MenuOption.scss';

export const DefaultMenuOption: Story = {
  args: {
    iconName: 'more',
    options: [
      {
        label: 'StepGroup',
        icon: 'success',
        value: [],
        disable: true,
      },
      {
        label: 'Script',
        value: ['SCR101', 'SCR102'],
        icon: 'success',
      },
      {
        label: 'Script',
        value: ['SCR101', 'SCR102'],
        icon: 'success',
      },
      {
        label: 'Script',
        value: ['SCR101', 'SCR102'],
        icon: 'success',
      },
    ],
  },
};

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
      defaultValue: 'more',
    },
    labelName: {
      control: 'text',
      defaultValue: 'Controlled Menu',
    },
    tooltipTitle: {
      control: 'text',
      defaultValue: 'Select an option',
    },
    tooltipPlacement: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
      defaultValue: 'top',
    },
    dropdownPlacement: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
      defaultValue: 'bottom',
    },
  },
};

type Story = StoryObj<typeof MenuOption>;

export const ControlledMenuOption: Story = {
  render: (args) => {
    const options = [
      {
        label: 'Option1',
        value: 'opt1',
        icon: 'success',
      },
      {
        label: 'Option2',
        value: 'opt2',
        icon: 'success',
      },
      {
        label: 'Delete option',
        value: 'deleteOpt',
        icon: 'delete',
      },
    ];

    return (
      <MenuOption
        iconName={args.iconName}
        labelName={args.labelName}
        options={options}
        tooltipTitle={args.tooltipTitle}
        tooltipPlacement={args.tooltipPlacement}
        dropdownPlacement={args.dropdownPlacement}
      />
    );
  },
};

// Story for MenuOption with label
export const MenuOptionWithLabel: Story = {
  args: {
    labelName: 'more',
    iconName: 'more',
    options: [
      {
        label: 'Option1',
        value: 'opt1',
        icon: 'success',
      },
      {
        label: 'Option2',
        value: 'opt2',
        icon: 'success',
      },
    ],
  },
};

// Story for MenuOption with disabled hover effect
export const MenuOptionWithDisabledHoverEffect: Story = {
  render: () => {
    const options = [
      {
        label: 'StepGroup',
        icon: 'success',
        value: [],
        disable: true,
      },
      {
        label: 'Script',
        value: ['SCR101', 'SCR102'],
        icon: 'success',
      },
    ];
    return (
      <MenuOption
        iconName="more"
        tooltipTitle="more options"
        tooltipPlacement="top"
        dropdownPlacement="right"
        options={options}
      />
    );
  },
};

// Story for MenuOption with tooltip
export const MenuOptionWithToolTip: Story = {
  args: {
    labelName: 'ImpactList',
    iconName: 'success',
    tooltipTitle: 'More Info',
    tooltipPlacement: 'bottom',
    options: [
      {
        label: 'Option1',
        value: 'opt1',
        icon: 'success',
      },
      {
        label: 'Option2',
        value: 'opt2',
        icon: 'success',
      },
    ],
  },
};

// Story for MenuOption with 'top' placement
export const MenuOptionPlacementTop: Story = {
  args: {
    iconName: 'more',
    labelName: 'Top Placement',
    dropdownPlacement: 'top',
    options: [
      {
        label: 'Option1',
        value: 'opt1',
        icon: 'success',
      },
      {
        label: 'Option2',
        value: 'opt2',
        icon: 'success',
      },
    ],
  },
};

// Story for MenuOption with 'down' placement
export const MenuOptionPlacementDown: Story = {
  args: {
    iconName: 'more',
    labelName: ' Placement',
    dropdownPlacement: 'down',
    options: [
      {
        label: 'Option1',
        value: 'opt1',
        icon: 'success',
      },
      {
        label: 'Option2',
        value: 'opt2',
        icon: 'success',
      },
    ],
  },
};

// Story for MenuOption with 'left' placement
export const MenuOptionPlacementLeft: Story = {
  args: {
    iconName: 'more',
    labelName: 'Left Placement',
    dropdownPlacement: 'left',
    options: [
      {
        label: 'Option1',
        value: 'opt1',
        icon: 'delete',
      },
      {
        label: 'Option2',
        value: 'opt2',
        icon: 'success',
      },
    ],
  },
};

// Story for MenuOption with 'right' placement
export const MenuOptionPlacementRight: Story = {
  args: {
    iconName: 'more',
    dropdownPlacement: 'right',
    options: [
      {
        label: 'Option1',
        value: 'opt1',
        icon: 'success',
      },
      {
        label: 'Option2',
        value: 'opt2',
        icon: 'success',
      },
    ],
  },
};

export default meta;

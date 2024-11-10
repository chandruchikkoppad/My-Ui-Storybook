import { Meta, StoryObj } from '@storybook/react';
import AddButton from './AddButton';
import { AddResourceButtonProps } from './type';

const meta: Meta<typeof AddButton> = {
  title: 'Components/AddResourceButton',
  component: AddButton,
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<typeof AddButton>;

export const Default: Story = {
  args: {
    directionalArrow: [
      {
        direction: 'right',
        menuOptions: [
          {
            label: 'Sub Module',
            value: 'sub_module',
            icon: 'plus',
            disable: false,
          },
        ],
      },
    ],
  } as AddResourceButtonProps,
};

export const TwoArrowsButtons: Story = {
  args: {
    directionalArrow: [
      {
        direction: 'top',
        menuOptions: [
          {
            label: 'Add Module',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
      {
        direction: 'right',
        menuOptions: [
          {
            label: 'Add Module',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
    ],
  } as AddResourceButtonProps,
};

export const ThreeArrowsButton: Story = {
  args: {
    directionalArrow: [
      {
        direction: 'top',
        menuOptions: [
          {
            label: 'Module',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
      {
        direction: 'right',
        menuOptions: [
          {
            label: 'Sub Module',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
          {
            label: 'Automation Script',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
          {
            label: 'Manual Test Case',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
          {
            label: 'Pre / Post Condition',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
          {
            label: 'Authorization',
            value: 'add_module',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
      {
        direction: 'down',
        menuOptions: [
          {
            label: 'Sub Module',
            value: 'sub_module',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
    ],
  } as AddResourceButtonProps,
};

export default meta;

import { Meta, StoryObj } from '@storybook/react';
import AddResourceButton from './AddResourceButton';
import { AddResourceButtonProps } from './type';
import { ReactNode } from 'react';

const meta: Meta<typeof AddResourceButton> = {
  title: 'Components/AddResourceButton',
  component: AddResourceButton,
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<typeof AddResourceButton>;

export const Default: Story = {
  args: {
    directionalArrow: [
      {
        direction: 'right',
        menuOptions: [
          {
            label: 'Sub Module',
            value: 'sub_module_sibling',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
    ],
    onMenuOptionClick: (option: { label: string | ReactNode; value: any }) => {
      alert(`Option clicked: ${option.label}, Value: ${option.value}`);
    },
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
            value: 'add_module_top',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
      {
        direction: 'right',
        menuOptions: [
          {
            label: 'Add Sub Module',
            value: 'add_sub_module_sibling',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
    ],
    onMenuOptionClick: (option: { label: string | ReactNode; value: any }) => {
      alert(`Option clicked: ${option.label}, Value: ${option.value}`);
    },
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
            value: 'add_module_top',
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
            value: 'add_module_sibling',
            icon: 'module_icon',
            disable: false,
          },
          {
            label: 'Automation Script',
            value: 'add_Automation_script_sibling',
            icon: 'automation_testcase',
            disable: false,
          },
          {
            label: 'Manual Test Case',
            value: 'add_manual_test_case_sibling',
            icon: 'manual_testcase',
            disable: false,
          },
          {
            label: 'Pre / Post Condition',
            value: 'add_pre_post_condition_sibling',
            icon: 'pre_post_condition',
            disable: false,
          },
          {
            label: 'Authorization',
            value: 'add_authorization_sibling',
            icon: 'authorization_icon',
            disable: false,
          },
          {
            label: 'Data Provider',
            value: 'data_provider_sibling',
            icon: 'data_provider',
            disable: false,
          },
        ],
      },
      {
        direction: 'down',
        menuOptions: [
          {
            label: 'Sub Module',
            value: 'sub_module_down',
            icon: 'module_icon',
            disable: false,
          },
        ],
      },
    ],
    onMenuOptionClick: (option: { label: string | ReactNode; value: any }) => {
      alert(`Option clicked: ${option.label}, Value: ${option.value}`);
    },
  } as AddResourceButtonProps,
};

export default meta;

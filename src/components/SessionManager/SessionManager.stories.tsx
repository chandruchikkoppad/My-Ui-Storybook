import { Meta, StoryObj } from '@storybook/react';
import SessionManager from './SessionManager';

const meta: Meta<typeof SessionManager> = {
  title: 'Components/SessionManager',
  component: SessionManager,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isRotate: {
      control: 'boolean',
      description: 'Determines if the icons are displayed vertically',
    },
    tooltip: {
      control: {
        type: 'object',
      },
      description: 'Tooltip text for each icon (keyed by icon name)',
    },
    modal: {
      control: {
        type: 'object',
      },
      description: 'Array of icon names that should show modals',
    },
    icons: {
      control: {
        type: 'object',
      },
      description: 'Array of icon names to display',
      defaultValue: [
        'app_actions_icon',
        'screenshot_icon',
        'video_record_icon',
        'test_gallary_icon',
        'session_setting_icon',
      ],
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when an icon is clicked',
    },
  },
};

type Story = StoryObj<typeof SessionManager>;

const defaultArgs = {
  isRotate: false,
  modal: [],
  tooltip: {
    app_actions_icon: 'Perform app action',
    screenshot_icon: 'Take a screenshot',
    video_record_icon: 'Start recording',
    test_gallary_icon: 'View gallery',
    session_setting_icon: 'Open session settings',
  },
  icons: [
    'app_actions_icon',
    'screenshot_icon',
    'video_record_icon',
    'test_gallary_icon',
    'session_setting_icon',
  ],
};

export default meta;

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Vertical: Story = {
  args: {
    ...defaultArgs,
    isRotate: true,
    icons: [
      'screenshot_icon',
      'video_record_icon',
      'test_gallary_icon',
      'resolution_icon',
      'session_setting_icon',
    ],
    tooltip: {
      screenshot_icon: 'Take a vertical screenshot',
      video_record_icon: 'Vertical record',
      test_gallary_icon: 'Gallery view',
      resolution_icon: 'Change resolution',
      session_setting_icon: 'Session settings',
    },
  },
};

export const ControlsWithModals: Story = {
  args: {
    ...defaultArgs,
    modal: ['app_actions_icon', 'session_setting_icon'],
  },
};

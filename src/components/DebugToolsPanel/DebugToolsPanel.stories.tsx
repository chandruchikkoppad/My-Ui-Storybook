import { Meta, StoryObj } from '@storybook/react';
import DebugToolsPanel from './DebugToolsPanel';
import Icon from '../Icon';

const meta: Meta<typeof DebugToolsPanel> = {
  title: 'Components/DebugToolsPanel',
  component: DebugToolsPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

type Story = StoryObj<typeof DebugToolsPanel>;

const defaultArgs = {
  buttons: ['ADB Shell', 'Logcat'],
  panelContentMap: {
    'ADB Shell': <div>Shell commands go here </div>,
    Logcat: <div>Logcat output </div>,
  },
  headerLeadingIconMap: {
    'ADB Shell': 'ADB_Shell',
  },
  headerIconsMap: {},

  panelheight: '100%',
  panelwidth: '485px',
};

export default meta;

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

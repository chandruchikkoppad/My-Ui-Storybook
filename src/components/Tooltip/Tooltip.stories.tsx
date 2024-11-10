import { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import Icon from '../Icon';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    placement: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
  },
};
type Story = StoryObj<typeof Tooltip>;
export const Default: Story = {
  args: {
    title: 'Default',
    placement: 'bottom',
    children: 'Hover on me to check tooltip',
  },
};

export const Controlled: Story = {
  args: {
    title: 'Tooltip',
    disabled: true,
    children: 'Hover on me to check tooltip',
    placement: 'bottom',
  },
  render: (args) => {
    return <Tooltip {...args}>{args.children}</Tooltip>;
  },
};

export const Top: Story = {
  args: {
    title: 'Top',
    placement: 'top',
    children: 'Hover on me to check top',
  },
};

export const Left: Story = {
  args: {
    title: 'Left',
    placement: 'left',
    children: 'Hover on me to check left',
  },
};
export const Right: Story = {
  args: {
    title: 'Right',
    placement: 'right',
    children: 'Hover on me to check right',
  },
};
export const TopStart: Story = {
  args: {
    title: 'Top Start',
    placement: 'top-start',
    children: 'Hover on me to check top start',
  },
};
export const TopEnd: Story = {
  args: {
    title: 'Top End',
    placement: 'top-end',
    children: 'Hover on me to check top end',
  },
};
export const BottomStart: Story = {
  args: {
    title: 'Bottom Start',
    placement: 'bottom-start',
    children: 'Hover on me to check bottom start',
  },
};
export const BottomEnd: Story = {
  args: {
    title: 'Bottom End',
    placement: 'bottom-end',
    children: 'Hover on me to check bottom end',
  },
};
export const TooltipWithIcon: Story = {
  args: {
    title: <Icon name="logo" />,
    placement: 'bottom',
    children: 'Hover on me to check jsx',
  },
};

export default meta;

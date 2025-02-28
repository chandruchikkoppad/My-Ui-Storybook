import { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: 'small',
    iconName: 'accordion_header_icon',
  },
};

export const Medium: Story = {
  args: {
    variant: 'medium',
    iconName: 'accordion_header_icon',
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    iconName: 'accordion_header_icon',
  },
};

export const CustomAvatarSize: Story = {
  args: {
    customAvatarSize: 30,
    iconName: 'accordion_header_icon',
  },
};

export const CustomIconSize: Story = {
  args: {
    customIconSize: 30,
    customAvatarSize: 40,
    iconName: 'accordion_header_icon',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'AB',
    customAvatarSize: 40,
    labelFontSize: '16px',
    backgroundColor: '#E0E0E0',
    iconColor: '#333',
  },
};

export const LabelWithCustomSize: Story = {
  args: {
    label: 'XY',
    customAvatarSize: 50,
    labelFontSize: '20px',
    backgroundColor: '#F5A623',
    iconColor: '#FFF',
  },
};

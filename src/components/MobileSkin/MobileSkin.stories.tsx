import type { Meta, StoryObj } from '@storybook/react';
import MobileSkin from './MobileSkin';
import React from 'react';

const meta: Meta<typeof MobileSkin> = {
  title: 'Components/MobileSkin',
  component: MobileSkin,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const navBarIcons = [
  {
    title: 'Forward',
    name: 'right_arrow_icon',
    onClick: () => {},
    height: 16,
    width: 16,
  },
  {
    title: 'Backward',
    name: 'left_arrow_icon',
    onClick: () => {},
    height: 16,
    width: 16,
  },
  {
    title: 'Refresh',
    name: 'refresh_icon',
    onClick: () => {},
    height: 16,
    width: 16,
  },
  {
    title: 'Capture',
    name: 'minimize_script',
    onClick: () => {},
    height: 16,
    width: 16,
  },
  {
    title: 'Rotate',
    name: 'replace_icon',
    onClick: () => {},
    height: 16,
    width: 16,
  },
];
const randomImage: string =
  'https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

type Story = StoryObj<typeof MobileSkin>;

const defaultArgs = {
  navBarIcons: navBarIcons,
  mobileWidth: 220,
  mobileHeight: 448,
  children: <p>No Data Found</p>,
};

export const PortraitView: Story = {
  args: {
    ...defaultArgs,
    orientation: 'portrait',
  },
};

export const LandscapeView: Story = {
  args: {
    ...defaultArgs,
    orientation: 'landscape',
  },
};

export const PortraitViewWithNavbar: Story = {
  args: {
    ...defaultArgs,
    orientation: 'portrait',
    UtilityBar: true,
    navBarIcons: navBarIcons,
  },
};

export const LandscapeViewWithNavbar: Story = {
  args: {
    ...defaultArgs,
    orientation: 'landscape',
    UtilityBar: true,
    navBarIcons: navBarIcons,
  },
};
export default meta;

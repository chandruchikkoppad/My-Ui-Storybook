import React from 'react';
import Icon from '../Icon';
import LineLoader from './LineLoader';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/LineLoader',
  component: LineLoader,
  argTypes: {
    logo: { control: false },
    overlay: { control: { type: 'boolean' } },
  },
} as Meta<typeof LineLoader>;

const Template: StoryFn<typeof LineLoader> = (args) => <LineLoader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLogoOverlay = Template.bind({});
WithLogoOverlay.args = {
  logo: () => <Icon height={100} width={100} name="fire_flink_loader_logo" />,
  overlay: true,
};

export const WithoutLogoOverlay = Template.bind({});
WithoutLogoOverlay.args = {
  overlay: true,
};

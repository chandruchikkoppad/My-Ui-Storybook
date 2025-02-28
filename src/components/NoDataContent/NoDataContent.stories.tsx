import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NoDataContent from './NoDataContent';
import { NoDataFoundProps } from './type';

export default {
  title: 'Components/NoDataContent',
  component: NoDataContent,
  argTypes: {
    iconName: { control: 'text' },
    iconWidth: { control: 'number' },
    iconHeight: { control: 'number' },
    text: { control: 'text' },
    textFontSize: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<NoDataFoundProps> = (args) => (
  <NoDataContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  iconName: 'no_license_found',
  iconWidth: 120,
  iconHeight: 115,
  text: 'No Results Found',
  textFontSize: '24px',
};

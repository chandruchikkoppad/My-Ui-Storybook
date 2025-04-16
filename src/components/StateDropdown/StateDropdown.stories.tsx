import type { Meta, StoryObj } from '@storybook/react';
import StateDropdown from './StateDropdown';
import React from 'react';
import { Option } from '../Select/types';

const meta: Meta<typeof StateDropdown> = {
  title: 'Components/StateDropdown',
  component: StateDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StateDropdown>;

export const Disable: Story = {
  args: {
    value: 'New',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: true,
    isApprovePage: false,
    disabled: true,
    showBorder: false,
  },
};

export const Review: Story = {
  args: {
    value: 'Review',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: true,
    isApprovePage: true,
    disabled: false,
    showBorder: false,
  },
};

export const Reject: Story = {
  args: {
    value: 'Rejected',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: false,
    isApprovePage: false,
    disabled: false,
    showBorder: false,
  },
};

export const Approved: Story = {
  args: {
    value: 'Approved',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: false,
    isApprovePage: false,
    disabled: false,
    showBorder: false,
  },
};

export const NewState: Story = {
  render: () => {
    const value = 'New';

    const handleDropdownOptionsClick = (_option: Option) => {
      // Operations to be performed on click of dropdown options
    };

    const handleStateValueClick = () => {};

    return (
      <StateDropdown
        value={value}
        isReviewer={false}
        isApprovePage={false}
        handleStateValueClick={handleStateValueClick}
        handleDropdownOptionsClick={handleDropdownOptionsClick}
        disabled={false}
        isOnlyReviewer={false}
        showBorder={false}
      />
    );
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/react';
import StateDropdown from './StateDropdown';

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
    nodeObj: { label: 'New', value: 'New' },
    isReviewer: true,
    isApprovePage: false,
    disabled: true,
    userHasOnlyViewAccess: true,
  },
};

export const Review: Story = {
  args: {
    value: 'Review',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    nodeObj: { label: 'Review', value: 'Review' },
    isReviewer: true,
    isApprovePage: true,
    disabled: false,
    userHasOnlyViewAccess: false,
  },
};

export const Reject: Story = {
  args: {
    value: 'Rejected',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    nodeObj: { label: 'Rejected', value: 'Rejected' },
    isReviewer: false,
    isApprovePage: false,
    disabled: false,
    userHasOnlyViewAccess: false,
  },
};

export const Approved: Story = {
  args: {
    value: 'Approved',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    nodeObj: { label: 'Approved', value: 'Approved' },
    isReviewer: false,
    isApprovePage: false,
    disabled: false,
    userHasOnlyViewAccess: true,
  },
};

export const NewState: Story = {
  render: () => {
    const value = 'New';
    const state = {
      label: 'New',
      value: 'New',
    };

    const handleDropdownOptionsClick = () => {};

    const handleStateValueClick = () => {};

    return (
      <StateDropdown
        value={value}
        nodeObj={state}
        isReviewer={false}
        isApprovePage={false}
        handleStateValueClick={handleStateValueClick}
        handleDropdownOptionsClick={handleDropdownOptionsClick}
        disabled={false}
        isOnlyReviewer={false}
        userHasOnlyViewAccess={false}
      />
    );
  },
};

export default meta;

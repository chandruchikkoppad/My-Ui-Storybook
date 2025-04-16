import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';
import { useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Drawer>;
const defaultArgs = {
  isOpen: true,
  title: 'Drawer Title',
  showEditButton: false,
  showTransition: true,
  _isExpanded: false,
  showHeader: true,
  onClose: () => {},
  primaryButtonProps: {
    label: 'Create',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
  },
  secondaryButtonProps: {
    label: 'Cancel',
    variant: 'secondary',
    disabled: false,
    onClick: () => {},
  },
  leftPrimaryButtonProps: {
    label: 'Next',
    variant: 'primary',
    disabled: false,
    onClick: () => {},
  },
  leftSecondaryButtonProps: {
    label: 'Previuos',
    variant: 'secondary',
    disabled: false,
    onClick: () => {},
  },
  onEdit: () => {},
  overlay: false,
  isFooterRequired: true,
  footerContent: null,
  onCloseIconClick: () => alert('Close icon clicked!'),
};
export const Default: Story = {
  args: {
    ...defaultArgs,
    size: 'medium',
    showHeader: true,
    isScrollBar: false,
  },
};
export const WithoutHeader: Story = {
  args: {
    ...defaultArgs,
    showHeader: false,
    size: 'medium',
  },
  parameters: {
    docs: { disable: true },
  },
};
export const WithCustomHeader: Story = {
  args: {
    ...defaultArgs,
    customHeader: (
      <div>
        <h3>My Custom Header</h3>
      </div>
    ),
  },
  parameters: {
    docs: { disable: true },
  },
};
export const WithCustomFooter: Story = {
  args: {
    ...defaultArgs,
    customFooter: (
      <div>
        <h3>My Custom Footer</h3>
      </div>
    ),
  },
  parameters: {
    docs: { disable: true },
  },
};
export const WithTertiaryButtons: Story = {
  args: {
    ...defaultArgs,
    leftTertiaryButtonProps: {
      label: 'Help',
      onClick: () => {},
    },
    rightTertiaryButtonProps: {
      label: 'More Info',
      onClick: () => {},
    },
  },
  parameters: {
    docs: { disable: true },
  },
};
export const WithCustomZIndex: Story = {
  args: {
    ...defaultArgs,
    zIndex: 1050,
    _isExpanded: true,
  },
  parameters: {
    docs: { disable: true },
  },
};
export const Controlled: Story = {
  render: () => {
    const [showXLDrawer, setShowXLDrawer] = useState(false);
    const [showLargeDrawer, setShowLargeDrawer] = useState(false);
    const [showMediumDrawer, setShowMediumDrawer] = useState(false);
    const [showSmallDrawer, setShowSmallDrawer] = useState(false);

    return (
      <>
        <Button
          onClick={() => setShowXLDrawer(true)}
          label="Show X-Large Drawer"
          variant="primary"
        />
        {showXLDrawer && (
          <Drawer
            {...defaultArgs}
            isOpen={showXLDrawer}
            onClose={() => setShowXLDrawer(false)}
            isFooterRequired
            _isExpanded={false}
            size="x-large"
            overlay
            onCloseIconClick={() => setShowXLDrawer(false)}
            isClickOutside
          >
            <span>Drawer Body XL</span>
            <Button
              onClick={() => setShowLargeDrawer(true)}
              label="Show Large Drawer"
              variant="primary"
            />
          </Drawer>
        )}

        {showLargeDrawer && (
          <Drawer
            {...defaultArgs}
            isOpen={showLargeDrawer}
            onClose={() => setShowLargeDrawer(false)}
            isFooterRequired
            _isExpanded={false}
            size="large"
            overlay
            onCloseIconClick={() => setShowLargeDrawer(false)}
            isBackButtonVisible
            onBackButtonClick={() => {
              setShowLargeDrawer(false);
            }}
          >
            <span>Drawer Body Large</span>
            <Button
              onClick={() => setShowMediumDrawer(true)}
              label="Show Medium Drawer"
              variant="primary"
            />
          </Drawer>
        )}

        {showMediumDrawer && (
          <Drawer
            {...defaultArgs}
            isOpen={showMediumDrawer}
            onClose={() => setShowMediumDrawer(false)}
            isFooterRequired
            _isExpanded={false}
            size="medium"
            overlay
            onCloseIconClick={() => setShowMediumDrawer(false)}
          >
            <span>Drawer Body Medium</span>
            <Button
              onClick={() => setShowSmallDrawer(true)}
              label="Show Small Drawer"
              variant="primary"
            />
          </Drawer>
        )}

        {showSmallDrawer && (
          <Drawer
            {...defaultArgs}
            isOpen={showSmallDrawer}
            onClose={() => setShowSmallDrawer(false)}
            isFooterRequired
            _isExpanded={false}
            size="small"
            onCloseIconClick={() => setShowSmallDrawer(false)}
            overlay
          >
            <span>Drawer Body Small</span>
          </Drawer>
        )}
      </>
    );
  },
};

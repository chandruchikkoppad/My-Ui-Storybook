import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';
import { useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Search from '../Search/Search';
import EditLabel from '../EditLabel/EditLabel';
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
let optionsList = [
  { label: 'option 1', value: 'option 1' },
  { label: 'option 2', value: 'option 2' },
  { label: 'option 3', value: 'option 3' },
  { label: 'option 4', value: 'option 4' },
];
let selectedOption = { label: 'option 2', value: 'option 2' };

export const EnterFunctionality: Story = {
  render: () => {
    const [showXLDrawer, setShowXLDrawer] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isAISearchActive, setIsAISearchActive] = useState(true);

    const handleSearch = (value: string) => {
      setSearchValue(value);
    };

    const handleClose = () => {
      setIsExpand(false);
      setSearchValue('');
    };
    const [text, setText] = useState('script 123');
    const handleOnConfirm = (text, currentSelectedOption) => {
      setText(text);
      return { text, currentSelectedOption };
    };
    const handleCustomError = (inputValue: string) => {
      if (!inputValue) {
        return 'Text is required';
      }
      if (inputValue.length < 3) {
        return 'Please enter at least 3 characters.';
      }
      return '';
    };
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
            size="small"
            overlay
            onCloseIconClick={() => setShowXLDrawer(false)}
            isClickOutside
          >
            <span>Drawer Body XL</span>
            <Search
              placeholder={
                isAISearchActive ? 'Ask Me Anything' : 'Search here...'
              }
              isExpand={isExpand}
              value={searchValue}
              onSearch={handleSearch}
              onExpand={(expand) => setIsExpand(expand)}
              onClose={handleClose}
              disabled={false}
              width={100}
            />

            <EditLabel
              withDropdown={true}
              value={text}
              optionsList={optionsList}
              selectedOption={selectedOption}
              onConfirm={handleOnConfirm}
              inputFieldWidth={100}
              selectFieldWidth={100}
              tooltip={{
                tooltipTitle: 'text',
                tooltipPlacement: 'bottom',
              }}
              required
              handleCustomError={handleCustomError}
              onClick={() => {
                console.log('single click');
              }}
              handleTriggerDoubleClick={() =>
                console.log('Double-click triggered!')
              }
            />
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Drawer>
        )}
      </>
    );
  },
};

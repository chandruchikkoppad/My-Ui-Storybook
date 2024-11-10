import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';
import { useState } from 'react';
import Button from '../Button';

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
  _isExpanded: false,
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
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    size: 'medium',
  },
};

export const Controlled: Story = {
  render: () => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <div>
          <Button
            onClick={() => setShowModal(true)}
            label="show modal"
            variant="primary"
            disabled={false}
          />
        </div>
        <Drawer
          {...defaultArgs}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          isFooterRequired={true}
          _isExpanded={false}
          size="medium"
        >
          <span>Drawer body</span>
        </Drawer>
      </>
    );
  },
};

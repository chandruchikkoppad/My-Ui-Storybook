import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PopUpModal from './PopUpModal';
import Button from '../Button';
import Typography from '../Typography';

const meta: Meta<typeof PopUpModal> = {
  title: 'Components/PopUpModal',
  component: PopUpModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof PopUpModal>;

const defaultArgs = {
    iconName:"license_warning",
    titleMessage:"Warning!",
    subTitleMessage:"Unsaved Changes.",
    modalMessage:"Your web service data will be lost. Are you sure you want to exit?",
    firstButtonLabel:"Cancel",
    secondButtonLabel:"Continue",
    buttonVariant:"warning",
    border:'1px solid var(--warning-modal-border-color)',
    colorForTitleMessage: 'var(--status-button-bg-warning)',
    popupWidth:'420',
    footerContent:<Typography children='How do you want to proceed?' fontSize={16}/>
}

export const DefaultModal: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Closed'),
    onContinue: () => alert('Continued'),
    iconName: 'license_warning',
    titleMessage: 'Warning!',
    subTitleMessage: 'Unsaved Changes.',
    popupWidth: "420",
    footerContent:<Typography children='How do you want to proceed?' fontSize={16}/>,
  },
};

export const ControlledPopUp: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleContinue = () => {
      alert('Continued!');
      setIsOpen(false);
    };
    return (
      <>
        <Button variant="warning" onClick={() => setIsOpen(true)} label='Open PopUp' />
        <PopUpModal
          {...defaultArgs}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onContinue={handleContinue}
          footerContent={<Typography children='How do you want to proceed?' fontSize={16}/>}
        />
      </>
    );
  },
};

export default meta;

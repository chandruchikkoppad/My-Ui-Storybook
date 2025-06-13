import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button';
import { useKeyboardActions } from '../../utils/keyBoardActionUtil/UseKeyboardActions';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Modal>;

export const DefaultModalStory: Story = {
  args: {
    isOpen: true,
    contentLabel: 'modal',
    ariaHideApp: true,
    isHeaderDisplayed: true,
    headerContent: <h2>title</h2>,
    children: <h2>Hello</h2>,
    isFooterDisplayed: true,
    footerContent: <Button variant="primary" label="continue" />,
    customWidth: '660px',
    customHeight: 'auto',
    border: '1px solid #E79B0866',
  },
};

export const Controlled: Story = {
  render: () => {
    const [openModal, setModal] = useState(false);
    useKeyboardActions([
      {
        key: 'Enter',
        action: () => alert('Enter key was pressed.'),
      },
    ]);
    return (
      <>
        <Button
          variant="primary"
          onClick={() => {
            setModal(true);
          }}
        >
          Show Modal
        </Button>
        {openModal && (
          <Modal
            overlayClassName="custom-overlay"
            isOpen={openModal}
            onClose={() => {
              setModal(false);
            }}
            headerContent={<div>title</div>}
            isHeaderDisplayed={true}
            children={<div>Hello</div>}
            ariaHideApp={true}
            isFooterDisplayed={true}
            footerContent={<Button variant="primary" label="continue" />}
            customWidth="660px"
            customHeight="auto"
            border="1px solid var(--warning-modal-border-color)"
            style={{ padding: '0px' }}
          />
        )}
      </>
    );
  },
};

export default meta;

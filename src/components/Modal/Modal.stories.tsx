import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useState } from 'react';
import Button from '../Button';

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
  },
};

export const Controlled: Story = {
  render: () => {
    const [openModal, setModal] = useState(false);
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
          />
        )}
      </>
    );
  },
};

export default meta;

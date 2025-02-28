import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import OverviewModal from './overviewModal';
import Button from '../Button/Button';
import Icon from '../Icon';
import './overviewmodal.scss';
import { OverviewModalProps } from './types';

const meta: Meta<typeof OverviewModal> = {
  title: 'Components/OverviewModal',
  component: OverviewModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    width: '800px',
    top: '0',
    height: '400px',
    zIndex: 999,
    isOpen: false,
    showheader: true,
    header: <></>,
    children: (
      <>
        <h2>Default Modal Content</h2>
      </>
    ),
    icons: null,
    downloadFileIcon: false,
    overlay: true,
  },
  argTypes: {
    isOpen: { control: 'boolean', description: 'Toggle modal visibility' },
    width: { control: 'text', description: 'Custom width for the modal' },
    top: { control: 'text', description: 'Custom maximized top for the modal' },
    height: { control: 'text', description: 'Custom height for the modal' },
    header: { control: 'text', description: 'Header content for the modal' },
    children: { control: 'text', description: 'Body content for the modal' },
    downloadFileIcon: {
      control: 'boolean',
      description: 'Displays the download file icon',
    },
  },
};

type Story = StoryObj<typeof OverviewModal>;

export const Default: Story = {
  render: (args: OverviewModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [isMaximized, setIsMaximized] = useState(args.isMaximized);

    React.useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);
    const toggleMaximize = () => setIsMaximized(!isMaximized);

    return (
      <div>
        <Button label={'Open Modal'} variant={'primary'} onClick={openModal} />
        <OverviewModal
          {...args}
          isOpen={isOpen}
          isMaximized={isMaximized}
          onClose={closeModal}
          onMaximizeToggle={toggleMaximize}
          icons={
            <>
              <Icon
                width={16}
                height={16}
                onClick={toggleMaximize}
                name={isMaximized ? 'maximize_script' : 'minimize_script'}
              />
              <Icon width={16} height={16} onClick={closeModal} name="close" />
            </>
          }
        />
      </div>
    );
  },
};

export default meta;

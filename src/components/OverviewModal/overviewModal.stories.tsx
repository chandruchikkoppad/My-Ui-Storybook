import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
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
    showHeader: true,
    header: <></>,
    children: (
      <>
<img src='data:image/jpeg;base64,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'/>    </>
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

    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    const openModal = () => setIsOpen(true);
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

export const MultipleScreen: Story = {
  render: (args: OverviewModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [isMaximized, setIsMaximized] = useState(args.isMaximized);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    useEffect(() => {
      if (selectedVideo) {
        console.info('Selected Video from Story:', selectedVideo);
      }
    }, [selectedVideo]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const toggleMaximize = () => setIsMaximized(!isMaximized);

    const multiData = [
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        alt: 'Mountain',
        name: 'Machine Name - Run 1 - Script Name',
        icon: 'windows',
        time: '20:12',
        scripts: '4/10',
      },
      {
        src: 'https://www.w3schools.com/html/movie.mp4',
        alt: 'Dog',
        name: 'Windows 1',
        icon: 'windows',
        time: '20:12',
        scripts: '4/10',
      },
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        alt: 'Beach',
        name: 'Windows 2',
        icon: 'windows',
        time: '20:12',
        scripts: '4/10',
      },
      {
        src: 'https://www.w3schools.com/html/movie.mp4',
        alt: 'Forest',
        name: 'Windows 3',
        icon: 'windows',
        time: '20:12',
        scripts: '4/10',
      },
      {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        alt: 'City',
        name: 'Windows 4',
        icon: 'windows',
        time: '20:12',
        scripts: '4/10',
      },
    ];

    return (
      <div>
        <Button label={'Open Modal'} variant={'primary'} onClick={openModal} />
        <OverviewModal
          {...args}
          isOpen={isOpen}
          isMaximized={isMaximized}
          onClose={closeModal}
          onMaximizeToggle={toggleMaximize}
          multiData={multiData}
          setSelectedVideo={setSelectedVideo}
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

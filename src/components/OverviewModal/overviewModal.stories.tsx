import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import OverviewModal from './overviewModal';
import Button from '../Button/Button';
import Icon from '../Icon';
import Carousel from '../Carousel/Carousel';
import { OverviewModalProps } from './types';
import Typography from '../Typography';

const meta: Meta<typeof OverviewModal> = {
  title: 'Components/OverviewModal',
  component: OverviewModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    width: '800px',
    top: '0',
    height: '400px',
    zIndex: 999,
    isOpen: false,
    isMaximized: false,
    showHeader: true,
    header: <></>,
    children: (
      <Typography color="white" fontSize={20}>
        This Is Overview Modal
      </Typography>
    ),
    downloadFileIcon: false,
    overlay: true,
  },
  argTypes: {
    isOpen: { control: 'boolean', description: 'Toggle modal visibility' },
    isMaximized: { control: 'boolean', description: 'Is maximized state' },
    width: { control: 'text', description: 'Custom width for the modal' },
    top: { control: 'text', description: 'Custom maximized top for the modal' },
    height: { control: 'text', description: 'Custom height for the modal' },
    header: { control: 'text', description: 'Header content' },
    children: { control: 'text', description: 'Body content' },
    downloadFileIcon: {
      control: 'boolean',
      description: 'Displays the download file icon',
    },
  },
};

type Story = StoryObj<typeof OverviewModal>;

const multiData = [
  {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    alt: 'Mountain',
    icon: 'windows',
    currentScripts: 1,
    totalScripts: 50,
    machineName: 'Machine 1',
    scriptName: 'Script A',
    runId: '1',
  },
  {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Dog',
    icon: 'windows',
    currentScripts: 2,
    totalScripts: 50,
    machineName: 'Machine 2',
    scriptName: 'Script B',
    runId: '2',
  },
  {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    alt: 'Beach',
    icon: 'windows',
    currentScripts: 3,
    totalScripts: 50,
    machineName: 'Machine 3',
    scriptName: 'Script C',
    runId: '3',
  },
  {
    src: 'https://www.w3schools.com/html/movie.mp4',
    alt: 'Forest',
    icon: 'windows',
    currentScripts: 4,
    totalScripts: 50,
    machineName: 'Machine 4',
    scriptName: 'Script D',
    runId: '4',
  },
  {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    alt: 'City',
    icon: 'windows',
    currentScripts: 5,
    totalScripts: 50,
    machineName: 'Machine 5',
    scriptName: 'Script E',
    runId: '5',
  },
];

export const Default: Story = {
  render: (args: OverviewModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [isMaximized, setIsMaximized] = useState(args.isMaximized);

    useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

    return (
      <>
        <Button
          label="Open Modal"
          variant="primary"
          onClick={() => setIsOpen(true)}
        />
        <OverviewModal
          {...args}
          isOpen={isOpen}
          isMaximized={isMaximized}
          onClose={() => setIsOpen(false)}
          onMaximizeToggle={() => setIsMaximized((m) => !m)}
          icons={
            <>
              <Icon
                width={16}
                height={16}
                onClick={() => setIsMaximized((m) => !m)}
                name={isMaximized ? 'minimize_script' : 'maximize_script'}
              />
              <Icon
                width={16}
                height={16}
                onClick={() => setIsOpen(false)}
                name="close"
              />
            </>
          }
          children={
            <Typography color="white" fontSize={20}>
              This Is Overview Modal
            </Typography>
          }
        />
      </>
    );
  },
};

export const MultipleScreen: Story = {
  render: (args: OverviewModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [isMaximized, setIsMaximized] = useState(args.isMaximized);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

    return (
      <>
        <Button
          label="Open Modal"
          variant="primary"
          onClick={() => setIsOpen(true)}
        />
        <OverviewModal
          {...args}
          isOpen={isOpen}
          isMaximized={isMaximized}
          onClose={() => setIsOpen(false)}
          onMaximizeToggle={() => setIsMaximized((m) => !m)}
          multiData={multiData}
          setSelectedVideo={setSelectedVideo}
          icons={
            <>
              <Icon
                width={16}
                height={16}
                onClick={() => setIsMaximized((m) => !m)}
                name={isMaximized ? 'minimize_script' : 'maximize_script'}
              />
              <Icon
                width={16}
                height={16}
                onClick={() => setIsOpen(false)}
                name="close"
              />
            </>
          }
          
        />
      </>
    );
  },
};

export const MultipleScreenWithCarousel: Story = {
  render: (args: OverviewModalProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const [isMaximized, setIsMaximized] = useState(args.isMaximized);
    const [selection, setSelection] = useState<{
      currentVideoData: (typeof multiData)[0] & { clickedAt: number };
      allVideoData: typeof multiData;
    } | null>(null);

    useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

    const closeEntireModal = () => {
      setSelection(null);
      setIsOpen(false);
    };
    const backToGrid = () => {
      setSelection(null);
    };

    return (
      <>
        <Button
          label="Open Modal"
          variant="primary"
          onClick={() => setIsOpen(true)}
        />

        <OverviewModal
          {...args}
          isOpen={isOpen}
          isMaximized={isMaximized}
          onClose={closeEntireModal}
          onMaximizeToggle={() => setIsMaximized((m) => !m)}
          multiData={selection ? [] : multiData}
          children={
            selection ? (
              <Carousel
                initialRunId={selection.currentVideoData.runId}
                items={selection.allVideoData.map((v) => ({
                  alt: v.alt,
                  icon: v.icon,
                  machineName: v.machineName,
                  runId: v.runId,
                  scriptName: v.scriptName,
                  src: v.src,
                  currentScripts: v.currentScripts,
                  totalScripts: v.totalScripts,
                  extraField: 'anything goes',
                }))}
                onCollapseClick={backToGrid}
                height="355px"
              />
            ) : null
          }
          setSelectedVideo={({ currentVideoData, allVideoData }) =>
            setSelection({
              currentVideoData: { ...currentVideoData, clickedAt: Date.now() },
              allVideoData,
            })
          }
          icons={
            <>
              <Icon
                width={16}
                height={16}
                onClick={() => setIsMaximized((m) => !m)}
                name={isMaximized ? 'minimize_script' : 'maximize_script'}
              />
              <Icon
                width={16}
                height={16}
                name="close"
                onClick={selection ? backToGrid : closeEntireModal}
              />
            </>
          }
        />
      </>
    );
  },
};

export default meta;

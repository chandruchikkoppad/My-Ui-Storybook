import React, { useState } from 'react';
import MediaViewerModal from './MediaViewerModal';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MediaViewerModal> = {
  title: 'Components/MediaViewerModal',
  component: MediaViewerModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MediaViewerModal>;

export const Video: Story = {
  render: (args) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
      <MediaViewerModal
        {...args}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
      />
    );
  },
  args: {
    isOpen: true,
    onClose: () => alert('Closed'),
    mediaType: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    headerTitle: 'Recorded Media',
    onDownload: () => alert('Download clicked'),
    onExpand: () => alert('Expand clicked'),
  },
};

export const Image: Story = {
  render: (args) => (
    <MediaViewerModal {...args} isPlaying={false} onTogglePlay={() => {}} />
  ),
  args: {
    isOpen: true,
    onClose: () => alert('Closed'),
    mediaType: 'image',
    src: 'https://picsum.photos/800/450',
    headerTitle: 'Preview Image',
    onDownload: () => alert('Download clicked'),
    onExpand: () => alert('Expand clicked'),
  },
};
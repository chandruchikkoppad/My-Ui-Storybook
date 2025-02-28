import { Meta, StoryObj } from '@storybook/react';
import MediaPreview from './MediaPreview';
import React from 'react';

const meta: Meta<typeof MediaPreview> = {
  title: 'Components/MediaPreview',
  component: MediaPreview,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MediaPreview>;

export const ImagePreview: Story = {
  args: {
    src: 'src/assets/image/Screenshot.png',
    fileName: '',
    type: 'image',
  },
};

export const VideoPreview: Story = {
  args: {
    src: 'src/assets/video/sample-video.mp4',
    fileName: 'sample-video.mp4',
    type: 'video',
  },
};

export const ImagePreviewWithModal: Story = {
  args: {
    src: 'src/assets/image/Screenshot (1).png',
    fileName: 'Screenshot (1).png',
    type: 'image',
  },
  render: (args) => <MediaPreview {...args} />,
};

export const VideoPreviewWithModal: Story = {
  args: {
    src: 'src/assets/video/movie.mp4',
    fileName: '..........',
    type: 'video',
  },
  render: (args) => <MediaPreview {...args} />,
};

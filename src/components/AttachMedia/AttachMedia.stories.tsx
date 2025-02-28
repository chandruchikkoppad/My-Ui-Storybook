import { Meta, StoryObj } from '@storybook/react';
import { AttachMediaProps } from './types';
import AttachMedia from './AttachMedia';
import React, { useState } from 'react';

const meta: Meta<typeof AttachMedia> = {
  title: 'Components/AttachMedia',
  component: AttachMedia,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AttachMediaProps>;

export const Default: Story = {
  args: {
    mediaSrc: 'src/assets/image/Screenshot (1).png',
    mediaType: 'image',
    onExpandClick: () => alert('Expand clicked'),
    onDeleteClick: (src: string) => {
      alert(`Deleted file with src: ${src}`);
      console.log(`File with src ${src} has been deleted`);
    },
    onDownloadClick: () => alert('Download clicked'),
    height: '80px',
    width: '80px',
    fileId: 'FLN123',
  },
};

export const Video: Story = {
  args: {
    mediaSrc: 'src/assets/video/movie.mp4',
    mediaType: 'video',
    onExpandClick: () => alert('Expand clicked'),
    onDeleteClick: (src: string) => {
      alert(`Deleted file with src: ${src}`);
      console.log(`File with src ${src} has been deleted`);
    },
    onDownloadClick: () => alert('Download clicked'),
    height: '80px',
    width: '80px',
    fileId: 'FLN1234',
  },
};

export const ImageAndVideo: Story = {
  render: () => {
    const [mediaList, setMediaList] = useState([
      {
        src: 'src/assets/image/Screenshot (1).png',
        type: 'image',
        fileName: 'image',
        fileId: 'FLN123',
      },
      {
        src: 'src/assets/video/movie.mp4',
        type: 'video',
        fileName: 'video',
        fileId: 'FLN1234',
      },
    ]);

    const handleDelete = (fileId: string) => {
      alert(`File with fileId: ${fileId} has been deleted`);
      console.log(`File with fileId ${fileId} has been deleted`);
      setMediaList((prevMediaList) =>
        prevMediaList.filter((file) => file.fileId !== fileId)
      );
    };

    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        {mediaList.map((file) => (
          <AttachMedia
            key={file.fileId}
            mediaSrc={file.src}
            mediaType={file.type}
            onExpandClick={() => alert('Expand clicked')}
            onDeleteClick={() => handleDelete(file.fileId)} // Pass fileId to the delete handler
            onDownloadClick={() => alert('Download clicked')}
            height="80px"
            width="80px"
            fileName={file.fileName}
            fileId={file.fileId}
          />
        ))}
      </div>
    );
  },
};

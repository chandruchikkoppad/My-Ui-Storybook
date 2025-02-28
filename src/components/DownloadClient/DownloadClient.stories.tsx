import { Meta, StoryObj } from '@storybook/react';
import DownloadClient from './DownloadClient';
import './DownloadClient.scss';

const meta: Meta<typeof DownloadClient> = {
  title: 'Components/DownloadClient',
  component: DownloadClient,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof DownloadClient>;

export const Default: Story = {
  args: {
    onClose: () => {},
    top: '50%',
    left: '50%',
    className: 'ff-download-client-stories',
    onClick: () => {},
  },
};

export default meta;

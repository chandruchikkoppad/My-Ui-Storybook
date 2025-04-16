import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AttachmentButton from './AttachmentButton';
import React from 'react';

const meta: Meta<typeof AttachmentButton> = {
  title: 'Components/AttachmentButton',
  component: AttachmentButton,
  argTypes: {
    onFilesChange: { action: 'files changed' },
    disabled: { control: 'boolean' },
    maxFileSizeMB: { control: 'number' },
    maxFiles: { control: 'number' },
    buttonLabel: { control: 'text' },
    showSelectedFiles: { control: 'boolean' },
    deleteButton: { control: 'boolean' },
    addAttachmentButton: { control: 'boolean' },
  },
};

type Story = StoryObj<typeof AttachmentButton>;

const defaultArgs = {
  disabled: false,
  maxFileSizeMB: 5,
  maxFiles: 10,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Upload Files',
    accept: ['.*'],
  },
  render: (args) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFilesChange = (files: File[], selected?: File[]) => {
      console.log(files);
      console.log(selected);
      setSelectedFiles(files);
      args.onFilesChange(files);
    };

    return (
      <AttachmentButton
        {...args}
        selectedFiles={selectedFiles}
        onFilesChange={handleFilesChange}
        selectedFileMessage='File is already selected'
      />
    );
  },
};

export const SmallFileLimit: Story = {
  args: {
    ...defaultArgs,
    label: 'Upload Files (2 MB Max)',
    maxFileSizeMB: 2,
    maxFiles: 5,
  },
  render: Default.render,
};

export const LargeFileLimit: Story = {
  args: {
    ...defaultArgs,
    label: 'Upload Large Files (20 MB Max)',
    maxFileSizeMB: 20,
    maxFiles: 5,
    types: ['image', 'video'],
  },
  render: Default.render,
};

export const DisabledUploader: Story = {
  args: {
    ...defaultArgs,
    label: 'Disabled Uploader',
    disabled: true,
  },
  render: Default.render,
};

export default meta;

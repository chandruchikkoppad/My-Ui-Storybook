import { StoryObj, Meta } from '@storybook/react';
import FileDropzone from './FileDropzone';
import Toaster from '../Toast';
import { useState } from 'react';

const meta: Meta<typeof FileDropzone> = {
  title: 'Components/FileDropzone',
  component: FileDropzone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FileDropzone>;

const defaultArgs = {
  accept: ['.png'],
  multiple: true,
  maxFiles: 5,
  maxSize: 5000000,
  maxSizeErrorMessage: 'Max file size limit of 5MB exceeded',
  invalidFileMessage: 'Invalid file format',
  fileExistMessage: 'File already exist with same name and type',
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const withMIMEValidation: Story = {
  args: {
    ...defaultArgs,
    accept: [
      'image/png',
      'image/jpeg',
      'application/x-zip-compressed',
      'application/zip',
    ],
    validateMIMEType: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [showToaster, setShowToaster] = useState<boolean>(false);

    const showMaxFilesError = () => {
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    };

    return (
      <>
        <FileDropzone
          {...defaultArgs}
          accept={[
            'image/png',
            'image/jpeg',
            'application/x-zip-compressed',
            'application/zip',
          ]}
          validateMIMEType={true}
          onMaxFilesError={showMaxFilesError}
        />
        {showToaster && (
          <Toaster
            isOpen={showToaster}
            variant="danger"
            toastTitle="Error"
            toastMessage={'Max 5 files can be uploaded'}
          />
        )}
      </>
    );
  },
};

export default meta;

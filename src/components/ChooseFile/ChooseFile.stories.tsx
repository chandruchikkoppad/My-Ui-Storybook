import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import ChooseFile from './ChooseFile';
import Drawer from '../Drawer/Drawer';
import FileDropzone from '../FileDropzone/FileDropzone';
import { RadioOption } from '../FileDropzone/types';
import { DynamicObj } from '../CreateVariable/types';
import Button from '../Button';
import ConditionalDropdown from '../ConditionalDropdown/ConditionalDropdown';

const meta: Meta<typeof ChooseFile> = {
  title: 'Components/ChooseFile',
  component: ChooseFile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ChooseFile>;

const defaultArgs = {
  disabled: false,
};

export const ChooseFileDisplay: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedRadioOption, setSelectedRadioOption] =
      useState<RadioOption>();
    const [selectedFile, setSelectedFile] = useState<File | DynamicObj | null>(
      null
    );
    const [testDataSelectedFile, setTestDataSelectedFile] = useState<
      DynamicObj | File | null
    >(null);

    const testData = [
      {
        _id: '1',
        name: 'File1.txt',
        actualPath: '/documents/File1.txt',
        searchKey: 'file1',
        parentId: 'root',
      },
      {
        _id: '2',
        name: 'File2.doc',
        actualPath: '/documents/File2.doc',
        searchKey: 'file2',
        parentId: 'root',
      },
      {
        _id: '3',
        name: 'Image1.png',
        actualPath: '/images/Image1.png',
        searchKey: 'image1',
        parentId: 'folder1',
      },
      {
        _id: '4',
        name: 'Presentation.ppt',
        actualPath: '/presentations/Presentation.ppt',
        searchKey: 'presentation',
        parentId: 'folder2',
      },
    ];

    const radioOptions: RadioOption[] = [
      { value: 'Test Data', label: 'Test Data' },
      { value: 'Local File', label: 'Local File' },
    ];

    const handleOptionChange = (option: RadioOption) => {
      setSelectedRadioOption(option);
      setShowModal(option.value === 'Test Data');
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      setSelectedFile(file || null);
    };

    const handleRemoveFile = () => setSelectedFile(null);

    const handleSaveButton = () => {
      setSelectedFile(testDataSelectedFile);
      setShowModal(false);
    };

    const handleCloseIcon = () => {
      setSelectedFile(null);
      setIsOpen(false);
    };

    const handleSaveChooseFile = () => {
      setIsOpen(false);
      
    };

    const renderFooterButtons = (onSave: () => void, onCancel: () => void) => (
      <div className="footer_basic_button">
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={onCancel}
          label="Cancel"
        />
        <Button
          type="button"
          variant="primary"
          size="small"
          onClick={onSave}
          label="Save"
        />
      </div>
    );

    useEffect(() => {
      setSelectedFile(testDataSelectedFile);
    }, [testDataSelectedFile]);

    return (
      <>
        <ChooseFile
          label={selectedFile?.name || 'Choose File'}
          variant="secondary"
          buttonWidth="308px"
          buttonHeight="32px"
          isChooseFile
          iconName={selectedFile?.name ? 'close' : 'attachment_icon'}
          onClick={() => setIsOpen(true)}
          selectedFile={selectedFile}
          handleCloseIcon={handleCloseIcon}
        />

        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          isFooterRequired={false}
          _isExpanded={false}
          size="medium"
        >
          <FileDropzone
            {...defaultArgs}
            accept={[
              'image/png',
              'image/jpeg',
              'application/x-zip-compressed',
              'application/zip',
            ]}
            validateMIMEType
            isWebServiceFileDropZone
            selectedRadioOption={selectedRadioOption}
            radioOptions={radioOptions}
            handleOptionChange={handleOptionChange}
            setSelectedFile={setSelectedFile}
            selectedFile={selectedFile}
            handleFileChange={handleFileChange}
            handleRemoveFile={handleRemoveFile}
            setShowDrawer={setShowModal}
          />
          {selectedRadioOption?.value === 'Test Data' && (
            <Drawer
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              isFooterRequired={false}
              _isExpanded={false}
              size="small"
            >
              <ConditionalDropdown
                label="Select Path Using #"
                placeholder="Enter # to search files"
                isHash
                dataFiles={testData}
                dropdownWidth="auto"
                setHashInputValue={setTestDataSelectedFile}
              />
              {renderFooterButtons(handleSaveButton, () => setShowModal(false))}
            </Drawer>
          )}
          {renderFooterButtons(handleSaveChooseFile, () => setIsOpen(false))}
        </Drawer>
      </>
    );
  },
};

export default meta;

import React, { useRef } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import FileDropzone from './FileDropzone';
import Toaster from '../Toast';
import { useState } from 'react';
import { RadioOption } from './types';
import Drawer from '../Drawer/Drawer';
import ConditionalDropdown from '../ConditionalDropdown/ConditionalDropdown';
import './FileDropzone.scss';
import { DynamicObj } from '../CreateVariable/types';
import Button from '../Button';
import Input from '../Input';
import Typography from '../Typography';
import FilePreview from './FilePreview';

const meta: Meta<typeof FileDropzone> = {
  title: 'Components/FileDropzone',
  component: FileDropzone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FileDropzone>;
const handleAlert = () => {
  alert('onUploadFile');
};

const defaultArgs = {
  accept: ['.png'],
  multiple: true,
  maxFiles: 5,
  maxSize: 5000000,
  maxSizeErrorMessage: 'Max file size limit of 5MB exceeded',
  invalidFileMessage: 'Invalid file format',
  fileExistMessage: 'File already exist with same name and type',
  width: 640,
  height: 188,
  isUploadIcon: true,
  onUploadFile: handleAlert,
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
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [rejectedFiles, setRejectedFiles] = useState([]);

    const showMaxFilesError = () => {
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    };

    const getAcceptedFiles = (files) => {
      setAcceptedFiles(files);
    };

    const getRejectedFiles = (files) => {
      setRejectedFiles(files);
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
          getAcceptedFiles={getAcceptedFiles}
          getRejectedFiles={getRejectedFiles}
          isApiResponseError
          isReplaceDisabled={false}
          isRemoveDisabled={false}
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

export const WithRadioButton: Story = {
  render: () => {
    const [showToaster, setShowToaster] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [selectedRadioOption, setSelectedRadioOption] =
      useState<RadioOption>();
    const [selectedFile, setSelectedFile] = useState<File | DynamicObj | null>(
      null
    );
    const [testDataSelectedFile, setTestDataSelectedFile] = useState<
      DynamicObj | File | null
    >(null);
    const [fileContent, setFileContent] = useState<string>('');

    const drawerArgs = {
      primaryButtonProps: {
        label: 'Create',
        variant: 'primary',
        disabled: false,
        onClick: () => {},
      },
      secondaryButtonProps: {
        label: 'Cancel',
        variant: 'secondary',
        disabled: false,
        onClick: () => {},
      },
    };

    const radioOptions: RadioOption[] = [
      { value: 'Test Data', label: 'Test Data' },
      { value: 'Local File', label: 'Local File' },
    ];
    const handleOptionChange = (option: RadioOption) => {
      setSelectedRadioOption(option);
      if (option.value === 'Test Data') {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event?.target?.files?.[0];
      const readerFileData = new FileReader();
      if (file) {
        readerFileData.readAsText(file);
        readerFileData.onload = async () => {
          const fileContent = await readerFileData.result;
          if (setFileContent) {
            setFileContent(fileContent as string);
          }
        };
        setSelectedFile(file);
      }
    };

    const handleRemoveFile = () => {
      if (fileInputRef?.current?.value) {
        fileInputRef.current.value = '';
      }
      setSelectedFile(null);
      setSelectedRadioOption(undefined);
    };

    const showMaxFilesError = () => {
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    };

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

    const handleSaveButton = () => {
      setSelectedFile(testDataSelectedFile);
      setShowModal(false);
    };

    return (
      <>
        <FileDropzone
          fileInputRef={fileInputRef}
          {...defaultArgs}
          accept={[
            'image/png',
            'image/jpeg',
            'application/x-zip-compressed',
            'application/zip',
          ]}
          validateMIMEType={true}
          onMaxFilesError={showMaxFilesError}
          isWebServiceFileDropZone
          selectedRadioOption={selectedRadioOption}
          radioOptions={radioOptions}
          handleOptionChange={handleOptionChange}
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          handleFileChange={handleFileChange}
          handleRemoveFile={handleRemoveFile}
          setShowDrawer={setShowModal}
          setFileContent={setFileContent}
          fileContent={fileContent}
        />

        {showToaster && (
          <Toaster
            isOpen={showToaster}
            variant="danger"
            toastTitle="Error"
            toastMessage={'Max 5 files can be uploaded'}
          />
        )}
        {selectedRadioOption?.value === 'Test Data' && (
          <Drawer
            {...drawerArgs}
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
            <div className="footer_basic_button">
              <Button
                type="button"
                variant="secondary"
                size="small"
                onClick={() => setShowModal(false)}
                label={'Cancel'}
              />

              <Button
                type={'button'}
                variant="primary"
                size="small"
                label={'Save'}
                onClick={handleSaveButton}
              />
            </div>
          </Drawer>
        )}
      </>
    );
  },
};

export const WithUploadOptions: Story = {
  render: () => {
    const [uploadMode, setUploadMode] = useState<'local' | 'url' | null>(null);
    const [url, setUrl] = useState<string>('');

    const handleLocalUploadClick = () => {
      setUploadMode('local');
    };

    const handleUrlUploadClick = () => {
      setUploadMode('url');
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(event.target.value);
    };

    return (
      <div className="ff-upload-options-wrapper">
        <div className="ff-upload-mode-buttons">
          <button
            className={`ff-custom-button ${
              uploadMode === 'local' ? 'ff-custom-button--active' : ''
            }`}
            onClick={handleLocalUploadClick}
          >
            <Typography fontSize={13} fontWeight={'semi-bold'}>
              Upload From Local
            </Typography>
          </button>
          <button
            className={`ff-custom-button ${
              uploadMode === 'url' ? 'ff-custom-button--active' : ''
            }`}
            onClick={handleUrlUploadClick}
          >
            <Typography fontSize={13} fontWeight={'semi-bold'}>
              Upload Via URL
            </Typography>
          </button>
        </div>

        {uploadMode === 'local' && (
          <FileDropzone
            {...defaultArgs}
            accept={['.apk']}
            validateMIMEType={false}
          />
        )}

        {uploadMode === 'url' && (
          <div className="ff-url-upload-wrapper">
            <Input
              id="app-url-input"
              name="App Url"
              label="App URL"
              type="text"
              value={url}
              onChange={handleUrlChange}
              variant="primary"
              placeholder="Enter App URL"
              className="ff-url-input"
              required
            />
          </div>
        )}
      </div>
    );
  },
};

export const WithInstallOptions: Story = {
  render: () => {
    const [uploadMode, setUploadMode] = useState<'local' | 'url' | 'app'>(
      'app'
    ); // Default to 'app' to match the image
    const [url, setUrl] = useState<string>('');
    const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

    const uploadedApps = [
      { id: '1', name: 'App One' },
      { id: '2', name: 'App Two' },
      { id: '3', name: 'App Three' },
    ];

    const handleLocalInstallClick = () => {
      setUploadMode('local');
      setSelectedAppId(null);
    };

    const handleUrlInstallClick = () => {
      setUploadMode('url');
      setSelectedAppId(null);
    };

    const handleAppUploadClick = () => {
      setUploadMode('app');
      setSelectedAppId(null);
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(event.target.value);
    };

    const handleAppClick = (appId: string) => {
      setSelectedAppId(appId);
      console.log(`Clicked on app with ID: ${appId}`);
    };

    return (
      <div className="ff-upload-options-wrapper">
        <div className="ff-upload-mode-buttons">
          <button
            className={`ff-custom-button ${
              uploadMode === 'app' ? 'ff-custom-button--active' : ''
            }`}
            onClick={handleAppUploadClick}
          >
            <Typography fontSize={13} fontWeight={'semi-bold'}>
              Uploaded Apps
            </Typography>
          </button>
          <button
            className={`ff-custom-button ${
              uploadMode === 'local' ? 'ff-custom-button--active' : ''
            }`}
            onClick={handleLocalInstallClick}
          >
            <Typography fontSize={13} fontWeight={'semi-bold'}>
              Install From Local
            </Typography>
          </button>
          <button
            className={`ff-custom-button ${
              uploadMode === 'url' ? 'ff-custom-button--active' : ''
            }`}
            onClick={handleUrlInstallClick}
          >
            <Typography fontSize={13} fontWeight={'semi-bold'}>
              Install Via URL
            </Typography>
          </button>
        </div>

        {uploadMode === 'app' && (
          <div className="ff-uploaded-apps-wrapper">
            <ul className="ff-uploaded-apps-list">
              {uploadedApps.map((app) => (
                <li
                  key={app.id}
                  className={`ff-uploaded-app-item ${
                    selectedAppId === app.id
                      ? 'ff-uploaded-app-item--selected'
                      : ''
                  }`}
                  onClick={() => handleAppClick(app.id)}
                >
                  <Typography fontSize={14}>{app.name}</Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {uploadMode === 'local' && (
          <FileDropzone
            {...defaultArgs}
            accept={['.apk']}
            validateMIMEType={false}
          />
        )}

        {uploadMode === 'url' && (
          <div className="ff-url-upload-wrapper">
            <Input
              id="app-url-input"
              name="App Url"
              label="App URL"
              type="text"
              value={url}
              onChange={handleUrlChange}
              variant="primary"
              placeholder="Enter App URL"
              className="ff-url-input"
              required
            />
          </div>
        )}
      </div>
    );
  },
};

export const FilePreviewStory: Story = {
  render: () => {
    const defaultFile = new File(
      ['Hello, this is the content of the file.'],
      'example.txt',
      {
        type: 'text/plain',
        lastModified: new Date().getTime(),
      }
    );
    const [fileData, setFileData] = useState<File | null>(defaultFile);
    return (
      <div className="ff-file-details-wrapper">
        <div className="ff-file-details">
          <FilePreview
            isRemoveDisabled
            file={fileData as File}
            onRemoveClick={() => setFileData(null)}
            onReplaceClick={(file) => setFileData(file)}
            isIndependentPreview={true}
          />
        </div>
      </div>
    );
  },
};

export default meta;

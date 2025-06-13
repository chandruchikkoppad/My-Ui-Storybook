import React, { useRef, useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import VariableSuggestionInputDropDown from './VariableSuggestionInputDropDown';
import { VariableSuggestionInputDropDownProps, dynamicObject } from './types';
import { variableList } from '../Editor/constants';
import CreateVariableSlider from '../CreateVariable/CreateVariableSlider';
import { truncateText } from './../../utils/truncateText/truncateText';

export default {
  title: 'Components/VariableSuggestionInputDropDown',
  component: VariableSuggestionInputDropDown,
  args: {
    label: 'Add Variables',
    placeholder: 'Enter text',
    variableList,
    dropdownWidth: '100%',
    dropdownHeight: '140px',
    variant: 'primary',
    zIndex: 999,
    truncateTextValue: 34,
    symbol: '@',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<VariableSuggestionInputDropDownProps>;

type Story = StoryObj<typeof VariableSuggestionInputDropDown>;

const Template: StoryFn<VariableSuggestionInputDropDownProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [openCreateVariable, setOpenCreateVariable] = useState<boolean>(false);
  const [variableName, setVariableName] = useState<string>('');
  const [variableValue, setVariableValue] = useState<string>('');
  const [selectedVariable, setSelectedVariable] = useState<dynamicObject>({
    label: 'Local Variable',
    value: 'LOCAL',
  });
  const [hideValue, setHideValue] = useState<boolean>(false);

  const testDropDown = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: any
  ) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <VariableSuggestionInputDropDown
        {...args}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement>,
          item?: dynamicObject
        ) => testDropDown(event, item)}
        value={inputValue}
        onCreateVariableClick={() => setOpenCreateVariable(true)}
        ref={inputRef}
        symbol="@"
        handleClearInput={() => setInputValue('')}
      />
      {openCreateVariable && (
        <CreateVariableSlider
          isOpen={openCreateVariable}
          onClose={() => setOpenCreateVariable(false)}
          variableName={variableName}
          variableValue={variableValue}
          hideValue={hideValue}
          handleSubmit={() => {
            alert('Variable Created');
          }}
          onHideChange={(value) => {
            setHideValue(value);
          }}
          onNameChange={(value) => {
            setVariableName(value);
          }}
          onValueChange={(value) => setVariableValue(value)}
          onVariableTypeChange={(option) => setSelectedVariable(option)}
          selectedVariableType={selectedVariable}
          variableTypesList={[
            { label: 'Step Group Parameter', value: 'PARAMETER' },
            { label: 'Step Group Variable', value: 'STEPGROUP' },
            { label: 'Local Variable', value: 'LOCAL' },
            { label: 'Global Variable', value: 'GLOBAL' },
          ]}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  onCreateVariableClick: () => alert('Create Variable clicked'),
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  inputValue: 'Initial Text with $',
  onCreateVariableClick: () => alert('Create Variable clicked'),
};

export const DropdownOnHash: Story = {
  render: () => {
    const [hashInputValue, setHashInputValue] =
      useState<dynamicObject | null>();
    const [value, setValue] = useState<string>('');
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
      {
        _id: '5',
        name: 'Spreadsheet.xlsx',
        actualPath: '/spreadsheets/Spreadsheet.xlsx',
        searchKey: 'spreadsheet',
        parentId: 'folder3',
      },
      {
        _id: '6',
        name: 'Code.js',
        actualPath: '/projects/Code.js',
        searchKey: 'code',
        parentId: 'folder4',
      },
    ];

    return (
      <>
        <VariableSuggestionInputDropDown
          label="Select Path Using #"
          placeholder="Enter # to search files"
          isHash
          zIndex={9999}
          truncateTextValue={34}
          dataFiles={testData}
          dropdownWidth="100%"
          setHashInputValue={setHashInputValue}
          hashInputValue={hashInputValue || {}}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </>
    );
  },
};

export const DropdownOnHashAndDollar: Story = {
  render: () => {
    const [hashInputValue, setHashInputValue] =
      useState<dynamicObject | null>();
    const [value, setValue] = useState<string>('');
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
      {
        _id: '5',
        name: 'Spreadsheet.xlsx',
        actualPath: '/spreadsheets/Spreadsheet.xlsx',
        searchKey: 'spreadsheet',
        parentId: 'folder3',
      },
      {
        _id: '6',
        name: 'Code.js',
        actualPath: '/projects/Code.js',
        searchKey: 'code',
        parentId: 'folder4',
      },
    ];

    const variableData = [
      {
        name: 'BrowserCapability',
        value: '---',
      },
      {
        name: 'Capability',
        value: '---',
      },
      {
        name: 'Web_HubURL',
        value: 'http://localhost:4444/wd/hub',
      },
      {
        name: 'Capability2',
        value: '---',
      },
      {
        name: 'URL',
        value: '---',
      },
    ];

    return (
      <>
        <VariableSuggestionInputDropDown
          label="Select Path Using # or variable using $"
          placeholder="Select Path Using # or variable using $"
          isHash
          zIndex={9999}
          truncateTextValue={54}
          dataFiles={testData}
          dropdownWidth="100%"
          setHashInputValue={setHashInputValue}
          hashInputValue={hashInputValue || {}}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          showAddVariableIcon
          variableList={variableData}
          handleClearInput={() => setValue('')}
        />
      </>
    );
  },
};

export const DropdownOnlyHashNoCreateVarIcon: Story = {
  render: () => {
    const [hashInputValue, setHashInputValue] =
      useState<dynamicObject | null>();
    const [value, setValue] = useState<string>('');
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
      {
        _id: '5',
        name: 'Spreadsheet.xlsx',
        actualPath: '/spreadsheets/Spreadsheet.xlsx',
        searchKey: 'spreadsheet',
        parentId: 'folder3',
      },
      {
        _id: '6',
        name: 'Code.js',
        actualPath: '/projects/Code.js',
        searchKey: 'code',
        parentId: 'folder4',
      },
    ];

    return (
      <>
        <VariableSuggestionInputDropDown
          label="Varaible Value"
          placeholder="Edit Variable value or Select Path using #"
          isHash
          isOnlyHash={true}
          zIndex={9999}
          truncateTextValue={34}
          dataFiles={testData}
          dropdownWidth="100%"
          setHashInputValue={setHashInputValue}
          hashInputValue={hashInputValue || {}}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </>
    );
  },
};

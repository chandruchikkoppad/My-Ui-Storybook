import React, { useRef, useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import ConditionalDropdown from './ConditionalDropdown';
import { ConditionalDropdownProps, dynamicObject } from './types';
import { variableList } from '../Editor/constants';
import CreateVariableSlider from '../CreateVariable/CreateVariableSlider';

export default {
  title: 'Components/ConditionalDropdown',
  component: ConditionalDropdown,
  args: {
    label: 'Add Variables',
    placeholder: 'Enter text',
    variableList,
    dropdownWidth: '138px',
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<ConditionalDropdownProps>;

type Story = StoryObj<typeof ConditionalDropdown>;

const Template: StoryFn<ConditionalDropdownProps> = (args) => {
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

  return (
    <>
      <ConditionalDropdown
        {...args}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
        value={inputValue}
        onCreateVariableClick={() => setOpenCreateVariable(true)}
        ref={inputRef}
        showAddVariableIcon
      />
      {openCreateVariable && (
        <CreateVariableSlider
          isOpen={openCreateVariable}
          onClose={() => setOpenCreateVariable(false)}
          variableName={variableName}
          value={variableValue}
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
    const [inputValue, setInputValue] = useState<string>();
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
        <ConditionalDropdown
          label="Select Path Using #"
          placeholder="Enter # to search files"
          isHash
          dataFiles={testData}
          dropdownWidth="auto"
          setHashInputValue={setHashInputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value)
          }
          value={inputValue}
        />
      </>
    );
  },
};

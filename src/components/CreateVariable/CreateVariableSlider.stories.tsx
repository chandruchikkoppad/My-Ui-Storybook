import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CreateVariableSlider from './CreateVariableSlider';
import { CreateVariableProps } from './types';
import React from 'react';

const meta: Meta<typeof CreateVariableSlider> = {
  title: 'Components/CreateVariableSlider',
  component: CreateVariableSlider,
};

export default meta;
type Story = StoryObj<typeof CreateVariableSlider>;

export const WithState: Story = {
  render: (args) => {
    const [variableName, setVariableName] = useState('');
    const [variableValue, setVariableValue] = useState('');
    const [selectedVariableType, setSelectedVariableType] = useState({
      label: 'Local Variable',
      value: 'LOCAL',
    });
    const [hideValue, setHideValue] = useState(false);
    const variableTypeList = [
      { label: 'Local Variable', value: 'LOCAL' },
      { label: 'Global Variable', value: 'GLOBAL' },
      { label: 'Project Environment Variable', value: 'PROJECT_ENVIRONMENT' },
    ];
    const handleNameChange = (value) => {
      setVariableName(value);
    };
    const handleValueChange = (value) => {
      setVariableValue(value);
    };
    const handleTypeChange = (value) => {
      setSelectedVariableType(value);
    };
    const handleSubmit = () => {
      let variable = {
        name: variableName,
        value: variableValue,
        type: selectedVariableType.value,
        hideValue,
      };
      console.log('Variable :', variable);
    };

    return (
      <CreateVariableSlider
        {...args}
        isOpen={true} // Ensures the drawer is open for interaction
        variableName={variableName}
        variableValue={variableValue}
        isHash={false}
        selectedVariableType={selectedVariableType}
        hideValue={hideValue}
        variableTypesList={variableTypeList}
        onNameChange={handleNameChange}
        onValueChange={handleValueChange}
        onVariableTypeChange={handleTypeChange}
        onHideChange={setHideValue}
        handleSubmit={handleSubmit}
      />
    );
  },
};

export const WithHash: Story = {
  render: (args) => {
    const [variableName, setVariableName] = useState('');
    const [variableValue, setVariableValue] = useState('');
    const [selectedVariableType, setSelectedVariableType] = useState({
      label: 'Local Variable',
      value: 'LOCAL',
    });
    const [hideValue, setHideValue] = useState(false);

    const variableTypeList = [
      { label: 'Local Variable', value: 'LOCAL' },
      { label: 'Global Variable', value: 'GLOBAL' },
      { label: 'Project Environment Variable', value: 'PROJECT_ENVIRONMENT' },
    ];
    const handleNameChange = (value) => {
      setVariableName(value);
    };
    const handleValueChange = (value) => {
      setVariableValue(value);
    };
    const handleTypeChange = (value) => {
      setSelectedVariableType(value);
    };
    const handleSubmit = () => {
      let variable = {
        name: variableName,
        value: variableValue,
        type: selectedVariableType.value,
        hideValue,
      };
      console.log('Variable :', variable);
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
      <CreateVariableSlider
        {...args}
        isOpen={true} // Ensures the drawer is open for interaction
        variableName={variableName}
        variableValue={variableValue}
        isHash={true} //We will get dropdown for hash
        selectedVariableType={selectedVariableType}
        hideValue={hideValue}
        variableTypesList={variableTypeList}
        onNameChange={handleNameChange}
        onValueChange={handleValueChange}
        onVariableTypeChange={handleTypeChange}
        onHideChange={setHideValue}
        handleSubmit={handleSubmit}
        dataFiles={testData}
      />
    );
  },
};
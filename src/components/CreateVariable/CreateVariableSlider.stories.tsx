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
    const [value, setValue] = useState('');
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
      setValue(value);
    };
    const handleTypeChange = (value) => {
      setSelectedVariableType(value);
    };
    const handleSubmit = () => {
      let variable = {
        name: variableName,
        value,
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
        value={value}
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

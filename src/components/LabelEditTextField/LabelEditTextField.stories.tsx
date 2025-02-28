import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LabelEditTextField from './LabelEditTextField';
import '../../assets/styles/_colors.scss';
import './LabelEditTextField.scss';

const meta: Meta<typeof LabelEditTextField> = {
  title: 'Components/LabelEditTextField',
  component: LabelEditTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof LabelEditTextField>;
export const textField: Story = {
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return inputValue;
    };
    return (
      <LabelEditTextField
        label="Add Module"
        text="Verify The Function Of Categories For" //it might be state
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
        }}
        height="22px"
        confirmAction={handleConfirmAction}
        onClick={() => {}}
        tooltip={{
          tooltipTitle: 'text',
          tooltipPlacement: 'bottom',
        }}
      />
    );
  },
};
export const textFieldWithOutLabel: Story = {
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return inputValue;
    };
    return (
      <LabelEditTextField
        text="Verify The Function Of Categories For" //it might be state
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
        }}
        width="300px"
        height="22px"
        confirmAction={handleConfirmAction}
      />
    );
  },
};
export const openTextFieldWithOutLabel: Story = {
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return inputValue;
    };
    return (
      <LabelEditTextField
        text="Verify The Function Of Categories For" //it might be state
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
        }}
        width="300px"
        height="22px"
        isOpen={true}
        confirmAction={handleConfirmAction}
      />
    );
  },
};
export const textFieldWithDropdown: Story = {
  render: () => {
    const handleConfirmAction = (inputValue: string, dropdownValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return { inputValue, dropdownValue };
    };
    return (
      <LabelEditTextField
        label="Add Module"
        text="Verify The Function Of Categories For"
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
        }}
        variant="textFieldWithDropdown"
        dropdownData={[
          { id: 1, value: 'web', label: 'Web & Mobile' },
          { id: 2, value: 'desktop', label: 'Desktop' },
        ]}
        width="300px"
        height="22px"
        confirmAction={handleConfirmAction}
      />
    );
  },
};
export const textFieldWithHighlight: Story = {
  render: () => {
    const handleConfirmAction = (inputValue: string, dropdownValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return { inputValue, dropdownValue };
    };
    return (
      <LabelEditTextField
        label="Add Module"
        text="Verify The Function Of Categories For"
        highlightText="The Function"
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
        }}
        variant="textFieldWithDropdown"
        dropdownData={[
          { id: 1, value: 'web', label: 'Web & Mobile' },
          { id: 2, value: 'desktop', label: 'Desktop' },
        ]}
        width="400px"
        height="22px"
        confirmAction={handleConfirmAction}
      />
    );
  },
};
export const openLabelEditTextField: Story = {
  render: () => {
    const [demoText, setDemoText] = useState('Verify The');
    const handleConfirmAction = (inputValue: string, dropdownValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      setDemoText(inputValue);
      console.info(
        'Confirmed input value and dropdown value:',
        inputValue,
        dropdownValue
      );
    };
    const handleInputChange = (newInputValue: string) => {
      setDemoText(newInputValue); // Update parent state
    };
    console.log('demoText: ', demoText);
    return (
      <LabelEditTextField
        label="Add Module"
        text={demoText}
        highlightText="The Function"
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
        }}
        width="400px"
        height="22px"
        confirmAction={handleConfirmAction}
        onInputChange={handleInputChange}
        isOpen={true}
        className="custom-edit-text-field"
        showText={false}
        customError="text is too long"
        customErrorCondition={demoText?.length > 10}
      />
    );
  },
};
export default meta;

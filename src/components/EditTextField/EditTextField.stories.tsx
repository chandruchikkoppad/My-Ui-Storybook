import type { Meta, StoryObj } from '@storybook/react';
import EditTextField from './EditTextField';
import '../../assets/styles/_colors.scss';
import './EditTextField.scss';
import React, { useState } from 'react';

const meta: Meta<typeof EditTextField> = {
  title: 'Components/EditTextField',
  component: EditTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof EditTextField>;

export const textFieldWithLabel: Story = {
  render: () => {
    const [customError, setCustomError] = useState<string>('');

    const handleConfirmAction = (inputValue: string) => {
      setCustomError(inputValue);
    };
    return (
      <EditTextField
        text="Verify The Function Of Categories For"
        label="Add Module"
        customError={customError} // Updated to use state
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
          color: 'var(--label-edit-confirm-icon)',
          height: 20,
          width: 20,
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
          color: 'var(--label-edit-cancel-icon)',
          height: 16,
          width: 16,
        }}
        width="300px"
        height="22px"
        confirmAction={handleConfirmAction}
        customErrorCondition={false}
      />
    );
  },
};

export const textFieldWithOutLabel: Story = {
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      console.info('Confirmed input value:', inputValue);
    };
    return (
      <EditTextField
        text="Verify The Function Of Categories For" //it might be state
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
          color: 'var(--label-edit-confirm-icon)',
          height: 20,
          width: 20,
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
          color: 'var(--label-edit-cancel-icon)',
          height: 16,
          width: 16,
        }}
        width="300px"
        height="22px"
        confirmAction={handleConfirmAction}
        customErrorCondition={false}
      />
    );
  },
};
export const openTextField: Story = {
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      console.info('Confirmed input value:', inputValue);
    };
    let demoText = 'Verify The Function Of Categories For';
    return (
      <EditTextField
        text={demoText} //it might be state
        confirmIcon={{
          name: 'update_icon',
          onClick: () => {},
          color: 'yellow',
          height: 20,
          width: 20,
        }}
        cancelIcon={{
          name: 'close',
          onClick: () => {},
          color: 'yellow',
          height: 16,
          width: 16,
        }}
        editIcon={{
          name: 'close',
          onClick: () => {},
          color: 'yellow',
          height: 16,
          width: 16,
        }}
        width="200px"
        height="50px"
        isOpen={true}
        confirmAction={handleConfirmAction}
        customError="max char 10"
        customErrorCondition={demoText.length > 10}
        onClick={() => {}}
      />
    );
  },
};

export default meta;

import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toaster from './Toast';
import Button from '../Button';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
};

type Story = StoryObj<typeof Toaster>;
const defaultArgs = {
  isOpen: false,
  toastTitle: 'Success',
  toastMessage: 'Variable name Requested for Review successfully',
  closeButtonLabel: 'x',
  displayDuration: 3000, // Set toast displayDuration in milliseconds
};

export const Controlled: Story = {
  args: {
    ...defaultArgs,
  },
  render: () => {
    const [open1, setOpen1] = useState(false);
    const handleButtonClick1 = () => {
      setOpen1(true);
    };
    const handleCancelClick1 = () => {
      setOpen1(false);
    };

    const [open2, setOpen2] = useState(false);
    const handleButtonClick2 = () => {
      setOpen2(true);
    };
    const handleCancelClick2 = () => {
      setOpen2(false);
    };
    const [open3, setOpen3] = useState(false);
    const handleButtonClick3 = () => {
      setOpen3(true);
    };
    const handleCancelClick3 = () => {
      setOpen3(false);
    };
    const [open4, setOpen4] = useState(false);
    const handleButtonClick4 = () => {
      setOpen4(true);
    };
    const handleCancelClick4 = () => {
      setOpen4(false);
    };
    const [open5, setOpen5] = useState(false);
    const handleButtonClick5 = () => {
      setOpen5(true);
    };
    const handleCancelClick5 = () => {
      setOpen5(false);
    };
    const [open6, setOpen6] = useState(false);
    const handleButtonClick6 = () => {
      setOpen6(true);
    };
    const handleCancelClick6 = () => {
      setOpen6(false);
    };
    return (
      <div className="fireflink-stories-toaster-container">
        <div className="fireflink-stories-toaster-container-row">
          <div>
            <Button
              variant="primary"
              label="SUCCESS"
              onClick={handleButtonClick1}
              disabled={false}
            />
            <Toaster
              {...defaultArgs}
              isOpen={open1}
              variant="success"
              toastTitle="Success!"
              onCancelClick={handleCancelClick1}
              toastMessage="Variable name Requested for Review successfully"
            />
          </div>
          <div>
            <Button
              variant="secondary"
              label="Information"
              onClick={handleButtonClick2}
              disabled={false}
            />
            <Toaster
              {...defaultArgs}
              isOpen={open2}
              variant="info"
              toastTitle="Info!!!"
              onCancelClick={handleCancelClick2}
              toastMessage="Data updated succesfully"
            />
          </div>
          <div>
            <Button
              variant="delete"
              label="Confirmation"
              onClick={handleButtonClick3}
              disabled={false}
            />
            <Toaster
              {...defaultArgs}
              isOpen={open3}
              variant="confirm"
              toastTitle="Delete !!"
              onCancelClick={handleCancelClick3}
              toastMessage="Are you sure to delete data?"
            />
          </div>
        </div>
        <div className="fireflink-stories-toaster-container-row">
          <div>
            <Button
              variant="primary"
              label="WARNING "
              onClick={handleButtonClick4}
              disabled={false}
            />
            <Toaster
              {...defaultArgs}
              isOpen={open4}
              variant="warning"
              toastTitle="Warning!"
              onCancelClick={handleCancelClick4}
              toastMessage="Variable name Requested for Review successfully"
            />
          </div>
          <div>
            <Button
              variant="primary"
              label="click "
              onClick={handleButtonClick5}
              disabled={false}
            />
            <Toaster
              {...defaultArgs}
              isOpen={open5}
              variant="success"
              toastTitle="Success!"
              onCancelClick={handleCancelClick5}
              toastMessage="Variable name Requested for Review successfully"
            />
          </div>
          <div>
            <Button
              variant="delete"
              label="ERROR "
              onClick={handleButtonClick6}
              disabled={false}
            />
            <Toaster
              {...defaultArgs}
              isOpen={open6}
              variant="danger"
              toastTitle="Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!Error!"
              onCancelClick={handleCancelClick6}
              toastMessage="SomethingVariableVariableVariableVariableVariableVariableVariableVariableVariableVariableVariableVariableVariableVariableVariableVariableVariable"
            />
          </div>
        </div>
      </div>
    );
  },
};

export default meta;

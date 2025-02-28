import React, { useState } from 'react';
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
  toastMessage: 'Operation completed successfully!',
  closeButtonLabel: 'x',
  displayDuration: 3000, // Set toast display duration in milliseconds
};

export const Controlled: Story = {
  args: {
    ...defaultArgs,
  },
  render: () => {
    const [toasts, setToasts] = useState({
      success: false,
      info: false,
      confirm: false,
      warning: false,
      alert: false,
      error: false,
    });

    const handleToastToggle = (key: keyof typeof toasts) => {
      setToasts((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className="fireflink-stories-toaster-container">
        <div className="fireflink-stories-toaster-container-row">
          <div>
            <Button
              variant="primary"
              label="SUCCESS"
              onClick={() => handleToastToggle('success')}
            />
            <Toaster
              {...defaultArgs}
              isOpen={toasts.success}
              variant="success"
              toastTitle="Success!"
              toastMessage="Variable name requested for review successfully."
              onCancelClick={() => handleToastToggle('success')}
            />
          </div>
          <div>
            <Button
              variant="secondary"
              label="Information"
              onClick={() => handleToastToggle('info')}
            />
            <Toaster
              {...defaultArgs}
              isOpen={toasts.info}
              variant="info"
              toastTitle="Info!"
              toastMessage="Data updated successfully."
              onCancelClick={() => handleToastToggle('info')}
            />
          </div>
          <div>
            <Button
              variant="delete"
              label="Confirmation"
              onClick={() => handleToastToggle('confirm')}
            />
            <Toaster
              {...defaultArgs}
              isOpen={toasts.confirm}
              variant="confirm"
              toastTitle="Delete Confirmation"
              toastMessage="Are you sure you want to delete this data?"
              onCancelClick={() => handleToastToggle('confirm')}
            />
          </div>
        </div>
        <div className="fireflink-stories-toaster-container-row">
          <div>
            <Button
              variant="primary"
              label="WARNING"
              onClick={() => handleToastToggle('warning')}
            />
            <Toaster
              {...defaultArgs}
              isOpen={toasts.warning}
              variant="warning"
              toastTitle="Warning!"
              toastMessage="Action might have consequences."
              onCancelClick={() => handleToastToggle('warning')}
            />
          </div>
          <div>
            <Button
              variant="primary"
              label="Alert"
              onClick={() => handleToastToggle('alert')}
            />
            <Toaster
              {...defaultArgs}
              isOpen={toasts.alert}
              variant="alert"
              toastTitle="Alert!"
              toastMessage="Immediate action required!"
              onCancelClick={() => handleToastToggle('alert')}
            />
          </div>
          <div>
            <Button
              variant="delete"
              label="ERROR"
              onClick={() => handleToastToggle('error')}
            />
            <Toaster
              {...defaultArgs}
              isOpen={toasts.error}
              variant="danger"
              toastTitle="Error!"
              toastMessage="An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request."
              onCancelClick={() => handleToastToggle('error')}
            />
          </div>
        </div>
      </div>
    );
  },
};

export default meta;

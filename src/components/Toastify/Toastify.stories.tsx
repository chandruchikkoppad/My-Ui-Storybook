import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toastify, toast } from './Toastify';
import Button from '../Button';

const meta: Meta<typeof Toastify> = {
  title: 'Components/Toastify',
  component: Toastify,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Toastify>;

const defaultArgs = {
  isOpen: false,
  toastTitle: '',
  toastMessage: 'Variable name Requested for Review successfully',
  closeButtonLabel: 'x',
  displayDuration: 3000,
};

export const Controlled: Story = {
  args: {
    ...defaultArgs,
  },
  render: () => (
    /*
      Note:-
      import { Toastify, toast } from 'pixel-react';
    */

    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Render Toastify to allow toast notifications */}
      <Toastify />

      {/* Button to trigger a toast notification */}
      <Button
        variant="primary"
        label="Show Success Toast"
        onClick={() =>
          toast.success(
            'Successful!',
            'Your request was successful! Your request was successful! Your request was successful! Your request was successful!'
          )
        }
      />
      <Button
        variant="primary"
        label="Show Success Toast w/o passing title"
        onClick={() => toast.success('Your request was successful!')}
      />
      <Button
        variant="delete"
        label="Show Error Toast"
        onClick={() => toast.error('Oops it`s an error!', 'Something went wrong!')}
      />
      <Button
        variant="delete"
        label="Show Error Toast w/o passing title"
        onClick={() => toast.error('Something went wrong!')}
      />
      <Button
        variant="warning"
        label="Show warning Object Toast"
        onClick={() =>
          toast.warning('Something went wrong!', { a: 'hi', b: '5', c: 10 })
        }
      />
      <Button
        variant="secondary"
        label="Show info Array Toast"
        onClick={() => toast.info('Something went wrong!', ['1', 4, 'hi'])}
      />
      <Button
        variant="tertiary"
        label="Show alert function Toast"
        onClick={() => toast.alert('Something went wrong!', () => {})}
      />
    </div>
  ),
};

export default meta;

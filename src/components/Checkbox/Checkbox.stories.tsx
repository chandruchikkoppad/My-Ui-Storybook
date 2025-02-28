import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { useState } from 'react';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <Checkbox
        label="Default Checkbox"
        id="default-checkbox"
        name="default"
        checked={checked}
        onChange={handleChange}
      />
    );
  },
};

export const Partial: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <>
        <Checkbox
          label="Partial Checkbox"
          id="partial-checkbox"
          name="partial"
          partial={true}
          checked={checked}
          onChange={handleChange}
        />
      </>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <Checkbox
        label={checked ? 'Checked! Click to uncheck.' : 'Click here to check.'}
        id="controlled-checkbox"
        name="controlled"
        checked={checked}
        onChange={handleChange}
      />
    );
  },
};

export const Varient: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <>
        {['passed', 'failed', 'warning', 'skipped', 'flaky', 'closed', 'open', 'total'].map(
          (varient) => (
            <Checkbox
              key={varient}
              label={`${
                checked ? 'Checked! Click to uncheck.' : 'Click here to check. '
              } ${varient}`}
              id="controlled-checkbox"
              name="controlled"
              checked={checked}
              onChange={handleChange}
              variant={varient as any}
            />
          )
        )}
      </>
    );
  },
};

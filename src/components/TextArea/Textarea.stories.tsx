import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';
import { ChangeEvent, useState } from 'react';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Textarea>;

const defaultArgs = {
  name: 'textarea',
  label: '',
  disabled: false,
  placeholder: 'Type Your Description Here',
  value: '',
  variant: 'primary',
  rows: 4,
  cols: 30,
  capacity: 200,
  resize: false,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'default',
  },
};
export const Primary: Story = {
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'primary',
  },
};
export const Disabled: Story = {
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'primary',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      if (event.target.required) {
        if (checkEmpty(value)) {
          setError(true);
          setHelperText(`${event?.target?.name} is required`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
      setValue(value);
    };
    return (
      <>
        <Textarea
          {...defaultArgs}
          onChange={onChangeHandler}
          disabled={false}
          capacity={200}
          value={value}
          name="Description"
          label="Description"
          placeholder="Type Your Description Here"
          variant="primary"
          required={false}
          error={error}
          helperText={helperText}
        />
      </>
    );
  },
};

export default meta;
import type { Meta, StoryObj } from '@storybook/react';
import VariableInput from './VariableInput';

const meta: Meta<typeof VariableInput> = {
  title: 'Components/VariableInput',
  component: VariableInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof VariableInput>;

const defaultArgs = {
  name: 'input',
  label: '',
  disabled: false,
  placeholder: 'Enter URL',
  value: '',
  type: 'url',
  list:['name','urlName','passwork','emailId','default','errorVar']
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    label: 'Enter URL',
    type: 'url',
  },
};
export default meta;

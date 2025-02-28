import type { Meta, StoryObj } from '@storybook/react';
import AddContentButton from './AddContentButton';

const meta: Meta<typeof AddContentButton> = {
  title: 'Components/AddContentButton',
  component: AddContentButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AddContentButton>;

const defaultArgs = {
  stepCount: 1,
  iconWidth: 120,
  iconHeight: 120,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    iconName: 'no_data',
    buttonLabel: 'Label',
    buttonText: 'To Add Group',
    onButtonClick: () => {},
  },
};
export const DisabledAddContentButton: Story = {
  args: {
    ...defaultArgs,
    iconName: 'no_data',
    buttonLabel: 'Label',
    buttonText: 'To Add Group',
    onButtonClick: () => {},
    disableButton: true,
  },
};
export const AddContentButtonWithoutNoDataIcon: Story = {
  args: {
    ...defaultArgs,
    buttonLabel: 'Label',
    buttonText: 'To Add Group',
    onButtonClick: () => {},
  },
};

export default meta;

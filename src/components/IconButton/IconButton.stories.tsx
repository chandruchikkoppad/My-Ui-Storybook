import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof IconButton>;

export const PrimaryIconButton: Story = {
  render: () => {
    const name = 'Project';
    const icon = 'plus_icon';
    const onClick = () => {};

    return <IconButton label={name} iconName={icon} onClick={onClick} />;
  },
};

export default meta;

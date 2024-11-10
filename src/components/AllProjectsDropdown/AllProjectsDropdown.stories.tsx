import type { Meta, StoryObj } from '@storybook/react';
import AllProjectsDropdown from './AllProjectsDropdown';

const meta: Meta<typeof AllProjectsDropdown> = {
  title: 'Components/AllProjectsDropdown',
  component: AllProjectsDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AllProjectsDropdown>;

export const PrimaryIconButton: Story = {
  render: () => {
    return <AllProjectsDropdown/>;
  },
};

export default meta;

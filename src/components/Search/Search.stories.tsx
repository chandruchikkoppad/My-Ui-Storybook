
import type { Meta, StoryObj } from '@storybook/react';
import Search from './Search';
const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Search>;
const defaultArgs = {
  placeholder: 'Search',
  onSearch: (query: string) => alert(`Searching for: ${query}`),
  disabled: false,
  width: 200,
};
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export default meta;

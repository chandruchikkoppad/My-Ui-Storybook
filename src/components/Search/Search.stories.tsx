import type { Meta, StoryObj } from '@storybook/react';
import Search from './Search';
import React, { useState } from 'react';
const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Search>;
export const Default: Story = {
  render: () => {
    const [isExpand, setIsExpand] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value: string) => {
      setSearchValue(value);
    };

    const handleClose = () => {
      setIsExpand(false);
      setSearchValue('');
    };
    return (
      <div>
        <Search
          placeholder="Search here..."
          isExpand={isExpand}
          value={searchValue}
          onSearch={handleSearch}
          onExpand={(expand) => setIsExpand(expand)}
          onClose={handleClose}
          disabled={false}
          width={200}
        />
      </div>
    );
  },
};

export const AISearch: Story = {
  render: () => {
    const [isExpand, setIsExpand] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isAISearchActive, setIsAISearchActive] = useState(true);

    const handleSearch = (value: string) => {
      setSearchValue(value);
    };

    const handleClose = () => {
      setIsExpand(false);
      setSearchValue('');
    };
    const handleActiveAiSearch = () => {
      setIsAISearchActive(!isAISearchActive);
    };
    return (
      <div>
        <Search
          placeholder={isAISearchActive ? 'Ask Me Anything' : 'Search here...'}
          isExpand={isExpand}
          value={searchValue}
          onSearch={handleSearch}
          onExpand={(expand) => setIsExpand(expand)}
          onClose={handleClose}
          disabled={false}
          width={100}
          isAISearch={true}
          isAISearchClicked={isAISearchActive}
          handleActiveAiSearch={handleActiveAiSearch}
        />
      </div>
    );
  },
};

export default meta;

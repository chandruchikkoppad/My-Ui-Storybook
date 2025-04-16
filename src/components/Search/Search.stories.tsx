import type { Meta, StoryObj } from '@storybook/react';
import Search from './Search';
import React, { useState } from 'react';
import LabelEditTextField from '../LabelEditTextField/LabelEditTextField';
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

export const multipleComponents: Story = {
  render: () => {
    const [isExpand, setIsExpand] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value: string) => {
      setSearchValue(value);
      window.alert(`searched value: ${value}`);
    };

    const handleClose = () => {
      setIsExpand(false);
      setSearchValue('');
    };
    const handleConfirmAction = (inputValue: string) => {
      return inputValue;
    };
    return (
      <div style={{display: 'flex'}}>
        <LabelEditTextField
          label="Add Module"
          text="Verify The Function Of Categories For"
          confirmIcon={{
            name: 'update_icon',
            onClick: () => {},
          }}
          cancelIcon={{
            name: 'close',
            onClick: () => {},
          }}
          height="22px"
          confirmAction={handleConfirmAction}
          onClick={() => {}}
          tooltip={{
            tooltipTitle: 'text',
            tooltipPlacement: 'bottom',
          }}
        />
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

export default meta;

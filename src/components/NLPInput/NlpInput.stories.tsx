import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NlpInput from './NlpInput';
import { nlpList, filterSearchData } from './sampleData';
import { NlpChipsAccordionProps } from './types';
const meta: Meta<typeof NlpInput> = {
  title: 'Components/NlpInput',
  component: NlpInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof NlpInput>;

// Refactor primaryNlp to utilize args for control panel
export const PrimaryNlp: Story = {
  args: {
    label: 'Search NLP',
    leftIcon: 'ai_search',
    rightIcon: 'help_icon',
    rightIconColor: 'var(--nlp-color)',
    containerWidth: '1000px',
    value: '',
    optionsList: nlpList,
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value);
    const [optionList, setOptionList] = useState(args.optionsList);

    const handleChange = (e) => {
      setInputValue(e.target.value);
      setOptionList(nlpList);
    };

    const handleSelect = (e) => {
      setInputValue(e.displayName);
    };

    return (
      <NlpInput
        {...args}
        value={inputValue}
        onChange={handleChange}
        onSelect={handleSelect}
        optionsList={optionList}
        webServiceClick={() => {
          alert('webServiceClick!');
        }}
        onHelpIconClick={() => {
          alert('Help icon clicked!!');
        }}
        aiIconClick={() => {
          alert('aiIconClick!');
        }}
      />
    );
  },
};

export const NlpChipsAccordion: Story = {
  args: {
    label: 'Search NLP',
    leftIcon: 'ai_search',
    rightIcon: 'help_icon',
    rightIconColor: 'var(--nlp-color)',
    containerWidth: '1000px',
    value: '',
    optionsList: nlpList,
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value);
    const [optionList, setOptionList] = useState(args.optionsList);
    const [filterData] = useState(filterSearchData);
    const handleChange = (e) => {
      setInputValue(e.target.value);
      setOptionList(nlpList);
    };

    const handleSelect = (e) => {
      setInputValue(e?.displayName || e?.name);
    };
    const selectedChips = (data: NlpChipsAccordionProps) => {
      console.warn('selectedChipsData', data);
    };

    return (
      <NlpInput
        {...args}
        value={inputValue}
        onChange={handleChange}
        onSelect={handleSelect}
        optionsList={optionList}
        chipOptionList={filterData}
        selectedChips={selectedChips}
        webServiceClick={() => {
          alert('webServiceClick!');
        }}
        onHelpIconClick={() => {
          alert('Help icon clicked!!');
        }}
        aiIconClick={() => {
          alert('aiIconClick!');
        }}
      />
    );
  },
};

export const Disable: Story = {
  args: {
    label: 'NLP Input',
    optionsList: [],
    disabled: true,
  },
};

export const apiFetch: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [optionsList, setOptionsList] = useState<any>([]);
    const [page, setPage] = useState(0);

    const handleChange = (e: any) => {
      const value = e.target.value || '';
      setTimeout(() => {
        fetch(
          `https://reqres.in/api/users?page=${value.length % 2 === 0 ? 1 : 2}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setOptionsList([...data.data, ...data.data]);
            console.log('Fetched Users:', data.data);
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      }, 3000);
      setValue(e.target.value);
    };

    const loadMore = () => {
      fetch(
        `https://reqres.in/api/users?page=${value.length % 2 === 0 ? 1 : 2}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const userData = data.data;
          setOptionsList([...optionsList, ...userData]);
          console.log('Fetched Users:', data.data);
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
      setPage(page + 1);
    };

    return (
      <NlpInput
        onChange={handleChange}
        rightIconColor={''}
        optionsList={optionsList}
        value={value}
        onSelect={function (e: any): void {
          throw new Error('Function not implemented.');
        }}
        rightIcon="success"
        loadMoreOptions={loadMore}
      />
    );
  },
};

export default meta;

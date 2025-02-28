import type { Meta, StoryObj } from '@storybook/react';
import AllProjectsDropdown from './AllProjectsDropdown';
import React, { useState } from 'react';
import { optionsType } from './types';

const meta: Meta<typeof AllProjectsDropdown> = {
  title: 'Components/AllProjectsDropdown',
  component: AllProjectsDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof AllProjectsDropdown>;
const options = [
  {
    label: 'All Projects',
    value: 'All Projects',
    iconName: 'all_projects',
  },
  {
    label:
      'Pantaloon Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project',
    value:
      'Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project',
    iconName: 'web_icon',
  },
  {
    label: 'Mobile Project',
    value: 'Mobile Project',
    iconName: 'mobile_icon',
  },
  {
    label: 'Web & Mobile Project',
    value: 'Web & Mobile Project',
    iconName: 'web&mobile_icon',
  },
  {
    label: 'Sales Force',
    value: 'Sales Force',
    iconName: 'sales_force',
  },
  {
    label: 'MS Dynamic',
    value: 'MS Dynamic',
    iconName: 'ms_dynamic',
  },
  {
    label: 'Test',
    value: 'test',
    iconName: 'mobile_icon',
  },
  {
    label: 'Web Service',
    value: 'Web Service',
    iconName: '',
  },
];
export const Default: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState({
      label: 'All Projects',
      value: 'All Projects',
      iconName: 'all_projects',
    });

    const handleSelectedOption = (option: optionsType) => {
      setSelectedOption(option);
    };

    return (
      <div
        style={{
          backgroundColor: 'var(--brand-color)',
          height: 50,
          width: 120,
          padding: 10,
        }}
      >
        <AllProjectsDropdown
          options={options}
          onClick={handleSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
    );
  },
};
export const Selected: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState({
      label: 'All Projects',
      value: 'All Projects',
      iconName: 'all_projects',
    });

    const handleSelectedOption = (option: optionsType) => {
      setSelectedOption(option);
    };

    return (
      <div
        style={{
          backgroundColor: 'var(--brand-color)',
          height: 50,
          width: 120,
          padding: 10,
        }}
      >
        <AllProjectsDropdown
          options={options}
          onClick={handleSelectedOption}
          selectedOption={selectedOption}
          selected={true}
          placeholder='Search Projects'
        />
      </div>
    );
  },
};

export default meta;

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ModuleChip from './ModuleChip';
import { useState } from 'react';

const meta: Meta<typeof ModuleChip> = {
  title: 'Components/ModuleChip',
  component: ModuleChip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isActive: Boolean,
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ModuleChip>;

const defaultArgs = {
  label: 'Modules',
};

export const Controlled: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState<boolean>(true);
    const handleChipClick = () => {
      setSelectedMenu(!selectedMenu);
    };

    return (
      <ModuleChip
        {...defaultArgs}
        isActive={selectedMenu}
        onClick={handleChipClick}
      />
    );
  },
};

export const FilterChip: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState<boolean>(true);
    const handleChipClick = () => {
      setSelectedMenu(!selectedMenu);
    };

    return (
      <ModuleChip
        {...defaultArgs}
        isActive={selectedMenu}
        onClick={handleChipClick}
        isFilterChip
      />
    );
  },
};

export default meta;

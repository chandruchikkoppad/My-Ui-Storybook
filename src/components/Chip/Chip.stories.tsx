import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';
import '../../assets/styles/_colors.scss';
import './Chip.scss';
import Typography from '../Typography';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Chip>;

const defaultArgs = {
  label: 'SM 0',
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    variant: 'primary',
    fullText: 'Sub Modules 0',
  },
};

export const withoutExpand: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Group: Story = {
  render: () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
      <Typography as="div">
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            variant="primary"
            fullText="hover item"
            labelWidth={50}
            fullTextWidth={100}
          />
        ))}
      </Typography>
    );
  },
};
export const CustomChip: Story = {
  render: () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
      <Typography as="div">
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            variant="custom"
            labelWidth={50}
            fullTextWidth={100}
          />
        ))}
      </Typography>
    );
  },
};

export const Success: Story = {
  args: {
    ...defaultArgs,
    variant: 'success',
    fullText: 'Sub Modules 0',
  },
};
export const Errors: Story = {
  args: {
    ...defaultArgs,
    variant: 'error',
    fullText: 'Sub Modules 0',
  },
};
export const Warning: Story = {
  args: {
    ...defaultArgs,
    variant: 'warning',
    fullText: 'Sub Modules 0',
  },
};
export const Public: Story = {
  args: {
    ...defaultArgs,
    variant: 'public',
    fullText: 'Sub Modules 0',
  },
};
export const PartialPublic: Story = {
  args: {
    ...defaultArgs,
    variant: 'partial-public',
    fullText: 'Sub Modules 0',
  },
};
export const Private: Story = {
  args: {
    ...defaultArgs,
    variant: 'private',
    fullText: 'Sub Modules 0',
  },
};
export const Disabled: Story = {
  args: {
    ...defaultArgs,
    variant: 'disabled',
    fullText: 'Sub Modules 0',
  },
};
export const Count: Story = {
  args: {
    ...defaultArgs,
    variant: 'count',
    fullText: 'Sub Modules 0',
  },
};

export default meta;

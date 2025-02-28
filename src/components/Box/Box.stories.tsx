import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';
import '../../assets/styles/_colors.scss';
import './Box.scss';
import Typography from '../Typography';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Box>;

export const SampleBox: Story = {
  render: () => {
    return (
      <Typography as="div">
        <Box
          cardProperties={{
            height: '300px',
            width: '300px',
            background: 'var(--brand-color)',
            borderRadius: '8px',
            margin: '20px',
            padding: '20px',
          }}
          headerContent={{
            isHeader: true,
            content: <div className="row">Box Header</div>,
          }}
          midContent={{
            isMidContent: true,
            content: <div className="row">Box content</div>,
          }}
          footerContent={{
            isFooter: true,
            content: <div className="row">Box Footer</div>,
          }}
        />
      </Typography>
    );
  },
};

export default meta;

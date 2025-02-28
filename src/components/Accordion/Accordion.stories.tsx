import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import Icon from '../Icon';
import React from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Accordion>;

const defaultArgs = {
  headerTitle: 'Accordion',
  accordionStateIconName: 'arrow_down',
  AccordionStateIconWidth: 4,
  AccordionStateIconHeight: 8,
  iconColor: 'var(--brand-color)',
  onClick: () => {
    console.log('Accordion clicked!');
  },
};

export const SampleAccordion: Story = {
  args: {
    ...defaultArgs,
    headerTitle: (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Icon name="accordion_header_icon" />
        <span>Home and Web</span>
      </div>
    ),
    onClick: () => {
      console.log('Sample Accordion clicked!');
    },
  },
};

export const closedAccordion: Story = {
  args: {
    ...defaultArgs,
    headerTitle: (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Icon name="accordion_header_icon" />
        <span>Home and Web</span>
      </div>
    ),
    isExpand: false,
    onClick: () => {
      console.log('Closed Accordion clicked!');
    },
  },
};

export default meta;
